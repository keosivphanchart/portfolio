/* =========================================================
   Portfolio data — this is the only file you need to edit
   to update content. No HTML changes required.
   ========================================================= */

/* Roles cycled by the typewriter in the hero */
const roles = [
  "DevOps Engineer",
  "Software Engineer",
  "DevSecOps Enthusiast",
  "Go Developer",
];

/* Services — icon must be a name from the ICONS map below */
const services = [
  {
    icon: "server",
    title: "DevOps & Cloud",
    description: "CI/CD pipelines, containerization, and cloud infrastructure that ship reliably.",
  },
  {
    icon: "shield",
    title: "DevSecOps",
    description: "Security baked into the pipeline — scanning, hardening, and secure delivery.",
  },
  {
    icon: "code",
    title: "Software Engineering",
    description: "Backend services and tooling, with a soft spot for Go.",
  },
];

const projects = [
  {
    title: "Centralized EM Platform",
    description: "Enterprise monitoring hub that centralizes Prometheus, Zabbix, ELK, Grafana, and webhook alerting into a single pane of glass. Go backend with PostgreSQL + TimescaleDB for time-series data, React frontend.",
    tags: ["Go", "React", "PostgreSQL", "TimescaleDB"],
    demo: "",
    code: "",
  },
  {
    title: "Prometheus Config Web UI",
    description: "Web interface for adding devices and scrape configs to the Prometheus layer — no manual config files or CLI needed, so the team can onboard targets in seconds.",
    tags: ["Go", "React", "Prometheus"],
    demo: "",
    code: "",
  },
  {
    title: "AI Smart Home (IoT)",
    description: "Smart home system using AI detection and hand-sign gesture recognition to control home equipment hands-free.",
    tags: ["IoT", "AI", "Computer Vision"],
    demo: "",
    code: "",
  },
  {
    title: "School Management System",
    description: "Management system covering students, classes, and records for a school workflow.",
    tags: ["Web App", "Database"],
    demo: "",
    code: "",
  },
];

/* Skills with proficiency level (0–100) — rendered as progress bars */
const skills = [
  { name: "Monitoring (Prometheus, Grafana, Zabbix, ELK)", level: 90 },
  { name: "Docker & Kubernetes", level: 85 },
  { name: "CI/CD (GitHub Actions / GitLab CI)", level: 85 },
  { name: "Linux & Shell", level: 80 },
  { name: "Go", level: 75 },
  { name: "DevSecOps (scanning, hardening)", level: 70 },
  { name: "Terraform / IaC", level: 65 },
];

/* Experience & education — newest first */
const experience = [
  {
    period: "Aug 2025 — Present",
    title: "DevOps Engineer",
    org: "Hattha Bank · Phnom Penh",
    description: "Built a centralized EM (enterprise monitoring) platform unifying Prometheus, Zabbix, ELK, Grafana, and webhook alerting into one system. Developed a web UI for adding devices and configs to the Prometheus layer without manual config files, and implemented DevSecOps practices across the pipeline.",
  },
  {
    period: "Jul 2024 — Aug 2025",
    title: "Freelance Software Engineer",
    org: "Self-employed",
    description: "Built and shipped projects for clients — describe the kind of work: web apps, automation, deployments.",
  },
  {
    period: "Graduated 2025",
    title: "Bachelor's Degree, Computer Science",
    org: "Royal University of Phnom Penh (RUPP)",
    description: "Standout projects: an IoT smart home with AI detection and hand-sign gesture control of home equipment, a school management system, a cloned Arduino PCB board, and various smaller builds.",
  },
];

/* Tech stack logos — scrolls in an infinite marquee loop.
   Icons come from the free Devicon / Simple Icons CDNs; to add one,
   find its slug at devicon.dev or simpleicons.org. */
