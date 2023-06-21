import axios from 'axios';
import {
  fetching,
  fetchSuccess,
  fetchError,
  deleteContactError,
  deleteContactSuccess,
  addContactError,
  addContactSuccess,
} from './slice';
axios.defaults.baseURL = 'https://648f0aa075a96b6644449db2.mockapi.io';
export const fetchContactsThunk = () => async dispatch => {
  try {
    dispatch(fetching());
    const response = await axios.get('/contacts');
    dispatch(fetchSuccess(response.data));
  } catch (e) {
    dispatch(fetchError(e.message));
  }
};

export const deleteContact = id => async dispatch => {
  try {
    const response = await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(response.data));
  } catch (e) {
    return deleteContactError(e.message);
  }
};
export const addContact = (name, phone) => async dispatch => {
  try {
    const response = await axios.post(`/contacts`, { name, phone });
    dispatch(addContactSuccess(response.data));
  } catch (e) {
    return addContactError(e.message);
  }
};
