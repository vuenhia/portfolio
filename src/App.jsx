import "./App.css";

const profile = {
	name: "Nhia Vue",
	role: "Software Developer",
	location: "Eau Claire, WI",
	tagline: "I build full-stack tools with React, TypeScript, and Node",
	github: "https://github.com/vuenhia",
	email: "vuenhia12@gmail.com",
	resumeUrl: "/NhiaVue_Resume.pdf",
	linkedin: "https://www.linkedin.com/in/nhia-vue-3aa541273/",
};

const about = [
	"I completed an AAS in IT Software Development at Chippewa Valley Technical College (3.83 GPA, President's List) and am continuing my education toward a bachelor's degree in Computer Science - Software Engineering.",
	"Besides full-stack applications, I'm continuing to strengthen my Java and data structures and algorithms fundamentals.",
];
const skillGroups = [
	{
		label: "Languages",
		items: ["TypeScript", "JavaScript", "Java", "SQL"],
	},
	{
		label: "Frontend",
		items: ["React", "HTML", "CSS"],
	},
	{
		label: "Backend",
		items: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
	},
	{
		label: "Tools",
		items: ["Git", "GitHub"],
	},
];

const projects = [
	{
		name: "Expense Tracker",
		period: "2024",
		description:
			"A budgeting app for tracking income and expenses against the 50/30/20 rule.",
		stack: ["React"],
		href: "https://expense-tracker-h7qe.vercel.app/",
		github: "https://github.com/vuenhia/ExpenseTracker",
	},
	{
		name: "Kanban Board",
		period: "2025",
		description:
			"A full-stack task board with drag-and-drop columns, backend CRUD routes, and a tested database connection.",
		stack: ["React", "Express", "Node.js", "MongoDB"],
		href: "https://kanban-alpha-orpin.vercel.app/",
		github: "https://github.com/vuenhia/kanban",
	},
	{
		name: "API Sentinel",
		period: "2026 \u2014 in progress",
		description:
			"A full-stack API monitoring and reliability tool. Tracks endpoint uptime and surfaces failures before they become incidents.",
		stack: ["React", "TypeScript", "Express", "PostgreSQL"],
		href: "",
		github: "https://github.com/vuenhia/sentinel",
	},
];

function Hero() {
	return (
		<header className="hero">
			<p className="prompt">
				<span className="prompt-user">nhia@dev</span>
				<span className="prompt-sep">:~$</span> whoami
			</p>
			<h1>{profile.name}</h1>
			<p className="role">
				{profile.role} <span className="dot">•</span> {profile.location}
			</p>
			<p className="tagline">{profile.tagline}</p>
			<div className="cta-row">
				<a className="btn btn-primary" href={profile.resumeUrl}>
					View resume
				</a>
				<a
					className="btn"
					href={profile.github}
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
				<a className="btn" href={profile.linkedin}>
					LinkedIn
				</a>
			</div>
		</header>
	);
}

function About() {
	return (
		<section id="about" className="section">
			<h2>About</h2>
			{about.map((p) => (
				<p className="body-text" key={p.slice(0, 16)}>
					{p}
				</p>
			))}
		</section>
	);
}

function Skills() {
	return (
		<section id="skills" className="section">
			<h2>Skills</h2>
			<div className="skill-groups">
				{skillGroups.map((group) => (
					<div className="skill-group" key={group.label}>
						<p className="skill-label">{group.label}</p>
						<div className="pill-row">
							{group.items.map((item) => (
								<span className="pill" key={item}>
									{item}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

function Projects() {
	return (
		<section id="projects" className="section">
			<h2>Selected projects</h2>
			<div className="project-list">
				{projects.map((project) => (
					<article className="project" key={project.name}>
						<div className="project-head">
							<h3>{project.name}</h3>
							<span className="project-period">{project.period}</span>
						</div>
						<p className="body-text">{project.description}</p>
						<div className="pill-row">
							{project.stack.map((tech) => (
								<span className="pill pill-quiet" key={tech}>
									{tech}
								</span>
							))}
						</div>
						{project.href ? (
							<a
								className="project-link"
								href={project.href}
								target="_blank"
								rel="noreferrer"
							>
								View live project
							</a>
						) : (
							<a
								className="project-link"
								href={project.github}
								target="_blank"
								rel="noreferrer"
							>
								View GitHub
							</a>
						)}
					</article>
				))}
			</div>
		</section>
	);
}

function Footer() {
	return (
		<footer className="footer" id="contact">
			<h2>Get in touch</h2>
			<p className="body-text">
				Currently seeking entry-level software engineering opportunities where I
				can build, learn, and contribute to real-world products.
			</p>
			<div className="cta-row">
				<a className="btn btn-primary" href={`mailto:${profile.email}`}>
					Email me
				</a>
			</div>
		</footer>
	);
}

export default function App() {
	return (
		<div className="page">
			<Hero />
			<main>
				<About />
				<Skills />
				<Projects />
			</main>
			<Footer />
		</div>
	);
}
