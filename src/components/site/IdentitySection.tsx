import { Reveal } from './SitePrimitives';

export function IdentitySection({ statements }: { statements: string[] }) {
  return (
    <section id="identity" className="section-chunk container mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="space-y-5">
          <p className="text-xs font-black uppercase tracking-[0.32em] text-cyan-300">Studio Identity</p>
          <div className="grid gap-4">
            {statements.map((statement, index) => (
              <div
                key={statement}
                className={[
                  'rounded-[1.6rem] border px-6 py-6 sm:px-8 sm:py-7',
                  index === 1
                    ? 'border-cyan-300/25 bg-cyan-300/[0.06] text-white'
                    : 'border-white/10 bg-white/[0.04] text-white/92'
                ].join(' ')}
              >
                <p className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">{statement}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
