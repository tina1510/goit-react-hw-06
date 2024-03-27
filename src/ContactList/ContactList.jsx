import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
const ContactList = ({contacts, onDelete}) => {
    return (
        <ul className={css.listContact}>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <Contact date={contact} onDelete={onDelete} />
                </li>
            ))}
                
          
      </ul>
)
}
export default ContactList