export const SITE = {
  name: 'xsuccessx.com',
  title: 'XSuccessX • Master X.com • Elite Creator Guide & Resources',
  description:
    'XSuccessX — The definitive guide to mastering x.com as the world\'s premier real-time information platform. Creator Studio, Live Studio, Super Grok via Premium+, pro tips, and strategies for creators of every genre.',
  url: 'https://xsuccessx.com',
  locale: 'en_US',
  author: 'Desert Rich',
  email: 'sales@desertrich.com',
  datePublished: '2026-07-08',
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: '5554beff-77c5-45b1-fc4c-94df48b10000',
  liveStudioImageId: '0b9956fc-edda-4b2e-d4fb-b50aeb635e00',
  superGrokImageId: 'f0181327-1447-403f-a8ff-19a1acd40400',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const HERO_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);
export const LIVE_STUDIO_IMAGE = cfImageUrl(CF_IMAGES.liveStudioImageId);
export const SUPER_GROK_IMAGE = cfImageUrl(CF_IMAGES.superGrokImageId);
export const OG_IMAGE = HERO_IMAGE;

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('xsuccessx.com Domain Acquisition Inquiry')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring xsuccessx.com.\n\nIntended use:\nBudget range:\n\nThank you.')}`;

export const X_BLUE = '#1d9bf0';
