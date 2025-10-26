import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Servers", href: "/servers" },
  { label: "Forum", href: "/forum" },
];

export default function PageShell({ children }) {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/") {
      return router.pathname === "/";
    }
    return router.pathname.startsWith(href);
  };

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} min-h-screen bg-slate-950 text-slate-100`}
    >
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 mix-blend-screen">
          <div className="absolute inset-x-[-40%] top-[-10%] h-[640px] rounded-full bg-[radial-gradient(circle_at_top,_rgba(20,156,255,0.35),_transparent_60%)] blur-3xl" />
          <div className="absolute bottom-[-30%] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,149,11,0.25),_transparent_60%)] blur-3xl" />
        </div>

        <header className="relative z-10 border-b border-cyan-400/10 bg-slate-950/80 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
            <Link href="/" className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 text-lg font-black tracking-widest text-cyan-300">
                NF
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-xs uppercase tracking-[0.35em] text-cyan-300">
                  Natural Selection
                </span>
                <span className="text-xl font-bold text-slate-50">
                  NF.CREW
                </span>
              </span>
            </Link>

            <div className="hidden items-center gap-10 text-sm font-medium uppercase tracking-[0.35em] text-slate-200 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`transition-colors hover:text-cyan-300 ${
                    isActive(item.href) ? "text-cyan-300" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <Link
                href="/servers"
                className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200 transition hover:border-cyan-300/60 hover:text-cyan-100"
              >
                Join a Server
              </Link>
              <a
                href="https://discord.com/invite/nfcrew"
                className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:bg-cyan-300"
              >
                Discord
              </a>
            </div>

            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-200 transition hover:border-cyan-400/60 hover:text-cyan-100 md:hidden"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Toggle navigation</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </nav>

          {isMobileMenuOpen ? (
            <div className="border-t border-cyan-400/10 bg-slate-950/95 px-6 pb-6 pt-2 md:hidden">
              <div className="flex flex-col gap-4 text-sm font-semibold uppercase tracking-[0.4em]">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-lg border border-transparent px-4 py-3 text-slate-200 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/servers"
                  className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Join a Server
                </Link>
                <a
                  href="https://discord.com/invite/nfcrew"
                  className="rounded-full bg-cyan-400 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 text-center"
                >
                  Discord
                </a>
              </div>
            </div>
          ) : null}
        </header>

        <main className="relative z-10">{children}</main>

        <footer className="border-t border-cyan-400/10 bg-slate-950/90 py-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-xs uppercase tracking-[0.35em] text-slate-500 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-slate-400">
              © {new Date().getFullYear()} NF.CREW. Community hub for Natural Selection.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/about" className="transition hover:text-cyan-200">
                Mission
              </Link>
              <Link href="/servers" className="transition hover:text-cyan-200">
                Servers
              </Link>
              <Link href="/forum" className="transition hover:text-cyan-200">
                Forums
              </Link>
              <a
                href="mailto:ops@nfcrew.gg"
                className="transition hover:text-cyan-200"
              >
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
