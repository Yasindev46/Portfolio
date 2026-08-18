import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import "./Contactme.css";

const Contactme = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    {
      name: "Phone",
      icon: (
        <i
          className="fa fa-phone"
          style={{ fontSize: 24, color: "#00bcd4" }}
        />
      ),
      url: "tel:+917756903575",
      info: "+91 77 5690 3575",
    },
    {
      name: "Email",
      icon: (
        <i
          className="fa fa-envelope"
          style={{ fontSize: 24, color: "#00bcd4" }}
        />
      ),
      url: "mailto:yasinmuidev46@gmail.com",
      info: "yasinmuidev46@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: (
        <i
          className="fa fa-linkedin-square"
          style={{ fontSize: 24, color: "#00bcd4" }}
        />
      ),
      url: "https://www.linkedin.com/in/yasin-mulla46/",
      info: "https://www.linkedin.com/in/yasin-mulla46/",
    },
    {
      name: "GitHub",
      icon: (
        <i
          className="fa fa-github"
          style={{ fontSize: 24, color: "#00bcd4" }}
        />
      ),
      url: "https://github.com/Yasindev46",
      info: "github.com/Yasindev46",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    // send via EmailJS (https://www.emailjs.com/) - configure Vite env vars:
    // VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      to_email: 'yasinmuidev46@gmail.com',
    };

    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      } catch (err) {
        console.error('EmailJS send error:', err);
        // fallback: open user's mail client with prefilled mail
        const body = `Name: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0AMessage:%0A${encodeURIComponent(form.message)}`;
        window.location.href = `mailto:yasinmuidev46@gmail.com?subject=${encodeURIComponent('Website Contact')} &body=${body}`;
      }
    } else {
      // If env not configured, fallback to mailto so messages can still be sent
      const body = `Name: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0AMessage:%0A${encodeURIComponent(form.message)}`;
      window.location.href = `mailto:yasinmuidev46@gmail.com?subject=${encodeURIComponent('Website Contact')}&body=${body}`;
    }
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };
  return (
    <div className="contactme-container" id="contactme">
      <h3>Contact Me</h3>
       <div className="contactme-content">
      <form onSubmit={handleSubmit} className="about-form">
        <h3>Lets connect together</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Enter Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
        />
        <button type="submit">Send Message</button>
        {/* {sent && (
          <span style={{ color: "#7f7ffb", marginTop: "8px" }}>
            Message sent! Thank you.
          </span>
        )} */}
      </form>
     
      <div className="about-social">

        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.name}
            style={{ textDecoration: "none" }}
            className="social-card"
          >
            <div className="social-card-icon">{link.icon}</div>
              <div className="social-card-info">{link.info}</div>
          </a>
        ))}

      </div>
    </div>
    </div>
  );
};

export default Contactme;
