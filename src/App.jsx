import { useState, useEffect } from 'react'
import initialContacts from './contacts.json'
import SearchBox from './SearchBox/SearchBox.jsx';
import ContactList from './ContactList/ContactList.jsx'
import ContactForm from './ContactForm/ContactForm.jsx';



function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts !== null) {
      return savedContacts;
    }
    return initialContacts;
  
  } );

   useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
   }, [contacts]);
  
  const [filter, setFilter] = useState('');

  const addContacts = (newContact) => {
    setContacts ( (prevContacts) => {
     return ([...prevContacts, newContact ])
    })
   
  }
 const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
 );
  const deleteContact = (contactId) =>
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId)
    })

  return (
    <>
     <div>
  <h1>Phonebook</h1>
        <ContactForm onAdd={addContacts} />
  <SearchBox value={filter} onFilter={setFilter}/>
        <ContactList contacts={visibleContacts} onDelete={ deleteContact} />
</div>

    </>
  )
}

export default App


