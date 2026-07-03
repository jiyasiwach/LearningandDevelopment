/**
 * Vision Corner content — single source for the /vision scroll experience.
 * Every claim here is confined to what the build brief supplied (sourced from
 * magppie.com / the AI Bot training doc). Do NOT add milestones, dates, or
 * biographical claims without sign-off.
 */

export const VISION_MISSION =
  'Our mission is to transform ordinary homes into wellness homes. Spaces that keep you, your family, and the planet safe.'

export const VISION_FOUNDER = {
  name: 'Vinod Jain',
  title: 'Founder & CEO, Magppie Group',
  photo: '/founder-vinod-jain.jpg',
  /**
   * PLACEHOLDER COPY — pending review by Vinod Sir / Megha Ma'am before this
   * goes live. Do not treat as final; the UI shows a "draft copy" tag while
   * this flag is true.
   */
  noteIsPlaceholder: true,
  note: 'Magppie was built on a simple belief: that people, planet, and profit don’t have to compete with each other — good design can hold all three at once. Every Wellness Kitchen we build carries that same intent: not just a product, but a small part of a larger commitment to health, sustainability, and doing business in a way that gives back more than it takes.',
}

export interface VisionMilestone {
  year: string
  title: string
  detail: string
}

/** Real milestones only — exactly as supplied in the brief. */
export const VISION_TIMELINE: VisionMilestone[] = [
  {
    year: '2000',
    title: 'Magppie launches',
    detail: 'Introducing steel — and later stone-based design — to the Indian market.',
  },
  {
    year: '2007',
    title: 'Going global',
    detail: 'International expansion across 35+ countries; first international retail store opens in Sydney.',
  },
  {
    year: '2023',
    title: 'The Wellness Kitchen',
    detail: 'Launch of the Wellness Kitchen category — the world’s first 100% stone modular kitchen.',
  },
  {
    year: 'Feb 2026',
    title: 'KBIS Innovation Hour, Orlando',
    detail: '“Most Unexpected” honor at KBIS Innovation Hour, alongside Caesarstone and LG.',
  },
]

export const VISION_WHY_STONE = {
  heading: 'Why stone, not wood',
  lines: [
    'Stone kitchens are termite-safe and fungus-safe — problems conventional wood kitchens quietly live with.',
    'They release no formaldehyde into the home.',
    'That is the whole philosophy: materials that protect the people who live with them.',
  ],
}

export const VISION_PROMISE = {
  heading: 'The long-term promise',
  stat: '25 years',
  lines: [
    'Every Wellness Kitchen carries a 25-year unconditional guarantee, with a complimentary service visit every year.',
    'That is the same long-term thinking your training here is meant to build: do the work so well, and stand behind it so completely, that a promise can stretch across decades.',
  ],
}
