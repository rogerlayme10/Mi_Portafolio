import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMITANME <span className="purple"> PRESENTARME </span> 
            </h1>
            <p className="home-about-body">
              Soy el universitario Roger Layme Acho de la carrera de sistemas
              y este es mi portafolio.  ¯\_(ツ)_/¯
              <br />
              Mi campo es la segurdiad de sistemas , en la area de redes.
              <i>
                <b className="purple"> Tambien me gusta hacer paginas web</b>
              </i>
              <br />
              El desarrollo de productos con node,js y javascript
              <b className="purple"></b> 
              <i>
                <b className="purple">
                  {" "}
                  En React y Redux
                </b>
              </i>
              &nbsp; 
              <i>
                <b className="purple"> </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
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
            <h1>ENCUENTRAME EN</h1>
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
                  href="https://www.youtube.com/watch?v=zTFBJgnNgU4&list=RDxuZA6qiJVfU&index=27_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100009004313035"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook/>
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
      </Container>
    </Container>
  );
}
export default Home2;
