import Link from "next/link";
import PageShell from "@/components/PageShell";

const highlightCards = [
  {
    title: "Seasoned Veterans",
    description:
      "Competitive squads and public operations hosted weekly for marines and kharaa alike.",
  },
  {
    title: "Modded Experiences",
    description:
      "Curated fast-res, custom maps, and balance tweaks that keep Natural Selection fresh.",
  },
  {
    title: "Community Intel",
    description:
      "Deep-dive guides, replay breakdowns, and strategy clinics led by our command staff.",
  },
];

const featuredServers = [
  {
    name: "NF.CREW Siege",
    location: "NA-East",
    players: "18 / 24",
    mode: "Siege Ladder",
  },
  {
    name: "NF.CREW Competitive",
    location: "EU-West",
    players: "12 / 20",
    mode: "6v6 Ranked",
  },
];

const forumSpotlights = [
  {
    title: "Patch 380: Combat Notes & Balance Discussion",
    replies: 42,
    updated: "18 minutes ago",
  },
  {
    title: "Marine Build Orders – Advanced Commander Playbook",
    replies: 31,
    updated: "54 minutes ago",
  },
];

export default function Home() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-16 lg:px-8 lg:pb-32 lg:pt-24">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200">
              <span className="h-2.5 w-2.5 rounded-full border border-cyan-200/30 bg-cyan-200/80 shadow-[0_0_8px_rgba(165,243,252,0.8)]" />
              Elite Natural Selection Community
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
                Dominate the frontier with{" "}
                <span className="text-cyan-300">NF.CREW</span>
              </h1>
              <p className="max-w-xl text-lg text-slate-300">
                Tactical operations, modded experiences, and community events for
                Natural Selection veterans. Enlist with battle-tested squads or learn
                the ropes with expert commanders guiding every match.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/servers"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.35)] transition hover:bg-cyan-300"
              >
                View Servers
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-cyan-300/40 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200 transition hover:border-cyan-200/70 hover:text-cyan-100"
              >
                Learn More
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {highlightCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-cyan-400/10 bg-slate-900/70 p-5 shadow-[0_0_15px_rgba(15,23,42,0.45)] transition hover:border-cyan-400/25 hover:shadow-[0_0_30px_rgba(6,182,212,0.35)]"
                >
                  <h3 className="text-base font-semibold text-slate-100">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-400">{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[32px] border border-cyan-300/10 bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-800 opacity-80 blur-xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-cyan-400/20 bg-slate-900/70 p-8 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-slate-400">
                <span>Tactical Briefing</span>
                <span>Command Uplink</span>
              </div>
              <div className="mt-8 grid gap-8">
                <div className="relative rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
                    <span>Operational Map</span>
                    <span>Secure</span>
                  </div>
                  <div className="mt-5 grid gap-4 text-sm text-slate-300">
                    <div className="flex items-center justify-between">
                      <span>Team Marines</span>
                      <span className="font-mono text-cyan-200">Ready</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Team Kharaa</span>
                      <span className="font-mono text-orange-300">Mobilizing</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Next Drop</span>
                      <span className="font-mono text-slate-200">02:13</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-cyan-200"
                      >
                        <path
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3v18m9-9H3m13 4v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1m0-8V8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-cyan-200">
                        Featured Server
                      </p>
                      <p className="text-lg font-semibold text-slate-100">
                        NF.CREW Siege / 24 slots
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-200">
                    Siege ladders with commander coaching live every Friday. Reserve a
                    slot and sync with your fireteam for coordinated pushes.
                  </p>
                  <Link
                    href="/servers"
                    className="inline-flex w-max items-center gap-2 rounded-full bg-cyan-300 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-slate-950 transition hover:bg-cyan-200"
                  >
                    Join Operation
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
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-cyan-400/10 bg-slate-950/80 py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-200">
              Operations Snapshot
            </h2>
            <p className="mt-4 text-3xl font-semibold text-slate-100">
              Step into modded warfare, guided clinics, and ranked scrims.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100 transition hover:border-cyan-300/60 hover:text-cyan-50"
          >
            Explore Our Mission
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
        <div className="mx-auto mt-12 grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="space-y-6 rounded-2xl border border-cyan-400/15 bg-slate-900/70 p-8">
            <h3 className="text-lg font-semibold text-slate-100">Why NF.CREW</h3>
            <p className="text-sm text-slate-400">
              Born in the beta trenches. Built for the commanders, skulks, and field
              leaders pushing Natural Selection forward for over a decade. Learn how we
              maintain curated competition-ready servers, organize high-skill scrims,
              and support rookies with weekly clinics.
            </p>
            <Link
              href="/about"
              className="inline-flex w-max items-center gap-2 rounded-full bg-cyan-400/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200 transition hover:bg-cyan-400/30 hover:text-cyan-100"
            >
              Read Story
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

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-cyan-400/15 bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                Live Server Pulse
              </h3>
              <div className="mt-4 space-y-4 text-sm text-slate-300">
                {featuredServers.map((server) => (
                  <div
                    key={server.name}
                    className="rounded-xl border border-cyan-400/10 bg-slate-950/60 p-4"
                  >
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-400">
                      <span>{server.location}</span>
                      <span>{server.mode}</span>
                    </div>
                    <p className="mt-3 text-base font-semibold text-slate-100">
                      {server.name}
                    </p>
                    <p className="mt-1 font-mono text-cyan-200">{server.players}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/servers"
                className="mt-6 inline-flex w-max items-center gap-2 rounded-full bg-cyan-300 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-950 transition hover:bg-cyan-200"
              >
                View Full Roster
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

            <div className="rounded-2xl border border-cyan-400/15 bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                Forum Dispatch
              </h3>
              <div className="mt-4 space-y-4 text-sm text-slate-300">
                {forumSpotlights.map((topic) => (
                  <div
                    key={topic.title}
                    className="rounded-xl border border-cyan-400/10 bg-slate-950/60 p-4"
                  >
                    <p className="text-base font-semibold text-slate-100">
                      {topic.title}
                    </p>
                    <div className="mt-3 flex items-center gap-6 text-xs uppercase tracking-[0.35em] text-slate-400">
                      <span>{topic.replies} replies</span>
                      <span>{topic.updated}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/forum"
                className="mt-6 inline-flex w-max items-center gap-2 rounded-full bg-cyan-400 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-950 transition hover:bg-cyan-300"
              >
                Enter Forums
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
        </div>
      </section>
    </PageShell>
  );
}
