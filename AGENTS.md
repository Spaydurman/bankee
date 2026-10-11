# Bankee project context

## Base

- This is a React JavaScript project built with Vite.
- Use Tailwind CSS 4 through `@tailwindcss/vite`; import it in `src/index.css`.
- Use Motion from `motion/react` for UI animation.
- The UI/UX Pro Max skill is installed at `.agents/skills/ui-ux-pro-max/`. For tasks that design or change an interface, read its `SKILL.md` and use its relevant guidance. Its search scripts require Python 3.
- This is a proposed marketing site for Ban Kee Trading, Inc., a Philippine distributor of toys, baby products, and collectibles. The current page is a redesign draft, not a deployed site.
- Company facts come from `https://bankee.com.ph/`. The two curated social highlights come from public posts on `https://www.facebook.com/bankeetoys.ph` seen in October 2026; they are static, not a live feed.
- Site imagery in `public/images/` was sourced from those pages. Keep brand marks in their original proportions and record new third-party assets in the README.

## Working conventions

- Keep React components small and accessible. Use semantic HTML and visible keyboard focus.
- Prefer responsive Tailwind utilities. Put only shared global styles in `src/index.css`.
- Use Motion for purposeful state transitions and respect reduced motion preferences.
- Add dependencies only when a feature needs them. Keep this project in JavaScript unless a task asks for TypeScript.
- Update this file when the project's actual architecture or design direction changes.

## Commands

- `npm install` — install dependencies
- `npm run dev` — start Vite locally
- `npm run lint` — run Oxlint on app source and Vite config
- `npm run build` — verify the production bundle

## Key files

- `src/main.jsx` mounts the React app.
- `src/App.jsx` is the current entry component.
- `src/index.css` loads Tailwind and global styles.
- `vite.config.js` configures React and Tailwind plugins.
- `public/images/` contains local copies of source-site and social post artwork used in the redesign.
