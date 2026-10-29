import { useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import {
  ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Check, Code2,
  Github, Globe2, Layers3, Linkedin, Mail, Menu, MessageCircle, Send, Terminal, X
} from 'lucide-react'

type Project = {
  slug: string
  number: string
  title: string
  category: string
  summary: string
  stack: string[]
  accent: string
  status: string
}

const projects: Project[] = [
  {
    slug: 'jobpilot', number: '01', title: 'JobPilot', category: 'AI · Developer tooling',
    summary: 'A personal assistant for job discovery, fit analysis and application preparation.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Gemini', 'Docker'],
    accent: 'violet', status: 'In development',
  },
  {
    slug: 'veo-digital-twin', number: '02', title: 'VEO Digital Twin', category: 'Computer vision · Hackathon',
    summary: 'A visual-localization pipeline that connects a 2D query image to a viewpoint in a 3D scan.',
    stack: ['Python', 'PyTorch', 'DINOv2', 'E57', 'SQLite'],
    accent: 'blue', status: 'Hackathon prototype',
  },
  {
    slug: 'sola', number: '03', title: 'Sola', category: 'Mixed reality · Assistant',
    summary: 'An MRML assistant concept designed for headset-based interaction.',
    stack: ['Unity', 'C#', 'Mixed Reality'],
    accent: 'green', status: 'Project',
  },
  {
    slug: 'twincat-automation', number: '04', title: 'TwinCAT Automation & Conveyor Digital Twin',
    category: 'Industrial automation · Digital twin',
    summary: 'A virtual vacuum-production conveyor developed with Unity 3D and SolidWorks as an interactive analogue of Factory I/O.',
    stack: ['Unity', 'C#', 'Blender'],
    accent: 'orange', status: 'Selected work',
  },
  {
    slug: 'iot-data-pipeline', number: '05', title: 'IoT data pipeline',
    category: 'IoT · Data engineering',
    summary: 'A temperature and mood data-collection project backed by a remote database.',
    stack: ['Python', 'InfluxDB', 'Linux', 'DigitalOcean'],
    accent: 'teal', status: 'Project',
  },
  {
    slug: 'advanced-parking-system', number: '06', title: 'Advanced Parking System',
    category: 'Embedded · IoT prototype',
    summary: 'A parking-system prototype using a Raspberry Pi Pico W, ultrasonic sensing, and a Pico Explorer board.',
    stack: ['Raspberry Pi Pico W', 'MicroPython', 'Ultrasonic sensors', 'IoT'],
    accent: 'blue', status: 'Prototype',
  },
  {
    slug: 'junction-2025-admin-ai-game', number: '07', title: 'Admin AI Game',
    category: 'Unity · Junction 2025',
    summary: 'A Unity game project developed around the Junction 2025 hackathon; the public repository contains a Unity project.',
    stack: ['Unity 6', 'C#', 'Game development'],
    accent: 'orange', status: 'Hackathon project',
  },
  {
    slug: 'homelab', number: '08', title: 'Self-hosted homelab',
    category: 'Infrastructure · Personal systems',
    summary: 'A small always-on Proxmox environment for self-hosted apps, development tools, game hosting, and AI experimentation.',
    stack: ['Proxmox VE', 'Linux', 'Docker', 'LXC', 'Tailscale'],
    accent: 'teal', status: 'Ongoing personal infrastructure',
  },
]

function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const close = () => setOpen(false)
  return <header className="site-header">
    <div className="nav-wrap">
      <Link to="/" className="wordmark" onClick={close} aria-label="Andrei Ziber home"><span className="mark">az</span><span>Andrei Ziber</span></Link>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        <NavLink to="/projects" onClick={close}>Projects</NavLink>
        <NavLink to="/about" onClick={close}>About</NavLink>
        <NavLink to="/events" onClick={close}>Events</NavLink>
        <NavLink to="/cv" onClick={close}>CV</NavLink>
        <a href="https://github.com/AndreiLAB" target="_blank" rel="noreferrer" onClick={close}>GitHub <ArrowUpRight size={14}/></a>
        <Link to="/contact" className="nav-contact" onClick={close}>Get in touch <ArrowUpRight size={15}/></Link>
      </nav>
    </div>
    {location.pathname !== '/' && <div className="nav-progress" />}
  </header>
}

function Footer() {
  return <footer className="footer">
    <div><span className="footer-mark">az</span><span>Built with care in Finland.</span></div>
    <div className="footer-links"><a href="https://github.com/AndreiLAB" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13}/></a><a href="https://www.linkedin.com/in/andrei-ziber/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13}/></a><Link to="/contact">Contact <ArrowUpRight size={13}/></Link></div>
    <span className="copyright">© {new Date().getFullYear()} Andrei Ziber</span>
  </footer>
}

