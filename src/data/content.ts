export const destinations = [
  {
    name: "Bodh Gaya",
    subtitle: "Where enlightenment was attained",
    description:
      "Beneath the sacred Bodhi Tree, Prince Siddhartha became the Buddha. The Mahabodhi Temple still radiates the stillness of that dawn.",
    highlights: ["Mahabodhi Temple", "The Bodhi Tree", "Monastic Circuit", "Sunrise Meditation"],
    image: "/images/mahabodhi-1.jpg",
    lat: 24.6959,
    lng: 84.9911,
  },
  {
    name: "Rajgir",
    subtitle: "The hills where the Buddha taught",
    description:
      "Ringed by five sacred hills, Rajgir holds the Vulture's Peak, where the Buddha delivered some of his most profound teachings.",
    highlights: ["Vulture's Peak", "Venuvana Monastery", "Hot Springs", "Cable Car to Shanti Stupa"],
    image: "/images/mahabodhi-2.jpg",
    lat: 25.0299,
    lng: 85.4199,
  },
  {
    name: "Nalanda",
    subtitle: "The world's first great university",
    description:
      "Scholars from across Asia once walked these red-brick halls. Nalanda remains a monument to knowledge as a spiritual pursuit.",
    highlights: ["Nalanda Ruins", "Archaeological Museum", "Xuanzang Memorial", "Ancient Library Site"],
    image: "/images/bodhitree.jpg",
    lat: 25.1358,
    lng: 85.4436,
  },
  {
    name: "Vaishali",
    subtitle: "The Buddha's last teachings",
    description:
      "A city of democratic councils and quiet groves, where the Buddha announced his approaching parinirvana.",
    highlights: ["Ashoka Pillar", "Relic Stupa", "Kolhua Grove", "Coronation Tank"],
    image: "/images/mahabodhi-1.jpg",
    lat: 25.9833,
    lng: 85.1333,
  },
  {
    name: "Kushinagar",
    subtitle: "Where the Buddha entered parinirvana",
    description:
      "In a grove of sal trees, the Buddha's earthly journey ended. A reclining statue marks the site with profound serenity.",
    highlights: ["Mahaparinirvana Temple", "Ramabhar Stupa", "Reclining Buddha", "Sal Grove"],
    image: "/images/mahabodhi-2.jpg",
    lat: 26.7411,
    lng: 83.8899,
  },
  {
    name: "Lumbini",
    subtitle: "The birthplace of the Buddha",
    description:
      "Across the border in Nepal, the Maya Devi Temple marks the exact spot of Buddha's birth beside the sacred pond.",
    highlights: ["Maya Devi Temple", "Ashoka Pillar", "Sacred Pond", "World Peace Pagoda"],
    image: "/images/bodhitree.jpg",
    lat: 27.4833,
    lng: 83.2767,
  },
  {
    name: "Sarnath",
    subtitle: "The first sermon",
    description:
      "In the Deer Park at Sarnath, the Buddha set the Wheel of Dharma in motion, delivering his first teaching.",
    highlights: ["Dhamek Stupa", "Deer Park", "Archaeological Museum", "Mulagandha Kuti Vihar"],
    image: "/images/mahabodhi-1.jpg",
    lat: 25.3811,
    lng: 83.0219,
  },
  {
    name: "Varanasi",
    subtitle: "The eternal city on the Ganges",
    description:
      "One of the world's oldest living cities, where fire and water meet at dawn in a ceremony older than memory.",
    highlights: ["Ganga Aarti", "Sunrise Boat Ride", "Ancient Ghats", "Silk Weaving Quarter"],
    image: "/images/mahabodhi-2.jpg",
    lat: 25.3176,
    lng: 82.9739,
  },
];

