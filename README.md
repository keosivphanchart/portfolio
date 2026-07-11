# My Portfolio

A personal portfolio built with plain HTML, CSS, and JavaScript — no build tools, no dependencies. Dark/light theme, animated hero, and fully data-driven content.

## Structure

```
Portfolio/
├── index.html          # Page structure (hero, stats, services, projects, skills, experience, testimonials, contact)
├── css/
│   └── style.css       # All styles — :root variables control the dark theme, [data-theme="light"] the light theme
├── js/
│   └── main.js         # ★ ALL your content lives here as simple lists — edit this to update the site
├── assets/
│   ├── images/         # profile.jpg goes here (hero portrait), plus screenshots
│   └── resume/         # Put resume.pdf here for the download button
└── README.md
```

## How to edit

Everything content-related is a list at the top of `js/main.js`:

| List | Controls |
|---|---|
| `roles` | The typewriter titles in the hero |
| `services` | "What I Do" cards (pick an `icon` name from the ICONS map) |
| `projects` | Project cards with tags + demo/code links |
| `skills` | Skill progress bars (`level` is 0–100) |
| `experience` | Timeline entries (jobs & education, newest first) |
| `testimonials` | Quotes in the slider |
| `stats` | The animated counters under the hero |

Also:
1. **Name, bio, email, socials** → edit `index.html` (search for "Your Name" and "yourusername").
2. **Photo** → drop it at `assets/images/profile.jpg` (initials show until it exists).
3. **Colors** → edit the CSS variables at the top of `css/style.css`.
4. **Resume** → drop your PDF at `assets/resume/resume.pdf`.

## Features

- Light/dark theme toggle (remembered between visits)
- Typewriter hero, scroll-reveal animations, animated counters & skill bars
- Testimonials auto-slider with dots
- Scroll progress bar, active-nav highlighting, back-to-top button
- Fully responsive with mobile menu; respects reduced-motion preferences

## Run locally

Just open `index.html` in a browser — no server needed.

## Deploy free on GitHub Pages

1. Create a repo on GitHub (e.g. `yourusername.github.io`).
2. Push this folder to it.
3. Repo Settings → Pages → deploy from the `main` branch.
