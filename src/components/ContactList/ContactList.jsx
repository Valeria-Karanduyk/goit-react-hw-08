import { useSelector } from "react-redux";
import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import {
  selectError,
  selectTotalContacts,
  selectFilteredContacts,
} from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const filter = useSelector(selectNameFilter);
  const totalContacts = useSelector(selectTotalContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  return !error ? (
    <>
      <div className={s.box}>
        <p className={s.total}>
          Total contacts: <span>{totalContacts}</span>
        </p>
        {filter && (
          <p className={s.found}>
            Found: <span>{filteredContacts.length}</span>
          </p>
        )}
      </div>
      <ul className={s.list}>
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  ) : (
    <div className={s.error}>
      <p>Failed to fetch</p>
      {error}!
    </div>
  );
};

export default ContactList;
