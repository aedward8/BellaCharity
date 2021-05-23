import * as React from "react";

import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

import * as apiClient from "../apiClient";

// customized components from formik w/ custom validation
const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className={
          meta.touched && meta.error ? "text-input error" : "text-input"
        }
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="checkbox">
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

//Formik
const SignupForm = () => {
  return (
    <>
      <h2>Adopt, Foster,& Volunteer Application Form</h2>
      <p>
        Please fill out the application form to volunteer services or apply to
        join the foster home network. Please answer all questions thoroughly and
        provide as much detail as possible when going over previous experience.
      </p>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          address: "",
          expertise: [],
          whyVolunteer: "",
          fosterExperience: "",
          adoptFoster: "",
          acceptedTerms: false,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          acceptedTerms: Yup.bool().oneOf(
            [true],
            "Accept Terms & Conditions is required",
          ),
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert("Thank you for signing up");
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
            expertise,
            adoptFoster;
          // destructuring occurs below
          ({
            firstName,
            lastName,
            email,
            address,
            whyVolunteer,
            fosterExperience,
            expertise,
            adoptFoster,
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
            adoptFoster,
          );
          resetForm();
        }}
      >
        <Form>
          <MyTextInput label="First Name" name="firstName" type="text" />
          <MyTextInput label="Last Name" name="lastName" type="text" />
          <MyTextInput label="Email Address" name="email" type="text" />

          <label htmlFor="address">Address</label>
          <Field style={{ marginBottom: "1rem" }} name="address" type="text" />
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
            <label htmlFor="Veterinary Services">
              <Field
                name="expertise"
                type="checkbox"
                value="Information Technology"
              />
              Information Technology
            </label>
            <label htmlFor="Veterinary Services">
              <Field name="expertise" type="checkbox" value="Data Entry" />
              Data Entry
            </label>
            <label htmlFor="Veterinary Services">
              <Field name="expertise" type="checkbox" value="Grant Writing" />
              Grant Writing
            </label>
            <label htmlFor="Veterinary Services">
              <Field name="expertise" type="checkbox" value="Fundraising" />
              Fundraising
            </label>
            <label htmlFor="Veterinary Services">
              <Field name="expertise" type="checkbox" value="Other" />
              Other
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

          <label htmlFor="adoptFoster">
            Please list if interested in fostering or adopting a specific animal
          </label>
          <Field name="adoptFoster" as="textarea" />

          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>

          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default SignupForm;
