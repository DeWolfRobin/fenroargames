import type { PropsWithChildren, ReactNode } from 'react';

export function SectionHeading({
  eyebrow,
  title,
  text,
  invert = false
}: {
  eyebrow: string;
  title: string;
  text?: string;
  invert?: boolean;
}) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className={['text-[0.72rem] font-black uppercase tracking-[0.32em]', invert ? 'text-cyan-300' : 'text-[#d4af37]'].join(' ')}>
        {eyebrow}
      </p>
      <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h2>
      {text ? <p className="max-w-2xl text-base leading-7 text-zinc-300">{text}</p> : null}
    </div>
  );
}

export function Pill({ children, invert = false }: PropsWithChildren<{ invert?: boolean }>) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur transition',
        invert ? 'border-white/15 bg-white/[0.08] text-white' : 'border-white/10 bg-white/[0.04] text-white shadow-sm'
      ].join(' ')}
    >
      {children}
    </span>
  );
}

export function Button({
  href,
  children,
  variant = 'primary'
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}) {
  const styles =
    variant === 'primary'
      ? 'border-transparent bg-[#d4af37] text-black shadow-[0_18px_50px_rgba(212,175,55,0.24)] hover:-translate-y-0.5 hover:bg-[#e3c15b]'
      : 'border-white/14 bg-white/[0.08] text-white hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-white/[0.12]';

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-base font-bold transition ${styles}`}
    >
      {children}
    </a>
  );
}

export function Surface({
  children,
  className = '',
  tone = 'light'
}: PropsWithChildren<{ className?: string; tone?: 'light' | 'dark' }>) {
  return (
    <div
      className={[
        'rounded-[1.5rem] border',
        tone === 'dark'
          ? 'border-white/10 bg-white/[0.05] text-white shadow-[0_24px_80px_rgba(2,6,23,0.3)]'
          : 'border-white/10 bg-white/[0.04] text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)]',
        className
      ].join(' ')}
    >
      {children}
    </div>
  );
}

export function Reveal({
  children,
  className = '',
  delay = 0
}: PropsWithChildren<{ className?: string; delay?: number }>) {
  return (
    <div className={['reveal-block', className].join(' ')} style={{ ['--reveal-delay' as string]: `${delay}ms` }}>
      {children}
    </div>
  );
}
