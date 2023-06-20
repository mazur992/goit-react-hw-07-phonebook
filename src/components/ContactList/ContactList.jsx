import { useSelector, useDispatch } from 'react-redux';
import { contactSelector } from 'redux/selectors';
import css from './ContactList.module.css';
import { useEffect } from 'react';
import { deleteContact, fetchContactsThunk } from '../../redux/thunk';

const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts, filter } = useSelector(contactSelector);
  const getVisibleName = () => {
    if (filter) {
      const normilizeFilter = filter.toLocaleLowerCase();
      return contacts.items.filter(contact =>
        contact.name.toLocaleLowerCase().includes(normilizeFilter)
      );
    }
    return contacts.items;
  };
  const delContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <ul>
      {contacts.items.isLoading && <p>Loading...</p>}
      {getVisibleName().map(item => {
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
