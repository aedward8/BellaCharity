import * as React from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../styles.css";
import * as apiClient from "../apiClient";

//Formik

const SignupForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        message: "",
        expertise: [],
        acceptedTerms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          // console.log(values);
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);

        console.log("signupform", { values });
        let firstName, lastName, email, address, message, expertise;

        ({ firstName, lastName, email, address, message, expertise } = {
          ...values,
        });
        expertise = expertise.join();
        // console.log(
        //   "variables",
        //   firstName,
        //   lastName,
        //   email,
        //   address,
        //   message,
        //   expertise,
        // );
        await apiClient.addEntry(
          firstName,
          lastName,
          email,
          address,
          message,
          expertise,
        );
        resetForm();
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" />
        {/* field component has handleChange,handleBlur, & values */}
        <ErrorMessage name="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />

        <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />

        <label htmlFor="address">Address</label>
        <Field name="address" type="text" />
        <ErrorMessage name="address" />

        <div id="expertise-group">
          Check Areas of expertise
          <label htmlFor="Foster Home Experience">
            <Field
              name="expertise"
              type="checkbox"
              value="Foster Home Experience"
            />
            Foster Home Experience
          </label>
          <label htmlFor="Animal Care">
            <Field name="expertise" type="checkbox" value="Animal Care" />
            Animal Care
          </label>
          <label htmlFor="Veterinary Services">
            <Field
              name="expertise"
              type="checkbox"
              value="Veterinary Services"
            />
            Veterinary Services
          </label>
        </div>

        <label htmlFor="message">Your Message</label>
        <Field name="message" as="textarea" />

        <label htmlFor="acceptedTerms">
          <Field name="acceptedTerms" type="checkbox" /> I Agree to The Bella
          Charity Terms and Conditions
        </label>

        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignupForm;
