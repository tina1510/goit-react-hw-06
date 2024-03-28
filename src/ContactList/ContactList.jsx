import { useDispatch, useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
import { addContacts, deleteContact, selectContacts } from "../redux/contactsSlice";
import { selectNameFilter } from "../redux/filtersSlice";
import initialContacts from '../contacts.json'

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
  if (contacts.length === 0) {
    dispatch(addContacts(initialContacts));
    }

        const filter = useSelector(selectNameFilter);
    const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

    const handleDelete = (contactId) => {
        dispatch(deleteContact(contactId));
    };

    return (
        <ul className={css.listContact}>
            {filteredContacts.map((contact) => (
                <li key={contact.id}>
                    <Contact date={contact} onDelete={handleDelete} />
                </li>
            ))}
        </ul>
    );
};

export default ContactList

