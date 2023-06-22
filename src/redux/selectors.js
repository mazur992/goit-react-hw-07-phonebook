import { createSelector } from '@reduxjs/toolkit';

export const contactSelector = state => state.contacts;
export const selectFilter = state => state.contacts.filter;
export const selectItems = state => state.contacts.contacts.items;

export const selectVisibleContacts = createSelector(
  [selectFilter, selectItems],
  (filter, items) => {
    const normilizeFilter = filter.toLocaleLowerCase();
    return items.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normilizeFilter)
    );
  }
);
