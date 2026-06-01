/* ===================================
    PAGE: PROJECTS

    Renders Projects page layout
    and displays Project cards
====================================== */

import { useState } from "react";

import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../../data/projects";

function Projects() {
	const [showProjects, setShowProjects] = useState(false);

	const toggleProjects = () => {
		setShowProjects(function (isVisible) {
			return !isVisible;
		});
	};

	return (
		<section className="projects">
			<div className="projects__inner">
				<div className="projects__heading">
					<h1 className="projects__title">Projects</h1>
					<p className="projects__intro">A collection of some of my recent work</p>
					<button className="projects__button" type="button" onClick={toggleProjects}>
						{showProjects ? "Hide Projects" : "Show Projects"}
					</button>
				</div>

				<div className={showProjects ? "projects__collection projects__collection--visible" : "projects__collection"}>
					{projects.map(function (project) {
						return (
							<ProjectCard
								key={project.name}
								name={project.name}
								screenshot={project.screenshot}
								tech={project.tech}
								about={project.about}
								learned={project.learned}
								role={project.role}
								challenges={project.challenges}
								githubRepo={project.githubRepo}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Projects;
