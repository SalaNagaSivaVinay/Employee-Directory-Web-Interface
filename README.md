# 🧑‍💼 Employee Directory Web App

A responsive employee management dashboard that allows users to add, edit, delete, search, filter, sort, and paginate employee records. This is a pure **HTML, CSS, and JavaScript (Vanilla)** project simulating **Freemarker** template behavior via mock data.

---

## 📁 Project Structure

employee-directory/
├── index.html # Dashboard with filters, search, sort, pagination
├── add-edit.html # Form to Add/Edit employees
├── css/
│ └── styles.css # All styles for layout and responsiveness
├── js/
│ └── data.js,ui.js,form.js # Logic for render, search, filter, pagination, Initial mock employee data
├── README.md # This file



---

## 🚀 Live Demo

🌐 **Hosted on Vercel**:  
[https://employee-directory-web-interface-vert.vercel.app/]

---

## 🛠️ How to Run Locally

### ✅ Method 1: Without Any Setup

> Open `index.html` directly in your browser.

```bash
git clone https://github.com/your-username/employee-directory.git
cd employee-directory
# Then double-click index.html
✅ Method 2: Using Live Server in VS Code
Install Live Server Extension

Right-click index.html → "Open with Live Server"

⚙️ Freemarker Simulation
Although Freemarker was mentioned in the prompt, this project simulates Freemarker rendering using JavaScript by:

Defining mock employee data inside mockData.js

Dynamically rendering employee cards using DOM manipulation

Acting as if Freemarker injected the data server-side

✨ Features
✅ Display Employee List (Card View)

✅ Add New Employee (Form Page)

✅ Edit Employee (Form Pre-filled via URL param)

✅ Delete Employee

✅ Search by Name/Email

✅ Filter by First Name, Department, Role

✅ Sort by Name or Department

✅ Pagination (10, 25, 50, 100 per page)

✅ Responsive UI for desktop and mobile

✅ Data stored using localStorage

✅ Preloaded Mock Data + New User-Added Employees


💭 Reflection
✅ Challenges Faced
Managing the combination of filters, sort, and search without bugs was tricky

Ensuring responsive layout on various screen sizes with consistent UI

Making localStorage data and mockData work together seamlessly

✅ Improvements for Future
Improve UI styling with better design system (e.g., Tailwind or Bootstrap)

Add confirmation modal for delete

Add toast notifications for actions

Add validations and real-time form errors

Animate pagination or transitions

Integrate with backend (Node.js/Express or Java with actual Freemarker)

👨‍💻 Author
Shaik Fairoz
Made with ❤️ using HTML, CSS, and Vanilla JS

📌 Deployment
This project is hosted using Vercel:

# To deploy your own version:
1. Push to GitHub
2. Go to vercel.com
3. Import your repo and deploy (No build config needed)
