import "./Projects.css";

function Projects() {
	return (
		<section className="projects">
			<div className="projects__inner">
				<div className="projects__heading">
					<h1 className="projects__title">My Projects</h1>
					<p className="projects__intro">A collection of some of my recent work</p>
				</div>
				<div className="projects__collection"></div>
			</div>
		</section>
	);
}

export default Projects;