function Layout({ children }: { children: React.ReactNode }) {
  return <><Header /><main>{children}</main><Footer /></>
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow"><span className="eyebrow-dot" />{children}</div>
}

function ProjectCard({ project }: { project: Project }) {
  return <Link className={`project-card ${project.accent}`} to={`/projects/${project.slug}`}>
    <div className="project-card-top"><span className="project-number">{project.number} / 08</span><span className="arrow-circle"><ArrowUpRight size={18}/></span></div>
    <div className={`project-art art-${project.slug}`}>
      {project.slug === 'jobpilot' ? <div className="mini-window"><div className="window-bar"><i/><i/><i/><span>jobpilot / dashboard</span></div><div className="window-body"><div className="mini-sidebar"><b/></div><div className="mini-main"><div className="mini-heading">Your next move.</div><div className="mini-status"><b/></div><div className="mini-list"><i/></div></div></div></div>
        : project.slug === 'veo-digital-twin' ? <div className="scan-visual"><div className="scan-grid"/><div className="scan-point p1"/><div className="scan-point p2"/><div className="scan-point p3"/><div className="scan-line"/></div>
        : project.slug === 'sola' ? <div className="orb-visual"><div className="orb orb-one"/><div className="orb orb-two"/><div className="orb-core"/></div>
        : project.slug === 'interactive-systems' ? <div className="blocks-visual"><div className="block b1"/><div className="block b2"/><div className="block b3"/><div className="block b4"/></div>
        : <div className="data-visual"><div className="data-line l1"/><div className="data-line l2"/><div className="data-line l3"/><div className="data-axis"/></div>}
    </div>
    <div className="project-card-body"><div className="project-category">{project.category}</div><h3>{project.title}</h3><p>{project.summary}</p><div className="tag-row">{project.stack.slice(0, 4).map(tag => <span key={tag}>{tag}</span>)}</div></div>
  </Link>
}

function Home() {
  return <Layout>
    <section className="hero section-shell">
      <div className="hero-copy">
        <Eyebrow>Software developer · Finland</Eyebrow>
        <h1>I build useful software<br/>for <span className="serif-accent">real-world problems.</span></h1>
        <p className="hero-lede">I’m Andrei — a developer working across AI-powered tools, data systems and interactive experiences. I like turning messy ideas into practical, well-structured software.</p>
        <div className="hero-actions"><Link className="button button-dark" to="/projects">Explore my work <ArrowRight size={17}/></Link><Link className="text-link" to="/about">A little about me <ArrowDownRight size={16}/></Link></div>
        <div className="hero-meta"><span><i className="status-dot"/> Open to opportunities</span><span>Based in Finland</span></div>
      </div>
      <div className="hero-visual" aria-label="Abstract visual representing software systems">
        <div className="hero-orbit orbit-1"/><div className="hero-orbit orbit-2"/><div className="hero-orbit orbit-3"/>
        <div className="hero-center"><Code2 size={35} strokeWidth={1.3}/><span>IDEAS → SYSTEMS</span></div>
        <div className="floating-chip chip-ai"><span className="chip-icon"><Layers3 size={15}/></span><span><b>AI & data</b><small>Find patterns</small></span></div>
        <div className="floating-chip chip-code"><span className="chip-icon"><Terminal size={15}/></span><span><b>Engineering</b><small>Build to work</small></span></div>
        <div className="visual-caption">Curiosity, then iteration.</div>
      </div>
      <div className="hero-bottom"><span>SELECTED WORK</span><span>2024 — 2026 <ArrowDownRight size={15}/></span></div>
    </section>
    <section className="section-shell projects-section">
      <div className="section-heading"><div><Eyebrow>Things I’ve been building</Eyebrow><h2>Selected projects<span className="heading-period">.</span></h2></div><Link to="/projects" className="text-link">All projects <ArrowRight size={16}/></Link></div>
      <div className="projects-grid">{projects.slice(0, 3).map(p => <ProjectCard key={p.slug} project={p}/>)}</div>
    </section>
    <section className="statement-section"><div className="statement-inner"><Eyebrow>How I work</Eyebrow><p>Good software is more than a clever idea. It should be <span>understandable, useful,</span> and built to evolve.</p><Link to="/about" className="text-link">More about my approach <ArrowRight size={16}/></Link></div><div className="statement-decoration" /></section>
    <section className="section-shell capabilities-section"><div className="section-heading"><div><Eyebrow>Across the stack</Eyebrow><h2>Tools I work with<span className="heading-period">.</span></h2></div><p className="section-intro">I choose tools around the problem — from data pipelines and APIs to visual, interactive applications.</p></div>
      <div className="capabilities-grid"><div className="capability"><span className="cap-icon"><Code2/></span><h3>Software engineering</h3><p>Python, C#, TypeScript, APIs and application architecture.</p></div><div className="capability"><span className="cap-icon"><Layers3/></span><h3>AI & data</h3><p>LLM-powered workflows, computer vision, SQL and data systems.</p></div><div className="capability"><span className="cap-icon"><Globe2/></span><h3>Interactive systems</h3><p>Unity, real-time interaction, simulation and 3D workflows.</p></div><div className="capability"><span className="cap-icon"><Terminal/></span><h3>Infrastructure</h3><p>Linux, Docker, cloud deployments and self-hosted services.</p></div></div>
    </section>
    <section className="section-shell community-section">
      <div className="section-heading"><div><Eyebrow>Beyond the code</Eyebrow><h2>Build, meet, learn<span className="heading-period">.</span></h2></div><Link to="/events" className="text-link">Events & community <ArrowRight size={16}/></Link></div>
      <div className="community-grid">
        <Link to="/events" className="community-card"><span className="community-label">OCT 2026 · PAST</span><h3>Junction X Vaasa</h3><p>Built a VEO digital-twin visual-localization prototype with Team JSC.</p><span className="community-foot">Computer vision <ArrowUpRight size={14}/></span></Link>
        <Link to="/events" className="community-card community-highlight"><span className="community-label">NOV 2026 · UPCOMING</span><h3>Slush</h3><p>Joining the Driver Operations volunteer team for Helsinki's startup event.</p><span className="community-foot">Volunteer · Operations <ArrowUpRight size={14}/></span></Link>
        <Link to="/events" className="community-card"><span className="community-label">NOV 2026 · UPCOMING</span><h3>Junction 2026</h3><p>Returning to the main hackathon to build with a team and meet fellow makers.</p><span className="community-foot">Hackathon <ArrowUpRight size={14}/></span></Link>
      </div>
    </section>
    <section className="contact-band"><div><Eyebrow>Have something in mind?</Eyebrow><h2>Let’s make it <span className="serif-accent">work.</span></h2><p>Open to software roles, collaborations and interesting technical projects.</p></div><Link to="/contact" className="button button-light">Start a conversation <ArrowUpRight size={17}/></Link></section>
  </Layout>
}

