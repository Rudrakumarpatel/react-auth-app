# React Authentication App

This project is a React application with **Sign Up** and **Login** forms, using **Formik**, **Yup**, and **TypeScript**. The app features form validation, password strength indication, and a "Remember Me" option.

## Features
- **Sign Up Form**: Email and password validation, password strength indicator.
- **Login Form**: Email and password validation, "Remember Me" feature.
- **Form Toggle**: Toggle between Sign Up and Login forms.
- **Responsive Design**: Optimized for mobile, tablet, and desktop.

## How to Run the Project

### Prerequisites
- Install **Node.js** (v16 or later).

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd react-auth-app

   npm install

   npm run dev

2. The design choices made

   ## Design Choices
- Used **Formik** for form handling and **Yup** for validation.
- **CSS media queries** ensure responsive design across devices.
- The **Password Strength Indicator** provides real-time feedback.
- Simple toggle buttons for switching between **Sign Up** and **Login** forms.

3. Assumptions and Limitations
- No backend integration; it's a frontend demo.
- **LocalStorage** is used only for the "Remember Me" feature.
- The app doesn't include advanced security features like password hashing.
