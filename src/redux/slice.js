import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
    ],
    isLoading: false,
    error: '',
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    fetching: state => {
      state.contacts.isLoading = true;
    },
    fetchSuccess: (state, { payload }) => {
      state.contacts.isLoading = false;
      state.contacts.items = payload;
      state.contacts.error = '';
    },
    fetchError: (state, { payload }) => {
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    },
    deleteContact: state => {
      state.contacts.isLoading = true;
    },
    deleteContactSuccess: (state, { payload }) => {
      state.contacts.isLoading = false;
      state.contacts.error = '';
      const index = state.contacts.items.findIndex(
        contact => contact.id === payload.id
      );
      state.contacts.items.splice(index, 1);
    },
    deleteContactError: (state, { payload }) => {
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    },
    addContact: state => {
      state.contacts.isLoading = true;
    },
    addContactSuccess: (state, { payload }) => {
      state.contacts.isLoading = false;
      state.contacts.error = '';
      state.contacts.items.push(payload);
    },
    addContactError: (state, { payload }) => {
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    },
    filterName: (state, { payload }) => {
      state.filter = payload.value;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const {
  fetchError,
  fetchSuccess,
  fetching,
  deleteContact,
  deleteContactError,
  deleteContactSuccess,
  addContact,
  addContactError,
  addContactSuccess,
  filterName,
} = contactsSlice.actions;
