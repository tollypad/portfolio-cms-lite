# Portfolio CMS-Lite

A clean portfolio site where everything is managed through a single content file. No database setup, no backend complexity—just edit one file and you're done.

**Live Demo:** https://portfolio-cms-lite.vercel.app  
**GitHub:** https://github.com/tollypad/portfolio-cms-lite

## What's Different Here

This isn't your typical portfolio template. Instead of scattering content across dozens of component files, everything lives in one place. Update your projects, bio, or contact info in `data/content.js` and the whole site updates automatically.

**The approach:**
- Edit `data/content.js` → Save → Refresh → Done
- No database migrations or API calls
- Changes are tracked in Git like any other code
- Deploy anywhere that runs Next.js

## What You Get

- Tab-based navigation (no endless scrolling)
- Smooth page transitions between sections
- Projects showcase with links to code and demos
- About section with skills list
- Contact page with email and social links
- Mobile-friendly from the start

### Project Structure

```
portfolio-cms-lite/
├── data/
│   └── content.js         ← Edit this to update all content
├── components/
│   ├── Header.js          ← Navigation tabs
│   ├── Hero.js            ← Landing section
│   ├── About.js           ← Bio and skills
│   ├── Projects.js        ← Project cards
│   └── Contact.js         ← Contact info
├── app/
│   ├── page.js            ← Main page logic
│   └── globals.css        ← Styles (edit colors here)
└── README.md              ← You're here
```

## Getting Started

Install dependencies:
```bash
npm install
```

Start the dev server:
```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001)

Build for production:
```bash
npm run build
npm start
```

## Updating Your Content

Open `data/content.js` and edit the values. Everything is labeled with comments explaining what each field does.

Quick changes:
- **Your name/title:** Edit `hero.name` and `hero.title`
- **Add a project:** Copy an existing project object and add it to `projects.items`
- **Change social links:** Edit the URLs in `contact.social`
- **Update skills:** Add/remove items from `about.skills`

That's it. Save the file and refresh your browser.

## How It Works

The navigation uses tabs instead of scrolling. Click a tab, see that section. Simple.

Behind the scenes:
1. `data/content.js` holds all your text and links
2. Components import that data and display it
3. The main page switches between sections based on which tab is active

Example from the Projects component:
```javascript
import { content } from '@/data/content';

export default function Projects() {
  return (
    <section>
      <h2>{content.projects.headline}</h2>
      {content.projects.items.map((project) => (
        <ProjectCard project={project} />
      ))}
    </section>
  );
}
```

## Customizing Colors

Want to change the color scheme? Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#0ea5e9',  // Main blue - change this
    600: '#0284c7',  // Hover state
  },
}
```

For the background color, edit `app/globals.css`:
```css
body {
  @apply bg-[#fafaf9];  /* Change this hex code */
}
```

## Tech Stack

- Next.js 14 (React framework)
- Tailwind CSS (styling)
- Framer Motion (animations)
- Lucide React (icons)

## Deploying

Push to GitHub, then deploy on Vercel or Netlify. Both have free tiers and auto-deploy when you push changes.

Vercel is the easiest—import your repo and it handles everything.

## License

Do whatever you want with this. No attribution needed.
