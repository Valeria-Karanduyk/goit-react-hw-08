import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { fetchContacts } from "./redux/contactsOps";
import Loader from "./components/Loader/Loader";
import { selectError, selectIsLoading } from "./redux/contactsSlice";

const App = () => {
  const dispatch = useDispatch();
  const loader = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <SearchBox />
      {loader && !error ? <Loader /> : <ContactList />}
    </div>
  );
};

export default App;
