/* ===================================
    COMPONENT: PROJECT CARD

    Renders project data as a
    reusable portfolio card
====================================== */

import "./ProjectCard.css";

function ProjectCard(props) {
	return (
		<article className="project-card">
			<img className="project-card__image" src={props.screenshot} alt={`${props.name} project screenshot`} />

			<div className="project-card__content">
				<h2 className="project-card__title">{props.name}</h2>
				<ul className="project-card__tech-list">
					{props.tech.map(function (techItem) {
						return (
							<li className="project-card__tech-item" key={techItem}>
								{techItem}
							</li>
						);
					})}
				</ul>

				<div className="project-card__group">
					<div className="project-card__info">
						<h3 className="project-card__info-title">About</h3>
						<p className="project-card__info-text">{props.about}</p>
					</div>

					<div className="project-card__info">
						<h3 className="project-card__info-title">What I learned</h3>
						<p className="project-card__info-text">{props.learned}</p>
					</div>

					<div className="project-card__info">
						<h3 className="project-card__info-title">My role</h3>
						<p className="project-card__info-text">{props.role}</p>
					</div>

					<div className="project-card__info">
						<h3 className="project-card__info-title">Challenges solved</h3>
						<p className="project-card__info-text">{props.challenges}</p>
					</div>
				</div>

				<a className="project-card__link" href={props.githubRepo} target="_blank" rel="noopener noreferrer">
					<span className="project-card__repo-link">View repository</span>
					<i className="project-card__repo-icon fa-brands fa-github"></i>
				</a>
			</div>
		</article>
	);
}

export default ProjectCard;
