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
    image:    'https://res.cloudinary.com/projectbackendrohan/image/upload/v1775448576/istockphoto-473249046-612x612_qemnyd.jpg',
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
    image:    'https://res.cloudinary.com/projectbackendrohan/image/upload/v1775448576/images_f2xzib.jpg',
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
    image:    'https://res.cloudinary.com/projectbackendrohan/image/upload/v1775448261/WhatsApp_Image_2026-04-05_at_11.24.53_PM_m4rurk.jpg',
  },
]

export const PAST_PROJECTS = [
  {
    id:       1,
    title:    'Hebbal Metro Depot',
    category: 'Civil & Structural',
    year:     '2023',
    image:    'https://res.cloudinary.com/projectbackendrohan/image/upload/v1775448262/WhatsApp_Image_2026-04-05_at_11.26.48_PM_lviisv.jpg',
  },
  {
    id:       2,
    title:    'Kochi Port Terminal',
    category: 'MEP & Infrastructure',
    year:     '2022',
    image:    'https://res.cloudinary.com/projectbackendrohan/image/upload/v1775448261/WhatsApp_Image_2026-04-05_at_11.27.13_PM_krn69x.jpg',
  },
  {
    id:       3,
    title:    'Hyderabad Data Centre',
    category: 'MEP · Electrical',
    year:     '2022',
    image:    'https://res.cloudinary.com/projectbackendrohan/image/upload/v1775448261/WhatsApp_Image_2026-04-05_at_11.25.56_PM_kaemye.jpg',
  },
  {
    id:       4,
    title:    'Pune Expressway Bridge',
    category: 'Structural Engineering',
    year:     '2021',
    image:    'https://res.cloudinary.com/projectbackendrohan/image/upload/v1775448261/WhatsApp_Image_2026-04-05_at_11.26.16_PM_nkl1ln.jpg',
  },
  {
    id:       5,
    title:    'Chennai IT Campus',
    category: 'Civil & Interior',
    year:     '2021',
    image:    'https://res.cloudinary.com/projectbackendrohan/image/upload/v1775448261/WhatsApp_Image_2026-04-05_at_11.26.37_PM_ltx1rn.jpg',
  },
  {
    id:       6,
    title:    'Mangaluru Port Expansion',
    category: 'Infrastructure',
    year:     '2020',
    image:    'https://res.cloudinary.com/projectbackendrohan/image/upload/v1775448261/WhatsApp_Image_2026-04-05_at_11.24.48_PM_zz7si3.jpg',
  },
  {
    id:       7,
    title:    'Hosur Auto Plant',
    category: 'Industrial · MEP',
    year:     '2020',
    image:    'https://res.cloudinary.com/projectbackendrohan/image/upload/v1775448261/WhatsApp_Image_2026-04-05_at_11.26.09_PM_zooy2c.jpg',
  },
  {
    id:       8,
    title:    'Goa Luxury Resort',
    category: 'Civil · Plumbing',
    year:     '2019',
    image:    'https://res.cloudinary.com/projectbackendrohan/image/upload/v1775448260/WhatsApp_Image_2026-04-05_at_11.26.57_PM_sdb5ab.jpg',
  },
]

// All past project titles joined for the marquee ticker
export const MARQUEE_ITEMS = PAST_PROJECTS.map(p => p.title)