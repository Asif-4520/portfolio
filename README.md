<div align="center">

# ASIF HOSSAIN

### Full-stack engineer · performance-minded builder · open-web enthusiast

<a href="https://asifhossain.site/">
  <img src="https://img.shields.io/badge/🌐_LIVE_PORTFOLIO-asifhossain.site-00ff41?style=for-the-badge&labelColor=0a0c10" alt="Visit the live portfolio" />
</a>
<a href="mailto:asifhossain@proton.me">
  <img src="https://img.shields.io/badge/CONTACT-EMAIL-0a0c10?style=for-the-badge&logo=protonmail&logoColor=00ff41&labelColor=0a0c10" alt="Email Asif Hossain" />
</a>

<br />
<br />


</div>

<div align="center">



</div>

## ◉ The signal

This is the source code for my personal portfolio: a dark, responsive interface that presents my work, skills, journey, and contact channel without unnecessary noise.

The experience is built to feel alive through subtle motion, responsive interactions, smooth scrolling, and a compact visual language — while keeping the initial page fast and the content easy to maintain.

## ✦ What is inside

| Area | Focus |
| --- | --- |
| **Hero & About** | Identity, profile, capabilities, and a direct introduction |
| **Projects** | Selected work with screenshots, technologies, and live links |
| **Skills** | Categorized tools with reusable visual data |
| **Journey** | Timeline of learning, engineering, and performance work |
| **Contact** | Server-side form delivery through the native Next.js API route |

## ⚡ Content engine

Portfolio copy is separated from presentation in [`src/data/`](./src/data/), so the interface stays component-driven while the brand remains easy to evolve.

| File | Owns |
| --- | --- |
| [`site.js`](./src/data/site.js) | Identity, branding, links, avatar, resume, contact cards |
| [`content.js`](./src/data/content.js) | Hero, About, contact, footer, and SEO copy |
| [`projects.js`](./src/data/projects.js) | Project cards, media, links, and technologies |
| [`skills.js`](./src/data/skills.js) | Skills, categories, icons, and colors |
| [`timeline.js`](./src/data/timeline.js) | Journey milestones and engineering story |
| [`index.js`](./src/data/index.js) | Shared data entry point |

## ✉ Contact signal

`/api/contact` is a dynamic server-side route. It sends messages through any configured destination:

- Resend email
- Discord webhook
- Telegram bot
- Generic webhook

Copy [.env.example](./.env.example) to `.env.local` and add only the destinations you use. Secrets remain server-side and must never be committed.

## ▸ Run locally

```bash
npm install
npm run dev
```

## ▸ Ship it

```bash
npm run build
npm run start
```

The homepage is statically rendered where possible, while `/api/contact` stays dynamic for fresh submissions. Local fonts use immutable long-term caching, and the project must run on a Next.js server-capable deployment.

<div align="center">

### Designed, built, and maintained by **Asif Hossain**

<a href="https://asifhossain.site/">Open the live portfolio →</a>

</div>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a0c10,100:00ff41&height=90&section=footer" alt="" width="100%" />