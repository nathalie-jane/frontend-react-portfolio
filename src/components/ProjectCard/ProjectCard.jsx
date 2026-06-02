/* ===================================
    COMPONENT: PROJECT CARD

    Renders project data as a
    reusable project card
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
						<p className="project-card__info-text">{props.about}</p>
					</div>
				</div>

				<button className="project-card__details" type="button" onClick={props.openPopup}>
					View details
				</button>
			</div>
		</article>
	);
}

export default ProjectCard;
