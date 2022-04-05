import React, { useState, useEffect } from 'react';
import './ContactsList.scss';
import { ContactInfo } from '../ContactInfo/ContactInfo';

type Props = {
  contactsFromServer: ContactNew[],
};

export const ContactsList: React.FC<Props> = ({ contactsFromServer }) => {
  const [selectedContactId, setSelectedContactId] = useState(0);
  const [contacts, setContacts] = useState<ContactNew[]>([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newInfo, setNewInfo] = useState('');
  const [newGroup, setNewGroup] = useState('');
  const [showDeleteButton, setShowDeleteButton] = useState<boolean>(false);

  const openDeleteButton = () => {
    setShowDeleteButton(true);
  };

  const hideDeleteButton = () => {
    setShowDeleteButton(false);
  };

  const contactInfo = contacts.filter(contact => contact.id === selectedContactId);

  const addContact = (newContact: ContactNew) => {
    const listWithAddedContact = [...contacts, newContact];

    setContacts(listWithAddedContact);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPhone(event.target.value);
  };

  const handleInfoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewInfo(event.target.value);
  };

  const handleGroupChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNewGroup(event.target.value);
  };

  const getNewContact = () => {
    const newContact: ContactNew = {
      id: contacts.length + 1,
      name: newName,
      phone: newPhone,
      info: newInfo,
      group: newGroup,
    };

    return newContact;
  };

  const clearState = () => {
    setNewName('');
    setNewPhone('');
    setNewInfo('');
    setNewGroup('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSelectedContactId(0);

    const newContact = getNewContact();

    addContact(newContact);
    clearState();
  };

  const loadContacts = () => {
    const contactsList = contactsFromServer;

    setContacts(contactsList);
  };

  useEffect(() => {
    loadContacts();
  }, [setContacts]);

  const deleteContact = (contactId: number) => {
    const filteredContacts = [...contacts].filter(contact => contact.id !== contactId);

    setContacts(filteredContacts);
    setShowDeleteButton(false);
  };

  return (
    <div className="contacts">
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="add-form__title-change">
          <input
            onChange={handleNameChange}
            value={newName}
            name="newTitle"
            type="text"
            placeholder="Name"
            className="add-form__input"
            required
          />
        </div>

        <div className="add-form__phone-change">
          <input
            onChange={handlePhoneChange}
            value={newPhone}
            name="newDescription"
            type="telephone"
            placeholder="Phone number"
            className="add-form__input"
            required
          />
        </div>

        <div className="add-form__info-change">
          <input
            onChange={handleInfoChange}
            value={newInfo}
            name="newImgUrl"
            type="text"
            placeholder="Information"
            className="add-form__input"
            required
          />
        </div>

        <div className="add-form__group-change">
          Chose a group:
          {' '}
          <select value={newGroup} onChange={handleGroupChange} required>
            <option value="">Chose one:</option>
            <option value="friends">friends</option>
            <option value="family">family</option>
            <option value="work">work</option>
            <option value="others">others</option>
          </select>
        </div>

        <button
          type="submit"
          className="add-form__add-button"
        >
          Add
        </button>
      </form>
      <ul className="contacts__list">
        <div className="contacts__list-items">
          {contacts.map(contact => (
            <li key={contact.id} className="contacts__item">
              <div className="contacts__title">
                {contact.name}
              </div>
              <button
                type="button"
                className="contacts__button"
                onClick={() => setSelectedContactId(contact.id)}
              >
                Show contact info
              </button>
              <button
                type="button"
                className="contacts__button"
                onClick={() => setSelectedContactId(0)}
              >
                Hide contact info
              </button>
            </li>
          ))}
        </div>
        <div className="contacts__list-info-block">
          <div className="contacts__list-info-block-title">Conctact Info:</div>
          {[...contactInfo].map(contact => (
            <>
              <div key={contact.id} className="contacts__list-info">
                <ContactInfo contact={contact} />
              </div>
              <button
                type="button"
                className="contacts__button"
                onClick={openDeleteButton}
              >
                Delete contact
              </button>
              {showDeleteButton
                ? (
                  <>
                    <div className="contacts__delete">Are you sure?</div>
                    <button
                      type="button"
                      className="contacts__button"
                      onClick={() => deleteContact(contact.id)}
                    >
                      Yes, I am sure
                    </button>
                    <button
                      type="button"
                      className="contacts__button"
                      onClick={hideDeleteButton}
                    >
                      Cancel
                    </button>
                  </>
                )
                : ''}
            </>
          ))}
        </div>
      </ul>
    </div>
  );
};
