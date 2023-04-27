import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { DiJsBadge, DiReact, DiNodejs, DiCss3, DiHtml5 } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import octubre from "../../Assets/31_octubre.jpg";
import berrios from "../../Assets/berrios.jpg";
import uatf from "../../Assets/uatf.jpg";
import Booking from "../../Assets/Projects/Booking.png";
function Resume() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					Etablecimientos <strong className="purple">de Educacion </strong>
				</h1>
				<p style={{ color: "white" }}>
				Aquí algunos de los estableciminetos que estuve.....
				</p>
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={octubre}
							isBlog={false}
							title="31 de Octubre"
							description="Unidad educativa 31 de octubre que curse el kinder y la primaria."
							techstack="2003 | 2011"
							link="https://www.facebook.com/profile.php?id=100077443971717"
							
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={berrios}
							isBlog={false}
							title="Jose David Berrios"
							description="Colegio berrios donde curse la secundaria y sali del mismo."
							techstack="2011 | 2015"
							link="https://www.facebook.com/people/Colegio-Nacional-Mixto-Jos%C3%A9-David-Berrios-Pagina-oficial/100052049810099/?paipv=0&eav=AfZQ1YeTKk_tlr3e3Ir5auuWytBkRJTZXVY5INO3DuLouE_IqVF-Rc-WHlVKV5AO-fI&_rdr"
							
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={uatf}
							isBlog={false}
							title="UATF"
							description="La universidad actual donde estoy actulmente y desempeñando mi carrera de ingenieria de Sistemas."
							techstack="2018 | ...."
							link="https://www.uatf.edu.bo/"
							
						/>
					</Col>

					
				</Row>
			</Container>
		</Container>
	);
}

export default Resume;
