/* ===================================
    PAGE: HOME

    Renders Home page layout and main
	introductory content
====================================== */

import "./Home.css";

function Home() {
	return (
		<section className="home">
			<div className="home__inner">
				<div className="home__heading">
					<h1 className="home__title">Welcome to my portfolio</h1>
					<p className="home__intro">A showcase of my work in front-end development</p>
				</div>
			</div>
		</section>
	);
}

export default Home;
