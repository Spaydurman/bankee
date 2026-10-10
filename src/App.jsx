import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'

const stack = [
  { name: 'React', detail: 'Component based UI' },
  { name: 'Tailwind CSS', detail: 'Utility first styling' },
  { name: 'Motion', detail: 'Thoughtful animation' },
  { name: 'UI/UX Pro Max', detail: 'Local design skill' },
]

function App() {
  const [count, setCount] = useState(0)
  const reduceMotion = useReducedMotion()

  return (
    <main className="min-h-dvh bg-slate-950 px-5 py-16 text-slate-100 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="mb-5 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-300">
            Project ready
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Build something great with Bankee.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            A clean React starter with Tailwind, Motion, and a local UI/UX design
            skill. Replace this screen with your first feature.
          </p>
        </motion.header>

        <section aria-labelledby="stack-heading">
          <h2 id="stack-heading" className="mb-5 text-xl font-semibold">
            Your stack
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stack.map(({ name, detail }) => (
              <div
                key={name}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h3 className="font-semibold text-white">{name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-start gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">Motion is working</h2>
            <p className="mt-1 text-slate-300" aria-live="polite">
              Button pressed {count} {count === 1 ? 'time' : 'times'}.
            </p>
          </div>
          <motion.button
            type="button"
            whileTap={reduceMotion ? undefined : { scale: 0.96 }}
            onClick={() => setCount((current) => current + 1)}
            className="min-h-11 cursor-pointer rounded-xl bg-emerald-400 px-5 py-2.5 font-semibold text-slate-950 transition-colors hover:bg-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
          >
            Try it
          </motion.button>
        </section>
      </div>
    </main>
  )
}

export default App
