import { useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import {
  ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Check, Code2,
  Github, Globe2, Layers3, Linkedin, Mail, Menu, Terminal, X
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
    slug: 'interactive-systems', number: '04', title: 'Interactive systems',
    category: 'Unity · Simulation',
    summary: 'Interactive game prototypes and simulations, from gameplay systems to conveyor logic.',
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
    <div className="project-card-top"><span className="project-number">{project.number} / 05</span><span className="arrow-circle"><ArrowUpRight size={18}/></span></div>
    <div className={`project-art art-${project.slug}`}>
      {project.slug === 'jobpilot' ? <div className="mini-window"><div className="window-bar"><i/><i/><i/><span>jobpilot / dashboard</span></div><div className="window-body"><div className="mini-sidebar"><b/><i/><i/><i/></div><div className="mini-main"><div className="mini-heading">Your next move.</div><div className="mini-stats"><b/><b/><b/></div><div className="mini-list"><i/><i/><i/></div></div></div></div>
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
    <section className="statement-section"><div className="statement-inner"><Eyebrow>How I work</Eyebrow><p>Good software is more than a clever idea. It should be <span>understandable, useful,</span> and built to evolve.</p><Link to="/about" className="text-link">More about my approach <ArrowRight size={16}/></Link></div><div className="statement-decoration">“</div></section>
    <section className="section-shell capabilities-section"><div className="section-heading"><div><Eyebrow>Across the stack</Eyebrow><h2>Tools I work with<span className="heading-period">.</span></h2></div><p className="section-intro">I choose tools around the problem — from data pipelines and APIs to visual, interactive applications.</p></div>
      <div className="capabilities-grid"><div className="capability"><span className="cap-icon"><Code2/></span><h3>Software engineering</h3><p>Python, C#, TypeScript, APIs and application architecture.</p></div><div className="capability"><span className="cap-icon"><Layers3/></span><h3>AI & data</h3><p>LLM-powered workflows, computer vision, SQL and data systems.</p></div><div className="capability"><span className="cap-icon"><Globe2/></span><h3>Interactive systems</h3><p>Unity, real-time interaction, simulation and 3D workflows.</p></div><div className="capability"><span className="cap-icon"><Terminal/></span><h3>Infrastructure</h3><p>Linux, Docker, cloud deployments and self-hosted services.</p></div></div>
    </section>
    <section className="contact-band"><div><Eyebrow>Have something in mind?</Eyebrow><h2>Let’s make it <span className="serif-accent">work.</span></h2><p>Open to software roles, collaborations and interesting technical projects.</p></div><Link to="/contact" className="button button-light">Start a conversation <ArrowUpRight size={17}/></Link></section>
  </Layout>
}

function Projects() {
  return <Layout><section className="page-hero section-shell"><Eyebrow>Projects & experiments</Eyebrow><h1>A collection of things<br/>I’ve <span className="serif-accent">made real.</span></h1><p>From AI-assisted workflows to computer vision and interactive systems — a selection of projects, prototypes and things I’ve learned by building.</p><div className="page-count">05 PROJECTS <span>·</span> SELECTED WORK</div></section><section className="section-shell project-listing"><div className="projects-grid">{projects.map(p => <ProjectCard key={p.slug} project={p}/>)}</div></section></Layout>
}

const detailContent: Record<string, { eyebrow: string; title: string; subtitle: string; overview: string; challenge: string; approach: string; learnings: string; repo?: string; stack: string[] }> = {
  jobpilot: {
    eyebrow: 'AI · Developer tooling', title: 'JobPilot', subtitle: 'A personal assistant for a more deliberate job search.',
    overview: 'JobPilot is a personal AI-assisted job-search and application workflow. It is designed to bring job discovery, candidate-profile parsing, fit analysis and application preparation into one place.',
    challenge: 'A job search involves repetitive context switching: collecting listings, deciding which roles fit, tailoring application materials and tracking what has already been done.',
    approach: 'The current backend is built around FastAPI and PostgreSQL. A CLI handles job discovery, while Gemini-powered analysis supports job-fit assessment and tailored application material. Docker Compose brings the backend, database and n8n workflow tooling together.',
    learnings: 'The project explores how AI can support a real workflow without making the system opaque. A key engineering concern is keeping credentials on the server side and separating the public-facing interface from privileged API access.',
    repo: 'https://github.com/AndreiLAB/jobpilot',
    stack: ['Python 3.13', 'FastAPI', 'PostgreSQL', 'Pydantic', 'Google Gemini', 'Docker Compose', 'n8n', 'Bun / TypeScript'],
  },
  'veo-digital-twin': {
    eyebrow: 'Computer vision · Hackathon prototype', title: 'VEO Digital Twin', subtitle: 'Finding a camera viewpoint inside a 3D scan using a 2D image.',
    overview: 'A visual-localization pipeline designed for ASTM E57 digital-twin scans. Given a query image, the system aims to identify likely scan viewpoints and estimate camera position and viewing direction.',
    challenge: 'Large 3D scans can contain many viewpoints. Matching a regular 2D image to the right position in the scan requires useful visual representations and a way to narrow down candidates.',
    approach: 'The prototype combines Python tooling, DINOv2 image embeddings, a SQLite-backed data layer and spatial aggregation. The pipeline includes E57 processing and candidate ranking, with direction calibration and evaluation utilities.',
    learnings: 'The work involved integrating 3D scan processing with image-embedding search and making the pipeline practical for a hackathon setting. It remains a prototype; accuracy and performance should be reported only after repeatable evaluation.',
    repo: 'https://github.com/AndreiLAB/junction-hackathon-veo-digital-twin',
    stack: ['Python', 'PyTorch', 'DINOv2', 'pye57', 'SQLite', 'NumPy', 'SciPy', 'scikit-learn'],
  },
  sola: {
    eyebrow: 'Mixed reality · Assistant', title: 'Sola', subtitle: 'An assistant concept for headset-based interaction.',
    overview: 'Sola is a mixed-reality assistant project intended for headset experiences. It explores how an assistant can fit into an immersive, spatial computing context.',
    challenge: 'Interaction in a headset has different constraints from a conventional desktop interface: attention, input methods and the surrounding environment all matter.',
    approach: 'The project sits at the intersection of Unity development, C# application logic and mixed-reality interaction. Specific implementation details and demo media will be added after the repository and current project state are reviewed.',
    learnings: 'This project connects interactive application development with the design challenges of hands-free or spatial interfaces.',
    repo: 'https://github.com/AndreiLAB/Sola',
    stack: ['Unity', 'C#', 'Mixed Reality', '3D interaction'],
  },
  'interactive-systems': {
    eyebrow: 'Unity · Simulation', title: 'Interactive systems', subtitle: 'Game prototypes, visual logic and simulations.',
    overview: 'A collection of Unity projects covering interactive game mechanics and simulation-style systems, including game prototypes and a conveyor-system project.',
    challenge: 'Interactive projects need more than a visual result: the underlying behaviour should be predictable, maintainable and easy to test while iterating on the experience.',
    approach: 'The work uses Unity and C# for behaviour and interaction, with Blender supporting 3D assets and visual workflows where relevant. Individual projects will be split into their own case studies once their repositories and media are selected.',
    learnings: 'Prototyping has been a way to practise systems thinking, debugging and the relationship between code, assets and user experience.',
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
}

function ProjectDetail() {
  const slug = useLocation().pathname.split('/').pop() ?? ''
  const p = projects.find(x => x.slug === slug)
  const d = detailContent[slug]
  if (!p || !d) return <NotFound />
  return <Layout><section className={`detail-hero section-shell ${p.accent}`}><Link to="/projects" className="back-link"><ArrowLeft size={15}/> All projects</Link><Eyebrow>{d.eyebrow}</Eyebrow><h1>{d.title}<span className="heading-period">.</span></h1><p className="detail-subtitle">{d.subtitle}</p><div className={`detail-art art-${p.slug}`}><div className="detail-art-label">PROJECT / {p.number}</div>{p.slug === 'jobpilot' ? <div className="detail-dashboard"><div className="dash-side"><span>jp.</span><i/><i/><i/><i/></div><div className="dash-content"><div className="dash-top"><span>Good morning, Andrei.</span><small>YOUR JOB SEARCH</small></div><div className="dash-cards"><div><small>Applications</small><b>Track progress</b><span>One clear overview</span></div><div><small>Job fit</small><b>AI-assisted</b><span>Context before applying</span></div><div><small>Materials</small><b>Tailored</b><span>CV & cover letters</span></div></div><div className="dash-row"><span>Workflow overview</span><i/><i/><i/></div></div></div> : <div className="detail-art-placeholder"><span>{p.title}</span><small>Project visual / media to be added</small></div>}</div></section>
    <section className="detail-content section-shell"><aside className="detail-sidebar"><div className="side-block"><span className="side-label">STATUS</span><p>{p.status}</p></div><div className="side-block"><span className="side-label">TECH STACK</span><div className="stack-list">{d.stack.map(t => <span key={t}>{t}</span>)}</div></div>{d.repo && <a className="button button-outline repo-button" href={d.repo} target="_blank" rel="noreferrer"><Github size={16}/> View repository <ArrowUpRight size={15}/></a>}</aside><div className="detail-prose"><article><span className="article-index">01 / OVERVIEW</span><h2>What it is</h2><p>{d.overview}</p></article><article><span className="article-index">02 / THE PROBLEM</span><h2>The challenge</h2><p>{d.challenge}</p></article><article><span className="article-index">03 / APPROACH</span><h2>How it works</h2><p>{d.approach}</p></article><article><span className="article-index">04 / REFLECTION</span><h2>What I learned</h2><p>{d.learnings}</p></article><div className="case-note"><Check size={17}/><p><b>Honest by design.</b> This case study describes the known project scope. Metrics, screenshots and implementation claims will be added only after they are verified against the code and project files.</p></div><Link to="/contact" className="text-link">Discuss this project <ArrowRight size={16}/></Link></div></section><section className="next-project section-shell"><span>KEEP EXPLORING</span><Link to="/projects">More selected work <ArrowRight size={17}/></Link></section></Layout>
}

function About() {
  return <Layout><section className="page-hero section-shell"><Eyebrow>A little about me</Eyebrow><h1>Curious by default.<br/><span className="serif-accent">Practical by design.</span></h1><p>I’m a Finland-based developer with a background in industrial ICT and a current focus on AI, data engineering and software that connects to the real world.</p></section>
    <section className="about-body section-shell"><div className="about-main"><span className="article-index">01 / BACKGROUND</span><h2>From interactive worlds to intelligent systems.</h2><p>My work has moved between Unity and C# projects, IoT data collection, backend development and AI-assisted tooling. What connects these areas is an interest in how separate pieces — software, data, devices and people — can work together as one useful system.</p><p>I enjoy learning by building: starting with a concrete problem, testing a practical approach, and improving the result as I understand the constraints.</p><span className="article-index">02 / CURRENT FOCUS</span><h2>What I’m exploring now</h2><p>My current academic direction is AI and data engineering. I’m especially interested in developer tools, applied machine learning, data systems and products where AI has a clear job to do rather than being added for its own sake.</p></div><aside className="about-aside"><div className="aside-card"><span className="aside-label">BASED IN</span><b>Finland</b><span className="aside-label">EDUCATION</span><b>Industrial ICT — Bachelor’s</b><b>AI & Data Engineering — Master’s studies</b><span className="aside-label">INTERESTS</span><div className="tag-row"><span>Applied AI</span><span>Data systems</span><span>Unity</span><span>IoT</span><span>Developer tools</span></div></div><div className="aside-card availability-card"><i className="status-dot"/> Open to opportunities<p>Software roles, internships and thoughtful collaborations.</p><Link to="/contact" className="text-link">Get in touch <ArrowRight size={14}/></Link></div></aside></section>
  </Layout>
}

function CV() {
  return <Layout><section className="page-hero section-shell cv-hero"><Eyebrow>Curriculum vitae</Eyebrow><h1>Experience, skills<br/>& <span className="serif-accent">education.</span></h1><p>A concise overview of my background in software development, interactive systems and AI/data engineering.</p><button className="button button-dark" onClick={() => window.print()}>Print / save as PDF <ArrowUpRight size={16}/></button><small className="cv-print-note">Use your browser’s print dialog and choose “Save as PDF”.</small></section>
    <section className="cv-body section-shell"><div className="cv-section"><span className="article-index">01 / PROFILE</span><div><h2>Software developer</h2><p>Developer with a background in Industrial ICT and ongoing Master’s studies in AI and Data Engineering. Experience spans Python, C#, Unity, data pipelines, backend tooling and technical prototypes.</p></div></div>
      <div className="cv-section"><span className="article-index">02 / SKILLS</span><div className="cv-skill-groups"><div><h3>Programming</h3><p>Python · C# · SQL · TypeScript / JavaScript</p></div><div><h3>AI & data</h3><p>PyTorch · DINOv2 · PostgreSQL · InfluxDB · SQLite</p></div><div><h3>Applications</h3><p>Unity · FastAPI · Node.js · React · REST APIs</p></div><div><h3>Infrastructure</h3><p>Linux · Docker · Git · Azure · AWS · Proxmox</p></div><div><h3>Creative / 3D</h3><p>Blender · 3D modelling · interactive simulations</p></div></div></div>
      <div className="cv-section"><span className="article-index">03 / SELECTED PROJECTS</span><div className="cv-timeline">{projects.slice(0,4).map(p => <div className="timeline-item" key={p.slug}><div><h3>{p.title}</h3><span>{p.category}</span></div><p>{p.summary}</p></div>)}</div></div>
      <div className="cv-section"><span className="article-index">04 / EDUCATION</span><div className="cv-timeline"><div className="timeline-item"><div><h3>Master’s studies — AI & Data Engineering</h3><span>University of Vaasa · Finland</span></div><p>Current studies focused on AI, data and software systems.</p></div><div className="timeline-item"><div><h3>Bachelor’s — Industrial ICT</h3><span>LAB University of Applied Sciences · Finland</span></div><p>Applied technology studies spanning software, IoT, automation and industrial systems.</p></div></div></div>
      <div className="cv-section"><span className="article-index">05 / EXPERIENCE</span><div><p className="verification-note">The current draft intentionally omits dates and detailed employment claims until the exact CV and experience timeline are verified. Add the confirmed roles, employers, dates and outcomes before treating this page as a final CV.</p><Link to="/contact" className="text-link">Contact me <ArrowRight size={16}/></Link></div></div>
    </section></Layout>
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'REPLACE_WITH_YOUR_EMAIL'
  async function copyEmail() {
    try { await navigator.clipboard.writeText(email); setCopied(true); setTimeout(() => setCopied(false), 1800) }
    catch { window.location.href = `mailto:${email}` }
  }
  return <Layout><section className="contact-page section-shell"><Eyebrow>Contact</Eyebrow><h1>Have a good problem?<br/><span className="serif-accent">Let’s talk.</span></h1><p>I’m interested in software opportunities, collaborations and projects where thoughtful engineering can make a difference.</p><button className="email-card" onClick={copyEmail}><span className="email-icon"><Mail/></span><span><small>EMAIL</small><b>{email === 'REPLACE_WITH_YOUR_EMAIL' ? 'Add your email address' : email}</b></span><span className="copy-label">{copied ? 'Copied!' : 'Copy'} {copied ? <Check size={15}/> : <ArrowUpRight size={15}/>}</span></button><div className="contact-socials"><a href="https://www.linkedin.com/in/andrei-ziber/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={14}/></a><a href="https://github.com/AndreiLAB" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={14}/></a></div><p className="contact-small">Based in Finland · English and Russian</p></section></Layout>
}

function NotFound() {
  return <Layout><section className="page-hero section-shell"><Eyebrow>404 · Not found</Eyebrow><h1>This page took<br/><span className="serif-accent">a wrong turn.</span></h1><Link to="/projects" className="button button-dark">Back to projects <ArrowRight size={16}/></Link></section></Layout>
}

export default function App() {
  return <Routes><Route path="/" element={<Home/>}/><Route path="/projects" element={<Projects/>}/><Route path="/projects/:slug" element={<ProjectDetail/>}/><Route path="/about" element={<About/>}/><Route path="/cv" element={<CV/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes>
}
