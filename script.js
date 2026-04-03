const games = [
  {
    title: "Dice? No Dice!",
    subtitle: "Roguelike Dice Defense Game",
    status: "Playable Alpha",
    oneLiner: "A roguelike tower defense game where dice rolls decide your strategy and every run plays differently.",
    genres: ["Roguelike", "Strategy", "Tower Defense"],
    tags: ["Dice", "Tactical", "Replayable", "Singleplayer"],
    ctaLabel: "Play Alpha",
    ctaUrl: "https://fenroargames.itch.io/dice-no-dice"
  }
];

const featuredGame = {
  previewImage: {
    src: "Assets/3.png",
    alt: "Dice? No Dice! gameplay showing defenders battling enemies in a lane.",
    caption: "Live combat from a run"
  },
  gallery: [
    {
      src: "Assets/1.png",
      alt: "Dice? No Dice! title screen.",
      caption: "Title screen"
    },
    {
      src: "Assets/2.png",
      alt: "Dice? No Dice! modifier selection screen.",
      caption: "Modifier selection"
    },
    {
      src: "Assets/4.png",
      alt: "Dice? No Dice! upgrade shop screen.",
      caption: "Between-wave upgrades"
    }
  ],
  features: [
    {
      title: "Dice-driven mechanics",
      description: "Upgrade between waves with dice-based systems that force you to balance safety, greed, and momentum."
    },
    {
      title: "Lane defense tactics",
      description: "Cover multiple enemy paths and choose defenders based on where pressure is building across the field."
    },
    {
      title: "Distinct classes",
      description: "Warrior, Archer, and Mage each bring different strengths, limitations, and battlefield control."
    },
    {
      title: "Run-to-run variety",
      description: "Procedural variation and escalating wave pressure make adaptation central to every attempt."
    },
    {
      title: "Positioning matters",
      description: "Success comes from smart placement and timing instead of passive or static defense setups."
    },
    {
      title: "Fast replay loop",
      description: "Quick runs and high replayability make it easy to jump back in and refine your strategy."
    }
  ]
};

const gamesGrid = document.getElementById("games-grid");
const featuresGrid = document.getElementById("features-grid");
const galleryGrid = document.getElementById("gallery-grid");
const previewSurface = document.querySelector(".preview-surface");

function createGameCard(game) {
  const card = document.createElement("article");
  card.className = "game-card reveal";
  card.innerHTML = `
    <div class="game-card-head">
      <div>
        <p class="eyebrow">Published Game</p>
        <h3>${game.title}</h3>
        <p>${game.subtitle}</p>
      </div>
      <span class="game-pill">${game.status}</span>
    </div>
    <p>${game.oneLiner}</p>
    <ul class="feature-list">
      ${game.genres.map((genre) => `<li>${genre}</li>`).join("")}
    </ul>
    <ul class="tag-list">
      ${game.tags.map((tag) => `<li>${tag}</li>`).join("")}
    </ul>
    <div class="hero-actions">
      <a class="button button-secondary" href="${game.ctaUrl}" target="_blank" rel="noreferrer">${game.ctaLabel}</a>
    </div>
  `;
  return card;
}

function createFeatureCard(feature) {
  const card = document.createElement("article");
  card.className = "feature-card reveal";
  card.innerHTML = `
    <p class="eyebrow">Feature</p>
    <h3>${feature.title}</h3>
    <p>${feature.description}</p>
  `;
  return card;
}

function createGalleryCard(image) {
  const card = document.createElement("article");
  card.className = "gallery-card reveal";
  card.innerHTML = `
    <img class="gallery-image" src="${image.src}" alt="${image.alt}" loading="lazy" decoding="async">
    <p class="gallery-caption">${image.caption}</p>
  `;
  return card;
}

games.forEach((game) => gamesGrid.appendChild(createGameCard(game)));
featuredGame.features.forEach((feature) => featuresGrid.appendChild(createFeatureCard(feature)));
featuredGame.gallery.forEach((image) => galleryGrid.appendChild(createGalleryCard(image)));

previewSurface.insertAdjacentHTML(
  "beforeend",
  `
    <div class="preview-image-wrap">
      <img class="preview-image" src="${featuredGame.previewImage.src}" alt="${featuredGame.previewImage.alt}" decoding="async" fetchpriority="high">
    </div>
    <div class="preview-copy">
      <h3>Position defenders. Roll upgrades. Survive the waves.</h3>
      <p>
        Designed around tactical choices, multi-lane pressure, and the tension of deciding
        when to play safe and when to embrace the roll.
      </p>
    </div>
  `
);
