import { Reveal, SectionHeading } from './SitePrimitives';

export function PhilosophySection({ points }: { points: string[] }) {
  return (
    <section id="philosophy" className="section-chunk container mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading eyebrow="Design Philosophy" title="Built for readable tension" invert />
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {points.map((point, index) => (
          <Reveal key={point} delay={index * 60}>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:scale-105 hover:border-cyan-300/30">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">0{index + 1}</p>
              <p className="mt-6 text-2xl font-black tracking-tight text-white">{point}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