function Projects() {
  return <Layout><section className="page-hero section-shell"><Eyebrow>Projects & experiments</Eyebrow><h1>A collection of things<br/>I’ve <span className="serif-accent">made real.</span></h1><p>From AI-assisted workflows to computer vision and interactive systems — a selection of projects, prototypes and things I’ve learned by building.</p><div className="page-count">08 PROJECTS <span>·</span> SELECTED WORK</div></section><section className="section-shell project-listing"><div className="projects-grid">{projects.map(p => <ProjectCard key={p.slug} project={p}/>)}</div></section></Layout>
}

const detailContent: Record<string, { eyebrow: string; title: string; subtitle: string; overview: string; challenge: string; approach: string; learnings: string; repo?: string; stack: string[] }> = {
  jobpilot: {
    eyebrow: 'AI · Developer tooling', title: 'JobPilot', subtitle: 'A personal assistant for a more deliberate job search.',
    overview: 'JobPilot is a personal AI-assisted job-search and application workflow. It is designed to bring job discovery, candidate-profile parsing, fit analysis and application preparation into one place.',
    challenge: 'A job search involves repetitive context switching: collecting listings, deciding which roles fit, tailoring application materials and tracking what has already been done.',
    approach: 'The current backend is built around FastAPI and PostgreSQL. A CLI handles job discovery, while Gemini-powered analysis supports job-fit assessment and tailored application materials. Docker Compose brings the backend, database and n8n workflow tooling together.',
    learnings: 'The project explores how AI can support a real workflow without making the system opaque. A key engineering concern is keeping credentials on the server side and separating the public-facing interface from privileged API access.',
    repo: 'https://github.com/AndreiLAB/jobpilot',
    stack: ['Python 3.13', 'FastAPI', 'PostgreSQL', 'Pydantic', 'Google Gemini', 'Docker Compose', 'n8n', 'Bun / TypeScript'],
  },
  'veo-digital-twin': {
    eyebrow: 'Computer vision · Hackathon prototype', title: 'VEO Digital Twin', subtitle: 'Finding a camera viewpoint inside a 3D scan using a 2D image.',
    overview: 'A visual-localization pipeline designed for ASTM E57 digital-twin scans. Given a query image, the system aims to identify likely scan viewpoints and estimate camera position and viewing direction.',
    challenge: 'Large 3D scans can contain many viewpoints. Matching a regular 2D image to the right position in the scan requires useful visual representations and a way to narrow down candidate matches.',
    approach: 'The prototype combines Python tooling, DINOv2 image embeddings, a SQLite-backed data layer and spatial aggregation. The pipeline includes E57 processing and candidate ranking, with direction calibration and evaluation utilities.',
    learnings: 'The work involved integrating 3D scan processing with image-embedding search and making the pipeline practical for a hackathon setting. It remains a prototype; accuracy and performance should be reported only after repeatable evaluation.',
    repo: 'https://github.com/AndreiLAB/junction-hackathon-veo-digital-twin',
    stack: ['Python', 'PyTorch', 'DINOv2', 'pye57', 'SQLite', 'NumPy', 'SciPy', 'scikit-learn'],
  },
  sola: {
    eyebrow: 'Mixed reality · Assistant', title: 'Sola', subtitle: 'A Gemini-powered AI assistant concept for Meta Quest 3.',
    overview: 'Sola is an AI-powered mixed-reality assistant originally developed as a Bachelor’s thesis and continued as an ongoing project. Built with Unity and C#, it integrates the Gemini API and is designed for Meta Quest 3.',
    challenge: 'Interaction in a headset has different constraints from a conventional desktop interface: attention, input methods and the surrounding environment all matter.',
    approach: 'The project combines Unity, C#, Gemini API integration, and mixed-reality interaction for Meta Quest 3. The concept explores how generative AI can support interaction inside a headset-based environment.',
    learnings: 'This project connects interactive application development with the design challenges of hands-free or spatial interfaces.',
    repo: 'https://github.com/AndreiLAB/Sola',
    stack: ['Unity', 'C#', 'Gemini API', 'Meta Quest 3', 'Mixed Reality'],
  },
  'twincat-automation': {
    eyebrow: 'Industrial automation · Digital twin', title: 'TwinCAT Automation & Conveyor Digital Twin', subtitle: 'A Unity-based virtual model of an automated vacuum-production conveyor.',
    overview: 'During a Student Internship at LAB University of Applied Sciences (June–August 2024), my team developed an automated model of a vacuum-production conveyor. Unity 3D was used to create an interactive virtual analogue of the industry-standard Factory I/O, with 3D assets designed in SolidWorks.',
    challenge: 'Interactive projects need more than a visual result: the underlying behaviour should be predictable, maintainable and easy to test while iterating on the experience.',
    approach: 'The team used Unity 3D to build the conveyor simulation and SolidWorks to create 3D models. The project was developed as an analogue of Factory I/O. I also completed a TwinCAT course during my Bachelor’s studies, which provided relevant background in industrial control and automation.',
    learnings: 'The internship provided practical experience combining 3D modelling, Unity simulation, teamwork, and industrial automation concepts, and helped connect software development with production-system visualisation.',
    stack: ['Unity', 'C#', 'Blender', 'Interactive simulation'],
  },
  'iot-data-pipeline': {
    eyebrow: 'IoT · Data engineering', title: 'IoT data pipeline', subtitle: 'Collecting and storing data from a small connected system.',
    overview: 'A temperature and mood data-collection project using a remote virtual machine and a time-series database.',
    challenge: 'Sensor and user-entered data only becomes useful when it can be collected consistently and stored in a form that can be queried later.',
    approach: 'The project used a DigitalOcean virtual machine and InfluxDB as part of the data pipeline. More detailed architecture, device specifics and screenshots will be added after the original project files are checked.',
    learnings: 'The project provided practical experience connecting a small data-collection application with deployed infrastructure and a database.',
    stack: ['Python', 'InfluxDB 2.7', 'Linux', 'DigitalOcean', 'IoT'],
  },
  'advanced-parking-system': {
    eyebrow: 'Embedded · IoT prototype', title: 'Advanced Parking System', subtitle: 'Exploring sensor-driven parking logic on a microcontroller.',
    overview: 'An embedded parking-system prototype built around a Raspberry Pi Pico W and Pico Explorer board, using ultrasonic sensors to detect nearby objects or parking occupancy.',
    challenge: 'A physical prototype has to connect sensor readings with clear system behaviour while accounting for noisy measurements and hardware constraints.',
    approach: 'The project uses MicroPython on the Pico W with ultrasonic sensing as the input. Detailed detection logic, connectivity behaviour, and performance figures are not stated because they have not been verified.',
    learnings: 'The prototype brings together embedded programming, sensor integration, and the practical boundary between software logic and physical hardware.',
    stack: ['Raspberry Pi Pico W', 'MicroPython', 'Pico Explorer', 'Ultrasonic sensors'],
  },
  'junction-2025-admin-ai-game': {
    eyebrow: 'Unity · Hackathon project', title: 'Admin AI Game', subtitle: 'A Unity game project associated with Junction 2025.',
    overview: 'A collaborative game-development project linked to Junction 2025. The public repository is a Unity project using Unity 6. The repository contents alone do not provide a sufficiently detailed public description to confidently claim specific gameplay mechanics, AI features, or award results.',
    challenge: 'Hackathons require teams to turn an open-ended challenge into a working prototype quickly, dividing implementation work and making decisions under time pressure.',
    approach: 'The public repository provides the project files and Unity scene/assets. This portfolio entry keeps the description at the level verified from the repository and event context; a more detailed gameplay description can be added from your own notes or screenshots.',
    learnings: 'Participating in Junction created an opportunity to practise rapid prototyping and teamwork in a time-boxed hackathon environment.',
    repo: 'https://github.com/Fodjik/AdminAIGame',
    stack: ['Unity 6', 'C#', 'Unity Input System', 'Universal Render Pipeline'],
  },
  homelab: {
    eyebrow: 'Infrastructure · Self-hosting', title: 'Personal homelab', subtitle: 'Building and operating a small self-hosted platform.',
    overview: 'A personal always-on server built around an HP ProDesk 600 G1 SFF (Intel Core i7-4790, 16 GB RAM, SSD and HDD) running Proxmox VE. The aim is to host useful services, learn infrastructure operations, and maintain a practical environment for software experiments.',
    challenge: 'Running multiple services on modest hardware requires balancing reliability, resource use, security, and electricity costs while keeping services separated and maintainable.',
    approach: 'The setup uses Proxmox with lightweight LXC containers. Planned service groups include Docker/Portainer, Homarr, Jellyfin, Vaultwarden and Tailscale; a separate game-hosting environment for Minecraft using the Pelican/Pterodactyl ecosystem; and an AI/tools environment for Python, Bun, LaTeX, Claude Code and Ollama. The exact set of active services can change as the environment evolves.',
    learnings: 'This is hands-on practice in Linux administration, virtualisation, containerisation, networking, remote access, resource budgeting, and managing applications beyond the local development machine. No credentials, private hostnames or network addresses are published.',
    stack: ['Proxmox VE 8', 'LXC', 'Docker', 'Portainer', 'Tailscale', 'Ollama', 'Linux'],
  },
}

