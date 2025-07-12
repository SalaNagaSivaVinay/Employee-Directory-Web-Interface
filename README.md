# 🧑‍💼 Employee Directory Web App

A clean and responsive **Employee Management Dashboard** built using **HTML, CSS, and Vanilla JavaScript**. This app allows users to add, edit, delete, search, filter, sort, and paginate employee records. The project simulates **Freemarker template** behavior using JavaScript and localStorage.

---

## 📁 Project Structure

employee-directory/
├── index.html # Dashboard view with search, filter, sort, and pagination
├── employee-form.html # Form page for adding/editing employees
├── css/
│ └── styles.css # All layout and design styles
├── js/
│ ├── employee-directory.js # Main logic (list, delete, search, filter, pagination)
│ ├── employee-form.js # Add/Edit form logic
│ └── employee-data.js # Initial mock employee data (optional)
├── assets/
│ └── logo.jpg # Company logo
├── README.md

---

## 🚀 Live Demo

🌐 **Hosted on Vercel**:  
🔗 [https://employee-directory-web-interface-beta.vercel.app/](https://employee-directory-web-interface-beta.vercel.app/)

---

## 🛠️ How to Run Locally

### ✅ Method 1: Directly in Browser

```bash
git clone https://github.com/SalaNagaSivaVinay/Employee-Directory-Web-Interface.git
cd employee-directory
# Then open index.html in your browser

✅ Method 2: Live Server (Recommended)
1. Install the Live Server extension in VS Code

2. Right-click on index.html → Click "Open with Live Server"

⚙️ Freemarker Simulation
Though Freemarker is usually server-side, this project mimics that functionality using:

Mock data (employee-data.js)

DOM rendering with JavaScript

LocalStorage for persistent data



✨ Features
✅ Display employee list in a clean card layout
✅ Add new employees via a form
✅ Edit employee details (auto-filled form via URL param)
✅ Delete employee with one click
✅ Search by first name, last name, or email
✅ Filter by First Name, Department, or Role
✅ Sort employees by Name or Department
✅ Pagination: 10, 25, 50, or 100 records per page
✅ Fully responsive (mobile-first)
✅ LocalStorage data persistence
✅ Mock data preloaded for testing



💭 Reflection
✅ Challenges Faced
Handling filters, search, sort, and pagination together smoothly

Keeping the UI responsive and consistent across devices

Merging mockData and localStorage properly



🚀 Improvements for Future
Add form validation with error hints

Use a design framework like Bootstrap or Tailwind CSS

Add toast notifications for add/edit/delete actions

Integrate confirmation modals for delete

Backend support with Node.js + Express or real Freemarker templates

Enhance UX with animations and transitions


👨‍💻 Author
Sala Naga Siva Vinay
Made with ❤️ using HTML, CSS & JavaScript
📧 nagasivavinay.s@gmail.com

