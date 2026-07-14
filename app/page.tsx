import WaitlistForm from "@/components/WaitlistForm";

const steps = [
  {
    title: "Companies book ad space",
    body: "Local businesses rent the big panels on our cargo bike boxes — a moving billboard that rides through their own neighbourhood.",
  },
  {
    title: "Ads cover the bike's costs",
    body: "Advertising income pays for the bikes, insurance and maintenance, so we don't need to charge you full market rates.",
  },
  {
    title: "You ride for a fraction of the price",
    body: "Pick up an e-cargo bike nearby, move your stuff or your kids, and pay far less than any regular rental.",
  },
];

const faqs = [
  {
    q: "Why is it so cheap?",
    a: "Advertisers pay for visibility on the bike's cargo box. Their budget covers most of the cost of the bikes, so your rental price only needs to cover a small part.",
  },
  {
    q: "Do I have to do anything for the advertisers?",
    a: "No. Just ride like you normally would. The ad is on the box — you never hand out flyers or take detours.",
  },
  {
    q: "Where will the bikes be available?",
    a: "We're starting in one city and expanding based on the waitlist. Add your city when you sign up — it directly decides where we launch next.",
  },
  {
    q: "What kind of bikes are they?",
    a: "Modern electric cargo bikes with a large front box — good for groceries, furniture-store hauls, deliveries, or two kids with seatbelts.",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Nav */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <span className="text-xl font-bold tracking-tight">
          ad<span className="text-brand">fiets</span>
        </span>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#how" className="hidden hover:text-brand sm:inline">
            How it works
          </a>
          <a href="#advertise" className="hidden hover:text-brand sm:inline">
            Advertise
          </a>
          <a
            href="#waitlist"
            className="rounded-lg bg-brand px-4 py-2 font-semibold text-white transition hover:bg-brand-dark"
          >
            Join waitlist
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <p className="mb-4 inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-dark">
            Launching soon
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Rent a cargo e-bike.
            <br />
            <span className="text-brand">Ads pay for your ride.</span>
          </h1>
          <p className="mt-5 max-w-md text-lg text-foreground/70">
            Local companies advertise on our cargo bikes. Their budget covers
            the bikes — so you rent one for a fraction of the normal price.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#waitlist"
              className="rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark"
            >
              Ride cheap — join the waitlist
            </a>
            <a
              href="#advertise"
              className="rounded-lg border border-foreground/20 px-6 py-3 font-semibold transition hover:border-brand hover:text-brand"
            >
              Advertise on a bike
            </a>
          </div>
        </div>
        {/* Simple illustrative bike card */}
        <div className="rounded-2xl border border-foreground/10 bg-white p-8 shadow-sm">
          <svg
            viewBox="0 0 400 260"
            role="img"
            aria-label="Cargo bike with an advertising panel on the box"
            className="w-full"
          >
            <rect x="30" y="70" width="150" height="90" rx="10" fill="#16a34a" />
            <rect x="45" y="85" width="120" height="60" rx="6" fill="#fafaf7" />
            <text x="105" y="112" textAnchor="middle" fontSize="14" fontWeight="700" fill="#14532d">
              YOUR AD
            </text>
            <text x="105" y="130" textAnchor="middle" fontSize="10" fill="#16211c" opacity="0.6">
              rides here
            </text>
            <circle cx="80" cy="205" r="34" fill="none" stroke="#16211c" strokeWidth="7" />
            <circle cx="310" cy="205" r="34" fill="none" stroke="#16211c" strokeWidth="7" />
            <path
              d="M114 200 L200 200 L240 130 L265 130 M240 130 L255 200 M200 200 L180 160 L114 160"
              fill="none"
              stroke="#16211c"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M255 200 L310 205" stroke="#16211c" strokeWidth="7" strokeLinecap="round" />
            <path d="M258 122 L282 122" stroke="#16211c" strokeWidth="7" strokeLinecap="round" />
            <rect x="236" y="196" width="42" height="9" rx="4" fill="#f59e0b" />
          </svg>
          <p className="mt-4 text-center text-sm text-foreground/60">
            Every bike carries one advertiser. Every ride costs you less.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-y border-foreground/10 bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-lg font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price comparison */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight">
          The same bike, without the price tag
        </h2>
        <p className="mt-3 max-w-xl text-foreground/70">
          Indicative pricing — final rates will be announced at launch.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-foreground/10 bg-white p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-foreground/50">
              Typical rental
            </p>
            <p className="mt-3 text-4xl font-bold">
              €40<span className="text-lg font-medium text-foreground/50">/day</span>
            </p>
            <p className="mt-4 text-sm text-foreground/70">
              You pay for the bike, the insurance, the maintenance — everything.
            </p>
          </div>
          <div className="rounded-2xl border-2 border-brand bg-brand/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-dark">
              adfiets
            </p>
            <p className="mt-3 text-4xl font-bold text-brand-dark">
              €15<span className="text-lg font-medium text-brand-dark/60">/day</span>
            </p>
            <p className="mt-4 text-sm text-foreground/70">
              Advertisers cover the rest. Same bike, same freedom — you just
              share the box with a brand.
            </p>
          </div>
        </div>
      </section>

      {/* Waitlists */}
      <section id="waitlist" className="border-y border-foreground/10 bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
          <div className="rounded-2xl border border-foreground/10 p-8">
            <h2 className="text-2xl font-bold">For riders</h2>
            <p className="mb-6 mt-2 text-sm text-foreground/70">
              Be first to rent a cargo e-bike at the lowest price in town.
            </p>
            <WaitlistForm audience="rider" />
          </div>
          <div id="advertise" className="rounded-2xl border border-foreground/10 p-8">
            <h2 className="text-2xl font-bold">For advertisers</h2>
            <p className="mb-6 mt-2 text-sm text-foreground/70">
              Put your brand on a cargo bike that rides through your
              neighbourhood every day. Hyper-local, impossible to skip.
            </p>
            <WaitlistForm audience="advertiser" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-full max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight">
          Frequently asked questions
        </h2>
        <div className="mt-8 divide-y divide-foreground/10">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-4">
              <summary className="cursor-pointer list-none font-semibold">
                <span className="mr-2 inline-block text-brand transition group-open:rotate-90">
                  ›
                </span>
                {faq.q}
              </summary>
              <p className="mt-2 pl-6 text-sm leading-relaxed text-foreground/70">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/10 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8 text-sm text-foreground/60">
          <span>
            © {new Date().getFullYear()} adfiets — cargo bikes, funded by ads.
          </span>
          <a href="#waitlist" className="font-semibold text-brand hover:text-brand-dark">
            Join the waitlist
          </a>
        </div>
      </footer>
    </main>
  );
}
