import { credentials, experience, profile, skillGroups } from "@/data/profile";
import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/" className="text-sm text-muted">← Back to portfolio</Link>
      <h1 className="mt-6 font-display text-4xl">{profile.name}</h1>
      <p className="text-muted mt-1">{profile.title}</p>
      <p className="text-sm text-muted mt-2">
        {profile.location} · {profile.email} · {profile.phone}
      </p>
      <p className="mt-6">{profile.positioning}</p>
      <section className="mt-10">
        <h2 className="text-sm uppercase tracking-widest text-muted">Experience</h2>
        {experience.map((job) => (
          <div key={job.id} className="mt-6">
            <div className="flex justify-between gap-4">
              <p className="font-medium">
                {job.role}, {job.company}
              </p>
              <p className="text-sm text-muted">{job.period}</p>
            </div>
            <ul className="mt-2 text-sm text-muted list-disc pl-5">
              {job.responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section className="mt-10">
        <h2 className="text-sm uppercase tracking-widest text-muted">Skills</h2>
        {skillGroups.map((g) => (
          <p key={g.title} className="mt-3 text-sm">
            <span className="font-medium">{g.title}: </span>
            <span className="text-muted">{g.items.join(" · ")}</span>
          </p>
        ))}
      </section>
      <section className="mt-10">
        <h2 className="text-sm uppercase tracking-widest text-muted">Education & Certifications</h2>
        {credentials.map((c) => (
          <p key={c.title} className="mt-3 text-sm">
            {c.title} — {c.issuer}, {c.year}
          </p>
        ))}
      </section>
    </main>
  );
}
