"use client";

import { useState } from "react";
import {
  credentials,
  experience,
  profile,
  projects,
  skillGroups,
  testimonials,
  values,
} from "@/data/profile";
import { ArrowIcon } from "./Icons";

type Project = (typeof projects)[number];

export default function Portfolio() {
  const [active, setActive] = useState<Project | null>(null);
  const [sent, setSent] = useState(false);

  return (
    <>
      <Hero />
      <CredentialsBar />
      <About />
      <Experience />
      <Projects onOpen={setActive} />
      <Skills />
      <Certifications />
      <Resume />
      <Testimonials />
      <Values />
      <Interests />
      <Contact sent={sent} onSend={() => setSent(true)} />
      {active && <CaseStudy project={active} onClose={() => setActive(null)} />}
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] tracking-[0.22em] uppercase text-muted mb-3">{children}</p>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="mx-auto max-w-6xl px-5 md:px-8 relative grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <div className="reveal">
          <p className="text-[11px] tracking-[0.22em] uppercase text-accent mb-5">
            {profile.availabilityLabel}
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.08] tracking-tight max-w-xl">
            {profile.headline}
          </h1>
          <p className="mt-6 text-muted max-w-lg text-[17px] leading-relaxed">{profile.summary}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-ink text-paper text-sm hover:opacity-90 transition">
              View My Work <ArrowIcon />
            </a>
            <a href="/resume.pdf" className="inline-flex items-center justify-center h-12 px-6 rounded-full border border-line text-sm hover:bg-accent-soft transition">
              Download Resume
            </a>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-40" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            {profile.availabilityStatus}
          </div>
        </div>
        <ProfileComposition />
      </div>
    </section>
  );
}

