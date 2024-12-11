import { useDispatch } from "react-redux";
import { setDeleteData } from "../../redux/contacts/slice";
import s from "./Contact.module.css";
import { FaTrashAlt } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(setDeleteData(id));
  };

  return (
    <li className={s.list}>
      <div className={s.box}>
        <p className={s.name}>
          <BsPersonFill className={s.icon} />
          {contact.name}
        </p>
        <p className={s.number}>
          <MdPhone className={s.icon} />
          {contact.number}
        </p>
      </div>
      <button className={s.btn} onClick={() => handleDelete(contact.id)}>
        <FaTrashAlt />
      </button>
    </li>
  );
};

export default Contact;
