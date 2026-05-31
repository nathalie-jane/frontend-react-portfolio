/* ===================================
    APP

    Main site layout
====================================== */

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./layout/Navigation/Navigation";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";

function App() {
	return (
		<BrowserRouter>
			<div className="site-container">
				<Navigation />
				<main className="site-main">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/projects" element={<Projects />} />
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;

