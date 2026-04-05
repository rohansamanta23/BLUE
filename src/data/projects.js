export const ONGOING_PROJECTS = [
  {
    id:       1,
    title:    'Whitefield Tech Park Phase 3',
    desc:     '6-storey commercial complex with full MEP systems and green building certification.',
    client:   'Prestige Group',
    location: 'Bengaluru',
    deadline: 'Dec 2025',
    progress: 72,
    status:   'In Progress',
    image:    'https://res.cloudinary.com/projectbackendrohan/image/upload/v1775378069/20251012_183450_cw53xd.jpg',
  },
  {
    id:       2,
    title:    'NH-44 Flyover Expansion',
    desc:     'Structural widening and extension of a 2.4 km highway flyover near Tumkur Road.',
    client:   'NHAI',
    location: 'Karnataka',
    deadline: 'Mar 2026',
    progress: 45,
    status:   'In Progress',
    image:    'https://res.cloudinary.com/projectbackendrohan/image/upload/v1775378069/20251012_183450_cw53xd.jpg',
  },
  {
    id:       3,
    title:    'Mysuru Industrial Warehouse',
    desc:     '100,000 sq.ft steel-frame warehouse with automated fire suppression and solar rooftop.',
    client:   'Confidential',
    location: 'Mysuru',
    deadline: 'Jun 2025',
    progress: 88,
    status:   'Near Completion',
    image:    'https://res.cloudinary.com/projectbackendrohan/image/upload/v1775378069/20251012_183450_cw53xd.jpg',
  },
]

export const PAST_PROJECTS = [
  {
    id:       1,
    title:    'Hebbal Metro Depot',
    category: 'Civil & Structural',
    year:     '2023',
    image:    'https://res.cloudinary.com/projectbackendrohan/image/upload/v1775384542/20251028_150727_yen3jb.jpg',
  },
  {
    id:       2,
    title:    'Kochi Port Terminal',
    category: 'MEP & Infrastructure',
    year:     '2022',
    image:    'https://res.cloudinary.com/projectbackendrohan/image/upload/v1775384429/IMG_20230214_204812_pakuo3.jpg',
  },
  {
    id:       3,
    title:    'Hyderabad Data Centre',
    category: 'MEP · Electrical',
    year:     '2022',
    image:    'https://res.cloudinary.com/projectbackendrohan/image/upload/v1775384420/IMG_20220205_135402_nh50m0.jpg',
  },
  {
    id:       4,
    title:    'Pune Expressway Bridge',
    category: 'Structural Engineering',
    year:     '2021',
    image:    'https://res.cloudinary.com/projectbackendrohan/image/upload/v1775384420/IMG_20220630_181816_yah8gn.jpg',
  },
  {
    id:       5,
    title:    'Chennai IT Campus',
    category: 'Civil & Interior',
    year:     '2021',
    image:    'https://res.cloudinary.com/projectbackendrohan/image/upload/v1775384419/IMG_20221002_232904_gpjpzl.jpg',
  },
  {
    id:       6,
    title:    'Mangaluru Port Expansion',
    category: 'Infrastructure',
    year:     '2020',
    image:    'https://res.cloudinary.com/projectbackendrohan/image/upload/v1775384418/IMG-20240327-WA0011_t2uysp.jpg',
  },
  {
    id:       7,
    title:    'Hosur Auto Plant',
    category: 'Industrial · MEP',
    year:     '2020',
    image:    'https://res.cloudinary.com/projectbackendrohan/image/upload/v1775384418/IMG_20230422_212018_ckiphw.jpg',
  },
  {
    id:       8,
    title:    'Goa Luxury Resort',
    category: 'Civil · Plumbing',
    year:     '2019',
    image:    'https://res.cloudinary.com/projectbackendrohan/image/upload/v1775378077/IMG_20250516_180938_wgvzwn.jpg',
  },
]

// All past project titles joined for the marquee ticker
export const MARQUEE_ITEMS = PAST_PROJECTS.map(p => p.title)