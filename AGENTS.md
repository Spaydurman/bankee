# Bankee project context

## Base

- This is a React JavaScript project built with Vite.
- Use Tailwind CSS 4 through `@tailwindcss/vite`; import it in `src/index.css`.
- Use Motion from `motion/react` for UI animation.
- The UI/UX Pro Max skill is installed at `.agents/skills/ui-ux-pro-max/`. For tasks that design or change an interface, read its `SKILL.md` and use its relevant guidance. Its search scripts require Python 3.
- No product features, branding, API, or backend have been specified yet. Treat `src/App.jsx` as a replaceable starter screen, not a product specification.

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
