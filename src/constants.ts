import type { Destination, TourPackage, Testimonial, BlogPost, FAQItem } from './types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'manali',
    name: 'Manali',
    state: 'Himachal Pradesh',
    description: 'A gift of the Himalayas to the world, Manali is a beautiful township nestled in the picturesque Beas River valley.',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1510253685831-2ff9721e3d74?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586326162139-4d641ec9f947?q=80&w=800&auto=format&fit=crop'
    ],
    highlights: ['Solang Valley', 'Rohtang Pass', 'Hadimba Temple', 'Old Manali']
  },
  {
    id: 'munnar',
    name: 'Munnar',
    state: 'Kerala',
    description: 'Famous for its tea plantations, Munnar is a serene hill station where three mountain streams meet.',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1498604427760-410e24abd99c?q=80&w=800&auto=format&fit=crop'
    ],
    highlights: ['Tea Gardens', 'Eravikulam National Park', 'Mattupetty Dam', 'Anamudi Peak']
  },
  {
    id: 'shimla',
    name: 'Shimla',
    state: 'Himachal Pradesh',
    description: 'The "Queen of Hill Stations," Shimla is steeped in colonial history and surrounded by cedar forests.',
    image: 'https://images.unsplash.com/photo-1562670222-0cc62094225d?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1596895111956-611882b0c243?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1472739839117-91950e322304?q=80&w=800&auto=format&fit=crop'
    ],
    highlights: ['The Mall Road', 'The Ridge', 'Jakhoo Temple', 'Kalka-Shimla Toy Train']
  },
  {
    id: 'darjeeling',
    name: 'Darjeeling',
    state: 'West Bengal',
    description: 'Known for its world-class tea and the spectacular views of Kanchenjunga, Darjeeling is a timeless treasure.',
    image: 'https://images.unsplash.com/photo-1544430294-754805826f1c?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=800&auto=format&fit=crop'
    ],
    highlights: ['Tiger Hill', 'Batasia Loop', 'Tea Estates', 'Darjeeling Himalayan Railway']
  },
  {
    id: 'gulmarg',
    name: 'Gulmarg',
    state: 'Jammu & Kashmir',
    description: 'The "Meadow of Flowers," Gulmarg is a premier ski resort and home to one of the world\'s highest cable cars.',
    image: 'https://images.unsplash.com/photo-1590740685718-45e3f441460d?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1510253685831-2ff9721e3d74?q=80&w=800&auto=format&fit=crop'
    ],
    highlights: ['Gulmarg Gondola', 'Khilanmarg', 'Alpathar Lake', 'Skiing & Winter Sports']
  },
  {
    id: 'ooty',
    name: 'Ooty',
    state: 'Tamil Nadu',
    description: 'Udhagamandalam, or Ooty, is the ultimate hill station in the Nilgiris, beloved for its botanical gardens and toy train.',
    image: 'https://images.unsplash.com/photo-1620120197282-359f131a473a?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=800&auto=format&fit=crop'
    ],
    highlights: ['Botanical Garden', 'Ooty Lake', 'Doddabetta Peak', 'Nilgiri Mountain Railway']
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    description: 'The Pink City of India, known for its majestic forts, palaces, and vibrant culture.',
    image: 'https://images.unsplash.com/photo-1599661046289-e31899539091?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544243026-6d5392415f33?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=800&auto=format&fit=crop'
    ],
    highlights: ['Amber Fort', 'Hawa Mahal', 'City Palace', 'Jantar Mantar']
  },
  {
    id: 'goa',
    name: 'Goa',
    state: 'Goa',
    description: 'Indias beach capital, offering a blend of Portuguese heritage, golden beaches, and pulsating nightlife.',
    image: 'https://images.unsplash.com/photo-1512789677070-6da39634e9ce?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582234052309-823e20092ade?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1543831801-6c2e434861ae?q=80&w=800&auto=format&fit=crop'
    ],
    highlights: ['Baga Beach', 'Old Goa Churches', 'Dudhsagar Falls', 'Anjuna Flea Market']
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    description: 'One of the oldest living cities in the world, Varanasi is the spiritual heart of India.',
    image: 'https://images.unsplash.com/photo-1561359313-0639aad49ca6?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1561361047-975f7396c429?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=800&auto=format&fit=crop'
    ],
    highlights: ['Ganga Aarti', 'Kashi Vishwanath Temple', 'Sarnath', 'Dashashwamedh Ghat']
  },
  {
    id: 'leh',
    name: 'Leh',
    state: 'Ladakh',
    description: 'A high-altitude desert known for its stunning landscapes, Buddhist monasteries, and adventure trails.',
    image: 'https://images.unsplash.com/photo-1515560597027-35328246ad79?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518563384234-08eb29c8e1ae?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616781296062-817669074ba4?q=80&w=800&auto=format&fit=crop'
    ],
    highlights: ['Pangong Lake', 'Nubra Valley', 'Shanti Stupa', 'Magnetic Hill']
  },
  {
    id: 'andaman',
    name: 'Andaman Islands',
    state: 'Andaman & Nicobar Islands',
    description: 'Pristine white sand beaches, turquoise waters, and thriving coral reefs make this a tropical paradise.',
    image: 'https://images.unsplash.com/photo-1589333011400-058b8f2c0032?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1589196349605-6c706ee979ca?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=800&auto=format&fit=crop'
    ],
    highlights: ['Havelock Island', 'Cellular Jail', 'Radhanagar Beach', 'Scuba Diving']
  },
  {
    id: 'agra',
    name: 'Agra',
    state: 'Uttar Pradesh',
    description: 'Home to the Taj Mahal, Agra is a city steeped in Mughal history and architectural grandeur.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea023?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524492707947-2f85a6e5a31a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1585135497273-1a86b09fe707?q=80&w=800&auto=format&fit=crop'
    ],
    highlights: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri', 'Mehtab Bagh']
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    state: 'Uttarakhand',
    description: 'The "Yoga Capital of the World," offering spiritual retreats, adventure sports, and the holy Ganges.',
    image: 'https://images.unsplash.com/photo-1471447285145-cf800067664c?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1545105511-923f63f29e0c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549463953-b930f30c6a2e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545105511-923f63f29e0c?q=80&w=800&auto=format&fit=crop'
    ],
    highlights: ['Laxman Jhula', 'River Rafting', 'Parmarth Niketan', 'Beatles Ashram']
  },
  {
    id: 'hampi',
    name: 'Hampi',
    state: 'Karnataka',
    description: 'A UNESCO World Heritage site featuring the ruins of the Vijayanagara Empire amidst a boulder-strewn landscape.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=800&auto=format&fit=crop'
    ],
    highlights: ['Virupaksha Temple', 'Vittala Temple', 'Lotus Mahal', 'Matanga Hill']
  },
  {
    id: 'puducherry',
    name: 'Puducherry',
    state: 'Puducherry',
    description: 'A former French colony known for its European charm, colorful streets, and spiritual tranquility at Auroville.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1590733473918-c51727448830?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590733473918-c51727448830?q=80&w=800&auto=format&fit=crop'
    ],
    highlights: ['Promenade Beach', 'Auroville', 'French Quarter', 'Paradise Beach']
  },
  {
    id: 'alleppey',
    name: 'Alleppey',
    state: 'Kerala',
    description: 'The Venice of the East, famous for its calm backwaters, traditional houseboats, and lush paddy fields.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=800&auto=format&fit=crop'
    ],
    highlights: ['Backwater Cruise', 'Alappuzha Beach', 'Marari Beach', 'Punnamada Lake']
  },
  {
    id: 'spiti',
    name: 'Spiti Valley',
    state: 'Himachal Pradesh',
    description: 'A cold desert mountain valley high in the Himalayas, known for its moon-like landscapes and ancient monasteries.',
    image: 'https://images.unsplash.com/photo-1510253685831-2ff9721e3d74?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1510253685831-2ff9721e3d74?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586326162139-4d641ec9f947?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop'
    ],
    highlights: ['Key Monastery', 'Chandratal Lake', 'Pin Valley', 'Kazi Village']
  },
  {
    id: 'shillong',
    name: 'Shillong',
    state: 'Meghalaya',
    description: 'The Scotland of the East, Shillong is a hub of natural beauty, rolling hills, and cascading waterfalls.',
    image: 'https://images.unsplash.com/photo-1544430294-754805826f1c?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544430294-754805826f1c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=800&auto=format&fit=crop'
    ],
    highlights: ['Elephant Falls', 'Shillong Peak', 'Umiam Lake', 'Living Root Bridges']
  },
  {
    id: 'ranthambore',
    name: 'Ranthambore',
    state: 'Rajasthan',
    description: 'One of Northern Indias most famous national parks, known as the best place to see tigers in their natural habitat.',
    image: 'https://images.unsplash.com/photo-1582234052309-823e20092ade?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1582234052309-823e20092ade?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512789677070-6da39634e9ce?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599661046289-e31899539091?q=80&w=800&auto=format&fit=crop'
    ],
    highlights: ['Tiger Safari', 'Ranthambore Fort', 'Padam Talao', 'Surwal Lake']
  },
  {
    id: 'coorg',
    name: 'Coorg',
    state: 'Karnataka',
    description: 'The Coffee County of India, Coorg is a mist-covered hill station with sprawling estates and rich biodiversity.',
    image: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800&auto=format&fit=crop'
    ],
    highlights: ['Abbey Falls', 'Coffee Plantations', 'Talakaveri', 'Dubare Elephant Camp']
  },
  {
    id: 'kutch',
    name: 'Rann of Kutch',
    state: 'Gujarat',
    description: 'A massive salt desert that transforms into a white wonderland under the moonlight, especially during Rann Utsav.',
    image: 'https://images.unsplash.com/photo-1524492707947-2f85a6e5a31a?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1524492707947-2f85a6e5a31a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1585135497273-1a86b09fe707?q=80&w=800&auto=format&fit=crop'
    ],
    highlights: ['White Rann', 'Kutch Museum', 'Kala Dungar', 'Mandvi Beach']
  }
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'himalayan-escape',
    title: 'Himalayan Escape: Manali & Rohtang',
    destinationId: 'manali',
    duration: '5 Days, 4 Nights',
    price: 18500,
    image: 'https://images.unsplash.com/photo-1586326162139-4d641ec9f947?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    difficulty: 'Moderate',
    includes: ['Hotel Stay', 'Breakfast & Dinner', 'Sightseeing Transfers', 'Permits'],
    category: 'Adventure',
    description: 'Explore the gateway to Lahaul and Spiti with a thrilling tour of Manali and the snow-capped Rohtang Pass.'
  },
  {
    id: 'kerla-tea-sojourn',
    title: 'Kerala Tea Sojourn: Munnar Special',
    destinationId: 'munnar',
    duration: '4 Days, 3 Nights',
    price: 15999,
    image: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    difficulty: 'Easy',
    includes: ['Luxury Resort', 'Guided Tea Tour', 'Private Car', 'Daily Meals'],
    category: 'Family',
    description: 'Breathe in the fresh mountain air as you stroll through the emerald tea plantations of Munnar.'
  },
  {
    id: 'kashmir-paradise',
    title: 'Kashmir Paradise: Gulmarg & Beyond',
    destinationId: 'gulmarg',
    duration: '6 Days, 5 Nights',
    price: 24500,
    image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    difficulty: 'Challenging',
    includes: ['Houseboat Stay', 'Gondola Tickets', 'All Meals', 'Expert Local Guide'],
    category: 'Luxury',
    description: 'Experience the valley of flowers and the snowy meadows of Gulmarg in this premium 6-day tour.'
  },
  {
    id: 'royal-rajasthan',
    title: 'Royal Rajasthan: Jaipur & Amer',
    destinationId: 'jaipur',
    duration: '4 Days, 3 Nights',
    price: 12500,
    image: 'https://images.unsplash.com/photo-1599661046289-e31899539091?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    difficulty: 'Easy',
    includes: ['Heritage Hotel', 'Palace Tours', 'Rajput Cuisine', 'Private Guide'],
    category: 'Budget',
    description: 'Immerse yourself in the royalty of the Pink City with guided tours of majestic forts and palaces.'
  },
  {
    id: 'goa-vibe',
    title: 'Goa Vibe: Beaches & Churches',
    destinationId: 'goa',
    duration: '5 Days, 4 Nights',
    price: 9999,
    image: 'https://images.unsplash.com/photo-1512789677070-6da39634e9ce?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    difficulty: 'Easy',
    includes: ['Beachfront Resort', 'Water Sports', 'Heritage Tour', 'Scooter Rental'],
    category: 'Budget',
    description: 'Experience the best of Goa from north to south, including sun-kissed beaches and historic churches.'
  },
  {
    id: 'varanasi-spirit',
    title: 'Spiritual Varanasi: Ghats & Temples',
    destinationId: 'varanasi',
    duration: '3 Days, 2 Nights',
    price: 7500,
    image: 'https://images.unsplash.com/photo-1561359313-0639aad49ca6?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    difficulty: 'Easy',
    includes: ['Temple Accommodation', 'Boat Ride', 'Ganga Aarti', 'Local Food Walk'],
    category: 'Budget',
    description: 'A transformative journey to the spiritual capital of India, witnessing ancient rituals along the Holy Ganges.'
  },
  {
    id: 'andaman-tropical',
    title: 'Andaman Tropical: Havelock Special',
    destinationId: 'andaman',
    duration: '6 Days, 5 Nights',
    price: 29999,
    image: 'https://images.unsplash.com/photo-1589333011400-058b8f2c0032?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    difficulty: 'Easy',
    includes: ['Eco-Luxury Resort', 'Ferry Transfers', 'Snorkeling', 'Island Hopping'],
    category: 'Luxury',
    description: 'Explore the clearest waters in India with a premium island-hopping tour across the Andaman archipelago.'
  },
  {
    id: 'leh-adventure',
    title: 'Ladakh Adventure: Leh & Nubra',
    destinationId: 'leh',
    duration: '7 Days, 6 Nights',
    price: 32500,
    image: 'https://images.unsplash.com/photo-1515560597027-35328246ad79?q=80&w=800&auto=format&fit=crop',
    rating: 5.0,
    difficulty: 'Challenging',
    includes: ['Camping Experience', 'Bike Rentals', 'Permit Assistance', 'Oxygen Support'],
    category: 'Adventure',
    description: 'The ultimate bucket-list road trip through high passes, ancient monasteries, and the cold desert.'
  },
  {
    id: 'agra-day-tour',
    title: 'Agra Express: Taj & Beyond',
    destinationId: 'agra',
    duration: '2 Days, 1 Night',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea023?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    difficulty: 'Easy',
    includes: ['Boutique Stay', 'Sunrise Taj Visit', 'Agra Fort Entry', 'Local Cuisine'],
    category: 'Budget',
    description: 'A perfect weekend getaway to witness the ultimate symbol of love and other Mughal wonders.'
  },
  {
    id: 'rishikesh-spirit',
    title: 'Yoga & Rafting in Rishikesh',
    destinationId: 'rishikesh',
    duration: '4 Days, 3 Nights',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1471447285145-cf800067664c?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    difficulty: 'Moderate',
    includes: ['Ashram Accommodation', 'Rafting Trip', 'Yoga Sessions', 'Satvic Meals'],
    category: 'Adventure',
    description: 'Balance your soul with morning yoga and pump your adrenaline with white-water rafting.'
  },
  {
    id: 'hampi-ruins',
    title: 'Hampi: Stones & Stories',
    destinationId: 'hampi',
    duration: '3 Days, 2 Nights',
    price: 6999,
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    difficulty: 'Easy',
    includes: ['Guesthouse Stay', 'Cycles for Touring', 'History Guide', 'Coracle Ride'],
    category: 'Budget',
    description: 'Step back in time as you explore the sprawling ruins and unique landscapes of the Hampi empire.'
  },
  {
    id: 'puducherry-escape',
    title: 'French Charm: Puducherry Special',
    destinationId: 'puducherry',
    duration: '4 Days, 3 Nights',
    price: 11500,
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    difficulty: 'Easy',
    includes: ['Heritage Villa', 'Auroville Visit', 'French Bakery Tour', 'Beach Transfers'],
    category: 'Family',
    description: 'Enjoy a leisurely vacation in the "Little France" of India, blending serene beaches with spiritual growth.'
  },
  {
    id: 'south-india-temple',
    title: 'Divine South: Madurai & Rameswaram',
    destinationId: 'ooty', // Closest match in current destinations or I could add new ones
    duration: '5 Days, 4 Nights',
    price: 14500,
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    difficulty: 'Easy',
    includes: ['Temple Tour', 'Hotel Stay', 'All Meals', 'Local Guide'],
    category: 'Family',
    description: 'A spiritual journey through the magnificent Dravidian architecture of Southern India\'s most holy cities.'
  },
  {
    id: 'northeast-explorer',
    title: 'Northeast Explorer: Shillong & Kaziranga',
    destinationId: 'darjeeling', // Closest match
    duration: '6 Days, 5 Nights',
    price: 22000,
    image: 'https://images.unsplash.com/photo-1544430294-754805826f1c?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    difficulty: 'Moderate',
    includes: ['Wildlife Safari', 'Hotel Stay', 'Guided Tours', 'Transport'],
    category: 'Adventure',
    description: 'Discover the "Scotland of the East" and witness the majestic one-horned rhinoceros in its natural habitat.'
  },
  {
    id: 'rajasthan-desert',
    title: 'Desert Dream: Jaisalmer Safari',
    destinationId: 'jaipur', // Closest match
    duration: '4 Days, 3 Nights',
    price: 11000,
    image: 'https://images.unsplash.com/photo-1599661046289-e31899539091?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    difficulty: 'Moderate',
    includes: ['Camel Safari', 'Luxury Tents', 'Folk Dance', 'Traditional Food'],
    category: 'Adventure',
    description: 'Experience the magic of the Thar desert with night camping under the stars and traditional Rajasthani hospitality.'
  },
  {
    id: 'alleppey-houseboat',
    title: 'Backwater Bliss: Alleppey Houseboat Stay',
    destinationId: 'alleppey',
    duration: '3 Days, 2 Nights',
    price: 13500,
    image: 'https://images.unsplash.com/photo-1552011614-2792614b87e2?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    difficulty: 'Easy',
    includes: ['Private Houseboat', 'Traditional Kerala Meals', 'Village Walk', 'Sunset Cruise'],
    category: 'Luxury',
    description: 'Surrender to the serenity of Kerala\'s backwaters in a traditional luxury Kettuvallam houseboat.'
  },
  {
    id: 'spiti-odyssey',
    title: 'Spiti Odyssey: High Altiude Adventure',
    destinationId: 'spiti',
    duration: '8 Days, 7 Nights',
    price: 38000,
    image: 'https://images.unsplash.com/photo-1510253685831-2ff9721e3d74?q=80&w=800&auto=format&fit=crop',
    rating: 5.0,
    difficulty: 'Challenging',
    includes: ['4x4 Vehicle', 'Camping Gear', 'Oxygen Support', 'Monastery Guided Tour'],
    category: 'Adventure',
    description: 'A life-changing journey through the high passes and ancient Tibetan culture of Spiti Valley.'
  },
  {
    id: 'meghalaya-clouds',
    title: 'Meghalaya: In the Abode of Clouds',
    destinationId: 'shillong',
    duration: '5 Days, 4 Nights',
    price: 24900,
    image: 'https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    difficulty: 'Moderate',
    includes: ['Cave Exploration', 'Luxury Resort', 'Local Guide', 'Trekking Charges'],
    category: 'Adventure',
    description: 'Witness the living root bridges and the wettest places on earth in the beautiful state of Meghalaya.'
  },
  {
    id: 'ranthambore-wildlife',
    title: 'Tiger Trails: Ranthambore Safari',
    destinationId: 'ranthambore',
    duration: '3 Days, 2 Nights',
    price: 19500,
    image: 'https://images.unsplash.com/photo-1550965007-67c29369d76c?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    difficulty: 'Easy',
    includes: ['Shared Jeep Safari', 'Luxury Jungle Camp', 'All Meals', 'Naturallist Guide'],
    category: 'Family',
    description: 'Embark on a thrilling quest for the Royal Bengal Tiger in the historic hunting grounds of Rajasthani royals.'
  },
  {
    id: 'coorg-coffee-retreat',
    title: 'Coorg: Coffee Plantation Retreat',
    destinationId: 'coorg',
    duration: '3 Days, 2 Nights',
    price: 12800,
    image: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    difficulty: 'Easy',
    includes: ['Estate Stay', 'Coffee Cupping', 'Bird Watching', 'Guided Plantation Walk'],
    category: 'Family',
    description: 'Wake up to the aroma of freshly roasted coffee beans in the mist-laden hills of Karnataka.'
  },
  {
    id: 'kutch-festival',
    title: 'Rann Utsav: The White Desert Carnival',
    destinationId: 'kutch',
    duration: '4 Days, 3 Nights',
    price: 28000,
    image: 'https://images.unsplash.com/photo-1524492707947-2f85a6e5a31a?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    difficulty: 'Easy',
    includes: ['Premium Tents', 'Cultural Programs', 'Kutch Handicraft Tour', 'Local Transport'],
    category: 'Luxury',
    description: 'Experience the vibrant colors of Gujarat against the stark white backdrop of the Great Rann of Kutch.'
  },
  {
    id: 'himalayan-trekking',
    title: 'Himalayan Trekking: Hampta Pass',
    destinationId: 'manali',
    duration: '6 Days, 5 Nights',
    price: 14000,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    difficulty: 'Challenging',
    includes: ['Trekking Gear', 'Camping Meals', 'Professional Instructors', 'Medical Kit'],
    category: 'Adventure',
    description: 'Cross the dramatic crescent-shaped ridge into a different world of rock and ice.'
  },
  {
    id: 'ooty-garden-tour',
    title: 'Ooty: Nilgiri Garden Tour',
    destinationId: 'ooty',
    duration: '3 Days, 2 Nights',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=800&auto=format&fit=crop',
    rating: 4.6,
    difficulty: 'Easy',
    includes: ['Comfort Hotel', 'Toy Train Ride', 'Botanical Garden Entry', 'Local Sightseeing'],
    category: 'Budget',
    description: 'The quintessential southern hill station experience with rolling hills and colonial architecture.'
  },
  {
    id: 'darjeeling-tea-estate',
    title: 'Darjeeling: Heritage Tea Estate Stay',
    destinationId: 'darjeeling',
    duration: '4 Days, 3 Nights',
    price: 26000,
    image: 'https://images.unsplash.com/photo-1544430294-754805826f1c?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    difficulty: 'Easy',
    includes: ['Luxury Heritage Stay', 'Tea Plucking Experience', 'Exclusive Breakfast', 'Car with Driver'],
    category: 'Luxury',
    description: 'Live in a 150-year-old manager\'s bungalow with panoramic views of the Everest range.'
  },
  {
    id: 'shimla-winter-magic',
    title: 'Shimla: Winter Snowy Magic',
    destinationId: 'shimla',
    duration: '5 Days, 4 Nights',
    price: 16500,
    image: 'https://images.unsplash.com/photo-1562670222-0cc62094225d?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    difficulty: 'Moderate',
    includes: ['Heated Rooms', 'Ice Skating Entry', 'Kufri Sightseeing', 'Welcome Drinks'],
    category: 'Family',
    description: 'Rediscover the charm of the Victorian capital of India under a thick blanket of snow.'
  },
  {
    id: 'gulmarg-ski-adventure',
    title: 'Gulmarg: Powder Ski Adventure',
    destinationId: 'gulmarg',
    duration: '4 Days, 3 Nights',
    price: 34500,
    image: 'https://images.unsplash.com/photo-1590740685718-45e3f441460d?q=80&w=800&auto=format&fit=crop',
    rating: 5.0,
    difficulty: 'Challenging',
    includes: ['Skiing Equipment', 'Unlimited Gondola Passes', 'Expert Instructors', 'Spa Session'],
    category: 'Adventure',
    description: 'Shred the world-class powder snow of Apharwat Peak in a skier\'s paradise.'
  },
  {
    id: 'ag-fort-heritage',
    title: 'Agra: Mughal Heritage Immersion',
    destinationId: 'agra',
    duration: '3 Days, 2 Nights',
    price: 9000,
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea023?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    difficulty: 'Easy',
    includes: ['Heritage Hotel', 'Guide with History Background', 'Photography Tour', 'Handicraft Visit'],
    category: 'Budget',
    description: 'Go beyond the Taj and discover the intricate stories hidden within Agra\'s lesser-known monuments.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Anjali Sharma',
    location: 'Mumbai',
    text: 'Our trip to Manali with Budget Trips was absolutely flawless. The guides were professional and the itinerary was perfect!',
    image: 'https://i.pravatar.cc/150?u=anjali',
    rating: 5
  },
  {
    id: 't2',
    name: 'Rahul Varma',
    location: 'Bangalore',
    text: 'Munnar was a dream. The tea plantation tour arranged by the team was very informative. Highly recommend their services.',
    image: '/src/assets/images/regenerated_image_1778913379146.jpg',
    rating: 4.5
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: '10 Things to Pack for your First Himalayan Trip',
    excerpt: 'Heading to the north for the first time? Here is our ultimate packing guide for a comfortable journey.',
    author: 'Sunil K.',
    date: 'May 10, 2024',
    image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=800&auto=format&fit=crop',
    category: 'Travel Tips'
  },
  {
    id: 'b2',
    title: 'Offbeat Hill Stations in Himachal Pradesh',
    excerpt: 'Beyond Manali and Shimla, discover the hidden gems that offer peace and quiet.',
    author: 'Priya M.',
    date: 'April 25, 2024',
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=800&auto=format&fit=crop',
    category: 'Destinations'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How do I book a tour package?',
    answer: 'You can book a tour package directly through our website on the Booking Page or by contacting our customer support team.'
  },
  {
    question: 'Are flights included in the package prices?',
    answer: 'Standard packages typically exclude flights, but we can arrange them for you as an add-on service.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellations made 30 days prior to travel receive a 100% refund. Cancellations between 15-30 days receive a 50% refund.'
  }
];
