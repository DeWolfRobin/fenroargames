import type { ImageMetadata } from 'astro';

export type LinkItem = {
  label: string;
  href: string;
};

export type SocialGroup = {
  title: string;
  links: LinkItem[];
};

export type Screenshot = {
  src: ImageMetadata;
  alt: string;
  caption: string;
};

export type ProjectCard = {
  title: string;
  descriptor: string;
  status: string;
  visual: Screenshot;
  href?: string;
};

export type FeatureStep = {
  label: string;
  title: string;
  description: string;
  visualTitle: string;
  visualNote: string;
};

export type StudioData = {
  title: string;
  tagline: string;
  description: string;
  heroTitle: string;
  identityStatements: string[];
  philosophy: string[];
  process: string[];
  logo: ImageMetadata;
};

export type GameData = {
  title: string;
  subtitle: string;
  status: string;
  shortDescription: string;
  alphaNote: string;
  featureSteps: FeatureStep[];
  screenshots: Screenshot[];
  playLink: string;
};
