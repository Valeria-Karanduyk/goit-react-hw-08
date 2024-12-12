import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/contacts/operations";
import s from "./Contact.module.css";
import { FaTrashAlt } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  // const handleDelete = () => {
  //   dispatch(deleteContacts(contact));
  // };
  const { name, number, id } = contact;

  return (
    <li className={s.list}>
      <div className={s.box}>
        <p className={s.name}>
          <BsPersonFill className={s.icon} />
          {/* {contact.name} */}
          {name}
        </p>
        <p className={s.number}>
          <MdPhone className={s.icon} />
          {/* {contact.number} */}
          {number}
        </p>
      </div>
      {/* <button className={s.btn} onClick={() => handleDelete(contact.id)}> */}
      <button
        className={s.btn}
        onClick={() => {
          dispatch(deleteContacts(id));
        }}
      >
        <FaTrashAlt />
      </button>
    </li>
  );
};

export default Contact;
