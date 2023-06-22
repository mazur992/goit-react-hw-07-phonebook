import { useSelector, useDispatch } from 'react-redux';
import { contactSelector, selectVisibleContacts } from 'redux/selectors';
import css from './ContactList.module.css';
import { useEffect } from 'react';
import { deleteContact, fetchContactsThunk } from '../../redux/thunk';

const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(contactSelector);
  const visibleContacts = useSelector(selectVisibleContacts);

  const delContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <ul>
      {contacts.isLoading && <p>Loading...</p>}
      {visibleContacts.map(item => {
        return (
          <li className={css.contactItem} key={item.id}>
            {item.name}: {item.phone}
            <button
              className={css.contactBtn}
              type="button"
              onClick={() => delContact(item.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
