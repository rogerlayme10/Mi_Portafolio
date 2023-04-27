import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { DiJsBadge, DiReact, DiNodejs, DiCss3, DiHtml5 } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import tictac from "../../Assets/Projects/TIC-TAC-TOE.png";
import Smatbot from "../../Assets/Projects/Smatbot.png";
import todo from "../../Assets/Projects/todo_.png";
import Booking from "../../Assets/Projects/Booking.png";
function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					Mis trabajos <strong className="purple">Recientes </strong>
				</h1>
				<p style={{ color: "white" }}>
				Aquí hay algunos proyectos en los que he trabajado recientemen
				</p>
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={tictac}
							isBlog={false}
							title="Trica"
							description="Un juego simple donde dos jugadores pueden jugar TIC TAC TOE y obtener el ganador o el sorteo."
							techstack="HTML | CSS | JS"
							link="https://tictac-toe.vercel.app/"
							git="https://github.com/harshmehta813/react-game-assignment-tic-tac-toe"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Smatbot}
							isBlog={false}
							title="Clone of Smatbot.com"
							description="Smatbot provides a facility to create a chatbot for all business needs."
							techstack="HTML | CSS | JS"
							link="https://harshmehta813.github.io/smatbot/"
							git="https://github.com/harshmehta813/smatbot"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={todo}
							isBlog={false}
							title="Todo App"
							description="A todo app where users can add tasks, mark it as done, view completed tasks, change the status of tasks & delete the tasks."
							techstack="HTML | CSS | JS | React"
							link="https://todo-page.vercel.app/"
							git="https://github.com/harshmehta813/Todo-4860"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Booking}
							isBlog={false}
							title="Clone of Booking.com"
							description="Booking.com is a Dutch online travel agency for lodging reservations & other travel products, and a subsidiary of Booking Holdings."
							techstack="HTML | CSS | JS | React | Redux | Material UI"
							link="https://https://lnkd.in/dm6NacQH"
							git="https://github.com/harshmehta813/Booking/tree/main/booking.com"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
