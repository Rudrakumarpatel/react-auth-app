import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

const LoginForm = () => {
  const [successMessage, setSuccessMessage] = useState("");

  return (
    <div className="container">
      <h1>Login</h1>
      <Formik
        initialValues={{ email: "", password: "", rememberMe: false }}
        validationSchema={Yup.object({
          email: Yup.string().email("Invalid email").required("Required"),
          password: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            if (values.rememberMe) {
              localStorage.setItem("email", values.email);
            }
            setSuccessMessage("Login Successful!");
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
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
                setFieldValue("password", e.target.value);
              }}
              aria-label="Password"
            />
            <ErrorMessage name="password" component="div" />

            <label>
              <Field
                type="checkbox"
                name="rememberMe"
                aria-label="Remember Me"
              />
              Remember Me
            </label>

            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default LoginForm;
