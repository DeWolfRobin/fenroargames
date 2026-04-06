import { Reveal, SectionHeading, Surface } from './SitePrimitives';
import type { StudioData } from './types';

export function AboutSection({ studio }: { studio: StudioData }) {
  return (
    <section id="about" className="section-chunk scroll-mt-28 py-8 lg:py-14">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <Reveal>
          <Surface className="h-full p-6 sm:p-8">
            <SectionHeading eyebrow="About The Studio" title={studio.title} />
            <div className="mt-6 space-y-5">
              {studio.about.map((paragraph, index) => (
                <p key={paragraph} className={['text-lg leading-8', index === 0 ? 'text-slate-700' : 'text-slate-600'].join(' ')}>
                  {paragraph}
                </p>
              ))}
            </div>
          </Surface>
        </Reveal>

        <Reveal delay={120}>
          <Surface className="h-full bg-[linear-gradient(180deg,rgba(255,107,44,0.08),rgba(61,223,255,0.05)),rgba(255,255,255,0.88)] p-6 sm:p-8">
            <p className="text-[0.72rem] font-black uppercase tracking-[0.32em] text-[#ff6b2c]">What Matters</p>
            <h3 className="mt-4 max-w-[12ch] text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Games first. Music in-house. Visual ambition grown sustainably.
            </h3>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              FenroarGames is building a clear studio identity around strategy systems, authored sound, and a presentation style that
              can grow with each release.
            </p>
          </Surface>
        </Reveal>
      </div>
    </section>
  );
}