export const journeyDays = [
  { day: 1, title: "Arrival in Delhi", location: "Delhi", description: "Arrive in Delhi and settle into a heritage luxury property. An evening welcome ceremony with a gentle introduction to the path ahead.", activities: ["Private airport transfer", "Welcome ceremony", "Orientation dinner"], stay: "Heritage Luxury Hotel, Delhi" },
  { day: 2, title: "Journey to Bodh Gaya", location: "Bodh Gaya", description: "Fly into Bodh Gaya, the heart of the pilgrimage. First sight of the Mahabodhi Temple at golden hour.", activities: ["Private flight transfer", "Evening temple visit", "Candlelight meditation"], stay: "Luxury Retreat, Bodh Gaya" },
  { day: 3, title: "Beneath the Bodhi Tree", location: "Bodh Gaya", description: "A full day devoted to the site of enlightenment — sunrise meditation, monastery visits and quiet reflection.", activities: ["Sunrise meditation", "Monastic circuit walk", "Guided dharma talk"], stay: "Luxury Retreat, Bodh Gaya" },
  { day: 4, title: "Rajgir & Vulture's Peak", location: "Rajgir", description: "Ascend to Vulture's Peak by cable car, walking the path where the Buddha once taught above the valley.", activities: ["Vulture's Peak ascent", "Venuvana Monastery", "Hot spring visit"], stay: "Luxury Retreat, Rajgir" },
  { day: 5, title: "Nalanda's Ancient Halls", location: "Nalanda", description: "Wander the red-brick ruins of the world's first university, and reflect on knowledge as a spiritual path.", activities: ["Nalanda ruins tour", "Archaeological museum", "Afternoon yoga session"], stay: "Luxury Retreat, Rajgir" },
  { day: 6, title: "Vaishali's Quiet Groves", location: "Vaishali", description: "Visit the Ashoka Pillar and the Kolhua Grove, tracing the Buddha's final journey and teachings.", activities: ["Ashoka Pillar visit", "Relic stupa", "Village artisan encounter"], stay: "Luxury Retreat, Vaishali" },
  { day: 7, title: "Kushinagar's Sacred Silence", location: "Kushinagar", description: "Sit before the reclining Buddha at the Mahaparinirvana Temple, in the sal grove where his earthly journey ended.", activities: ["Mahaparinirvana Temple", "Ramabhar Stupa", "Evening chanting with monks"], stay: "Luxury Retreat, Kushinagar" },
  { day: 8, title: "Crossing to Lumbini", location: "Lumbini", description: "Cross into Nepal to the birthplace of the Buddha, visiting the Maya Devi Temple and sacred pond.", activities: ["Maya Devi Temple", "Sacred pond ceremony", "World Peace Pagoda"], stay: "Luxury Retreat, Lumbini" },
  { day: 9, title: "Sarnath's First Sermon", location: "Sarnath", description: "Walk the Deer Park where the Wheel of Dharma first turned, and visit the towering Dhamek Stupa.", activities: ["Dhamek Stupa", "Deer Park walk", "Museum visit"], stay: "Luxury Retreat, Varanasi" },
  { day: 10, title: "Varanasi at Dawn", location: "Varanasi", description: "A sunrise boat ride along the Ganges, followed by an immersion into the city's silk-weaving heritage.", activities: ["Sunrise boat ride", "Handloom & silk weaving visit", "Ghat walk"], stay: "Luxury Retreat, Varanasi" },
  { day: 11, title: "Evening Aarti & Reflection", location: "Varanasi", description: "Witness the Ganga Aarti fire ceremony, and gather for a closing circle reflecting on the journey walked.", activities: ["Ganga Aarti ceremony", "Closing reflection circle", "Farewell dinner"], stay: "Luxury Retreat, Varanasi" },
  { day: 12, title: "Departure", location: "Varanasi / Delhi", description: "A final morning of quiet meditation before private transfer to the airport for onward travel.", activities: ["Morning meditation", "Private airport transfer"], stay: "—" },
];

export const wellnessSchedule = [
  { time: "6:00 AM", activity: "Morning Yoga", description: "Gentle hatha flow overlooking the sacred sites" },
  { time: "7:30 AM", activity: "Guided Meditation", description: "Silent sitting practice with a resident teacher" },
  { time: "8:30 AM", activity: "Breakfast", description: "Vegetarian cuisine, freshly prepared" },
  { time: "10:00 AM", activity: "Sightseeing & Pilgrimage", description: "Guided visits to temples and heritage sites" },
  { time: "1:00 PM", activity: "Lunch & Rest", description: "Light vegetarian fare, quiet time" },
  { time: "4:00 PM", activity: "Mindfulness Session", description: "Walking meditation or breathwork" },
  { time: "7:00 PM", activity: "Dinner", description: "Communal evening meal" },
  { time: "8:30 PM", activity: "Cultural Program", description: "Monk chanting, music or storytelling" },
];

