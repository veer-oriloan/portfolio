export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  location: string;
  year: string;
  category: string;
  tapeColor: 'blue' | 'red' | 'purple' | 'yellow';
  tapeStyle: 'dual-corner' | 'top-center' | 'top-corner';
  description: string;
  role: string;
  duration: string;
  overview: string;
  problem: string;
  solution: string;
  researchInsights: string[];
  keyFeatures: { title: string; desc: string }[];
  impactMetrics: { label: string; value: string }[];
  accentColor: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'styllrax',
    title: 'Styllrax',
    tagline: 'Trusted Salon & Wellness Booking Platform',
    location: 'DELHI, IN',
    year: '2025',
    category: 'Product Design • Mobile App',
    tapeColor: 'blue',
    tapeStyle: 'dual-corner',
    description:
      'Styllrax is your trusted salon booking app that makes finding, comparing, and booking salons simple and smooth.',
    role: 'Lead Product Designer',
    duration: '6 Months (2025)',
    overview:
      'Styllrax transforms how urban customers discover and book top-rated salons, independent stylists, and wellness centers across Delhi NCR. The goal was to eliminate wait times and opaque service menus.',
    problem:
      'Salon-goers frequently experienced unpredictable wait times, lack of real-time stylist availability, and hidden service charges. Salons suffered high weekend no-show rates exceeding 30%.',
    solution:
      'Engineered an intuitive slot-first scheduling flow with stylist portfolio previews, transparent upfront rate cards, and live queue updates that reduced drop-offs by 45%.',
    researchInsights: [
      '78% of customers prioritize seeing recent work photos of the specific stylist before booking.',
      'Transparent service breakdown and upfront pricing increased completed checkouts by 52%.',
      'Instant calendar sync and SMS reminders dropped no-show rates down to under 6%.',
    ],
    keyFeatures: [
      {
        title: 'Stylist Discovery Radar',
        desc: 'Explore vetted salons by rating, distance, specific haircut/treatment specialties, and verified user photos.',
      },
      {
        title: 'Precision Slot Locking',
        desc: 'Interactive visual timeline allowing customers to select specific 15-minute appointment slots with zero wait time.',
      },
      {
        title: 'Direct Stylist Consultation Notes',
        desc: 'Upload reference hairstyle photos and request custom requirements prior to arriving at the venue.',
      },
    ],
    impactMetrics: [
      { label: 'Booking Time Reduction', value: '45%' },
      { label: 'Verified Bookings', value: '12,000+' },
      { label: 'User Satisfaction', value: '94%' },
      { label: 'Salon Partner Retention', value: '98%' },
    ],
    accentColor: '#2563EB',
  },
  {
    id: 'tripsense',
    title: 'TripSense',
    tagline: 'Intentional Travel & Short Trip Planning Experience',
    location: 'INDIA',
    year: '2026',
    category: 'UX/UI • Travel Tech',
    tapeColor: 'red',
    tapeStyle: 'top-center',
    description:
      'TripSense is a travel planning experience that helps you prioritise what truly matters during short trips.',
    role: 'Solo Product Designer',
    duration: '4 Months (2026)',
    overview:
      'Short weekend getaways often become stressful due to packed spreadsheets and decision paralysis. TripSense prioritizes rhythm, mood, and essential sights over exhaustive checklists.',
    problem:
      'Modern travelers spend 4+ hours piecing together scattered blogs, map pins, and bookings for a 2-day getaway, ending up fatigued and rushing through itineraries.',
    solution:
      'Created a tactile "card-deck" planning interface that caps daily activities by energy levels, automatically calculates transit buffers, and works offline.',
    researchInsights: [
      'Travelers enjoy trips significantly more when scheduled activities are capped at 3 key stops per day.',
      'Offline access to directions and pre-downloaded booking passes was the #1 requested feature.',
      'Mood-based tagging (chill, culinary, scenic, active) sped up group decision-making by 3x.',
    ],
    keyFeatures: [
      {
        title: 'Energy-Based Card Deck',
        desc: 'Visual timeline with dynamic energy indicators to balance high-intensity exploration with relaxing cafe stops.',
      },
      {
        title: 'Transit Buffer Calculator',
        desc: 'Smart distance and traffic calculations tailored to Indian road and taxi realities so users are never rushed.',
      },
      {
        title: 'Offline Pocket Passes',
        desc: 'One-tap access to flight codes, hotel addresses, and emergency contacts accessible without network connection.',
      },
    ],
    impactMetrics: [
      { label: 'Faster Itinerary Creation', value: '3.8x' },
      { label: 'App Store Rating', value: '4.9 ★' },
      { label: 'Trips Planned', value: '8,500+' },
      { label: 'Stress Index Drop', value: '-60%' },
    ],
    accentColor: '#DC2626',
  },
  {
    id: 'goalteller',
    title: 'GoalTeller',
    tagline: 'Automated Wealth Planning & Financial Independence',
    location: 'BENGALURU / REMOTE',
    year: '2026',
    category: 'Product Design • Fintech',
    tapeColor: 'purple',
    tapeStyle: 'top-center',
    description:
      'Simplifying wealth planning, automated goal tracking, and financial independence for modern investors.',
    role: 'Product Design Intern',
    duration: '2026 → Present',
    overview:
      'Collaborating directly with the founders and product engineering team to build next-generation automated financial planning and wealth projection tools.',
    problem:
      'Traditional financial planning tools are laden with dry spreadsheets, complex jargon, and overwhelming tax equations that alienate young professionals.',
    solution:
      'Designed modular, interactive goal cards (Retirement, Home, Travel Fund) with real-time probability simulations and stress-free milestone breakdowns.',
    researchInsights: [
      'Visual progress rings and milestone projections increased weekly engagement by 40%.',
      'Consolidating multi-account net worth into a single glance reduced cognitive anxiety significantly.',
    ],
    keyFeatures: [
      {
        title: 'Visual Goal Simulator',
        desc: 'Drag-and-adjust life goals to see immediate projections of capital requirements and investment timelines.',
      },
      {
        title: 'Modular Portfolio Insights',
        desc: 'Clean, card-based allocation breakdowns comparing equities, debt, gold, and liquid emergency reserves.',
      },
      {
        title: 'Milestone Celebrations',
        desc: 'Tactile micro-interactions and celebration states whenever a user reaches 25%, 50%, or 100% of an investment target.',
      },
    ],
    impactMetrics: [
      { label: 'Active Goal Trackers', value: '25,000+' },
      { label: 'Onboarding Completion', value: '89%' },
      { label: 'User Retention D30', value: '64%' },
      { label: 'Design System Coverage', value: '100%' },
    ],
    accentColor: '#7C3AED',
  },
  {
    id: 'experiments',
    title: 'Other Works & Explorations',
    tagline: 'Branding, 3D Spline, Design Systems & Motion',
    location: 'DELHI, IN',
    year: '2024–2026',
    category: 'Experimental • 3D & Brand',
    tapeColor: 'yellow',
    tapeStyle: 'top-corner',
    description:
      'A collection of brand identity explorations, Framer micro-interactions, 3D Spline models, and design system components.',
    role: 'Visual & Interaction Designer',
    duration: 'Ongoing',
    overview:
      'Every week I explore physical-to-digital skeuomorphism, kinetic typography, tactile web interactions, and 3D product visuals.',
    problem:
      'Modern web design often feels homogenized and flat. Explorations are essential to inject tactile warmth, delight, and depth back into digital experiences.',
    solution:
      'Crafted custom icon sets, dynamic 3D web widgets, responsive design tokens, and playful interaction patterns.',
    researchInsights: [
      'Tactile micro-feedback (subtle shadows, realistic tape, physics) boosts user delight and memorable recall.',
      'Component tokens built directly in code speed up cross-disciplinary delivery.',
    ],
    keyFeatures: [
      {
        title: 'Tactile Paper & Skeuomorphic UI',
        desc: 'Blending physical textures, paper folds, and masking tape with modern high-performance CSS and SVG.',
      },
      {
        title: '3D Spline Interactive Assets',
        desc: 'Real-time 3D spatial models optimized for 60fps web interaction on mobile and desktop.',
      },
      {
        title: 'Motion & Micro-interactions',
        desc: 'Spring physics, magnetic cursors, and delightful state transitions.',
      },
    ],
    impactMetrics: [
      { label: 'Community Clones', value: '1,200+' },
      { label: 'Dribbble Views', value: '45,000+' },
      { label: 'Figma Community Stars', value: '800+' },
      { label: 'Prototypes Built', value: '30+' },
    ],
    accentColor: '#EAB308',
  },
];

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Raghav Jain',
    role: 'Founder',
    company: 'Styllrax',
    quote:
      'Veer has a sharp eye for usability and a strong sense of user-first thinking. His designs are structured, thoughtful, and backed by clear reasoning.',
    initials: 'RJ',
  },
  {
    name: 'Vipin Kumar',
    role: 'Software Development Engineer',
    company: 'Amazon',
    quote:
      'From the very first call, Veer understood exactly what we needed. He delivered a design that was modern, functional, and aligned perfectly with our brand.',
    initials: 'VK',
  },
  {
    name: 'Shivam Ahlawat',
    role: 'Vice President',
    company: 'Quantum World Technologies',
    quote:
      'Veer gave our digital platform a modern, human centered design that immediately resonated with our users.',
    initials: 'SA',
  },
  {
    name: 'Tarun Sharma',
    role: 'Software Development Engineer',
    company: 'Capgemini',
    quote:
      'What impressed me most was how quickly Veer adapted to our workflow. Just amazing!',
    initials: 'TS',
  },
  {
    name: 'Ravi Kishor',
    role: 'SDET',
    company: 'LTIMindtree',
    quote:
      'Veer is the best in his job, bringing precision, purpose, and product thinking to every design decision.',
    initials: 'RK',
  },
];

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  isCurrent?: boolean;
  description: string;
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Product Design Intern',
    company: 'GoalTeller',
    period: '2026 → Now',
    isCurrent: true,
    description:
      'Crafting automated wealth management interfaces, interactive financial goal simulations, and customer journey optimization.',
  },
  {
    role: 'Product Designer',
    company: 'Styllrax',
    period: '2025 → 2026',
    isCurrent: false,
    description:
      'Designed the complete end-to-end mobile consumer experience and salon merchant management portals from concept to launch.',
  },
  {
    role: 'Associate',
    company: 'Envision Tech Sol.',
    period: '2022 → 2025',
    isCurrent: false,
    description:
      'Designed enterprise dashboards, visual brand assets, design systems, and responsive customer-facing web platforms.',
  },
];

