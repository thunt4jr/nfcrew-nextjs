import Link from "next/link";
import PageShell from "@/components/PageShell";

const servers = [
  {
    name: "NF.CREW Siege",
    location: "NA-East",
    players: "18 / 24",
    mode: "Siege Ladder",
    features: ["Commander Coaching", "Siege Marathon", "Custom Balance"],
  },
  {
    name: "NF.CREW Competitive",
    location: "EU-West",
    players: "12 / 20",
    mode: "6v6 Ranked",
    features: ["ELO Tracking", "Match Scheduling", "Strat Locked"],
  },
  {
    name: "NF.CREW Rookie Haven",
    location: "OCE",
    players: "9 / 18",
    mode: "Coach & Learn",
    features: ["Mentor Queue", "Beginner Mods", "Tactical Overlays"],
  },
  {
    name: "NF.CREW Combat Arena",
    location: "NA-West",
    players: "14 / 20",
    mode: "Combat",
    features: ["Weapon Progression", "Fast-Res", "Daily Challenges"],
  },
  {
    name: "NF.CREW Strategy Lab",
    location: "EU-Central",
    players: "6 / 16",
    mode: "Sandbox",
    features: ["Mod Experiments", "Balance Tests", "Map Rotations"],
  },
  {
    name: "NF.CREW Scrim Hub",
    location: "Asia",
    players: "10 / 18",
    mode: "Competitive Scrims",
    features: ["Private Slots", "Observer Tools", "Replay Uploads"],
  },
];

const operations = [
  {
    title: "Ladder Night – Siege",
    window: "Fridays 21:00 EDT",
    details:
      "Commander coaching, planned rotations, and scoreboard reviews with veteran captains.",
  },
  {
    title: "Meta Test Lab",
    window: "Wednesdays 19:00 CET",
    details:
      "Rotating mods and balance tweaks. Feedback logged to our forum for iterative tuning.",
  },
  {
    title: "Rookie Recon",
    window: "Sundays 18:00 AEST",
    details:
      "Beginner-friendly runs with mentors covering basics, map callouts, and resource flow.",
  },
];

export default function Servers() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 lg:px-8 lg:pt-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-200">
              Live Servers
            </p>
            <h1 className="mt-6 text-4xl font-bold text-slate-50 sm:text-5xl">
              Battle-ready environments engineered for high-performance matches.
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Every NF.CREW server is tuned with custom configs, vigilant moderation,
              and performance monitoring. Pick a queue that fits your fireteam, then
              jump in through Steam or reserve a slot for scheduled scrims.
            </p>
          </div>
          <Link
            href="https://store.steampowered.com/app/4920/Natural_Selection_2/"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100 transition hover:border-cyan-300/60 hover:text-cyan-50"
          >
            View on Steam
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4"
            >
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5h10m0 0v10m0-10L5 19"
              />
            </svg>
          </Link>
        </div>
      </section>

      <section className="border-t border-cyan-400/10 bg-slate-950/85 py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {servers.map((server) => (
            <div
              key={server.name}
              className="flex flex-col gap-5 rounded-2xl border border-cyan-400/10 bg-slate-900/70 p-6 shadow-[0_0_25px_rgba(15,23,42,0.45)] transition hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-slate-400">
                <span>{server.location}</span>
                <span>{server.mode}</span>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-100">
                  {server.name}
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  Population
                  <span className="ml-2 font-mono text-cyan-200">
                    {server.players}
                  </span>
                </p>
              </div>
              <ul className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.35em] text-cyan-200">
                {server.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-2"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3">
                <Link
                  href="steam://run/4920"
                  className="inline-flex items-center gap-2 self-start rounded-full bg-cyan-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-950 transition hover:bg-cyan-200"
                >
                  Connect
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m5 12 6 6 8-12"
                    />
                  </svg>
                </Link>
                <Link
                  href="/forum"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200 transition hover:text-cyan-100"
                >
                  Reserve slot
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14m0 0-6 6m6-6-6-6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-cyan-400/10 bg-slate-950/80 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-200">
                Scheduled Operations
              </h2>
              <p className="mt-4 text-3xl font-semibold text-slate-100">
                Weekly events to sharpen your squad.
              </p>
            </div>
            <Link
              href="/forum"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:bg-cyan-300"
            >
              Sign up on forums
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m0 0-6 6m6-6-6-6"
                />
              </svg>
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {operations.map((operation) => (
              <div
                key={operation.title}
                className="rounded-2xl border border-cyan-400/15 bg-slate-900/70 p-6 transition hover:border-cyan-400/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
              >
                <h3 className="text-base font-semibold text-slate-100">
                  {operation.title}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.35em] text-cyan-200">
                  {operation.window}
                </p>
                <p className="mt-4 text-sm text-slate-300">{operation.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
