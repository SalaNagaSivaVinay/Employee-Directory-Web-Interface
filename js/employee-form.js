document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const form = document.getElementById("employeeForm");

  // ✅ Load employees from localStorage
  let employees = JSON.parse(localStorage.getItem("employees")) || [];

  // ✅ If editing, pre-fill the form
  if (id) {
    const emp = employees.find(e => e.id == id);
    if (emp) {
      document.getElementById("firstName").value = emp.firstName;
      document.getElementById("lastName").value = emp.lastName;
      document.getElementById("email").value = emp.email;
      document.getElementById("department").value = emp.department;
      document.getElementById("role").value = emp.role;
    }
  }

  // ✅ Handle form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const newEmp = {
      id: id ? parseInt(id) : Date.now(),
      firstName: document.getElementById("firstName").value.trim(),
      lastName: document.getElementById("lastName").value.trim(),
      email: document.getElementById("email").value.trim(),
      department: document.getElementById("department").value.trim(),
      role: document.getElementById("role").value.trim()
    };

    // ✅ Validate inputs
    if (!newEmp.firstName || !newEmp.lastName || !newEmp.email || !newEmp.department || !newEmp.role) {
      alert("All fields are required.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(newEmp.email)) {
      alert("Invalid email format.");
      return;
    }

    // ✅ Update or Add the employee
    if (id) {
      const index = employees.findIndex(e => e.id == id);
      if (index !== -1) {
        employees[index] = newEmp;
      }
    } else {
      employees.push(newEmp);
    }

    // ✅ Save to localStorage
    localStorage.setItem("employees", JSON.stringify(employees));

    // ✅ Go back to dashboard
    window.location.href = "index.html";
  });
});
