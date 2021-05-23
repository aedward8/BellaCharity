import * as React from "react";

import styled from "@emotion/styled";
/** @jsxImportSource @emotion/react */
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

import * as apiClient from "../apiClient";

// Styled components ....
const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

const MySelect = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

//Formik
const SignupForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        expertise: [],
        whyVolunteer: "",
        fosterExperience: "",
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
        acceptedTerms: Yup.bool().oneOf(
          [true],
          "Accept Terms & Conditions is required",
        ),
      })}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);

        // console.log("signupform", { values });
        //create variables to destructure out of values
        let firstName,
          lastName,
          email,
          address,
          whyVolunteer,
          fosterExperience,
          expertise;
        // destructuring occurs below
        ({
          firstName,
          lastName,
          email,
          address,
          whyVolunteer,
          fosterExperience,
          expertise,
        } = {
          ...values,
        });
        //join the string in the expertise array into one string
        expertise = expertise.join();
        //send variable values in the correct format to be sent to the Google sheets API
        await apiClient.addEntry(
          firstName,
          lastName,
          email,
          address,
          whyVolunteer,
          fosterExperience,
          expertise,
        );
        resetForm();
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" />
        {/* field component has handleChange,handleBlur, & values */}
        <ErrorMessage className="error" name="firstName" />

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

        <label htmlFor="whyVolunteer">
          Describe why you would like to volunteer and how you think you can
          help if applicable
        </label>
        <Field name="whyVolunteer" as="textarea" />

        <label htmlFor="fosterExperience">
          Describe Foster Home Experience if applicable
        </label>
        <Field name="fosterExperience" as="textarea" />

        <label htmlFor="acceptedTerms">
          <Field name="acceptedTerms" type="checkbox" /> I Agree to The Bella
          Charity Terms and Conditions
        </label>

        <ErrorMessage name="acceptedTerms" />

        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignupForm;
