import { Reveal, SectionHeading, Surface } from './SitePrimitives';

export function FeatureGridSection({ features }: { features: string[] }) {
  return (
    <section className="section-chunk py-8 lg:py-14">
      <Reveal>
        <SectionHeading eyebrow="Core Features" title="Built around risk, adaptation, and replayable runs" />
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {features.map((feature, index) => (
          <Reveal key={feature} delay={index * 70}>
            <Surface className="h-full p-5">
              <p className="text-[0.72rem] font-black uppercase tracking-[0.32em] text-cyan-500">System {String(index + 1).padStart(2, '0')}</p>
              <p className="mt-4 text-2xl font-bold tracking-tight text-slate-900">{feature}</p>
            </Surface>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