export const experiences = [
  { title: "Meditation Beneath the Bodhi Tree", description: "Sit in silence at the exact site of enlightenment, guided by a resident monk.", image: "/images/bodhitree.jpg" },
  { title: "Sunrise Yoga Sessions", description: "Gentle practice as the temple spires catch the first light.", image: "/images/mahabodhi-1.jpg" },
  { title: "Monastic Chanting", description: "An evening of ancient chant shared with monastery residents.", image: "/images/mahabodhi-2.jpg" },
  { title: "Village Handloom Weaving", description: "Meet artisans keeping centuries-old weaving traditions alive.", image: "/images/bodhitree.jpg" },
  { title: "Silk Weaving of Varanasi", description: "Witness master weavers at work in the silk quarter.", image: "/images/mahabodhi-1.jpg" },
  { title: "Ayurvedic Wellness", description: "Traditional healing rituals to restore balance and calm.", image: "/images/mahabodhi-2.jpg" },
  { title: "Private Spiritual Guidance", description: "One-on-one conversation with your personal spiritual guide.", image: "/images/bodhitree.jpg" },
  { title: "Traditional Music Evenings", description: "Classical Indian music performed under open skies.", image: "/images/mahabodhi-1.jpg" },
];

export const packageIncludes = [
  "Luxury Heritage Hotels", "Private Airport Transfers", "All Vegetarian Meals", "Personal Spiritual Guide",
  "Daily Meditation Sessions", "Daily Yoga Practice", "Private Luxury Vehicle", "All Monument Entry Tickets",
  "Mineral Water Throughout", "All Applicable Taxes", "Traditional Music Evenings", "Handloom Weaving Experience",
];

export const testimonials = [
  { name: "Aiko Tanaka", country: "Japan", quote: "A journey that changed the quiet architecture of my mind. Every detail, considered.", rating: 5 },
  { name: "Somchai Suwannarat", country: "Thailand", quote: "I have visited these sites before, but never with such reverence and grace in the arrangements.", rating: 5 },
  { name: "Helena Richter", country: "Germany", quote: "Luxury travel that never once felt indulgent — only intentional, calm and deeply honest.", rating: 5 },
  { name: "Michael Bennett", country: "USA", quote: "The guides carried more wisdom than any book could. I left transformed.", rating: 5 },
  { name: "Dilani Perera", country: "Sri Lanka", quote: "Every step retraced with such care. I felt I was truly walking history.", rating: 5 },
  { name: "Charlotte Wilson", country: "Australia", quote: "The most meaningful two weeks of my life — a pilgrimage in every sense of the word.", rating: 5 },
];

export const faqs = [
  { q: "What is included in the 12-day retreat price?", a: "Luxury accommodation, all vegetarian meals, private transport, a personal spiritual guide, daily yoga and meditation, all entry tickets, and cultural experiences are included." },
  { q: "Is this journey suitable for beginners to meditation?", a: "Yes. Our guides gently welcome practitioners of every level, from complete beginners to advanced meditators." },
  { q: "What is the best time of year to travel?", a: "October through March offers the most comfortable weather for pilgrimage and outdoor practice." },
  { q: "Can the itinerary be customised?", a: "Yes, private departures can be tailored in pace, accommodation tier and areas of spiritual focus." },
  { q: "What type of accommodation should I expect?", a: "Carefully selected luxury and heritage properties near each sacred site, chosen for comfort, service and quiet atmosphere." },
  { q: "Do you accommodate dietary requirements?", a: "All meals are vegetarian by design; vegan, gluten-free and other requirements can be accommodated with advance notice." },
];

export const whyCards = [
  { title: "Luxury Accommodation", description: "Handpicked heritage and luxury stays beside every sacred site." },
  { title: "Mindfulness", description: "A pace designed for reflection, never rush." },
  { title: "Yoga", description: "Daily practice led by experienced teachers." },
  { title: "Meditation", description: "Guided sittings at the world's most sacred grounds." },
  { title: "Private Guide", description: "A personal spiritual guide throughout your journey." },
  { title: "Authentic Culture", description: "Genuine encounters with monks, artisans and communities." },
  { title: "Luxury Transport", description: "Private vehicles for a seamless, serene passage." },
  { title: "Vegetarian Cuisine", description: "Thoughtfully prepared meals honouring tradition." },
];
