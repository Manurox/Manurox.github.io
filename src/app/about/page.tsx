import { siteConfig } from "@/data/projects";

export default function AboutPage() {
  const paragraphs = siteConfig.about.split("\n\n");

  return (
    <div>
      <section className="relative overflow-hidden px-6 py-20 md:px-10 md:py-28">
        <div className="pointer-events-none absolute top-1/3 right-0 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-accent/[0.03] blur-[100px]" />

        <div className="mx-auto max-w-[1200px]">
          <p className="mb-4 text-[10px] tracking-[0.25em] uppercase text-accent">
            About
          </p>
          <h1 className="font-display text-4xl font-medium tracking-tight text-cream md:text-6xl">
            Behind the rig.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-24 md:px-10 md:pb-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="relative aspect-[4/5] overflow-hidden bg-ink-muted">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black" />
            <p className="absolute bottom-6 left-6 text-xs tracking-[0.15em] uppercase text-cream-muted">
              Portrait placeholder
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-8 flex flex-wrap gap-3">
              {siteConfig.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-border px-4 py-2 text-[10px] tracking-[0.15em] uppercase text-cream-muted"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="space-y-6">
              {paragraphs.map((paragraph, i) => (
                <p key={i} className="text-lg leading-relaxed text-cream-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-8">
              <div>
                <p className="mb-1 text-[10px] tracking-[0.2em] uppercase text-cream-muted">
                  Education
                </p>
                <p className="font-display text-lg text-cream">{siteConfig.university}</p>
                <p className="text-sm text-cream-muted">B.A. Animation — {siteConfig.year}</p>
              </div>
              <div>
                <p className="mb-1 text-[10px] tracking-[0.2em] uppercase text-cream-muted">
                  Focus
                </p>
                <p className="font-display text-lg text-cream">Character Rigging</p>
                <p className="text-sm text-cream-muted">Digital Animation & VFX</p>
              </div>
            </div>

            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-12 inline-flex items-center gap-3 border-b border-border pb-3 font-display text-xl text-cream transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
