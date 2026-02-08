const mongoose = require('mongoose');
const Project = require('./models/Project');
require('dotenv').config();

const projects = [
  // --- Infrastructure & Community Development ---
  {
    title: 'Road Construction at Gama and Tudun Wada',
    description: 'Construction of 3 km road to improve accessibility and connectivity within the Gama and Tudun Wada wards.',
    category: 'Infrastructure',
    images: ['/assets/images/gallery/road/Aikin titin Mazabar Gawuna 1.jpg', '/assets/images/gallery/road/Aikin titin Mazabar Gawuna.jpg'],
    status: 'Completed',
    impact: 'Improved access for thousands of residents',
    location: 'Gama and Tudun Wada Wards',
    date: '2024-01-15'
  },
  {
    title: 'Gawuna Ward Road Construction',
    description: 'Construction of a critical 300-meter road segment at Gawuna ward to decongest local traffic.',
    category: 'Infrastructure',
    images: ['/assets/images/gallery/2-Electricity-Infrastructure/Aikin titin Mazabar Gawuna 2.jpg'],
    status: 'Completed',
    impact: 'Reduced traffic congestion',
    location: 'Gawuna Ward',
    date: '2023-11-20'
  },
  {
    title: 'Solar-Powered Boreholes Installation',
    description: 'Drilling and installation of 30 solar-powered boreholes and hand pumps across all 11 wards to provide clean potable water, vital during power outages.',
    category: 'Water',
    images: ['/assets/images/gallery/1-Water-Empowerment/RIJIYOYIN BURTSATSE solar.jpg', '/assets/images/gallery/1-Water-Empowerment/RIJIYOYIN BURTSATSE 1.jpg'],
    status: 'Completed',
    impact: 'Clean water access for 11 wards',
    location: 'Across all 11 Wards',
    date: '2024-02-10'
  },
  {
    title: 'Solar Street Lights Installation',
    description: 'Installation of 1,494 solar street lights across the 11 wards (e.g., 25 in Hotoro City, 10 in Yandodo) to enhance security and visibility.',
    category: 'Infrastructure',
    images: ['/assets/images/gallery/3-Lighting-Energy/streetlight.jpg'],
    status: 'Completed',
    impact: 'Enhanced security and night visibility',
    location: 'Across all 11 Wards',
    date: '2024-04-10'
  },
  {
    title: 'Electric Transformers Installation',
    description: 'Procurement and installation of 3 electric transformers (e.g., Unguwar Kwari) to boost power supply in underserved areas.',
    category: 'Infrastructure',
    images: ['/assets/images/gallery/2-Electricity-Infrastructure/transformer.jpg', '/assets/images/gallery/2-Electricity-Infrastructure/transformer1.jpg'],
    status: 'Completed',
    impact: 'Stable power supply for communities',
    location: 'Unguwar Kwari and Strategic Locations',
    date: '2024-01-20'
  },

  // --- Education Support ---
  {
    title: 'Classroom Blocks at Ladanai',
    description: 'Construction and furnishing of a block of 6 classrooms at Ladanai, Hotoro Arewa, plus additional plans for more blocks to reduce overcrowding.',
    category: 'Education',
    images: ['/assets/images/gallery/6-Education/blocks.jpg'],
    status: 'Completed',
    impact: 'Improved learning environment',
    location: 'Ladanai, Hotoro Arewa',
    date: '2023-09-01'
  },
  {
    title: 'Classroom Block at Tinshama',
    description: 'Construction of a block of 3 classrooms at Tinshama to improve educational infrastructure.',
    category: 'Education',
    images: ['/assets/images/gallery/6-Education/Another 3 classes @ Tinshama community school masallachin Juma\'at.jpg'],
    status: 'Completed',
    impact: 'Better educational facilities',
    location: 'Tinshama Ward',
    date: '2023-11-05'
  },
  {
    title: 'Orphan Sponsorship Program',
    description: 'Full sponsorship for 30 orphans from the neighborhood (school fees, uniforms, books), launched at his residence in Gama.',
    category: 'Education',
    images: ['/assets/images/gallery/6-Education/daukar nauyin yara 30.jpg', '/assets/images/gallery/6-Education/yara 30 karatu.jpg'],
    status: 'Ongoing',
    impact: '30 Orphans fully sponsored',
    location: 'Gama Residence',
    date: '2023-11-01'
  },
  {
    title: 'Tertiary Education Support',
    description: 'Payment of fees for tertiary students (e.g., ₦21,300 for Kano Poly student, NECO/JAMB for hundreds).',
    category: 'Education',
    images: ['/assets/images/gallery/6-Education/tallafi ga dalibar poly.jpg'],
    status: 'Ongoing',
    impact: 'Supporting higher education access',
    location: 'Constituency-wide',
    date: '2024-09-01'
  },
  {
    title: 'Zawiya & Islamiyya Construction',
    description: 'Construction and support for Islamic learning centers (Zawiya) to foster moral and religious education.',
    images: ['/assets/images/gallery/6-Education/ginin zawaya.jpg', '/assets/images/gallery/6-Education/ginin zawuya karatu.jpg', '/assets/images/gallery/6-Education/zawiya da ajujuwa.jpg'],
    category: 'Education',
    status: 'Ongoing',
    impact: 'Quality religious education',
    location: 'Constituency-wide',
    date: '2024-01-01'
  },

  // --- Health & Welfare ---
  {
    title: 'Primary Health Care Clinic',
    description: 'Construction of a new Primary Health Care Clinic at Yandodo, Hotoro Arewa to bring healthcare closer to the people.',
    category: 'Healthcare',
    images: ['/assets/images/gallery/7-Community-Health-Support/HASH PROJECT  art hotoron Arewa yan dodo.jpg', '/assets/images/gallery/7-Community-Health-Support/HASH PROJECT  art hotoron Arewa yan dodo  flag.jpg'],
    status: 'Completed',
    impact: 'Accessible healthcare for residents',
    location: 'Yandodo, Hotoro Arewa',
    date: '2024-03-20'
  },

  // --- Empowerment ---
  {
    title: 'Vehicle Empowerment (Motorcycles & Cars)',
    description: 'Distribution of motorcycles (e.g., 7 in Hotoro Arewa), tricycles, and vehicles (gifted car to secretary) to empower youth and aides.',
    category: 'Empowerment',
    images: ['/assets/images/gallery/4-Youth-Women-Empowerment/babur.jpg', '/assets/images/gallery/4-Youth-Women-Empowerment/car.jpg', '/assets/images/gallery/4-Youth-Women-Empowerment/tricycle.jpg', '/assets/images/gallery/4-Youth-Women-Empowerment/lifan bikes.jpg'],
    status: 'Completed',
    impact: 'Enhanced mobility and jobs',
    location: 'Constituency-wide',
    date: '2024-07-10'
  },
  {
    title: 'Women Empowerment (Sewing & Grinding)',
    description: 'Distribution of sewing machines and grinding machines to women to foster self-reliance and entrepreneurship.',
    category: 'Empowerment',
    images: ['/assets/images/gallery/4-Youth-Women-Empowerment/keken dinki sewing.jpg', '/assets/images/gallery/4-Youth-Women-Empowerment/grinding.jpg', '/assets/images/gallery/4-Youth-Women-Empowerment/injin markade grinding ma.jpg'],
    status: 'Completed',
    impact: 'Women entrepreneurs created',
    location: 'Constituency-wide',
    date: '2024-08-15'
  },
  {
    title: 'Business Capital & Cash Grants',
    description: 'Cash empowerment (e.g., ₦100k to H. Gaje Gama, ₦40k to media team) to support small businesses and individuals.',
    category: 'Empowerment',
    images: ['/assets/images/gallery/4-Youth-Women-Empowerment/hajiya gaje 100k.jpg', '/assets/images/gallery/4-Youth-Women-Empowerment/tallafin 40k to medias.jpg'],
    status: 'Completed',
    impact: 'Direct financial support',
    location: 'Constituency-wide',
    date: '2024-05-20'
  },
  {
    title: 'Digital & Security Empowerment',
    description: 'Distribution of computers to students and support for local security outfits.',
    category: 'Empowerment',
    images: ['/assets/images/gallery/4-Youth-Women-Empowerment/computers.jpg', '/assets/images/gallery/4-Youth-Women-Empowerment/security offer.jpg'],
    status: 'Completed',
    impact: 'Digital literacy and security',
    location: 'Constituency-wide',
    date: '2024-09-10'
  }
];

const seedProjects = async () => {
  try {
    const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ghali-dashboard';
    console.log('Connecting to MongoDB...');
    await mongoose.connect(uri);
    console.log('✅ Connected');

    console.log('Clearing existing projects...');
    await Project.deleteMany({});

    console.log('Inserting new real-world projects...');
    await Project.insertMany(projects);

    console.log(`✅ Successfully seeded ${projects.length} projects`);
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding projects:', error);
    process.exit(1);
  }
};

seedProjects();