function ProjectDetail() {
  const slug = useLocation().pathname.split('/').pop() ?? ''
  const p = projects.find(x => x.slug === slug)
  const d = detailContent[slug]
  if (!p || !d) return <NotFound />
  return <Layout><section className={`detail-hero section-shell ${p.accent}`}><Link to="/projects" className="back-link"><ArrowLeft size={15}/> All projects</Link><Eyebrow>{d.eyebrow}</Eyebrow><h1>{d.title}</h1><p className="detail-subtitle">{d.subtitle}</p></section><section className="detail-content section-shell"><aside className="detail-sidebar"><div className="side-block"><span className="side-label">STATUS</span><p>{p.status}</p></div><div className="side-block"><span className="side-label">TECH STACK</span><div className="stack-list">{d.stack.map(t => <span key={t}>{t}</span>)}</div></div>{d.repo && <a className="button button-outline repo-button" href={d.repo} target="_blank" rel="noreferrer"><Github size={16}/> View repository <ArrowUpRight size={15}/></a>}</aside><div className="detail-pose"><article><span className="article-index">01 / OVERVIEW</span><h2>What it is</h2><p>{d.overview}</p></article><article><span className="article-index">02 / THE PROBLEM</span><h2>The challenge</h2><p>{d.challenge}</p></article><article><span className="article-index">03 / APPROACH</span><h2>How it works</h2><p>{d.approach}</p></article><article><span className="article-index">04 / REFLECTION</span><h2>What I learned</h2><p>{d.learnings}</p></article><div className="case-note"><Check size={16}/><p><b>Honest by design.</b> This case study describes the known project scope. Metrics, screenshots and implementation claims are added only after they are verified against the code and project files.</p></div><Link to="/contact" className="text-link">Discuss this project <ArrowRight size={16}/></Link></div></section><section className="next-project section-shell"><span>KEEP EXPLORING</span><Link to="/projects">More selected work <ArrowRight size={16}/></Link></section></Layout>
}

