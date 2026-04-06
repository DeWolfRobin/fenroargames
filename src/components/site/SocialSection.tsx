import { Button, Reveal, SectionHeading, Surface } from './SitePrimitives';
import type { GameData, SocialGroup } from './types';

export function SocialSection({ socialGroups, game }: { socialGroups: SocialGroup[]; game: GameData }) {
  return (
    <section id="socials" className="section-chunk scroll-mt-28 py-8 lg:py-14">
      <Reveal>
        <SectionHeading
          eyebrow="Follow FenroarGames"
          title="Stay connected while the alpha evolves"
          text="Visitors can jump straight into the build, follow progress, or keep up with new music and art direction across the studio channels."
        />
      </Reveal>

      <div className="mt-8 grid gap-5 xl:grid-cols-[1fr_1fr_1.08fr]">
        {socialGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 90}>
            <Surface className="h-full p-6">
              <h3 className="text-3xl font-black tracking-tight text-slate-950">{group.title}</h3>
              <p className="mt-2 text-base leading-7 text-slate-500">
                {group.title === 'Watch and follow'
                  ? 'Find updates, clips, and development posts across the main studio channels.'
                  : 'Jump into the playable build, support development, or join the community.'}
              </p>
              <div className="mt-6 grid gap-3">
                {group.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex min-h-14 items-center justify-between rounded-[1rem] border border-stone-200 bg-stone-50 px-4 text-left text-base font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-stone-300 hover:bg-white"
                  >
                    <span>{link.label}</span>
                    <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-slate-900">
                      Open
                    </span>
                  </a>
                ))}
              </div>
            </Surface>
          </Reveal>
        ))}

        <Reveal delay={180}>
          <Surface className="h-full bg-[linear-gradient(135deg,rgba(255,107,44,0.09),rgba(61,223,255,0.06)),rgba(255,255,255,0.88)] p-6">
            <p className="text-[0.72rem] font-black uppercase tracking-[0.32em] text-[#ff6b2c]">Join Early</p>
            <h3 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
              Follow the alpha while the final art and soundtrack come together.
            </h3>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Dice? No Dice! is already playable, and the studio channels are where new music progress, visuals, and release updates
              will show up first.
            </p>
            <div className="mt-6 border-t border-stone-200/70 pt-6">
              <Button href={game.playLink}>Play On itch.io</Button>
            </div>
          </Surface>
        </Reveal>
      </div>
    </section>
  );
}