export const SKILLS_PILLARS = [
  {
    title: 'Design',
    description:
      'As a UX designer, I create seamless, engaging digital experiences, from complex web platforms to logos and icons. I focus on designing intuitive layouts and interactions, ensuring websites, apps, and digital products are both visually appealing and easy to use.',
  },
  {
    title: 'Building',
    description:
      'I develop websites directly in Framer and modern front-end using clean tools, designing visually appealing layouts and user-friendly experiences. I help founders bring their vision to life quickly, ensuring their website is both functional and engaging.',
  },
  {
    title: 'Enhancing',
    description:
      'I can also enhance your project by creating a cohesive visual identity with consistent colors and typography. Simplify navigation and layouts, incorporate engaging visuals, and use user feedback.',
  },
];

export const SKILLS_LISTS = {
  iDo: [
    'User Research & Testing',
    'Concept, sketches & wireframes',
    'Design mockups',
    'Interactive prototypes',
    'Design systems & assets',
  ],
  iCreate: [
    'Websites & Web Apps',
    'Mobile apps (iOS & Android)',
    'Logotypes & branding',
    'Design systems & UI kits',
    'Micro-interactions & motion',
  ],
  iUse: [
    'Figma & Sketch',
    'Framer',
    'Photoshop & Illustrator',
    'Spline (3D)',
    'Prototyping & animation tools',
    'Tailwind CSS & React',
  ],
};
