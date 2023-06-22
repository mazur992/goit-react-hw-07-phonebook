export const contactSelector = state => state.contacts;
export const selectFilter = state => state.contacts.filter;
export const selectItems = state => state.contacts.contacts.items;

export const selectVisibleContacts = state => {
  const filter = selectFilter(state);
  const items = selectItems(state);
  const normilizeFilter = filter.toLocaleLowerCase();
  return items.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normilizeFilter)
  );
};
