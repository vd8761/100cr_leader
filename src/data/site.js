/* Shared content + real links, pulled from the 100crleader.com v2.4 page. */

export const LINKS = {
  linkedinNewsletter:
    'https://www.linkedin.com/newsletters/the-100-crore-leader-7277973005513711616/',
  spotifyShow: 'https://open.spotify.com/show/69llhW3MIL0jcAhifH8cAE?si=6c7d2e84693e42f1',
  whatsapp: 'https://chat.whatsapp.com/IIsHlWiCOee3eubtKP3U4r',
  youtube: 'https://www.youtube.com/@elevatewithbharathiraja',
  instagram: 'https://www.instagram.com/elevatewithbharathiraja',
  originbi: 'https://originbi.com',
  email: 'mailto:bharathiraja@originbi.com',
};

/* Hero / brand ticker phrases. */
export const TICKER = [
  'From Breakeven to 100 Crore',
  'Newsletter · Podcast · Book',
  'Building Leaders. Creating Opportunities.',
  'Bharathiraja Thangappalam',
  'Reflect Leadership Workshop',
  'OriginBI - AI Role Fitment',
];

/* Featured podcast episodes (real titles from the Spotify show). */
export const EPISODES = [
  {
    episode: 1,
    title: 'Why Most Founders Never Break the 5 Crore Ceiling',
    desc: 'The invisible wall that keeps good founders stuck - and the single mindset shift that breaks it.',
    total: '18:20', current: '00:00', progress: 0,
  },
  {
    episode: 2,
    title: 'The 100 Cr Leader Identity - Who You Must Become',
    desc: "Scaling isn't a business problem first. It's a leadership identity problem. Here's how to close the gap.",
    total: '21:05', current: '00:00', progress: 0,
  },
  {
    episode: 3,
    title: 'Hiring Right the First Time - What AI Sees That You Miss',
    desc: 'The role fitment conversation founders avoid - and why it costs them years, not months.',
    total: '16:48', current: '00:00', progress: 0,
  },
];

/* The book. */
export const BOOK_FEATURES = [
  { title: 'The 100 Cr Framework', desc: 'The exact thinking model for scaling without chaos.' },
  { title: 'Real Case Studies', desc: 'Founders who crossed breakeven - and what shifted.' },
  { title: 'Leader Identity', desc: 'Build who you need to become, not just what you need to do.' },
  { title: '90-Day Playbook', desc: 'Turn insight into execution - starting Monday.' },
];

/* Newsletter promises. */
export const NEWSLETTER_PROMISES = [
  'Weekly breakdown of one founder growth challenge',
  'Curated content from YouTube, Podcast, and Instagram',
  'Early access to book chapters and workshop spots',
  'Free. Always.',
];

/* Three initiatives. */
export const INITIATIVES = [
  {
    tag: 'Platform',
    title: 'OriginBI',
    desc: 'AI-powered role fitment, leadership assessment, and technical screening. Stop hiring on gut. Start hiring on intelligence.',
    cta: 'Book a Demo',
    href: LINKS.originbi,
  },
  {
    tag: 'Workshop',
    title: 'Reflect Leadership Workshop',
    desc: 'For CXOs, students, and corporate employees. A mirror, not a seminar. Walk in with questions. Walk out with a plan.',
    cta: 'Book a Workshop',
    href: '#speaking',
  },
  {
    tag: 'Content',
    title: 'YouTube · Instagram · Spotify',
    desc: 'Weekly videos, daily insights, and podcast conversations. Pick the format that works for you - the ideas stay the same.',
    cta: 'Watch & Listen',
    href: 'https://www.youtube.com/@elevatewithbharathiraja',
  },
];

/* Speaking topics. */
export const SPEAKING_TOPICS = [
  { n: 'I', text: 'From Breakeven to 100 Crore - the founder scaling framework' },
  { n: 'II', text: 'The Reflect Leadership Model - lead yourself before you lead others' },
  { n: 'III', text: 'Hiring for Fitment - how AI rewrites the talent conversation' },
  { n: 'IV', text: 'Career Clarity - finding your direction in a noisy world (students)' },
  { n: 'V', text: 'Building a Culture That Scales - what founders get wrong about teams' },
];

export const SPEAKING_AUDIENCES = ['CXOs', 'MBA Students', 'Corporates', 'Founders', 'Colleges'];

export const SPEAKING_TYPES = [
  'Keynote Speaking',
  'Reflect Workshop - CXO',
  'Reflect Workshop - Students',
  'Reflect Workshop - Corporate',
  'OriginBI Platform Demo',
  'Book Early Access',
  'Podcast / Interview',
];

/* "Pre-order the Book" (FinalCTA) jumps to the booking form and presets the
   "What for?" dropdown to this value — must match an entry in SPEAKING_TYPES. */
export const BOOK_ACCESS_TOPIC = 'Book Early Access';
export const BOOKING_PREFILL_EVENT = 'booking-prefill';
