/* ===================================
    PAGE: PROJECTS

    Renders Projects page layout
    and displays Project cards
====================================== */

import { useState } from "react";

import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectPopup from "../../components/ProjectPopup/ProjectPopup";
import projects from "../../data/projects";

function Projects() {
	const [showProjects, setShowProjects] = useState(false);
	const [projectDetails, setProjectDetails] = useState(null);
	const [searchInput, setSearchInput] = useState("");

	const toggleProjects = () => {
		setShowProjects(function (isVisible) {
			return !isVisible;
		});
	};

	const openProjectPopup = (selectedProject) => {
		setProjectDetails(selectedProject);
	};

	const closeProjectPopup = () => {
		setProjectDetails(null);
	};

	const handleProjectSearch = (event) => {
		setSearchInput(event.target.value);
	};

	const searchResults = projects.filter((project) => {
		const searchTerm = searchInput.toLowerCase();
		const projectName = project.name.toLowerCase();
		const hasMatchingName = projectName.includes(searchTerm);

		return hasMatchingName;
	});

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

				{showProjects && (
					<div className="projects__search">
						<i className="projects__search-icon fa-brands fa-sistrix"></i>
						<input
							className="projects__search-input"
							type="search"
							name="project-search"
							id="project-search"
							placeholder="Search by project name or technology"
							value={searchInput}
							onChange={handleProjectSearch}></input>
					</div>
				)}

				<div className={showProjects ? "projects__collection projects__collection--visible" : "projects__collection"}>
					{searchResults.map((project) => {
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
								openPopup={() => openProjectPopup(project)}
							/>
						);
					})}
				</div>
			</div>

			{projectDetails && (
				<ProjectPopup
					name={projectDetails.name}
					screenshot={projectDetails.screenshot}
					tech={projectDetails.tech}
					about={projectDetails.about}
					learned={projectDetails.learned}
					role={projectDetails.role}
					challenges={projectDetails.challenges}
					githubRepo={projectDetails.githubRepo}
					closePopup={closeProjectPopup}
				/>
			)}
		</section>
	);
}

export default Projects;
