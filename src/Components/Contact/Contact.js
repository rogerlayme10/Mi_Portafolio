import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube
  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";


import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';


function Contact() {
  return (
    <section>
      <Container fluid className="contact-section">
        <Container >
        <div className="form_cont">
          <div className="w-full lg:w-1/2">
            <div className="leading-loose">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
              >
                <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
                  Contact Form
                </p>
                <FormInput
                  inputLabel="Full Name"
                  labelFor="name"
                  inputType="text"
                  inputId="name"
                  inputName="name"
                  placeholderText="Your Name"
                  ariaLabelName="Name"
                />
                <FormInput
                  inputLabel="Email"
                  labelFor="email"
                  inputType="email"
                  inputId="email"
                  inputName="email"
                  placeholderText="Your email"
                  ariaLabelName="Email"
                />
                <FormInput
                  inputLabel="Subject"
                  labelFor="subject"
                  inputType="text"
                  inputId="subject"
                  inputName="subject"
                  placeholderText="Subject"
                  ariaLabelName="Subject"
                />

                <div className="mt-6">
                  <label
                    className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                    id="message"
                    name="message"
                    cols="14"
                    rows="6"
                    aria-label="Message"
                  ></textarea>
                </div>

                <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
                  <Button
                    title="Send Message"
                    type="submit"
                    aria-label="Send Message"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        
        
        <div className="socialIcons">
        <Row>
            <Col md={12} className="home-about-social">
              <h1>
                Pueden <span className="purple">contactarse </span>conmigo
              </h1>
              <div className="contact">
                <div>
                  <PhoneIcon
                    color="secondary"
                    className="con_ico"
                    sx={{ fontSize: 45 }}
                  />
                  <a href="tel:+917069896660" className="con-det">
                    +591 65499664
                  </a>
                </div>
                <div>
                  <EmailIcon
                    className="con_ico"
                    color="secondary"
                    sx={{ fontSize: 45 }}
                  />
                  <a
                    href="mailto:harshmehta813@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="con-det"
                  >
                    rogerlaymeacho10@gmail.com
                  </a>
                </div>
                <div>
                  <PlaceIcon
                    color="secondary"
                    className="con_ico"
                    sx={{ fontSize: 45 }}
                  />
                  <p className="con-det">Av Americas, Potosi</p>
                </div>
              </div>
              <h1>FIND ME ON</h1>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/rogerlayme10/Mi_Portafolio"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.facebook.com/profile.php?id=100009004313035"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillFacebook />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.youtube.com/watch?v=zTFBJgnNgU4&list=RDxuZA6qiJVfU&index=27"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillYoutube />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/roger_layme10/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;
