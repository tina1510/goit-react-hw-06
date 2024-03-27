import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name: "contacts",
    initialState: {
  items: []
    },
    reducers: {
       
        addContacts(state, action) {
             state.items.push(action.payload);
      
            
        },
        deleteContact(state, action) {
             state.items = state.items.filter(contact => contact.id !== action.payload);
            
        }

    }
})
export const { addContacts, deleteContact } = slice.actions;
export const selectContacts = (state) => state.contacts.items;
export default slice.reducer;
