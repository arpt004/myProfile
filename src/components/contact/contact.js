import React, { useState } from "react";
import "./contact.css";
import { BigCardBox } from "../home/home";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [yourMessage, setYourMessage] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const handleSend = (e) => {
    e.preventDefault();
    if (name && email && subject && yourMessage) {
      alert("handle alert");
    } else {
      setErrMessage("Please fill all the mandatory fields");
    }
  };
  return (
    <>
      {errMessage && <p className="contact-error-msg"> {errMessage} </p>}

      <div className="contact-section">

        <div className="contact-left">

          <h3 data-aos="fade-up" className="aos-init aos-animate">
            Contact Info
          </h3>

          <ul className="contact-details">

            <li
              className="d-flex align-items-center aos-init aos-animate"
              data-aos="zoom-in"
            >

              <div className="icon-box shadow-box">
                <i className="iconoir-mail"></i>

              </div>

              <div className="right">
                <span>MAIL US</span> 
                <h4>arpt004@gmail.com</h4>
                <h4>bmclg103@gmail.com</h4> 
              </div>

            </li>

            <li
              className="d-flex align-items-center aos-init aos-animate"
              data-aos="zoom-in"
            >

              <div className="icon-box shadow-box">

                <i className="iconoir-phone"></i>
              </div>

              <div className="right">
                <span>Contact Us</span>
                <h4>+91 9953-782122</h4>
                <h4>+91 7011-383742</h4>
              </div>

            </li>

            <li
              className="d-flex align-items-center aos-init aos-animate"
              data-aos="zoom-in"
            >

              <div className="icon-box shadow-box">

                <i className="iconoir-pin-alt"></i>
              </div>

              <div className="right">
                <span>Location</span>

                <h4>
                  C-1003, Supertech ecocity, sector-137, Noida, UP <br /> India
                  <br />
                  201 354
                </h4>

              </div>

            </li>

          </ul>

          <h3 data-aos="fade-up" className="aos-init aos-animate">
            Social Info
          </h3>

          <ul
            className="social-links d-flex align-center aos-init aos-animate"
            data-aos="zoom-in"
          >

            <li>
              <a className="shadow-box" href="/works">
                <i className="iconoir-dribbble"></i>
              </a>
            </li>

            <li>
              <a className="shadow-box" href="">
                <i className="iconoir-twitter"></i>
              </a>
            </li>

            <li>
              <a className="shadow-box" href="">
                <i className="iconoir-instagram"></i>
              </a>
            </li>

          </ul>

        </div>

        <div className="contact-right">

          <BigCardBox height={"30rem"}>

            <div className="contact-right-contianer">

              <h1 className="contact-lets-work">
                Let's work
                <span>together.</span>
              </h1>

              <div className="contact-form-container">

                <form>

                  <input
                    type="text"
                    placeholder="Name*"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <br />
                  <input
                    type="email"
                    placeholder="Email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Your Subject*"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                  <br />
                  <textarea
                    type="text"
                    placeholder="Your Message*"
                    value={yourMessage}
                    onChange={(e) => setYourMessage(e.target.value)}
                  />
                  <br />
                  <button
                    type="submit"
                    onClick={(e) => handleSend(e)}
                    onBlur={() => setErrMessage("")}
                  >
                    Send Message
                  </button>

                </form>

              </div>

            </div>

          </BigCardBox>

        </div>
      </div>
    </>
  );
};
export default Contact;
