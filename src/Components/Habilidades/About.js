import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function Habilidades() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          
        </Row>
        <h1 className="project-heading">
          Mis <strong className="purple">Habilidades </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Herramientas </strong> |que Uso
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default Habilidades;
