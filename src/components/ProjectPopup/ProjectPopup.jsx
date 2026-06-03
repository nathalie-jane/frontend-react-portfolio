/* ===================================
    COMPONENT: PROJECT POPUP

    Renders selected project details
    inside a popup
====================================== */

import "./ProjectPopup.css";

function ProjectPopup(props) {
	return (
		<div className="modal">
			<div className="modal__overlay" onClick={props.closePopup}></div>
			<article className="project-popup">
				<header className="project-popup__heading">
					<h2 className="project-popup__title">{props.name}</h2>
					<button className="project-popup__close" type="button" onClick={props.closePopup}>
						<i className="project-popup__close-icon fa-solid fa-xmark"></i>
					</button>
				</header>

				<div className="project-popup__content">
					<img className="project-popup__image" src={props.screenshot} alt={`${props.name} project screenshot`} />
					<ul className="project-popup__tech-list">
						{props.tech.map(function (techItem) {
							return (
								<li className="project-popup__tech-item" key={techItem}>
									{techItem}
								</li>
							);
						})}
					</ul>

					<div className="project-popup__body">
						<div className="project-popup__info">
							<h3 className="project-popup__info-title">About</h3>
							<p className="project-popup__info-text">{props.about}</p>
						</div>

						<div className="project-popup__info">
							<h3 className="project-popup__info-title">What I learned</h3>
							<p className="project-popup__info-text">{props.learned}</p>
						</div>

						<div className="project-popup__info">
							<h3 className="project-popup__info-title">My role</h3>
							<p className="project-popup__info-text">{props.role}</p>
						</div>

						<div className="project-popup__info">
							<h3 className="project-popup__info-title">Challenges solved</h3>
							<p className="project-popup__info-text">{props.challenges}</p>
						</div>
					</div>

					<a className="project-popup__link" href={props.githubRepo} target="_blank" rel="noopener noreferrer">
						<span className="project-popup__repo-link">View repository</span>
						<i className="project-popup__repo-icon fa-brands fa-github"></i>
					</a>
				</div>
			</article>
		</div>
	);
}

export default ProjectPopup;
