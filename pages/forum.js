import Link from "next/link";
import PageShell from "@/components/PageShell";

const topics = [
  {
    title: "Patch 380: Combat Notes & Balance Discussion",
    replies: 42,
    updated: "18 minutes ago",
    category: "Strategy",
  },
  {
    title: "Marine Build Orders – Advanced Commander Playbook",
    replies: 31,
    updated: "54 minutes ago",
    category: "Command",
  },
  {
    title: "Kharaa Hive Coordination – Looking for Squadmates",
    replies: 19,
    updated: "Today, 09:17",
    category: "Recruitment",
  },
  {
    title: "Casting Applications – Upcoming Invitational",
    replies: 12,
    updated: "Yesterday",
    category: "Community",
  },
  {
    title: "Mod Spotlight: Strat-Lock 2.4 Feedback Thread",
    replies: 27,
    updated: "2 days ago",
    category: "Modding",
  },
  {
    title: "New Commander Clinic Notes – Recorded Sessions",
    replies: 8,
    updated: "3 days ago",
    category: "Guides",
  },
];

const resources = [
  {
    label: "Rules of Engagement",
    summary:
      "Moderation philosophy, spoiler policies, and expectations for tactical debate.",
  },
  {
    label: "Media Kit",
    summary: "Brand assets, overlay packs, and broadcast lower thirds for casters.",
  },
  {
    label: "Recruitment Templates",
    summary:
      "Pre-built forms for marine squads and kharaa hives looking for dependable teammates.",
  },
];

export default function Forum() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 lg:px-8 lg:pt-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-200">
              Forum Activity
            </p>
            <h1 className="mt-6 text-4xl font-bold text-slate-50 sm:text-5xl">
              Intelligence briefings, recruitment posts, and tactical theorycraft.
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Our forums capture deep strategy dives, server feedback, event signups,
              and weekly updates from the NF.CREW staff. Skim the latest dispatches or
              dive into archives to sharpen your next deployment.
            </p>
          </div>
          <a
            href="https://forums.nfcrew.gg"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:bg-cyan-300"
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
          </a>
        </div>
      </section>

      <section className="border-t border-cyan-400/10 bg-slate-950/85 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-6">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="rounded-2xl border border-cyan-400/15 bg-slate-900/70 p-6 transition hover:border-cyan-400/35 hover:shadow-[0_0_22px_rgba(34,211,238,0.25)]"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">
                      {topic.category}
                    </p>
                    <h2 className="mt-3 text-lg font-semibold text-slate-100">
                      {topic.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-6 text-xs uppercase tracking-[0.35em] text-slate-400">
                    <span>{topic.replies} replies</span>
                    <span>{topic.updated}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-cyan-400/10 bg-slate-950/80 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-200">
                Community Resources
              </h2>
              <p className="mt-4 text-3xl font-semibold text-slate-100">
                Tools to keep your crew informed and organized.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100 transition hover:border-cyan-300/60 hover:text-cyan-50"
            >
              Meet the staff
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
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {resources.map((resource) => (
              <div
                key={resource.label}
                className="rounded-2xl border border-cyan-400/15 bg-slate-900/70 p-6 transition hover:border-cyan-400/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
              >
                <h3 className="text-base font-semibold text-slate-100">
                  {resource.label}
                </h3>
                <p className="mt-4 text-sm text-slate-300">{resource.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
