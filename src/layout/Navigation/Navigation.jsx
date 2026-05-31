/* ===================================
    COMPONENT: NAVIGATION

    Renders main site navigation with
    links to each page
====================================== */

import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation() {
	return (
		<header className="site-header">
			<nav className="site-nav">
				<ul className="site-nav__list">
					<li className="site-nav__item">
						<NavLink
							className={({ isActive }) => (isActive ? "site-nav__link site-nav__link--active" : "site-nav__link")}
							to="/">
							Home
						</NavLink>
					</li>
					<li className="site-nav__item">
						<NavLink
							className={({ isActive }) => (isActive ? "site-nav__link site-nav__link--active" : "site-nav__link")}
							to="/about">
							About
						</NavLink>
					</li>
					<li className="site-nav__item">
						<NavLink
							className={({ isActive }) => (isActive ? "site-nav__link site-nav__link--active" : "site-nav__link")}
							to="/projects">
							Projects
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navigation;
