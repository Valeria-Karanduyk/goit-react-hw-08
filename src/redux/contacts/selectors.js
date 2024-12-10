import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

const selectContacts = (state) => state.contacts.items;
const selectIsLoading = (state) => state.contacts.loading;
const selectError = (state) => state.contacts.error;
const selectTotalContacts = (state) => state.contacts.items.length;
const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  }
);
const selectDeleteData = (state) => state.contacts.deleteData;

const ContactsSelectors = {
  selectContacts,
  selectIsLoading,
  selectError,
  selectTotalContacts,
  selectFilteredContacts,
  selectDeleteData,
};

export default ContactsSelectors;
