import React from "react";
import "./contacts.css";
import { MdOutlineMail } from "react-icons/md";
import { IconType } from "react-icons";
import { BsLinkedin, BsTelegram } from "react-icons/bs";
import emailjs from 'emailjs-com';

const Contacts = () => {

  const sendEmail = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    emailjs.sendForm('service_ty5rxbf', 'template_k41il69', event.currentTarget, '2ZXyFvc1v0_Y5Tni2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      event.currentTarget.reset();
  };

  const contactList: contactListItemTypes = [
    {
      name: "Email",
      iconType: MdOutlineMail,
      header: "mikhail.lhts@gmail.com",
      link: "mailto:mikhail.lhts@gmail.com",
      linkText: "Send an email",
    },
    {
      name: "Messenger",
      iconType: BsTelegram,
      header: "Telegram",
      link: "https://t.me/bthrsn",
      linkText: "Text me",
    },
    {
      name: "LinkedIn",
      iconType: BsLinkedin,
      header: "LinkedIn",
      link: "https://www.linkedin.com/in/mikhail-liakhovets-315835231/",
      linkText: "Send a message",
    },
  ];

  return (
    <section id="contacts">
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          {contactList.map((item) => (
            <article className="contact-option" key={item.name}>
              <item.iconType className="contact-option-icon"/>
              <h4>{item.name}</h4>
              <h5>{item.header}</h5>
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.linkText}
              </a>
            </article>
          ))}
        </div>
        <form onSubmit={sendEmail}>
          <input
            type="name"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="button button-primary">
            Send Message
          </button>
        </form>
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
}[];
