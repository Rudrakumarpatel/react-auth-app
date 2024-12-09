import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

const SignupForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  const validatePasswordStrength = (password: string) => {
    if (password.length < 6) return "Weak";
    if (password.length < 10) return "Moderate";
    return "Strong";
  };

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string().email("Invalid email").required("Required"),
          password: Yup.string()
            .min(6, "Must be 6 characters or more")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSuccessMessage("Sign Up Successful!");
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              className="input"
              name="email"
              type="email"
              aria-label="Email"
            />
            <ErrorMessage name="email" component="div" />

            <label htmlFor="password">Password</label>
            <Field
              className="input"
              name="password"
              type="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const { value } = e.target;
                setFieldValue("password", value);
                setPasswordStrength(validatePasswordStrength(value));
              }}
              aria-label="Password"
            />
            <div>Password Strength: {passwordStrength}</div>
            <ErrorMessage name="password" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default SignupForm;