function About() {
  return <Layout>
    <section className="page-hero section-shell">
      <Eyebrow>A little about me</Eyebrow>
      <h1>Curious by default.<br/><span className="serif-accent">Practical by design.</span></h1>
      <p>I’m a software developer based in Finland. I completed a Bachelor of Engineering in Industrial Information Technology at LAB University of Applied Sciences in 2026 and am pursuing an MSc in Computing Sciences, majoring in Artificial Intelligence and Data Engineering, at the University of Vaasa.</p>
    </section>

    <section className="about-body section-shell" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(300px, 500px)', gap: '36px', alignItems: 'start' }}>
      <div className="about-main" style={{ maxWidth: '780px' }}>
        <span className="article-index">01 / BACKGROUND</span>
        <h2>From interactive worlds to intelligent systems.</h2>
        <p>My work has moved between Unity and C# projects, IoT data collection, backend development and AI-assisted tooling. What connects these areas is an interest in how separate pieces — software, data, devices and people — can work together as one useful system.</p>
        <p>I enjoy learning by building: starting with a concrete problem, testing a practical approach, and improving the result as I understand the constraints.</p>
        <span className="article-index">02 / CURRENT FOCUS</span>
        <h2>What I’m exploring now</h2>
        <p>I’m currently studying AI and data engineering, with interests in applied machine learning, data systems, computer vision, AI assistants, mixed reality, and developer tools. I also bring experience in website development, 3D animation, technical teaching, and Unity instruction.</p>
      </div>

      <div className="about-aside" style={{ width: '100%' }}>
        <div style={{ background: '#dfe4da', border: '1px solid #d6ddd2', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 12px 30px rgba(32, 40, 32, 0.08)' }}>
          <img
            src="https://github.com/AndreiLAB.png"
            alt="Andrei Ziber portrait"
            style={{ display: 'block', width: '100%', height: '540px', objectFit: 'cover', objectPosition: 'center top', background: '#dfe4da' }}
          />
        </div>
      </div>
    </section>

    <section className="section-shell" style={{ paddingTop: '8px' }}>
      <div className="about-main" style={{ maxWidth: '980px' }}>
        <span className="article-index">03 / CULTURE</span>
        <h2>What I care about</h2>
        <p>Good work is not only clever; it should be understandable, useful, and resilient. I value systems that solve a real need and are easy to trust, maintain and improve over time.</p>
      </div>
    </section>
  </Layout>
}

function Events() {
  return <Layout>
    <section className="page-hero section-shell">
      <Eyebrow>Community & industry</Eyebrow>
      <h1>Learn, build,<br/><span className="serif-accent">connect.</span></h1>
      <p>Hackathons and technology events have been a way to test ideas under pressure, learn from peers, and meet people working across software, AI, games, and startups.</p>
      <div className="page-count">PAST PARTICIPATION <span>·</span> UPCOMING EVENTS</div>
    </section>
    <section className="section-shell event-list">
      <article className="event-item"><div className="event-date"><span>14–16 NOV</span><b>2025</b><small>ESPOO, FINLAND</small></div><div className="event-copy"><span className="project-category">HACKATHON · PAST</span><h2>Junction 2025 — Utopia & Dystopia</h2><p>Participated in Junction’s main hackathon at Hype Arena with a team game project. The event brought teams together for a 48-hour building sprint around AI-enabled creative challenges. My associated public project repository is Admin AI Game.</p><div className="event-links"><a href="https://hackjunction.com/hackathons/junction-2025" target="_blank" rel="noreferrer">Event information <ArrowUpRight size={14}/></a><a href="https://github.com/Fodjik/AdminAIGame" target="_blank" rel="noreferrer">Project repository <ArrowUpRight size={14}/></a></div></div></article>
      <article className="event-item"><div className="event-date"><span>3–4 OCT</span><b>2026</b><small>VAASA, FINLAND</small></div><div className="event-copy"><span className="project-category">HACKATHON · TEAM JSC</span><h2>Junction X Vaasa — VEO Digital Twin</h2><p>Worked on a visual-localization prototype for VEO digital-twin scans. The pipeline processes ASTM E57 scan data, creates DINOv2 visual embeddings, searches candidate viewpoints, and aims to estimate camera position and direction from a 2D query image.</p><div className="event-links"><a href="https://hackjunction.com/hackathons/junctionx-vaasa" target="_blank" rel="noreferrer">Event information <ArrowUpRight size={14}/></a><a href="https://github.com/AndreiLAB/junction-hackathon-veo-digital-twin" target="_blank" rel="noreferrer">Code & technical notes <ArrowUpRight size={14}/></a><a href="https://junction-hackathon-veo-digital-twin-12td95tn-jsc14.vercel.app/" target="_blank" rel="noreferrer">Demo <ArrowUpRight size={14}/></a></div></div></article>
      <article className="event-item"><div className="event-date"><span>2025</span><b>UNITE</b><small>UNITY COMMUNITY</small></div><div className="event-copy"><span className="project-category">CONFERENCE · PAST</span><h2>Unite 2025</h2><p>Attended Unite, Unity’s annual conference for game developers and creators, and used the event to network with industry experts and other people in the Unity ecosystem. The conference took place in Barcelona on 18–20 November 2025.</p><div className="event-links"><a href="https://unity.com/events/unite" target="_blank" rel="noreferrer">Official event information <ArrowUpRight size={14}/></a></div></div></article>
      <article className="event-item upcoming-event"><div className="event-date"><span>18–19 NOV</span><b>2026</b><small>HELSINKI, FINLAND</small></div><div className="event-copy"><span className="project-category">VOLUNTEER · DRIVER OPERATIONS</span><h2>Slush 2026</h2><p>Selected for the Slush volunteer team in Driver Operations. The role supports event logistics and attendee/team transportation. The event is scheduled for 18–19 November 2026, with Day 0 activities on 17 November.</p><div className="event-links"><a href="https://slush.org/audience/volunteers" target="_blank" rel="noreferrer">Volunteer programme <ArrowUpRight size={14}/></a><a href="https://slush.org/faq" target="_blank" rel="noreferrer">Event dates & information <ArrowUpRight size={14}/></a></div></div></article>
      <article className="event-item upcoming-event"><div className="event-date"><span>13–15 NOV</span><b>2026</b><small>ESPOO, FINLAND</small></div><div className="event-copy"><span className="project-category">HACKATHON · UPCOMING</span><h2>Junction 2026 — European Tech Renaissance</h2><p>Planning to return to Junction’s main event to build with a team, learn from mentors and partners, and continue exploring applied AI and software prototypes. The 2026 main event is listed for 13–15 November in the Helsinki region.</p><div className="event-links"><a href="https://hackjunction.com/hackathons/junction-2026" target="_blank" rel="noreferrer">Event details & registration <ArrowUpRight size={14}/></a></div></div></article>
    </section>
  </Layout>
}

function CV() {
  return <Layout><section className="page-hero section-shell cv-hero"><Eyebrow>Curriculum vitae</Eyebrow><h1>Experience, skills<br/>& <span className="serif-accent">education.</span></h1><p>AI-focused software engineer and full-stack developer with a background in Industrial Information Technology, practical product development, and current MSc studies in Artificial Intelligence and Data Engineering.</p><a className="button button-dark" href="https://resumecvaz.tilda.ws/" target="_blank" rel="noreferrer">Open my online CV <ArrowUpRight size={16}/></a><button className="button button-outline cv-print-button" onClick={() => window.print()}>Print this page <ArrowUpRight size={16}/></button></section>
    <section className="cv-body section-shell">
      <div className="cv-section"><span className="article-index">01 / PROFILE</span><div><h2>AI-focused software engineer</h2><p>I build practical software across AI application development, API integration, web technologies, interactive systems, and data infrastructure. I’m particularly interested in products where AI solves a clear problem and the result is useful, understandable, and maintainable.</p></div></div>
      <div className="cv-section"><span className="article-index">02 / SKILLS</span><div className="cv-skill-groups"><div><h3>Programming & software</h3><p>Python · C# · SQL · JavaScript / TypeScript · REST APIs · Git</p></div><div><h3>AI & data</h3><p>Generative AI · Gemini API · AI / API integration · PyTorch · DINOv2 · Computer vision · PostgreSQL · InfluxDB · SQLite</p></div><div><h3>Applications & XR</h3><p>Unity · Mixed reality · Meta Quest 3 · FastAPI · Node.js · React</p></div><div><h3>Cloud & DevOps</h3><p>Microsoft Azure · Linux · Docker · Proxmox · DigitalOcean · DevOps</p></div><div><h3>Web & creative</h3><p>WordPress · Elementor · Blender · 3D animation · Interactive simulations</p></div></div></div>
      <div className="cv-section"><span className="article-index">03 / EXPERIENCE</span><div className="cv-timeline">
        <div className="timeline-item"><div><h3>Web Developer · TechGAS-TK</h3><span>Jun 2025 – May 2026</span></div><p>Built and maintained the company website with WordPress and Elementor; improved usability and functionality, and resolved issues supporting reliable day-to-day operation. CV reports a 45% reduction in page load time through website optimisation.</p></div>
        <div className="timeline-item"><div><h3>Python Mentor · LAB University of Applied Sciences</h3><span>Mar 2025</span></div><p>Visited schools with a university team to introduce Python, programming fundamentals, practical applications, and technology career opportunities. CV reports mentoring 200+ students, with 80% progressing into technology-related careers.</p></div>
        <div className="timeline-item"><div><h3>3D Animation Advertiser · TechGAS-TK</h3><span>Feb 2023 – Jun 2023</span></div><p>Created 3D animation assets for advertising and promotional campaigns. CV reports producing 20 animations and increasing annual advertising engagement by 30%.</p></div>
        <div className="timeline-item"><div><h3>Unity Teacher · Freelance</h3><span>Additional work experience</span></div><p>Delivered Unity development lessons to students. CV reports teaching 50 students, with 90% completing their projects.</p></div>
      </div></div>
      <div className="cv-section"><span className="article-index">04 / SELECTED PROJECTS</span><div className="cv-timeline">{projects.map(p => <div className="timeline-item" key={p.slug}><div><h3>{p.title}</h3><span>{p.category}</span></div><p>{p.summary}</p></div>)}</div></div>
      <div className="cv-section"><span className="article-index">05 / EDUCATION</span><div className="cv-timeline"><div className="timeline-item"><div><h3>MSc in Computing Sciences — Artificial Intelligence & Data Engineering</h3><span>University of Vaasa · Expected 2028</span></div><p>Current studies focused on data science, artificial intelligence, machine learning, data analysis, and data-driven decision-making.</p></div><div className="timeline-item"><div><h3>Bachelor of Engineering — Industrial Information Technology</h3><span>LAB University of Applied Sciences · 2026</span></div><p>Coursework included DevOps Engineering, Industrial ICT, IoT Pipelines, Virtualisation, Networks & Security, Automation & Robotics, Unity, C#, and Microsoft Azure.</p></div></div></div>
      <div className="cv-section"><span className="article-index">06 / LINKS</span><div className="contact-socials"><a href="https://github.com/AndreiLAB" target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={14}/></a><a href="https://www.linkedin.com/in/andrei-ziber/" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={14}/></a><Link to="/contact">Contact <ArrowUpRight size={14}/></Link></div></div>
    </section></Layout>
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'andrei.ziber22@gmail.com'
  const phone = '+358408557809'
  async function copyEmail() {
    try { await navigator.clipboard.writeText(email); setCopied(true); setTimeout(() => setCopied(false), 1800) }
    catch { window.location.href = `mailto:${email}` }
  }
  return <Layout><section className="contact-page section-shell"><Eyebrow>Contact</Eyebrow><h1>Have a good problem?<br/><span className="serif-accent">Let’s talk.</span></h1><p>I’m interested in software opportunities, collaborations and projects where thoughtful engineering can make a difference.</p><button className="email-card" onClick={copyEmail}><span className="email-icon"><Mail/></span><span><small>EMAIL</small><b>{email}</b></span><span className="copy-label">{copied ? 'Copied!' : 'Copy'} <ArrowUpRight size={14}/></span></button><div className="contact-methods">
      <a className="contact-method" href={`tel:${phone}`}><span className="email-icon"><Mail/></span><span><small>PHONE</small><b>+358 40 855 7809</b></span><span className="copy-label">Call <ArrowUpRight size={14}/></span></a>
      <a className="contact-method" href="https://wa.me/358408557809" target="_blank" rel="noreferrer"><span className="email-icon"><MessageCircle/></span><span><small>WHATSAPP</small><b>Message me</b></span><span className="copy-label">Open <ArrowUpRight size={14}/></span></a>
      <a className="contact-method" href="https://t.me/+358408557809" target="_blank" rel="noreferrer"><span className="email-icon"><Send/></span><span><small>TELEGRAM</small><b>Message me in Telegram</b></span><span className="copy-label">Open <ArrowUpRight size={14}/></span></a>
    </div>
    <div className="contact-socials"><a href="https://www.linkedin.com/in/andrei-ziber/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={14}/></a><a href="https://github.com/AndreiLAB" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={14}/></a></div><p className="contact-small">Based in Finland · English and Russian · Open to remote and hybrid roles.</p></section></Layout>
}

function NotFound() {
  return <Layout><section className="page-hero section-shell"><Eyebrow>404 · Not found</Eyebrow><h1>This page took<br/><span className="serif-accent">a wrong turn.</span></h1><Link to="/projects" className="button button-dark">Back to projects <ArrowRight size={16}/></Link></section></Layout>
}

export default function App() {
  return <Routes><Route path="/" element={<Home/>}/><Route path="/projects" element={<Projects/>}/><Route path="/projects/:slug" element={<ProjectDetail/>}/><Route path="/about" element={<About/>}/><Route path="/events" element={<Events/>}/><Route path="/cv" element={<CV/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes>
}
