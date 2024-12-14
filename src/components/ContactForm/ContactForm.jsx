import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContacts } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import { ErrorMessage, Form, Field, Formik } from "formik";
import * as Yup from "yup";
import { MdPersonAddAlt1 } from "react-icons/md";
import s from "./ContactForm.module.css";
import { infoToast } from "../Toasts/Toasts";

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

    if (
      contacts.some(
        (contact) => contact.name === name || contact.number === number
      )
    ) {
      infoToast(`${name} or ${number} is already in contacts.`);
      return;
    }

    dispatch(addContacts({ id: Date.now(), name, number }));
    infoToast(`${name} was successfully added to your contacts!`);
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
