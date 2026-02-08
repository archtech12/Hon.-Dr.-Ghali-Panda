const mongoose = require('mongoose');
const Project = require('./models/Project');
require('dotenv').config();

const projects = [
    // --- Employment & Offers ---
    {
        title: 'Nigerian Army Recruitment Offer',
        description: 'Facilitating recruitment offers and slots for constituents into the Nigerian Army to reduce unemployment and serve the nation.',
        category: 'Security',
        images: ['/assets/images/gallery/4-Youth-Women-Empowerment/offer-army.jpg'],
        status: 'Completed',
        date: '2024'
    },
    {
        title: 'Kano Poly Admission Offer (Kabo)',
        description: 'Securing admission offers for students at Kano State Polytechnic (Kabo Campus) to advance their education.',
        category: 'Education',
        images: ['/assets/images/gallery/1-Water-Empowerment/3-Lighting-Energy/offer-at-poly-kabo.jpg'],
        status: 'Completed',
        date: '2024'
    },
    {
        title: 'General Empowerment Offer',
        description: 'Special empowerment offers distributed to youth and women groups to support their livelihoods.',
        category: 'Empowerment',
        images: ['/assets/images/gallery/4-Youth-Women-Empowerment/offer-to-yoth-and-women.jpg'],
        status: 'Completed',
        date: '2024'
    },
    {
        title: 'Security Personnel Support Offer',
        description: 'Offers of support and equipment to local security personnel to boost morale and operational efficiency.',
        category: 'Security',
        images: ['/assets/images/gallery/4-Youth-Women-Empowerment/security-offer.jpg'],
        status: 'Completed',
        date: '2024'
    },

    // --- Empowerment: Vehicles & Mobility ---
    {
        title: 'Lifan Motorcycle Distribution',
        description: 'Distribution of brand new Lifan motorcycles to youth leaders and supporters to enhance mobility and economic independence.',
        category: 'Empowerment',
        images: ['/assets/images/gallery/4-Youth-Women-Empowerment/lifan-bikes.jpg', '/assets/images/gallery/4-Youth-Women-Empowerment/babur.jpg', '/assets/images/gallery/4-Youth-Women-Empowerment/boska-mortocycle.jpg'],
        status: 'Completed',
        date: 'Jul 2024'
    },
    {
        title: 'Tricycle (Keke NAPEP) Empowerment',
        description: 'Empowerment of constituents with tricycles (Keke NAPEP) to provide a sustainable source of income and transport services.',
        category: 'Empowerment',
        images: ['/assets/images/gallery/4-Youth-Women-Empowerment/tricycle.jpg'],
        status: 'Completed',
        date: 'Jul 2024'
    },
    {
        title: 'Vehicle Gift to Secretary',
        description: 'Presentation of a vehicle to the prompt and hardworking secretary as a token of appreciation for dedicated service.',
        category: 'Empowerment',
        images: ['/assets/images/gallery/4-Youth-Women-Empowerment/car.jpg'],
        status: 'Completed',
        date: 'Jul 2024'
    },

    // --- Empowerment: Skills & Trades ---
    {
        title: 'Sewing Machine Distribution',
        description: 'Massive distribution of sewing machines to women and tailors across the constituency to boost local fashion businesses.',
        category: 'Empowerment',
        images: ['/assets/images/gallery/4-Youth-Women-Empowerment/keken-dinki-sewing.jpg', '/assets/images/gallery/4-Youth-Women-Empowerment/sewing-machine-dinki.jpg'],
        status: 'Completed',
        date: 'Aug 2024'
    },
    {
        title: 'Grinding Machine Distribution',
        description: 'Provision of grinding machines to women groups to support small-scale food processing businesses.',
        category: 'Empowerment',
        images: ['/assets/images/gallery/4-Youth-Women-Empowerment/grinding.jpg', '/assets/images/gallery/4-Youth-Women-Empowerment/injin-markade-grinding-ma.jpg'],
        status: 'Completed',
        date: 'Aug 2024'
    },

    // --- Empowerment: Financial & Educational ---
    {
        title: 'Computer Empowerment for Students',
        description: 'Distribution of laptops and computers to students to aid in their digital literacy and academic research.',
        category: 'Education',
        images: ['/assets/images/gallery/4-Youth-Women-Empowerment/computers.jpg'],
        status: 'Completed',
        date: 'Sep 2024'
    },
    {
        title: '₦300k Grant to TUWAQSA',
        description: 'A token of ₦300,000 presented to the Tudunwada Quarters Students Association (TUWAQSA) to support their activities.',
        category: 'Education',
        images: ['/assets/images/gallery/4-Youth-Women-Empowerment/token-of-three-hundred-thousand-naira-300000-presented-to-tudunwada-quarters-students-association-tuwaqsa.jpg'],
        status: 'Completed',
        date: '2024'
    },
    {
        title: 'Polytechnic Student Sponsorship',
        description: 'Financial support and educational offers presented to students at Kano State Polytechnic.',
        category: 'Education',
        images: ['/assets/images/gallery/6-Education/tallafi-ga-dalibar-poly.jpg'],
        status: 'Ongoing',
        date: '2024'
    },
    {
        title: 'Classroom Furniture Donation',
        description: 'Donation of seat benches to Improve the learning environment in local schools.',
        category: 'Education',
        images: ['/assets/images/gallery/4-Youth-Women-Empowerment/class-seat-benches.jpg'],
        status: 'Completed',
        date: '2024'
    },
    {
        title: 'Cash Grant to Hajiya Gaje',
        description: 'Empowerment grant of ₦100,000 presented to Hajiya Gaje Gama to boost her business.',
        category: 'Empowerment',
        images: ['/assets/images/gallery/4-Youth-Women-Empowerment/hajiya-gaje-100k.jpg', '/assets/images/gallery/4-Youth-Women-Empowerment/ttallafi-ga-mace.jpg'],
        status: 'Completed',
        date: 'May 2024'
    },
    {
        title: 'Support for Media Team',
        description: 'Financial support of ₦40,000 each to members of the media team for their data and logistics.',
        category: 'Empowerment',
        images: ['/assets/images/gallery/4-Youth-Women-Empowerment/40k-to-medias.jpg', '/assets/images/gallery/4-Youth-Women-Empowerment/tallafin-40k-to-medias.jpg'],
        status: 'Completed',
        date: '2024'
    },

    // --- Infrastructure: Water & Power ---
    {
        title: 'Solar Powered Boreholes',
        description: 'Installation of advanced solar-powered boreholes to ensure 24/7 water supply regardless of electricity status.',
        category: 'Water',
        images: ['/assets/images/gallery/1-Water-Empowerment/rijiyoyin-burtsatse-solar.jpg'],
        status: 'Completed',
        date: '2024'
    },
    {
        title: 'Hand Pump Borehole Repairs',
        description: 'Rehabilitation of hand pump boreholes across various wards to restore water access.',
        category: 'Water',
        images: ['/assets/images/gallery/1-Water-Empowerment/rijiyoyin-burtsatse-1.jpg'],
        status: 'Completed',
        date: 'Jan 2024'
    },
    {
        title: 'Solar Street Lights',
        description: 'Extensive installation of solar street lights to light up streets and improve night-time security.',
        category: 'Infrastructure',
        images: ['/assets/images/gallery/1-Water-Empowerment/3-Lighting-Energy/streetlight.jpg', '/assets/images/gallery/1-Water-Empowerment/3-Lighting-Energy/streetlights.jpg'],
        status: 'Completed',
        date: '2024'
    },
    {
        title: 'Transformer Installation',
        description: 'Installation of new transformers to boost electricity distribution in the constituency.',
        category: 'Infrastructure',
        images: ['/assets/images/gallery/2-Electricity-Infrastructure/transformer.jpg', '/assets/images/gallery/2-Electricity-Infrastructure/transformer1.jpg'],
        status: 'Completed',
        date: '2024'
    },
    {
        title: 'Solar Panels for Institutions',
        description: 'Provision of solar panels to support power needs in public institutions.',
        category: 'Infrastructure',
        images: ['/assets/images/gallery/1-Water-Empowerment/3-Lighting-Energy/solar-panels.jpg'],
        status: 'Completed',
        date: '2024'
    },

    // --- Infrastructure: Roads & Buildings ---
    {
        title: 'Gawuna Ward Road Project',
        description: 'Ongoing construction work on the Gawuna Ward road to improve access.',
        category: 'Infrastructure',
        images: ['/assets/images/gallery/2-Electricity-Infrastructure/aikin-titin-mazabar-gawuna.jpg', '/assets/images/gallery/2-Electricity-Infrastructure/aikin-titin-mazabar-gawuna-1.jpg', '/assets/images/gallery/2-Electricity-Infrastructure/aikin-titin-mazabar-gawuna-2.jpg'],
        status: 'Ongoing',
        date: '2024'
    },
    {
        title: 'Road Construction Inspection',
        description: 'Hon. HASH inspecting road construction projects, ensuring quality and speed (Hon. in Caterpillar).',
        category: 'Infrastructure',
        images: ['/assets/images/gallery/road/hon-in-caterpilla.jpg', '/assets/images/gallery/road/kwalta.jpg', '/assets/images/gallery/road/titi.jpg'],
        status: 'Ongoing',
        date: '2024'
    },
    {
        title: 'Yandodo Primary Health Centre',
        description: 'Construction of the Primary Health Care Clinic in Yandodo, Hotoro Arewa.',
        category: 'Healthcare',
        images: ['/assets/images/gallery/7-Community-Health-Support/hash-project-art-hotoron-arewa-yan-dodo.jpg', '/assets/images/gallery/7-Community-Health-Support/hash-project-art-hotoron-arewa-yan-dodo-flag.jpg'],
        status: 'Completed',
        date: 'Mar 2024'
    },
    {
        title: 'Tinshama School Expansion',
        description: 'Construction of an additional block of 3 classrooms at Tinshama Community School.',
        category: 'Education',
        images: ['/assets/images/gallery/6-Education/another-3-classes--tinshama-community-school-masallachin-jumaat.jpg'],
        status: 'Completed',
        date: '2023'
    },
    {
        title: 'Zawiya & Islamiyya Construction',
        description: 'Ongoing construction of Zawiya and Islamiyya blocks for religious education.',
        category: 'Education',
        images: ['/assets/images/gallery/6-Education/zawiya-da-ajujuwa.jpg', '/assets/images/gallery/7-Community-Health-Support/ginin-zawaya.jpg', '/assets/images/gallery/7-Community-Health-Support/ginin-zawuya-karatu.jpg'],
        status: 'Ongoing',
        date: '2024'
    },

    // --- Community & Social ---
    {
        title: 'Orphan Sponsorship (30 Children)',
        description: 'Full educational sponsorship including fees and uniforms for 30 orphans.',
        category: 'Education',
        images: ['/assets/images/gallery/6-Education/daukar-nauyin-yara-30.jpg', '/assets/images/gallery/6-Education/yara-30-karatu.jpg'],
        status: 'Ongoing',
        date: 'Nov 2023'
    },
    {
        title: 'Ramadan Relief: Rice & Cash',
        description: 'Distribution of rice bags and monetary support to families during Ramadan.',
        category: 'Community',
        images: ['/assets/images/gallery/5-Agriculture-Food-Support/tallafin-bags-of-rice-ramadan.jpg', '/assets/images/gallery/5-Agriculture-Food-Support/rice-and-cash-ramadan.jpg'],
        status: 'Completed',
        date: 'Mar 2024'
    },
    {
        title: 'Support for Security Outfits',
        description: 'Providing support to local security outfits to help safeguard the community.',
        category: 'Security',
        images: ['/assets/images/gallery/4-Youth-Women-Empowerment/security-offer.jpg'],
        status: 'Completed',
        date: '2024'
    },
    {
        title: 'Official Visit to Tudun Wada',
        description: 'Official visit to engage with the Tudun Wada community and assess needs.',
        category: 'Community',
        images: ['/assets/images/gallery/0-Portraits-Official/ziyara-tudun-wada.jpg'],
        status: 'Completed',
        date: '2024'
    },
    {
        title: 'Meeting with Governor Abba K. Yusuf',
        description: 'Strategic meeting with Governor Abba Kabir Yusuf to discuss constituency development.',
        category: 'Political',
        images: ['/assets/images/gallery/0-Portraits-Official/hon-with-gov-abba-k.jpg'],
        status: 'Completed',
        date: '2024'
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
