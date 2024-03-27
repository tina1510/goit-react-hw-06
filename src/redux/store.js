import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore, persistReducer, FLUSH,
    
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import contactsReducer from "./contactsSlice"
import filtersReduser from "./filtersSlice"
import initialContacts from '../contacts.json'



const contactsPersistConfig = {
  key: 'contacts',
    storage,
  whitelist: [`items`]
}
const filtersPersistConfig = {
  key: 'filters',
    storage,
  whitelist: [`name`]
}
const persistedContactReducer = persistReducer(contactsPersistConfig, contactsReducer)

const persistedFilterReducer = persistReducer(filtersPersistConfig, filtersReduser)

export const store = configureStore({
    reducer: {
        contacts: persistedContactReducer,
        filters: persistedFilterReducer
  },
   preloadedState: { 
    contacts: {
      items: initialContacts
    }
  },

    
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store);