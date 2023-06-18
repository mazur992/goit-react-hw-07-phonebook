import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialState } from './initialsState';
export const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    createContact: (state, { payload }) => {
      state.contacts.push({
        name: payload.name,
        number: payload.number,
        id: nanoid(),
      });
    },
    filterName: (state, { payload }) => {
      state.filter = payload.value;
    },
    delContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => {
        return contact.id !== payload.contactId;
      });
    },
  },
});
export const reducer = slice.reducer;
export const { delContact, createContact, filterName } = slice.actions;