const DEVICON = (slug, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`;

const techStack = [
  { name: "Docker", img: DEVICON("docker") },
  { name: "Kubernetes", img: DEVICON("kubernetes", "plain") },
  { name: "Go", img: DEVICON("go") },
  { name: "Prometheus", img: DEVICON("prometheus") },
  { name: "Grafana", img: DEVICON("grafana") },
  { name: "Zabbix", img: "https://www.vectorlogo.zone/logos/zabbix/zabbix-icon.svg" },
  { name: "Elasticsearch", img: DEVICON("elasticsearch") },
  { name: "PostgreSQL", img: DEVICON("postgresql") },
  { name: "React", img: DEVICON("react") },
  { name: "Linux", img: DEVICON("linux") },
  { name: "Git", img: DEVICON("git") },
  { name: "Terraform", img: DEVICON("terraform") },
  { name: "Python", img: DEVICON("python") },
  // Kafka's brand logo is black, so it comes from Simple Icons tinted
  // gray to stay visible on both the dark and light themes.
  { name: "Kafka", img: "https://cdn.simpleicons.org/apachekafka/8b8d99" },
  { name: "Redis", img: DEVICON("redis") },
  { name: "Nexus", img: "https://cdn.simpleicons.org/sonatype" },
  { name: "RHEL", img: DEVICON("redhat") },
];

/* Stat counters — numbers animate up when scrolled into view */
const stats = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Projects Completed" },
  { value: 8, suffix: "+", label: "Happy Clients" },
  { value: 12, suffix: "", label: "Technologies" },
];

/* =========================================================
   SVG icon set (stroke = currentColor)
   ========================================================= */
const svg = (inner) =>
  `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;

const ICONS = {
  "folder": svg('<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>'),
  "external-link": svg('<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>'),
  "github": svg('<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>'),
  "code": svg('<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>'),
  "pen-tool": svg('<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><circle cx="11" cy="11" r="2"/>'),
  "smartphone": svg('<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>'),
  "layers": svg('<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>'),
  "server": svg('<rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>'),
  "shield": svg('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'),
  "sun": svg('<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>'),
  "moon": svg('<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'),
};

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ===== Theme toggle ===== */
const themeToggle = document.getElementById("themeToggle");
const setToggleIcon = () => {
  const light = document.documentElement.getAttribute("data-theme") === "light";
  themeToggle.innerHTML = light ? ICONS["moon"] : ICONS["sun"];
};
themeToggle.addEventListener("click", () => {
  const light = document.documentElement.getAttribute("data-theme") === "light";
  const next = light ? "" : "light";
  if (next) {
    document.documentElement.setAttribute("data-theme", next);
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  localStorage.setItem("theme", next);
  setToggleIcon();
});
setToggleIcon();

/* ===== Typewriter ===== */
const typeTarget = document.getElementById("typewriter");
if (typeTarget && !reducedMotion && roles.length > 1) {
  let roleIdx = 0;
  let charIdx = roles[0].length;
  let deleting = true;

  const step = () => {
    const word = roles[roleIdx];
    if (deleting) {
      charIdx--;
      typeTarget.textContent = word.slice(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
      }
      setTimeout(step, 45);
    } else {
      charIdx++;
      typeTarget.textContent = roles[roleIdx].slice(0, charIdx);
      if (charIdx === roles[roleIdx].length) {
        deleting = true;
        setTimeout(step, 1800);
        return;
      }
      setTimeout(step, 85);
    }
  };
  setTimeout(step, 1800);
} else if (typeTarget) {
  typeTarget.textContent = roles[0];
}

/* ===== Render services ===== */
const servicesGrid = document.getElementById("servicesGrid");
servicesGrid.innerHTML = services
  .map(
    (s, i) => `
    <article class="service-card reveal-item" style="--stagger: ${i * 0.12}s">
      <span class="service-icon">${ICONS[s.icon] || ICONS["code"]}</span>
      <h3>${s.title}</h3>
      <p>${s.description}</p>
    </article>`
  )
  .join("");

/* ===== Render projects ===== */
const projectsGrid = document.getElementById("projectsGrid");
projectsGrid.innerHTML = projects
  .map(
    (p, i) => `
    <article class="project-card reveal-item" style="--stagger: ${i * 0.12}s">
      <div class="project-top">
        <span class="project-folder">${ICONS["folder"]}</span>
        <span class="project-top-links">
          ${p.code ? `<a href="${p.code}" target="_blank" rel="noopener" aria-label="Source code">${ICONS["github"]}</a>` : ""}
          ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener" aria-label="Live demo">${ICONS["external-link"]}</a>` : ""}
        </span>
      </div>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="project-tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
    </article>`
  )
  .join("");

/* ===== Render skills ===== */
const skillsList = document.getElementById("skillsList");
skillsList.innerHTML = skills
  .map(
    (s, i) => `
    <div class="skill reveal-item" style="--stagger: ${i * 0.08}s">
      <div class="skill-head">
        <span>${s.name}</span>
        <span class="skill-pct">${s.level}%</span>
      </div>
      <div class="skill-bar"><span class="skill-bar-fill" data-level="${s.level}"></span></div>
    </div>`
  )
  .join("");

/* ===== Render experience timeline ===== */
const timeline = document.getElementById("timeline");
timeline.innerHTML = experience
  .map(
    (e, i) => `
    <div class="timeline-item reveal-item" style="--stagger: ${i * 0.15}s">
      <span class="timeline-period">${e.period}</span>
      <h3>${e.title}</h3>
      <p class="timeline-org">${e.org}</p>
      <p>${e.description}</p>
    </div>`
  )
  .join("");

/* ===== Tech stack 3D sphere =====
   Icons are spread evenly on a sphere (fibonacci distribution). The
   sphere does NOT auto-spin — it follows the mouse: horizontal
   position rotates it, vertical position tilts it, with smooth easing.
   Depth = scale + opacity. */
const techCloud = document.getElementById("techCloud");
techCloud.innerHTML = techStack
  .map(
    (t) => `
    <div class="cloud-icon" title="${t.name}">
      <img src="${t.img}" alt="${t.name}" loading="lazy" />
    </div>`
  )
  .join("");

if (reducedMotion) {
  techCloud.classList.add("cloud-static");
} else {
  const icons = [...techCloud.querySelectorAll(".cloud-icon")];
  const N = icons.length;
  const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

  // evenly distributed points on a unit sphere; the half-step offset
  // keeps any icon off the exact poles (a pole point wouldn't move
  // when the sphere rotates)
  const points = icons.map((_, i) => {
    const y = 1 - ((i + 0.5) / N) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = GOLDEN_ANGLE * i;
    return { x: Math.cos(theta) * r, y, z: Math.sin(theta) * r };
  });

  let angle = 0.6;   // rotation around the vertical axis
  let tilt = 0.3;    // tilt of that axis
  let velA = 0;      // spin momentum, carried after release
  let velT = 0;
  let dragging = false;
  let lastX = 0, lastY = 0;

  // grab-and-spin: the sphere follows your drag like a physical globe
  techCloud.addEventListener("pointerdown", (e) => {
    dragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
    velA = velT = 0;
    techCloud.classList.add("grabbing");
    techCloud.setPointerCapture(e.pointerId);
  });
  techCloud.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    lastX = e.clientX;
    lastY = e.clientY;
    // drag right → front face moves right; drag down → front face moves down
    velA = dx * 0.005;
    velT = -dy * 0.004;
    angle += velA;
    tilt += velT;
  });
  const release = () => {
    dragging = false;
    techCloud.classList.remove("grabbing");
  };
  techCloud.addEventListener("pointerup", release);
  techCloud.addEventListener("pointercancel", release);

  const frame = () => {
    if (!dragging) {
      // momentum after release, easing out to a stop
      angle += velA;
      tilt += velT;
      velA *= 0.95;
      velT *= 0.95;
    }
    // keep the tilt in a range where the layout still reads clean
    tilt = Math.max(-0.9, Math.min(0.9, tilt));

    const rect = techCloud.getBoundingClientRect();
    // larger radius = more gap between tiles on the sphere surface
    const R = Math.min(rect.width, rect.height) / 2 - 34;
    const cosA = Math.cos(angle), sinA = Math.sin(angle);
    const cosT = Math.cos(tilt), sinT = Math.sin(tilt);

    points.forEach((p, i) => {
      // rotate around Y (spin), then X (tilt)
      const x1 = p.x * cosA + p.z * sinA;
      const z1 = -p.x * sinA + p.z * cosA;
      const y1 = p.y * cosT - z1 * sinT;
      const z2 = p.y * sinT + z1 * cosT;

      const depth = (z2 + 1) / 2; // 0 (back) .. 1 (front)
      // capped scale keeps front tiles from crowding their neighbors
      const scale = 0.45 + depth * 0.55;
      icons[i].style.transform =
        `translate(-50%, -50%) translate(${x1 * R}px, ${y1 * R}px) scale(${scale})`;
      icons[i].style.opacity = (0.25 + depth * 0.75).toFixed(2);
      icons[i].style.zIndex = Math.round(depth * 100);
    });

    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

/* ===== Render stats ===== */
const statsRow = document.getElementById("statsRow");
statsRow.innerHTML = stats
  .map(
    (s) => `
    <div class="stat">
      <div class="stat-num"><span class="count" data-target="${s.value}">0</span><span>${s.suffix}</span></div>
      <div class="stat-label">${s.label}</div>
    </div>`
  )
  .join("");

/* ===== Scroll-reveal + triggered animations ===== */
const animateCounters = (root) => {
  root.querySelectorAll(".count").forEach((el) => {
    const target = +el.dataset.target;
    if (reducedMotion) {
      el.textContent = target;
      return;
    }
    const duration = 1200;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
};

const animateSkillBars = (root) => {
  root.querySelectorAll(".skill-bar-fill").forEach((el) => {
    el.style.width = el.dataset.level + "%";
  });
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      animateCounters(entry.target);
      animateSkillBars(entry.target);
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* ===== Active nav link highlighting ===== */
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll(".nav-links a").forEach((a) => {
        a.classList.toggle("active", a.dataset.section === entry.target.id);
      });
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
document.querySelectorAll("section[id]").forEach((s) => sectionObserver.observe(s));

/* ===== Scroll progress bar + back-to-top ===== */
const progressBar = document.getElementById("scrollProgress");
const backToTop = document.getElementById("backToTop");

const onScroll = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const y = window.scrollY;
  progressBar.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
  backToTop.classList.toggle("show", y > 600);
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ===== Mobile menu toggle ===== */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") navLinks.classList.remove("open");
});

/* ===== Footer year ===== */
document.getElementById("year").textContent = new Date().getFullYear();
