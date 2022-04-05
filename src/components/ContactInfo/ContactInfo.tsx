import React from 'react';
import './ContactInfo.scss';

type Props = {
  contact: ContactNew,
};

export const ContactInfo: React.FC<Props> = ({ contact }) => {
  return (
    <div className="contact-info">
      {contact.id}
      <div className="contact-info__phone contact-info__info">
        <span className="contact-info--title">Number: </span>
        {contact.phone}
      </div>
      <div className="contact-info__about contact-info__info">
        <span className="contact-info--title">Information: </span>
        {contact.info}
      </div>
      <div className="contact-info__group contact-info__info">
        <span className="contact-info--title">Group: </span>
        {contact.group}
      </div>
    </div>
  );
};