function ProfileComposition() {
  return (
    <div className="relative mx-auto w-full max-w-md reveal" style={{ animationDelay: "120ms" }}>
      <div className="rounded-[28px] border border-line bg-card overflow-hidden shadow-card">
        <div className="aspect-[4/5] bg-gradient-to-br from-[#d8cfc0] via-[#c9b8a4] to-[#8f7a63] relative">
          <div className="absolute inset-0 flex items-end p-6">
            <div className="w-full">
              <div className="h-40 w-40 mx-auto mb-6 rounded-full bg-[#2a241e]/20 border border-white/20 flex items-center justify-center">
                <span className="font-display text-5xl text-white/90">DO</span>
              </div>
              <div className="bg-paper/90 dark:bg-card/90 backdrop-blur rounded-2xl p-4 border border-white/40">
                <p className="font-medium">{profile.name}</p>
                <p className="text-sm text-muted mt-0.5">{profile.currentRole}</p>
                <p className="text-xs text-muted mt-2">{profile.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -left-4 top-10 rounded-2xl border border-line bg-card px-4 py-3 shadow-card text-sm">
        <p className="font-medium">{profile.stats[0].value}</p>
        <p className="text-muted text-xs">{profile.stats[0].label}</p>
      </div>
      <div className="absolute -right-2 top-1/2 rounded-2xl border border-line bg-card px-4 py-3 shadow-card text-sm">
        <p className="font-medium">{profile.stats[1].value}</p>
        <p className="text-muted text-xs">{profile.stats[1].label}</p>
      </div>
      <div className="absolute left-6 -bottom-5 rounded-2xl border border-line bg-card px-4 py-3 shadow-card text-sm">
        <p className="font-medium">{profile.stats[2].value}</p>
        <p className="text-muted text-xs">{profile.stats[2].label}</p>
      </div>
    </div>
  );
}

function CredentialsBar() {
  return (
    <div className="border-y border-line bg-card/50">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-4 overflow-x-auto no-scrollbar">
        <div className="flex gap-8 min-w-max text-[11px] tracking-[0.18em] text-muted">
          {profile.credentials.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8 grid md:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
        <div>
          <SectionLabel>About</SectionLabel>
          <div className="rounded-[28px] overflow-hidden border border-line bg-gradient-to-b from-[#cfc6b8] to-[#9c8b76] aspect-[4/5] flex items-end p-6">
            <div className="w-full rounded-2xl bg-paper/90 p-4">
              <p className="font-medium">{profile.name}</p>
              <p className="text-sm text-muted">{profile.title}</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight">A little about me.</h2>
          <p className="mt-6 text-muted leading-relaxed text-[17px]">{profile.about}</p>
          <div className="mt-10 grid grid-cols-3 gap-4">
            {profile.attributes.map((a) => (
              <div key={a.label} className="border-t border-line pt-3">
                <p className="text-xs text-muted">{a.label}</p>
                <p className="mt-1 text-sm font-medium">{a.value}</p>
              </div>
            ))}
          </div>
          <a href="/resume.pdf" className="mt-8 inline-flex items-center gap-2 text-sm hover:text-accent">
            Download Full Resume <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionLabel>Career</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl tracking-tight">Experience</h2>
        <p className="mt-3 text-muted">Where I've worked and what I've contributed.</p>
        <div className="mt-14">
          {experience.map((job, i) => (
            <article key={job.id} className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 border-t border-line">
              <div>
                <p className="text-sm text-muted">{job.period}</p>
                <p className="mt-2 text-xs text-muted">{job.location}</p>
                {i === 0 && (
                  <span className="mt-3 inline-block text-[11px] tracking-wide uppercase text-accent">Current</span>
                )}
              </div>
              <div>
                <h3 className="text-xl font-medium">{job.role}</h3>
                <p className="text-muted mt-1">{job.company}</p>
                <ul className="mt-5 space-y-2 text-sm text-muted leading-relaxed">
                  {job.responsibilities.map((r) => (
                    <li key={r} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-accent">
                      {r}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  {job.achievements.map((a) => (
                    <div key={a.label} className="rounded-2xl border border-line bg-card px-4 py-3 min-w-[140px]">
                      <p className="font-display text-2xl">{a.value}</p>
                      <p className="text-xs text-muted mt-1">{a.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects({ onOpen }: { onOpen: (p: Project) => void }) {
  return (
    <section id="projects" className="py-20 md:py-28 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionLabel>Portfolio</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl tracking-tight">Selected Work</h2>
        <p className="mt-3 text-muted">A few projects I've worked on.</p>
        <div className="mt-12 space-y-6">
          {projects.map((p) => (
            <article key={p.id} className="rounded-[28px] border border-line bg-card p-6 md:p-10 hover:border-accent/40 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <p className="text-[11px] tracking-[0.2em] text-muted">PROJECT {p.number}</p>
                <p className="text-xs text-muted">{p.duration}</p>
              </div>
              <h3 className="mt-4 font-display text-3xl tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.role} · {p.teamSize}</p>
              <p className="mt-5 max-w-2xl text-[16px] leading-relaxed">{p.description}</p>
              <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">Challenge</p>
                  <p className="mt-2 text-muted">{p.challenge}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">My Role</p>
                  <p className="mt-2 text-muted">{p.roleDetail}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">Outcome</p>
                  <p className="mt-2 text-muted">{p.outcome}</p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {p.metrics.map((m) => (
                  <div key={m.label} className="rounded-2xl border border-line px-4 py-3">
                    <p className="font-display text-xl">{m.value}</p>
                    <p className="text-xs text-muted">{m.label}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => onOpen(p)} className="mt-8 inline-flex items-center gap-2 text-sm hover:text-accent">
                View Case Study <ArrowIcon />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudy({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] bg-ink/50 backdrop-blur-sm p-4 md:p-8 overflow-y-auto" onClick={onClose}>
      <div className="mx-auto max-w-3xl bg-paper rounded-[28px] border border-line p-6 md:p-10 my-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-start gap-4">
          <div>
            <p className="text-[11px] tracking-[0.2em] text-muted">PROJECT {project.number}</p>
            <h3 className="font-display text-3xl mt-2">{project.title}</h3>
            <p className="text-sm text-muted mt-2">{project.role} · {project.duration} · {project.teamSize}</p>
          </div>
          <button onClick={onClose} className="h-9 px-3 rounded-full border border-line text-sm">Close</button>
        </div>
        <div className="mt-8 grid sm:grid-cols-3 gap-3">
          {project.metrics.map((m) => (
            <div key={m.label} className="rounded-2xl border border-line p-4">
              <p className="font-display text-2xl">{m.value}</p>
              <p className="text-xs text-muted mt-1">{m.label}</p>
            </div>
          ))}
        </div>
        {[
          ["Overview", project.overview],
          ["Problem", project.problem],
          ["My role", project.roleDetail],
          ["Team", project.team],
          ["Challenges", project.challenges],
          ["Solution", project.solution],
        ].map(([t, b]) => (
          <div key={t} className="mt-8">
            <h4 className="text-sm font-medium">{t}</h4>
            <p className="mt-2 text-muted leading-relaxed">{b}</p>
          </div>
        ))}
        <div className="mt-8">
          <h4 className="text-sm font-medium">Objectives</h4>
          <ul className="mt-2 space-y-1 text-muted text-sm">{project.objectives.map((o) => <li key={o}>— {o}</li>)}</ul>
        </div>
        <div className="mt-8">
          <h4 className="text-sm font-medium">Process</h4>
          <ol className="mt-2 space-y-1 text-muted text-sm list-decimal pl-5">{project.process.map((o) => <li key={o}>{o}</li>)}</ol>
        </div>
        <div className="mt-8">
          <h4 className="text-sm font-medium">Results</h4>
          <ul className="mt-2 space-y-1 text-muted text-sm">{project.results.map((o) => <li key={o}>— {o}</li>)}</ul>
        </div>
        <div className="mt-8">
          <h4 className="text-sm font-medium">Lessons learned</h4>
          <ul className="mt-2 space-y-1 text-muted text-sm">{project.lessons.map((o) => <li key={o}>— {o}</li>)}</ul>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionLabel>Capabilities</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl tracking-tight">What I bring to the table.</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {skillGroups.map((g) => (
            <div key={g.title} className="rounded-[24px] border border-line bg-card p-6">
              <h3 className="font-medium">{g.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="text-xs px-3 py-1.5 rounded-full border border-line text-muted">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="py-20 md:py-28 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionLabel>Credentials</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl tracking-tight">Certifications & Education</h2>
        <div className="mt-12 divide-y divide-line border-y border-line">
          {credentials.map((c) => (
            <div key={c.title} className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="font-medium">{c.title}</p>
                <p className="text-sm text-muted mt-1">{c.issuer}</p>
              </div>
              <div className="text-sm text-muted flex items-center gap-4">
                <span className="text-[11px] tracking-wider uppercase border border-line rounded-full px-3 py-1">{c.type}</span>
                <span>{c.year}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted">Demo credentials for template preview. Not linked to verification pages.</p>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section id="resume" className="py-20 md:py-28 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="rounded-[32px] border border-line bg-card px-8 py-14 md:px-16 text-center">
          <h2 className="font-display text-4xl md:text-5xl tracking-tight">Want the full picture?</h2>
          <p className="mt-5 text-muted max-w-xl mx-auto">
            Download my resume for a detailed overview of my experience, skills, education, and professional background.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/resume.pdf" className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-ink text-paper text-sm">
              Download Resume PDF <ArrowIcon />
            </a>
            <a href="/resume" className="inline-flex items-center justify-center h-12 px-6 rounded-full border border-line text-sm">
              View Resume Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20 md:py-28 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionLabel>References</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl tracking-tight">What colleagues say</h2>
        <p className="mt-3 text-xs text-muted">Fictional demo recommendations for the template.</p>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-[24px] border border-line bg-card p-6">
              <p className="leading-relaxed">“{t.quote}”</p>
              <footer className="mt-6">
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted mt-1">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="py-20 md:py-28 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionLabel>Approach</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl tracking-tight">How I work</h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <div key={v.title} className="rounded-[24px] border border-line p-6 bg-card">
              <p className="text-xs text-muted">0{i + 1}</p>
              <h3 className="mt-4 font-medium text-lg">{v.title}</h3>
              <p className="mt-2 text-sm text-muted">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Interests() {
  return (
    <section className="py-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-sm text-muted mb-4">I'm interested in</p>
        <div className="flex flex-wrap gap-2">
          {profile.interests.map((i) => (
            <span key={i} className="px-4 py-2 rounded-full border border-line text-sm">{i}</span>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted">{profile.interestNote}</p>
      </div>
    </section>
  );
}

function Contact({ sent, onSend }: { sent: boolean; onSend: () => void }) {
  return (
    <section id="contact" className="py-20 md:py-28 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 md:px-8 grid lg:grid-cols-2 gap-14">
        <div>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight">Let's work together.</h2>
          <p className="mt-5 text-muted max-w-md">Have a role, project, or opportunity in mind? I'd love to hear from you.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href={`mailto:${profile.contactEmail}`} className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-ink text-paper text-sm">
              Send Me an Email <ArrowIcon />
            </a>
            <a href={profile.linkedin} className="inline-flex items-center justify-center h-12 px-6 rounded-full border border-line text-sm">
              Connect on LinkedIn
            </a>
          </div>
          <div className="mt-10 space-y-1 text-sm text-muted">
            <p>{profile.contactEmail}</p>
            <p>{profile.phone}</p>
            <p>{profile.location}</p>
          </div>
        </div>
        <form className="rounded-[28px] border border-line bg-card p-6 md:p-8 space-y-4" onSubmit={(e) => { e.preventDefault(); onSend(); }}>
          {["Name", "Email", "Company"].map((label) => (
            <label key={label} className="block text-sm">
              <span className="text-muted text-xs">{label}</span>
              <input required={label !== "Company"} type={label === "Email" ? "email" : "text"} className="mt-1 w-full h-11 rounded-xl border border-line bg-transparent px-3" />
            </label>
          ))}
          <label className="block text-sm">
            <span className="text-muted text-xs">Message</span>
            <textarea required rows={5} className="mt-1 w-full rounded-xl border border-line bg-transparent px-3 py-2" />
          </label>
          <button type="submit" className="w-full h-12 rounded-full bg-ink text-paper text-sm">
            {sent ? "Message noted (demo)" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
