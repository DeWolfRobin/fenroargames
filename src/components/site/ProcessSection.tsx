import { Reveal, SectionHeading } from './SitePrimitives';
import type { SocialGroup } from './types';

export function ProcessSection({ process, socialGroups }: { process: string[]; socialGroups: SocialGroup[] }) {
  const primaryLinks = socialGroups.flatMap((group) => group.links).filter((link) =>
    ['Discord', 'itch.io', 'YouTube', 'Patreon'].includes(link.label)
  );

  return (
    <section id="process" className="section-chunk container mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <Reveal>
          <SectionHeading
            eyebrow="Development Process"
            title="Built in the open. Improved in public."
            invert
            text="Small, visible steps that give players something real to react to."
          />
        </Reveal>

        <div className="grid gap-4">
          {process.map((item, index) => (
            <Reveal key={item} delay={index * 60}>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-5 py-5">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#d4af37]">Trust Point</p>
                <p className="mt-3 text-2xl font-black tracking-tight text-white">{item}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={220}>
            <div className="grid gap-3 sm:grid-cols-2">
              {primaryLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[1.2rem] border border-white/10 bg-black/20 px-4 py-4 text-base font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:border-cyan-300/35 hover:bg-white/[0.06]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
