/* ===========================================
    PROJECT DATA

    Stores project details used by project 
    cards
============================================== */

import cafeNoraProjectImage from "../assets/images/project-cafe-nora.webp";
import jsAssignmentsProjectImage from "../assets/images/project-js-assignments.webp";
import bhromaonProjectImage from "../assets/images/project-bhromaon.webp";

/* --------------------------------------
    PROJECTS ARRAY

    Project details stored in an array 
    of objects. Each object represents a 
    project
----------------------------------------- */

const projects = [
	{
		name: "Café Nora",
		screenshot: cafeNoraProjectImage,
		tech: ["HTML", "CSS"],
		about: "A multi-page café website with a homepage, gallery, menu page, contact section and a booking form.",
		learned:
			"This project helped me improve my HTML and CSS skills by working on a larger website. I gained more experience with modern layout techniques like Flexbox and learned how to collaborate with a team using GitHub branches.",
		role: "This was a group project, and I worked on designing and building the menu page.",
		challenges:
			"Keeping the menu page visually consistent with the rest of the website while still making it structured, readable and easy to navigate. I also practiced writing cleaner class names and organizing CSS for a larger multi-page project.",
		githubRepo: "https://github.com/achiniishani1993/cafe-nora.git",
	},

	{
		name: "JavaScript Assignments",
		screenshot: jsAssignmentsProjectImage,
		tech: ["JavaScript", "HTML", "CSS"],
		about: "This website is a collection of my vanilla JavaScript course assignments. It includes a landing page with links to six assignment pages, where I also added small mini-projects to practice each lesson topic more in depth.",
		learned:
			"I learned how to use JavaScript to work with user input, functions, conditions, loops, arrays, objects, DOM manipulation, events, and UI feedback.",
		role: "This was a solo project. I was responsible for the full structure, code, styling and functionality.",
		challenges:
			"I challenged myself by building extra mini-projects, such as a calculator, word counter, sign-up form, dice game and a countdown timer. Through these projects, I learned how to make console-based exercises more dynamic and user-friendly.",
		githubRepo: "https://github.com/nathalie-jane/frontend-js-lessons-01-06.git",
	},
	{
		name: "Bhromaon",
		screenshot: bhromaonProjectImage,
		tech: ["SCSS", "CSS", "HTML", "JavaScript"],
		about: "A responsive travel website built from a Figma design. The site includes travel destination content, navigation, a search feature and responsive sections.",
		learned:
			"Converting a Figma design into real code using HTML, CSS, SCSS and responsive layout techniques. I also practiced working with mobile-friendly design.",
		role: "I was responsible for building the full website from the design, including the structure, styling, responsiveness and basic JavaScript functionality.",
		challenges:
			"I worked on matching the Figma design while keeping the page responsive down to smaller screen sizes. Since the assignment had a 12-hour time limit, I also had to balance accuracy and responsiveness, while completing all sections within the deadline.",
		githubRepo: "https://github.com/nathalie-jane/frontend-lesson-14-test-skills.git",
	},
];

export default projects;
