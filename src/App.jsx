import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { brandNames, categories, highlights } from "./siteContent";

const partnerEmail =
  "mailto:sales@bankee.com.ph?subject=Retail%20Partnership%20Inquiry";
const copyrightYear = new Date().getFullYear();

function Arrow({ diagonal = false, className = "h-4 w-4" }) {
  return diagonal ? (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 19 19 5M7 5h12v12" />
    </svg>
  ) : (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12h16m-6-6 6 6-6 6" />
    </svg>
  );
}

function Sparkle({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 78 78"
      fill="none"
    >
      <path
        d="M39 2c3 22 13 32 37 37-24 4-34 14-37 37C35 53 25 43 2 39 25 34 35 24 39 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SectionLabel({ children, light = false }) {
  return (
    <p
      className={`mb-5 text-xs font-bold uppercase tracking-[0.22em] ${light ? "text-butter" : "text-coral"}`}
    >
      {children}
    </p>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ["What we do", "#what-we-do"],
    ["Our brands", "#brands"],
    ["Retail partners", "#partners"],
    ["Latest", "#latest"],
  ];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only rounded bg-butter px-4 py-2 text-navy focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100]"
      >
        Skip to content
      </a>
      <div className="bg-navy px-5 py-2.5 text-center text-xs font-semibold tracking-wide text-white sm:text-sm">
        Bringing world-loved play to the Philippines since 1986
      </div>
      <header className="sticky top-0 z-50 border-b border-navy/10 bg-paper/95 backdrop-blur-lg">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
          <a
            href="#top"
            aria-label="Ban Kee Trading home"
            className="shrink-0 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
          >
            <img
              src="/images/bankee-logo.webp"
              alt="Ban Kee Trading, Inc."
              className="h-auto w-[184px] sm:w-[230px]"
              width="728"
              height="133"
            />
          </a>
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-7 lg:flex"
          >
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-semibold text-navy/80 transition-colors hover:text-coral focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href={partnerEmail}
            className="hidden min-h-11 items-center gap-2 rounded-full bg-cobalt px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt lg:inline-flex"
          >
            Work with us <Arrow diagonal />
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-navy/20 text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt lg:hidden"
          >
            {menuOpen ? (
              <span aria-hidden="true" className="text-2xl leading-none">
                ×
              </span>
            ) : (
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
        {menuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="border-t border-navy/10 bg-paper px-5 pb-6 pt-3 lg:hidden"
          >
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block min-h-11 rounded py-3 text-base font-semibold text-navy focus-visible:outline-2 focus-visible:outline-cobalt"
              >
                {label}
              </a>
            ))}
            <a
              href={partnerEmail}
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-full bg-cobalt px-5 py-2 font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-cobalt"
            >
              Work with us <Arrow diagonal />
            </a>
          </nav>
        )}
      </header>
    </>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="top" className="relative overflow-hidden bg-paper">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[.96fr_1.04fr] lg:gap-16 lg:px-10 lg:pb-24 lg:pt-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-cobalt/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-cobalt shadow-sm">
            <span className="h-2 w-2 rounded-full bg-coral" />
            Your partner in play
          </div>
          <h1 className="max-w-[680px] font-display text-[clamp(3.4rem,7vw,6.4rem)] font-semibold leading-[.98] tracking-[-.055em] text-navy">
            From global brands to{" "}
            <span className="relative text-cobalt">
              local shelves
              <Sparkle className="absolute -right-5 -top-5 h-7 w-7 text-coral sm:-right-8 sm:-top-7 sm:h-10 sm:w-10" />
            </span>
            <span className="text-coral">.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
            Ban Kee Trading connects world-loved toys, baby products, and
            collectibles with retailers across the Philippines.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <motion.a
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              href={partnerEmail}
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-cobalt px-7 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(33,33,145,.18)] transition-colors hover:bg-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
            >
              Become a retail partner <Arrow />
            </motion.a>
            <a
              href="#brands"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-navy/20 px-6 py-3 text-sm font-bold text-navy transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
            >
              Explore our brands <Arrow diagonal />
            </a>
          </div>
          <div className="mt-12 flex items-center gap-4 border-t border-navy/15 pt-6">
            <span className="font-display text-3xl font-semibold text-coral">
              1986
            </span>
            <span className="max-w-[210px] text-sm font-medium leading-5 text-navy/70">
              The year our journey in Philippine play began
            </span>
          </div>
        </motion.div>
        <div className="relative mx-auto grid h-[450px] w-full max-w-[620px] grid-cols-[1.18fr_.82fr] grid-rows-2 gap-3 sm:h-[570px] sm:gap-4 lg:mx-0">
          <div
            className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-butter/70 sm:h-48 sm:w-48"
            aria-hidden="true"
          />
          <div className="relative row-span-2 overflow-hidden rounded-[2rem] bg-[#f5b1cb] shadow-[0_24px_50px_rgba(30,28,76,.12)]">
            <img
              src="/images/lego-friends.webp"
              alt="Child playing with a LEGO Friends set"
              width="801"
              height="885"
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#272330] shadow-[0_18px_35px_rgba(30,28,76,.12)]">
            <img
              src="/images/blokees-transformers.webp"
              alt="Blokees Transformers collectible figure"
              width="1638"
              height="2048"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-butter p-5 text-navy sm:p-7">
            <Sparkle className="h-11 w-11 text-coral sm:h-14 sm:w-14" />
            <p className="font-display text-[clamp(1.45rem,3vw,2.6rem)] font-semibold leading-[1.05] tracking-tight">
              More joy.
              <br />
              More places.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function RetailPartners() {
  return (
    <section
      id="partners"
      className="scroll-mt-28 border-y border-navy/10 bg-white py-11"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.2em] text-navy/55">
          Seen across Philippine retail
        </p>
        <div className="grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          <img
            src="/images/toy-kingdom-logo.webp"
            alt="Toy Kingdom"
            loading="lazy"
            width="2400"
            height="600"
            className="mx-auto max-h-10 w-full max-w-[150px] object-contain"
          />
          <img
            src="/images/toytown-logo.webp"
            alt="ToyTown"
            loading="lazy"
            width="2560"
            height="672"
            className="mx-auto max-h-10 w-full max-w-[140px] object-contain"
          />
          <img
            src="/images/toys-r-us-logo.webp"
            alt="Toys R Us"
            loading="lazy"
            width="1200"
            height="331"
            className="mx-auto max-h-10 w-full max-w-[145px] object-contain"
          />
          <span className="text-center font-display text-xl font-bold tracking-tight text-navy/75">
            Rustan’s
          </span>
          <span className="text-center font-display text-xl font-bold tracking-tight text-navy/75">
            Landmark
          </span>
          <span className="text-center font-display text-xl font-bold tracking-tight text-navy/75">
            Metro
          </span>
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section id="what-we-do" className="scroll-mt-24 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <SectionLabel>What we bring to shelves</SectionLabel>
            <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.07] tracking-tight text-navy sm:text-5xl">
              A world of play for every kind of shopper.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-slate-700">
            Our mix spans toys, family favorites, and collectibles for kids and
            the young at heart.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <a
              key={category.title}
              href={category.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col overflow-hidden rounded-[1.8rem] border border-navy/10 transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt ${category.color}`}
            >
              <div className="relative h-60 overflow-hidden sm:h-72 md:h-64 lg:h-72">
                <img
                  src={category.image}
                  alt={category.alt}
                  width="800"
                  height="900"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex min-h-[226px] flex-col p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.17em] text-cobalt">
                  {category.number} / {category.label}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight text-navy">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  {category.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-cobalt">
                  Discover more <Arrow diagonal />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const points = [
    [
      "01",
      "Global brands, local understanding",
      "We bring recognized toy, baby, and hobby names to shoppers in the Philippines.",
    ],
    [
      "02",
      "Across the retail landscape",
      "Our products reach toy stores, department stores, malls, and online marketplaces.",
    ],
    [
      "03",
      "Relationships that last",
      "We work with brands and retailers through trust, collaboration, and a shared love of play.",
    ],
  ];
  return (
    <section
      id="brands"
      className="scroll-mt-24 bg-navy py-20 text-white sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[.82fr_1.18fr] lg:gap-20 lg:px-10">
        <div>
          <SectionLabel light>Built on partnership</SectionLabel>
          <h2 className="max-w-md font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
            Great brands deserve to go further.
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-white/75">
            Since 1986, Ban Kee Trading has helped internationally loved
            products find their place in the Philippine market.
          </p>
          <a
            href="mailto:sales@bankee.com.ph?subject=Brand%20Partnership%20Inquiry"
            className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-butter px-6 py-3 text-sm font-bold text-navy transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-butter"
          >
            Let’s work together <Arrow diagonal />
          </a>
        </div>
        <div className="grid gap-8 self-center">
          {points.map(([number, title, copy]) => (
            <div
              key={number}
              className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-white/20 pt-6 sm:grid-cols-[5rem_1fr] sm:gap-6"
            >
              <span className="font-display text-xl font-semibold text-butter">
                {number}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
                  {copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="rounded-[1.5rem] border border-white/15 bg-white/5 p-6 sm:p-8">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.17em] text-butter">
            A few names in our world
          </p>
          <ul className="flex flex-wrap gap-x-7 gap-y-3 text-lg font-semibold text-white/90 sm:gap-x-10 sm:text-xl">
            {brandNames.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function SocialHighlights() {
  return (
    <section id="latest" className="scroll-mt-24 bg-[#f5f3ff] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <SectionLabel>Fresh from our feed</SectionLabel>
            <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.07] tracking-tight text-navy sm:text-5xl">
              See what’s making playtime news.
            </h2>
          </div>
          <a
            href="https://www.facebook.com/bankeetoys.ph"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 self-start text-sm font-bold text-cobalt underline decoration-coral/60 underline-offset-4 hover:text-navy focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-cobalt"
          >
            Visit Ban Kee Toys on Facebook <Arrow diagonal />
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {highlights.map((post) => (
            <a
              key={post.title}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid overflow-hidden rounded-[1.8rem] border border-navy/10 bg-white shadow-[0_12px_30px_rgba(28,27,81,.05)] transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt sm:grid-cols-[.82fr_1fr]"
            >
              <div className="aspect-square overflow-hidden sm:aspect-auto sm:min-h-[285px]">
                <img
                  src={post.image}
                  alt={post.alt}
                  width="590"
                  height="590"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-col p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-coral">
                  {post.label} · October 2026
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight text-navy">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  {post.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-cobalt">
                  View post <Arrow diagonal />
                </span>
              </div>
            </a>
          ))}
        </div>
        <p className="mt-5 text-sm text-navy/65">
          These are curated highlights. Visit Facebook for the newest updates.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-butter py-20 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-5 sm:px-8 lg:flex-row lg:items-end lg:px-10">
        <div>
          <SectionLabel>Let’s connect</SectionLabel>
          <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.07] tracking-tight text-navy sm:text-6xl">
            Ready to bring more joy to your shelves?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-navy/80">
            Tell us about your store or brand. We’d love to explore what we can
            build together.
          </p>
        </div>
        <a
          href={partnerEmail}
          className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 self-start rounded-full bg-navy px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-cobalt focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy"
        >
          Email our team <Arrow diagonal className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-paper py-14 text-navy">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.25fr_1fr_1fr] lg:px-10">
        <div>
          <img
            src="/images/bankee-logo.webp"
            alt="Ban Kee Trading, Inc."
            width="728"
            height="133"
            className="h-auto w-[230px]"
          />
          <p className="mt-5 max-w-xs text-sm leading-7 text-slate-700">
            Spreading joy and creative learning through play across the
            Philippines.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em]">
            Find us
          </h2>
          <address className="mt-5 not-italic text-sm leading-7 text-slate-700">
            #6 Rest Haven St., Brgy. Bungad
            <br />
            San Francisco del Monte, Quezon City
            <br />
            <a
              href="tel:+63282408040"
              className="underline-offset-4 hover:underline"
            >
              (02) 8240-8040
            </a>
            <br />
            <a
              href="mailto:info@bankee.com.ph"
              className="underline-offset-4 hover:underline"
            >
              info@bankee.com.ph
            </a>
          </address>
          <p className="mt-2 text-sm text-slate-700">
            Mon–Sat · 8:30 AM–5:30 PM
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em]">
            Follow the fun
          </h2>
          <div className="mt-5 flex flex-col items-start gap-3 text-sm font-semibold">
            <a
              className="hover:text-coral focus-visible:rounded focus-visible:outline-2 focus-visible:outline-cobalt"
              href="https://www.facebook.com/bankeetoys.ph"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook ↗
            </a>
            <a
              className="hover:text-coral focus-visible:rounded focus-visible:outline-2 focus-visible:outline-cobalt"
              href="https://www.instagram.com/bankeetoys.ph/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗
            </a>
            <a
              className="hover:text-coral focus-visible:rounded focus-visible:outline-2 focus-visible:outline-cobalt"
              href="https://www.tiktok.com/@bankeetoys.ph"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok ↗
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-2 border-t border-navy/10 px-5 pt-6 text-xs text-navy/60 sm:flex-row sm:justify-between sm:px-8 lg:px-10">
        <span>© {copyrightYear} Ban Kee Trading, Inc.</span>
        <span>Made for more moments of play.</span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <RetailPartners />
        <WhatWeDo />
        <About />
        <SocialHighlights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
