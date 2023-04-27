import React from "react";
import Card from "react-bootstrap/Card";
import MovieIcon from "@mui/icons-material/Movie";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos soy <span className="purple">Roger Layme </span>
            de <span className="purple"> Potosi, Bolivia.</span>
            <br />Soy estudiante de la carrera ingenieria de sistemas.
            <br />
            <br />
            Además de programar, ¡algunas otras actividades que me encantan hacer!
          </p>
          <ul>
            <li className="about-activity">
              <MovieIcon /> Ver peliculas
            </li>
            <li className="about-activity">
              <AutoStoriesIcon /> Lectura de libros
            </li>
            <li className="about-activity">
              <ScreenSearchDesktopIcon /> Ver las actulizaciuones de la tecnologia
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Ezfuerzo,decision y Persistencia el camino hacia el exito... "{" "}
          </p>
          <br />
          <footer className="blockquote-footer"> Vamos...</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
