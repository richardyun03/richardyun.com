import { useEffect, useState } from 'react';


export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="page">
      <Header />
      <div className="shell">
        <main>
          <Profile />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Interests />
        </main>
        <Footer />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ */

const NAV_SECTIONS = [
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'interests', label: 'Interests' },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_SECTIONS.map((s) => s.id);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-inner shell">
        <a href="#top" className="header-mark">
          RY
        </a>
        <nav className="header-nav" aria-label="Sections">
          {NAV_SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={active === s.id ? 'active' : ''}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------ */

function Profile() {
  return (
    <section className="profile" id="top">


      <h1 className="profile-name reveal" data-delay="1">
        Richard Yun
      </h1>

      <p className="profile-role reveal" data-delay="2">
        M.Eng in Computer Science at MIT.
      </p>

      <p className="profile-tags reveal" data-delay="2">
        Machine Learning <span className="sep">·</span> Computer Vision{' '}
        <span className="sep">·</span> Full-Stack Engineering
      </p>

      <p className="profile-bio reveal" data-delay="3">
        I'm an M.Eng student at MIT researching <em>multi-agent reinforcement
        learning</em> and <em>world planning</em>. I build things at the
        intersection of machine learning, computer vision, and full-stack
        engineering — from JEPA world models to city-scale traffic analytics.
        Previously at C3 AI, MIT LIDS, MIT Media Lab, and The Aerospace
        Corporation.
      </p>

      <div className="profile-links reveal" data-delay="3">
        <a className="profile-link" href="mailto:ryun@mit.edu">
          Email <span className="arrow">↗</span>
        </a>
        <a
          className="profile-link"
          href="https://linkedin.com/in/richard-yun-7ry"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <span className="arrow">↗</span>
        </a>
        <a
          className="profile-link"
          href="https://github.com/richardyun03"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <span className="arrow">↗</span>
        </a>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ */

function Education() {
  return (
    <section className="section" id="education">
      <div className="row reveal">
        <div className="sec-label label">Education</div>
        <div className="sec-content">
          <article className="entry">
            <h3 className="entry-title">
              Massachusetts Institute of Technology
            </h3>
            <span className="entry-meta">Cambridge, MA</span>
            <p className="entry-sub">School of Engineering</p>
            <ul className="entry-bullets">
              <li>
                M.Eng, Computer Science &nbsp;·&nbsp; expected May 2026 &nbsp;—&nbsp;
                thesis on multi-agent reinforcement learning and world planning.
              </li>
              <li>
                B.S., Computer Science &nbsp;·&nbsp; May 2025 &nbsp;—&nbsp;
                coursework in Software Construction, Design &amp; Analysis of
                Algorithms, Machine Learning, Computer Vision, NLP, Efficient
                Deep Learning, Computer Systems Engineering, Computation
                Structures, and Linear Algebra.
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ */

const experience = [
  {
    org: 'C3 AI',
    role: 'Software Engineer Intern',
    period: 'Jun — Aug 2025',
    bullets: [
      'Built full-stack traffic analytics and collision data visualization with React/TypeScript/Redux for the Seattle Department of Transportation.',
      'Designed a PostgreSQL data pipeline processing 10,000+ historical records with sub-second query response.',
      "Trained an XGBoost model identifying severity factors across 7,000+ intersections, supporting Seattle's Vision Zero plan.",
    ],
    link: {
      label: 'Integration to C3 Suite and full-time deployment!',
      href: 'https://c3.ai/customers/seattle-department-of-transportation-advances-vision-zero-with-ai-driven-safety-insights/',
    },
  },
  {
    org: 'MIT LIDS',
    role: 'ML Research Intern · Lab for Information and Decision Systems',
    period: 'Sep 2024 — May 2025',
    bullets: [
      'Rendered 3D Neural Radiance Field (NeRF) terrain from low-aerial footage using Python and Docker.',
      'Implemented DINO and CLIP feature lifting for +2 dB average PSNR on novel ground views.',
      'Improved gradient visualization and reconstructions for route-planning and traversability analysis.',
    ],
  },
  {
    org: 'MIT Media Lab',
    role: 'ML Research Intern',
    period: 'Feb — Aug 2024',
    bullets: [
      'Engineered region-based CNN models in TensorFlow for object segmentation in radar depth images.',
      'Translated robot arm frames via ROS for camera/radar calibration, achieving a 10% increase in mask accuracy.',
      'Designed Segment Anything prompting for 1.5× increase in average F-score and IOU metrics.',
    ],
  },
  {
    org: 'The Aerospace Corporation',
    role: 'Software Engineer Intern',
    period: 'May — Aug 2023',
    bullets: [
      'Built a full-stack web dashboard (HTML/JS/CSS) to visualize space architectures for systems engineering.',
      'Developed a Python backend to parse mission launch calendars for spacelift telemetry integration.',
      'Prototyped SIFT and OpticalFlow CV algorithms for satellite pose estimation — 100× increase in keypoint detections.',
    ],
  },
  {
    org: 'MIT Auto-ID Lab',
    role: 'Software Engineer Intern',
    period: 'May — Aug 2022',
    bullets: [
      'Created a Python API to parse traffic intersection metadata from OpenStreetMaps and construct blind zones.',
      'Ran CARLA simulations for collective perception sensing data in I2V communications.',
    ],
  },
];

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="row reveal">
        <div className="sec-label label">Experience</div>
        <div className="sec-content">
          {experience.map((e, i) => {
            const [primaryRole, ...rest] = e.role.split('·').map((s) => s.trim());
            const qualifier = rest.join(' · ');
            return (
              <article key={i} className="entry">
                <h3 className="entry-title">{e.org}</h3>
                <span className="entry-meta">{e.period}</span>
                <p className="entry-sub">
                  <em>{primaryRole}</em>
                  {qualifier && <span className="entry-sub-qual"> &nbsp;·&nbsp; {qualifier}</span>}
                </p>
                <ul className="entry-bullets">
                {e.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
                {e.link && (
                  <a
                    className="entry-link"
                    href={e.link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {e.link.label} <span>↗</span>
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ */

const skills = [
  {
    key: 'Languages & Frameworks',
    words: [
      'Python',
      'PyTorch',
      'TensorFlow',
      'NumPy',
      'React',
      'TypeScript',
      'JavaScript',
      'C',
    ],
  },
  {
    key: 'Infrastructure',
    words: ['AWS', 'Linux', 'Docker', 'vLLM', 'ROS2', 'Git'],
  },
  {
    key: 'Domains',
    words: [
      'Machine Learning',
      'Computer Vision',
      'NLP',
      'Reinforcement Learning',
      'Full-Stack Development',
    ],
  },
];

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="row reveal">
        <div className="sec-label label">Skills</div>
        <div className="sec-content">
          <div className="skills-list">
            {skills.map((g) => (
              <div key={g.key} className="skills-row">
                <div className="skills-key">{g.key}</div>
                <div className="skills-words">
                  {g.words.map((w, j) => (
                    <span key={w}>
                      {w}
                      {j < g.words.length - 1 && <span className="sep">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ */

const projects = [
  {
    title: (
      <>
        Multi-Agent VLM World Planning
      </>
    ),
    meta: 'M.Eng Thesis',
    desc: 'Replaces per-step LLM calls with a lightweight JEPA world model trained on VLM vision embeddings for k-step lookahead planning entirely in latent space. Trains in two phases — JEPA dynamics via cosine loss with EMA target encoder, then policy/value/success heads. At test time, simulates k steps ahead per candidate action in ~0.1ms, scores with a value head, and executes the best action with no LLM invoked. Supports Gemma3, Qwen2.5-VL, and GPT-4o; tested in AI2-THOR.',
    stack: ['Python', 'PyTorch', 'vLLM', 'AI2-THOR', 'Docker'],
    link: {
      label: 'github.com/richardyun03/multi-agent-vlm-pub',
      href: 'https://github.com/richardyun03/multi-agent-vlm-pub',
    },
  },
  {
    title: (
      <>
        Retrieval-Augmented Streaming LLM
      </>
    ),
    meta: 'NLP Project',
    desc: 'Extended the StreamingLLM framework with retrieval-augmented generation to retain evicted token information. Designed an external memory system using a vector database to store embeddings of evicted tokens for dynamic retrieval and long-context coherence.',
    stack: ['Python', 'PyTorch', 'Hugging Face'],
    
  },
  {
    title: (
      <>
        Evaluating LLM Reasoning through Controlled Prompting
      </>
    ),
    meta: 'NLP Project',
    desc: 'Investigated the reasoning capabilities of LLMs by designing and analyzing controlled prompt perturbations across reasoning benchmarks.',
    stack: ['Python', 'Hugging Face Transformers'],
    link: {
      label: 'github.com/gchatz22/reasoning-perturbations-study',
      href: 'https://github.com/gchatz22/reasoning-perturbations-study',
    },
  },
  {
    title: (
      <>
        Golf Lab <em>— Swing Analysis</em>
      </>
    ),
    meta: 'Computer Vision',
    desc: 'Computer vision pipeline for analyzing golf swings — pose estimation on swing video, automatic key-frame detection across swing phases (address, takeaway, top, impact, follow-through), and joint-angle metrics for swing-plane and tempo evaluation.',
    stack: ['Python', 'PyTorch', 'OpenCV'],
    link: {
      label: 'github.com/richardyun03/golf-lab',
      href: 'https://github.com/richardyun03/golf-lab',
    },
  },
];

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="row reveal">
        <div className="sec-label label">Projects</div>
        <div className="sec-content">
          {projects.map((p, i) => (
            <article key={i} className="entry">
              <h3 className="entry-title">{p.title}</h3>
              <span className="entry-meta">{p.meta}</span>
              <div className="entry-body">
                <p>{p.desc}</p>
                <p>
                  <span className="label" style={{ marginRight: 10 }}>Stack</span>
                  {p.stack.join('  ·  ')}
                </p>
              </div>
              {p.link && (
                <a
                  className="entry-link"
                  href={p.link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {p.link.label} <span>↗</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ */

function Interests() {
  return (
    <section className="section" id="interests">
      <div className="row reveal">
        <div className="sec-label label">Interests</div>
        <div className="sec-content">
          <p className="interests">
            world models <span className="sep">/</span>{' '}
            vision-language reasoning <span className="sep">/</span> embodied AI{' '}
            <span className="sep">/</span> sports analytics &amp; computer
            vision <span className="sep">/</span> water polo{' '}
            <span className="sep">/</span> golf{' '}
            <span className="sep">/</span> los angeles lakers
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ */

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-row">

        <div className="footer-links">
          <a href="mailto:ryun@mit.edu">ryun@mit.edu</a>
          <a
            href="https://linkedin.com/in/richard-yun-7ry"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/richardyun03"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
