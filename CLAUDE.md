# CLAUDE.md — Richard Yun Personal Website

## Who Is This For
Richard Yun — M.Eng candidate in Computer Science at MIT (expected May 2026), B.S. in CS from MIT (May 2025). ML researcher and full-stack engineer. This is his personal portfolio website.

## Contact & Links
- Email: ryun@mit.edu
- Phone: (714)-773-2855
- LinkedIn: https://linkedin.com/in/richard-yun-7ry
- GitHub: https://github.com/richardyun03

## Design Direction
**Aesthetic**: Dark, editorial-minimalist with a technical edge. Think: a research paper meets a design portfolio. Monochrome base (near-black backgrounds, off-white text) with a single sharp accent color (electric blue or amber). Typography-forward — use a distinctive serif or mono display font for headings, clean sans-serif for body. Generous whitespace. Subtle grain texture on background. Smooth scroll-triggered fade-ins. No generic AI slop — no purple gradients, no Inter font, no rounded-corner card grids.

**Tone**: Confident, understated, technically serious. Let the work speak. Not flashy — precise.

**Layout**: Single-page scrolling site with defined sections. Asymmetric hero. Projects as full-width case-study blocks (not a card grid). Staggered reveal animations on scroll.

## Site Sections

### 1. Hero
- Name: **Richard Yun**
- One-liner: M.Eng in Computer Science at MIT
- Subtext: Machine Learning · Computer Vision · Full-Stack Engineering
- Links to email, LinkedIn, GitHub as minimal icon links
- Subtle animated element (e.g., a slowly morphing mesh or particle field) — keep tasteful

### 2. About
Short paragraph (2-3 sentences max):
> I'm an M.Eng student at MIT researching multi-agent reinforcement learning and world planning. I build things at the intersection of machine learning, computer vision, and full-stack engineering — from JEPA world models to city-scale traffic analytics. Previously at C3 AI, MIT LIDS, MIT Media Lab, and The Aerospace Corporation.

### 3. Experience
Display as a timeline or stacked list (NOT cards). Each entry:

**C3 AI** — Forward Deployed Engineer Intern (Jun–Aug 2025)
- Built full-stack traffic analytics and collision data visualization with React/TypeScript/Redux for Seattle DOT
- Designed PostgreSQL data pipeline processing 10,000+ historical records with sub-second query response
- Trained XGBoost model for identifying severity factors across 7,000+ intersections, supporting Seattle's Vision Zero plan
- Link: https://c3.ai/customers/seattle-department-of-transportation-advances-vision-zero-with-ai-driven-safety-insights/

**MIT Lab for Information and Decision Systems (LIDS)** — ML Research Intern (Sep 2024–May 2025)
- Rendered 3D Neural Radiance Field (NeRF) terrain from low-aerial footage using Python and Docker
- Implemented DINO and CLIP feature lifting for +2 dB average PSNR on novel ground views
- Improved gradient visualization and reconstructions for route-planning and traversability analysis

**MIT Media Lab** — ML Research Intern (Feb–Aug 2024)
- Engineered region-based CNN models using TensorFlow for object segmentation in radar depth images
- Translated robot arm frames via ROS for camera/radar calibration, achieving 10% increase in mask accuracy
- Designed Segment Anything prompting for 1.5x increase in average F-score and IOU metrics

**The Aerospace Corporation** — Software Engineer Intern (May–Aug 2023)
- Built full-stack web dashboard (HTML/JS/CSS) to visualize space architectures for systems engineering
- Developed Python backend to parse mission launch calendars for spacelift telemetry integration
- Prototyped SIFT and OpticalFlow CV algorithms for satellite pose estimation (100+ increase in keypoint detections)

**MIT Auto-ID Lab** — Software Engineer Intern (May–Aug 2022)
- Created Python API to parse traffic intersection metadata from OpenStreetMaps and construct blind zones
- Ran CARLA simulations for collective perception sensing data in I2V communications

### 4. Projects
Each project as a full-width block with description, tech stack, and links.

**Multi-Agent VLM World Planning** (M.Eng Thesis)
- Replaces per-step LLM calls with a lightweight JEPA world model trained on VLM vision embeddings for k-step lookahead planning entirely in latent space
- Trains in two phases: (1) JEPA dynamics via cosine loss with EMA target encoder, (2) policy/value/success heads
- At test time, simulates k steps ahead for each candidate action in ~0.1ms per step, scores with value head, executes best action — no LLM invoked during planning
- Supports Gemma3, Qwen2.5-VL, GPT-4o models; tested in AI2-THOR environments
- Tech: Python, PyTorch, vLLM, AI2-THOR, Docker
- GitHub: https://github.com/richardyun03/multi-agent-vlm-pub

**Retrieval-Augmented Streaming LLM** (NLP Project)
- Enhanced StreamingLLM framework by integrating RAG to retain evicted token information
- Designed external memory system using vector database to store embeddings of evicted tokens for dynamic retrieval and long-context coherence
- Tech: Python, PyTorch, Hugging Face

**Evaluating LLM Reasoning Through Controlled Prompting** (NLP Project)
- Investigated reasoning capabilities of LLMs by designing and analyzing controlled prompt perturbations
- Tech: Python, Hugging Face Transformers

**Water Polo Game Tracking** (Computer Vision)
- Trained RCNN model achieving 80% precision on player and ball bounding box predictions for real-time tracking
- Tech: Python, PyTorch

### 5. Skills
Display as grouped inline tags (NOT a boring bullet list).

**Languages & Frameworks**: Python, PyTorch, TensorFlow, NumPy, React, TypeScript, JavaScript, C
**Infrastructure**: AWS, Linux, Docker, vLLM, ROS2, Git
**Domains**: Machine Learning, Computer Vision, NLP, Reinforcement Learning, Full-Stack Development

### 6. Education
**Massachusetts Institute of Technology, School of Engineering**
- M.Eng in Computer Science (Expected May 2026)
  - Thesis: Multi-Agent Reinforcement Learning and World Planning
- B.S. in Computer Science (May 2025)
  - Coursework: Software Construction, Design & Analysis of Algorithms, Machine Learning, Computer Vision, NLP, Efficient Deep Learning, Computer Systems Engineering, Computation Structures, Linear Algebra

### 7. Footer
Minimal. Name, email, LinkedIn, GitHub. "Built with ☕ at MIT" or similar.

## Technical Requirements
- **Framework**: Single-file React (.jsx) or HTML — whatever produces the best result as a single artifact
- **Responsive**: Must look great on desktop and mobile
- **Fonts**: Use Google Fonts — pick something distinctive (e.g., a serif like Playfair Display or DM Serif for headings, plus a clean body font like DM Sans or Sora). Do NOT use Inter, Roboto, or Arial.
- **Animations**: Scroll-triggered fade/slide-in for sections. Subtle hover states on links and project blocks. CSS transitions preferred for HTML; Intersection Observer for scroll triggers.
- **Performance**: Lightweight. No heavy libraries. Inline CSS.
- **Colors**: Dark theme. Near-black base (#0a0a0a or similar), off-white text (#e8e8e8), one accent color for links/highlights.
- **Background**: Subtle noise/grain texture via CSS, or a faint grid pattern. Not plain flat black.

## Content Notes
- The C3 AI case study link is a real published page — link to it from the C3 AI experience entry
- The GitHub repo for multi-agent-vlm-pub is public — link to it from the thesis project
- Keep all copy concise. No filler. Every word earns its place.
- No headshot/photo needed unless provided later
