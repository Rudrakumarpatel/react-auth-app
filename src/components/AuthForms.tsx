import React, { useState } from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import "../styles/styles.css";

const AuthForms = () => {
  const [activeForm, setActiveForm] = useState<"signup" | "login">("signup");

  return (
    <div className="container">
      <div className="form-toggle">
        <button
          className={`toggle-button ${activeForm === "signup" ? "active" : ""}`}
          onClick={() => setActiveForm("signup")}
        >
          Sign Up
        </button>
        <button
          className={`toggle-button ${activeForm === "login" ? "active" : ""}`}
          onClick={() => setActiveForm("login")}
        >
          Login
        </button>
      </div>
      {activeForm === "signup" ? <SignupForm /> : <LoginForm />}
    </div>
  );
};

export default AuthForms;
