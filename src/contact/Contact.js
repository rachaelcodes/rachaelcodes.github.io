import React from 'react';
import './Contact.css';

const links = [
  {
    link: "mailto:rcdb.orourke@gmail.com?subject=Portfolio enquiry",
    src: "./icons/email.svg",
    alt: "Get in touch by email"
  }, {
    link: "https://www.linkedin.com/in/rachaelcodes/",
    src: "./icons/linkedin.svg",
    alt: "Get in touch through LinkedIn"
  },  {
    link: "https://github.com/rachaelcodes",
    src: "./icons/github.svg",
    alt: "Check out my GitHub"
  },
];

function Link(props) {
  return (
    <a href={props.link} className="Contact-link" target="_blank" rel="noopener noreferrer"><img src={props.src} alt={props.alt}></img></a>
  )
}

function Contact() {
  const linkList = links.map(
    (link, index) => 
    <Link 
      link = {link.link}
      src = {link.src}
      alt = {link.alt}
      key = {index}
    />
  );

  return (
    <section className="Contact">
      <h2>Ask me what I can make for your company</h2>
      {linkList}
    </section>
  );
}

export default Contact;