import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          <div>
            <p className="font-medium">{profile.name}</p>
            <p className="text-sm text-muted mt-1">{profile.title}</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <a href="#about" className="hover:text-ink">About</a>
            <a href="#experience" className="hover:text-ink">Experience</a>
            <a href="#projects" className="hover:text-ink">Projects</a>
            <a href="#resume" className="hover:text-ink">Resume</a>
            <a href="#contact" className="hover:text-ink">Contact</a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <a href={profile.linkedin} className="hover:text-ink">LinkedIn</a>
            <a href={profile.github} className="hover:text-ink">GitHub</a>
            <a href={`mailto:${profile.contactEmail}`} className="hover:text-ink">Email</a>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted">
          <p>© 2026 {profile.name}. All rights reserved.</p>
          <p>Built with purpose.</p>
        </div>
      </div>
    </footer>
  );
}
