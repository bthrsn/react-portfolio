import React from "react";
import { MdOutlineMail } from 'react-icons/md'
import { IconType } from "react-icons";
import { BsLinkedin, BsTelegram } from "react-icons/bs";

const Contacts = () => {

  const contactList: contactListItemTypes = [
    { name: "Email", iconType: MdOutlineMail, header: "mikhail.lhts@gmail.com", link: "mailto:mikhail.lhts@gmail.com", linkText: "Send an email" },
    { name: "Messenger", iconType: BsTelegram, header: "Telegram", link: "https://t.me/bthrsn", linkText: "Text me" },
    { name: "LinkedIn", iconType: BsLinkedin, header: "LinkedIn", link: "https://www.linkedin.com/in/mikhail-liakhovets-315835231/", linkText: "Send a message" },
  ];

  return (
    <section id="contacts">
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          {contactList.map(item => (
            <article className="contact-option" key={item.name}>
              <item.iconType />
              <h4>{item.name}</h4>
              <h5>{item.header}</h5>
              <a href={item.link}>{item.linkText}</a>
            </article>
          )
          )}
        </div>
        <form action=""></form>
      </div>
    </section>
  );
};

export default Contacts;

type contactListItemTypes = {
  name: string;
  iconType: IconType;
  header: string;
  link: string;
  linkText: string;
}[]
