import axios from 'axios';
import {
  fetching,
  fetchSuccess,
  fetchError,
  deleteContactError,
  deleteContactSuccess,
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
