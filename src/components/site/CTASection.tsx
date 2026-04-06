import { Button, Reveal, Surface } from './SitePrimitives';

export function CTASection({ playLink, discordLink }: { playLink: string; discordLink: string }) {
  return (
    <section className="section-chunk container mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <Surface
          tone="dark"
          className="overflow-hidden border-[#d4af37]/18 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(72,196,255,0.16),transparent_35%),linear-gradient(180deg,#0b0b0f,#12131a)] p-8 sm:p-10"
        >
          <p className="text-[0.72rem] font-black uppercase tracking-[0.32em] text-cyan-300">Final Call</p>
          <h2 className="mt-4 max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Step into the alpha.
            <br />
            Stay for the next reveal.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={playLink}>Play / Download</Button>
            <Button href={discordLink} variant="secondary">
              Join Discord
            </Button>
          </div>
        </Surface>
      </Reveal>
    </section>
  );
}
