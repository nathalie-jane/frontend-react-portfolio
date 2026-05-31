/* ===================================
    COMPONENT: NAVIGATION

    Renders main site navigation with
    links to each page
====================================== */

import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
	return (
		<header className="site-header">
			<nav className="site-nav">
				<ul className="site-nav__list">
					<li className="site-nav__item">
						<Link className="site-nav__link" to="/">
							Home
						</Link>
					</li>
					<li className="site-nav__item">
						<Link className="site-nav__link" to="/about">
							About
						</Link>
					</li>
					<li className="site-nav__item">
						<Link className="site-nav__link" to="/projects">
							Projects
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navigation;
