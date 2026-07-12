# My Portfolio

A personal portfolio built with **React + Vite**. Dark/light theme, animated hero, and fully data-driven content.

## Structure

```
Portfolio/
├── index.html                  # Vite entry — meta tags, fonts, pre-paint theme script
├── public/
│   └── assets/
│       ├── images/             # profile.png (hero portrait), og-card.png
│       └── resume/             # CV PDF for the download button
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Page layout — the section order lives here
    ├── styles/style.css        # All styles — :root vars = dark theme, [data-theme="light"] = light
    ├── data/                   # ★ ALL your content lives here — edit these to update the site
    │   ├── site.js             #   name, email, socials, resume path, nav links
    │   ├── roles.js            #   typewriter titles in the hero
    │   ├── services.js         #   "What I Do" cards
    │   ├── projects.js         #   project cards with tags + demo/code links
    │   ├── skills.js           #   skill progress bars (level is 0–100)
    │   ├── experience.js       #   timeline entries (newest first)
    │   ├── techStack.js        #   logos on the draggable 3D icon globe
    │   └── stats.js            #   animated counters under the hero
    ├── hooks/
    │   ├── useTheme.js         #   light/dark toggle (saved to localStorage)
    │   ├── useTypewriter.js    #   hero typewriter effect
    │   ├── useReveal.js        #   scroll-reveal via IntersectionObserver
    │   ├── useActiveSection.js #   highlights the nav link of the visible section
    │   └── useReducedMotion.js #   respects prefers-reduced-motion
    └── components/
        ├── Icon.jsx            #   shared SVG icon set
        ├── Section.jsx         #   kicker + title + reveal wrapper
        ├── layout/             #   Navbar, Footer, ScrollProgress, BackToTop
        └── sections/           #   Hero, Stats, Services, Projects, Skills,
                                #   TechCloud, Quote, Experience, Contact
```

## How to edit

Everything content-related is a small list in `src/data/`:

| File | Controls |
|---|---|
| `site.js` | Name, email, socials, resume path, nav links |
| `roles.js` | The typewriter titles in the hero |
| `services.js` | "What I Do" cards (pick an `icon` name from `components/Icon.jsx`) |
| `projects.js` | Project cards with tags + demo/code links |
| `skills.js` | Skill progress bars (`level` is 0–100) |
| `experience.js` | Timeline entries (jobs & education, newest first) |
| `techStack.js` | Logos on the 3D icon globe (Devicon/Simple Icons slugs) |
| `stats.js` | The animated counters under the hero |

Also:

1. **Photo** → drop it at `public/assets/images/profile.png` (initials show until it exists).
2. **Colors** → edit the CSS variables at the top of `src/styles/style.css`.
3. **Resume** → drop your PDF at `public/assets/resume/` and update `resume` in `src/data/site.js`.
4. **Bio text** → edit `src/components/sections/Hero.jsx`.

## Features

- Light/dark theme toggle (remembered between visits, applied before paint — no flash)
- Typewriter hero, scroll-reveal animations, animated counters & skill bars
- Draggable 3D tech-stack icon globe with momentum
- Scroll progress bar, active-nav highlighting, back-to-top button
- Fully responsive with mobile menu; respects reduced-motion preferences

## Run locally

```bash
npm install
npm run dev       # dev server with hot reload
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Deploy on Vercel

Push to GitHub and import the repo on Vercel — it auto-detects Vite
(build command `npm run build`, output directory `dist`). No config needed.
