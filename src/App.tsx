import React from 'react';
import './App.scss';
import contactsFromServer from './api/contacts.json';
import { ContactsList } from './components/ContactsList/ContactsList';

export const App: React.FC = () => {
  return (
    <div className="body">
      <div className="title">Contacts List</div>
      <div className="page">
        <div className="page-content">
          <ContactsList contactsFromServer={[...contactsFromServer]} />
        </div>
      </div>
    </div>
  );
};
