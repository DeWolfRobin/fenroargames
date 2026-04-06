import logo from '../assets/site/FenroarGames_logo_320.png';
import screenshot1 from '../assets/site/1.png';
import screenshot2 from '../assets/site/2.png';
import screenshot3 from '../assets/site/3.png';
import screenshot4 from '../assets/site/4.png';

export const studio = {
	title: 'FenroarGames',
	tagline: 'Systems built to bite back',
	description:
		'FenroarGames is an indie game studio focused on strategy games with self-composed music and collaborative art production. Discover Dice? No Dice!, a playable alpha roguelike dice defense game.',
	heroTitle: 'Strategy games with pressure, replayability, and authored feel.',
	heroNotes: ['Play the alpha', 'Join the Discord', 'Follow development'],
	identityStatements: ['System-driven games', 'Replayability first', 'Design through mechanics'],
	philosophy: ['Mechanics over fluff', 'Clarity over complexity', 'Systems that evolve', 'Readable pressure, meaningful risk'],
	process: ['Public development', 'Community-driven feedback', 'Iterative releases', 'Music and game feel developed together'],
	logo
};

export const socialGroups = [
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

export const game = {
	title: 'Dice? No Dice!',
	subtitle: 'Roguelike Dice Defense Game',
	status: 'Playable Alpha',
	oneLiner:
		'A roguelike tower defense game where dice rolls decide your strategy and every run plays differently.',
	shortDescription:
		'Dice? No Dice! is a roguelike dice defense game where positioning, upgrades, and risky rolls shape every run. Choose your lane, adapt to enemy paths, and survive increasingly difficult waves.',
	alphaNote:
		'The current build is a playable alpha. The art and music are still temporary while the final visual direction and original soundtrack continue to take shape.',
	fullDescription: [
		'Dice? No Dice! is a strategic roguelike tower defense game built around risk, adaptation, and decision-making.',
		'Enemies approach through multiple paths, and it is up to you to position your defenders wisely. Each class has unique strengths and limitations, with some dominating a single lane while others control the entire field.',
		'Between waves, you will upgrade your build using dice-based mechanics, gaining advantages, taking risks, and shaping your strategy for the run ahead. No two runs are the same, and every decision matters.'
	],
	features: [
		'Dice-driven upgrades and mechanics',
		'Strategic lane-based defense system',
		'Multiple defender classes including Warrior, Archer, and Mage',
		'Procedural runs with high replayability',
		'Risk versus reward decision-making',
		'Increasing difficulty with varied enemy waves'
	],
	featureSteps: [
		{
			label: 'Core loop',
			title: 'Place, defend, survive',
			description: 'Set defenders, hold lanes, and stretch each run one wave further.',
			visualTitle: 'Core loop',
			visualNote: 'Lane defense under pressure'
		},
		{
			label: 'Dice mechanic',
			title: 'Roll for power spikes',
			description: 'Dice outcomes push your build into safer lines or risky pivots.',
			visualTitle: 'Dice system',
			visualNote: 'Chance reshapes the run'
		},
		{
			label: 'Strategy layer',
			title: 'Read paths, place with intent',
			description: 'Pathing and positioning decide whether a lane stabilizes or collapses.',
			visualTitle: 'Placement',
			visualNote: 'Every tile matters'
		},
		{
			label: 'Variation',
			title: 'Classes and modifiers stack differently',
			description: 'Class roles, modifiers, and upgrades keep each attempt structurally different.',
			visualTitle: 'Variation',
			visualNote: 'New runs, new pressure'
		}
	],
	screenshots: [
		{ src: screenshot1, alt: 'Dice? No Dice! title screen', caption: 'Title screen' },
		{ src: screenshot2, alt: 'Dice? No Dice! modifier selection screen', caption: 'Modifier selection' },
		{ src: screenshot3, alt: 'Dice? No Dice! lane combat gameplay', caption: 'Combat snapshot' },
		{ src: screenshot4, alt: 'Dice? No Dice! upgrade screen', caption: 'Between-wave upgrades' }
	],
	playLink: 'https://fenroargames.itch.io/dice-no-dice'
};

export const projects = [
	{
		title: 'Dice? No Dice!',
		descriptor: 'Dice defense alpha',
		status: 'Playable now',
		visual: game.screenshots[2],
		href: game.playLink
	},
	{
		title: 'Project Ember Path',
		descriptor: 'Tactical prototype',
		status: 'In exploration',
		visual: game.screenshots[1]
	},
	{
		title: 'Project Hollow Signal',
		descriptor: 'System-first concept',
		status: 'Early design',
		visual: game.screenshots[3]
	}
] as const;

export const schema = {
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'Organization',
			name: studio.title,
			logo: studio.logo.src,
			sameAs: socialGroups.flatMap((group) => group.links.map((link) => link.href))
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
