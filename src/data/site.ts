import logo from '../assets/site/FenroarGames_logo_320.png';
import screenshot1 from '../assets/site/dice-no-dice-alpha-002-01.png';
import screenshot2 from '../assets/site/dice-no-dice-alpha-002-02.png';
import screenshot3 from '../assets/site/dice-no-dice-alpha-002-03.png';
import screenshot4 from '../assets/site/dice-no-dice-alpha-002-04.png';
import screenshot5 from '../assets/site/dice-no-dice-alpha-002-05.png';
import screenshot6 from '../assets/site/dice-no-dice-alpha-002-06.png';
import projectPlaceholder from '../assets/site/project-placeholder.svg';
import type { GameData, ProjectCard, SocialGroup, StudioData } from '../components/site/shared/types';

export const studio: StudioData = {
	title: 'FenroarGames',
	tagline: 'Systems built to bite back',
	description:
		'FenroarGames is an indie game studio focused on strategy games with self-composed music and collaborative art production. Discover Dice? No Dice! Alpha 0.0.2, a playable roguelike dice defense game.',
	heroTitle: 'Strategy games with pressure, replayability, and authored feel.',
	identityStatements: ['System-driven games', 'Replayability first', 'Design through mechanics'],
	philosophy: ['Mechanics over fluff', 'Clarity over complexity', 'Systems that evolve', 'Readable pressure, meaningful risk'],
	process: ['Public development', 'Community-driven feedback', 'Iterative releases', 'Music and game are developed together'],
	logo
};

export const socialGroups: SocialGroup[] = [
	{
		title: 'Watch and follow',
		links: [
			{ label: 'YouTube', href: 'https://www.youtube.com/@FenroarGames' },
			{ label: 'TikTok', href: 'https://www.tiktok.com/@fenroargames' },
			{ label: 'Instagram', href: 'https://www.instagram.com/fenroargames/' },
			{ label: 'X', href: 'https://x.com/FenroarGames' }
		]
	},
	{
		title: 'Support and community',
		links: [
			{ label: 'itch.io', href: 'https://fenroargames.itch.io/dice-no-dice' },
			{ label: 'Patreon', href: 'https://www.patreon.com/cw/FenroarGames' },
			{ label: 'Discord', href: 'https://discord.gg/vPKjWEBFBq' }
		]
	}
];

export const game: GameData = {
	title: 'Dice? No Dice!',
	subtitle: 'Alpha 0.0.2 - Roguelike Dice Defense Game',
	status: 'Alpha 0.0.2 Live',
	shortDescription:
		'Dice? No Dice! is a roguelike dice defense game where multi-lane positioning, class-based defenders, upgrades, and risky rolls shape every run. Choose your lane, adapt to enemy spawns, and survive escalating waves.',
	alphaNote:
		'Alpha 0.0.2 is playable now with a first progression layer, expanded modifiers and upgrades, and new audio. Most visuals and sound effects are still placeholders while final assets continue to take shape.',
	featureSteps: [
		{
			label: 'Multi-lane pressure',
			title: 'Read spawns and cover the right lane',
			description: 'Enemies can now appear across multiple lanes, so each placement choice matters from round to round.',
			visualTitle: 'Lane system',
			visualNote: 'Pressure shifts every wave'
		},
		{
			label: 'Defender classes',
			title: 'Warrior, Archer, and Mage play differently',
			description: 'Pick durable frontline control, balanced lane coverage, or full-field range and build around that strength.',
			visualTitle: 'Class choice',
			visualNote: 'Different role, different run'
		},
		{
			label: 'Progression layer',
			title: 'Unlock defenders, modifiers, and upgrades',
			description: 'Longer-term unlocks now carry across runs and add more goals beyond a single attempt.',
			visualTitle: 'Progression',
			visualNote: 'More to chase between runs'
		},
		{
			label: 'Combat and bosses',
			title: 'Crits hit harder, bosses push mixed waves',
			description: 'Natural 20 and natural 1 outcomes are now decisive, and bosses from round 8 can appear alongside normal enemies.',
			visualTitle: 'Escalation',
			visualNote: 'Bigger swings, heavier rounds'
		}
	],
	screenshots: [
		{ src: screenshot1, alt: 'Dice No Dice alpha 0.0.2 gameplay showing updated lane combat', caption: 'Alpha 0.0.2 gameplay' },
		{ src: screenshot2, alt: 'Dice No Dice alpha 0.0.2 defender and lane interface', caption: 'Lane placement decisions' },
		{ src: screenshot3, alt: 'Dice No Dice alpha 0.0.2 round with enemy pressure across lanes', caption: 'Multi-lane pressure' },
		{ src: screenshot4, alt: 'Dice No Dice alpha 0.0.2 build and progression interface', caption: 'Progression and build choices' },
		{ src: screenshot5, alt: 'Dice No Dice alpha 0.0.2 combat encounter with upgraded UI', caption: 'Combat and round indicators' },
		{ src: screenshot6, alt: 'Dice No Dice alpha 0.0.2 interface showing active run state', caption: 'Current run overview' }
	],
	playLink: 'https://fenroargames.itch.io/dice-no-dice'
};

export const projects: ProjectCard[] = [
	{
		title: 'Dice? No Dice!',
		descriptor: 'Dice defense alpha',
		status: 'Alpha 0.0.2 live',
		visual: game.screenshots[2],
		href: '/dice-no-dice/'
	},
	{
		title: 'Re-fraction',
		descriptor: 'Story complete, seeking artists',
		status: 'Concept phase',
		visual: {
			src: projectPlaceholder,
			alt: 'Placeholder visual for Re-fraction',
			caption: 'Concept phase placeholder'
		},
		href: 'https://fenroargames.itch.io/re-fraction'
	},
	{
		title: 'Next Game Placeholder',
		descriptor: 'No third game announced yet',
		status: 'Placeholder',
		visual: {
			src: projectPlaceholder,
			alt: 'Placeholder visual for the next FenroarGames project',
			caption: 'Future project placeholder'
		}
	}
] as const;

const allSocialLinks = socialGroups.flatMap((group) => group.links.map((link) => link.href));

export const schema = {
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'Organization',
			name: studio.title,
			logo: studio.logo.src,
			sameAs: allSocialLinks
		},
		{
			'@type': 'VideoGame',
			name: game.title,
			alternateName: 'Dice No Dice',
			gamePlatform: 'PC',
			applicationCategory: 'Game',
			operatingSystem: 'Windows',
			genre: ['Roguelike', 'Strategy', 'Tower Defense'],
			description: `${game.shortDescription} ${game.alphaNote}`,
			image: game.screenshots.map((image) => image.src.src),
			publisher: {
				'@type': 'Organization',
				name: studio.title
			},
			url: game.playLink
		}
	]
};
