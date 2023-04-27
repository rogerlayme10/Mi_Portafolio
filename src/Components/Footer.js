import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../Assets/logo.png";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <img src={logo} className="img-fluid logo" alt="brand" />
          <h3>Diseñado y desarrolado por: </h3>
          <h3>Roger Layme</h3>
        </Col>
        <Col>
          <h3>Contact</h3>
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
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/rogerlayme10/Mi_Portafolio"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.youtube.com/watch?v=fyMhvkC3A84&list=RDxuZA6qiJVfU&index=27_"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillYoutube />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/profile.php?id=100009004313035"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/roger_layme10/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} HM</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
