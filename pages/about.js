import Link from "next/link";
import PageShell from "@/components/PageShell";

const pillars = [
  {
    title: "Tactical Events",
    detail:
      "Ladder nights, siege marathons, and invitational cups featuring the strongest squads from NA, EU, and OCE.",
  },
  {
    title: "Squad Intelligence",
    detail:
      "Commander briefings, VOD reviews, meta reports, and mod spotlights crafted by long-time marine and kharaa mains.",
  },
  {
    title: "Community Infrastructure",
    detail:
      "Discord integrations, match scheduling, and stat tracking tightly woven with Steam for effortless drop-ins.",
  },
  {
    title: "Veteran Staff",
    detail:
      "Admins, casters, and coaches from legendary NS leagues keep the ecosystem fair, fast, and competitive.",
  },
];

const milestones = [
  {
    year: "2002",
    label: "Mod Origins",
    description:
      "Squad of early adopters formed NF.CREW to run beta scrims and document strats as Natural Selection emerged.",
  },
  {
    year: "2013",
    label: "Server Network",
    description:
      "Expanded to multi-region dedicated hardware with custom mods that set the standard for competitive NS2 play.",
  },
  {
    year: "2018",
    label: "Broadcast Era",
    description:
      "Launched coaching clinics, VOD analysis streams, and partnered with casters to spotlight community tournaments.",
  },
  {
    year: "2024",
    label: "Operations Hub",
    description:
      "Modernized site, Discord integration, and full stat tracking pipeline to support veterans and rookies alike.",
  },
];

export default function About() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 lg:px-8 lg:pt-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-200">
            About NF.CREW
          </p>
          <h1 className="mt-6 text-4xl font-bold text-slate-50 sm:text-5xl">
            Two decades of Natural Selection leadership.
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            NF.CREW is a collective of commanders, strategists, server engineers, and
            casters dedicated to elevating the tactical depth of Natural Selection. We
            nurture both elite squads and complete newcomers with the same commitment to
            smart, respectful play.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/servers"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-950 transition hover:bg-cyan-300"
            >
              Browse Servers
            </Link>
            <a
              href="https://discord.com/invite/nfcrew"
              className="inline-flex items-center justify-center rounded-full border border-cyan-300/50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200 transition hover:border-cyan-200/80 hover:text-cyan-100"
            >
              Join Discord
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-cyan-400/10 bg-slate-950/80 py-20">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold text-slate-100">
              Engineered for lasting community impact.
            </h2>
            <p className="mt-6 text-base text-slate-300">
              From lineup prep to server maintenance, NF.CREW operates as a command
              center dedicated to the game&apos;s longevity. Our staff blends esports
              experience with community-first moderation, ensuring every match feels
              strategic, welcoming, and stable.
            </p>
            <p className="mt-4 text-base text-slate-300">
              We invest in onboarding rookies through mentor nights and keep veterans
              sharp with meta reports, scrims, and broadcasted show matches.
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-cyan-400/15 bg-slate-900/70 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-100">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-cyan-400/10 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-200">
                Milestones
              </h2>
              <p className="mt-4 text-3xl font-semibold text-slate-100">
                Moments that shaped the squad.
              </p>
            </div>
            <Link
              href="/forum"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100 transition hover:border-cyan-300/60 hover:text-cyan-50"
            >
              Read the archives
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
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="rounded-2xl border border-cyan-400/15 bg-slate-900/70 p-6"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-400">
                  <span>{milestone.year}</span>
                  <span>{milestone.label}</span>
                </div>
                <p className="mt-4 text-base font-semibold text-slate-100">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
