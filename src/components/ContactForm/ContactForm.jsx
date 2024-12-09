import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import { selectContacts } from "../../redux/contactsSlice";
import { ErrorMessage, Form, Field, Formik } from "formik";
import * as Yup from "yup";
import { MdPersonAddAlt1 } from "react-icons/md";
import s from "./ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long")
    .required("Required"),
});

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ id: Date.now(), name, number }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <div className={s.inputBox}>
          <Field
            className={s.input}
            type="text"
            name="name"
            placeholder="Name"
          />
          <ErrorMessage name="name" component="span" className={s.error} />
        </div>
        <div className={s.inputBox}>
          <Field
            className={s.input}
            type="tel"
            name="number"
            placeholder="Number"
          />
          <ErrorMessage name="number" component="span" className={s.error} />
        </div>
        <button className={s.btn} type="submit">
          <MdPersonAddAlt1 />
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
