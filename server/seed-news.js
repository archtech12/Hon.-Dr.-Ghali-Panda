const mongoose = require('mongoose');
const News = require('./models/News');
require('dotenv').config();

const newsData = [
    {
        title: 'Hassan Hussain Sponsors Education for 30 Orphans',
        content: '<p>Hon. Hassan Shehu Hussain has launched a full sponsorship program for 30 orphaned children from his neighborhood. The comprehensive package covers school fees, uniforms, and educational materials at private schools, ensuring these vulnerable children have access to quality education and a brighter future.</p>',
        category: 'Education',
        imageUrl: '/assets/images/gallery/6-Education/daukar nauyin yara 30.jpg',
        publishDate: '2023-11-15T10:00:00Z',
        excerpt: 'Full sponsorship covering fees and uniforms for 30 orphans launched at Gama residence.',
        author: 'Admin',
        published: true
    },
    {
        title: 'Hotoro Arewa Praises New Clinic and Classrooms',
        content: '<p>Residents of Hotoro Arewa have expressed deep gratitude to Hon. Hassan for the construction of a new Primary Health Care Clinic in Yandodo and a block of 6 classrooms in Ladanai. These infrastructure projects address critical needs in healthcare and education, significantly improving the quality of life for the community.</p>',
        category: 'Infrastructure',
        imageUrl: '/assets/images/gallery/7-Community-Health-Support/HASH PROJECT  art hotoron Arewa yan dodo.jpg',
        publishDate: '2024-04-10T10:00:00Z',
        excerpt: 'Community celebrates new Yandodo Clinic and Ladanai classrooms.',
        author: 'Admin',
        published: true
    },
    {
        title: 'Solar Boreholes Ease Water Crisis in Nassarawa',
        content: '<p>Amidst power outages, Hon. Hassan\'s installation of solar-powered boreholes across Hotoro, Haye, and other areas has been a lifeline. Constituents now have reliable access to clean water independent of the national grid, showcasing the impact of sustainable infrastructure.</p>',
        category: 'Agric & Water',
        imageUrl: '/assets/images/gallery/1-Water-Empowerment/RIJIYOYIN BURTSATSE solar.jpg',
        publishDate: '2025-01-20T10:00:00Z',
        excerpt: 'Solar boreholes provide reliable water access during power outages.',
        author: 'Admin',
        published: true
    },
    {
        title: 'Empowerment Boost: Machines and Support',
        content: '<p>Continuing his massive empowerment drive, Hon. Hassan has distributed a new wave of support items including sewing machines, grinding machines, and motorcycles. This initiative is aimed at fostering self-reliance and boosting the local economy by equipping women and youth with the tools they need to succeed.</p>',
        category: 'Empowerment',
        imageUrl: '/assets/images/gallery/4-Youth-Women-Empowerment/empowers.jpg',
        publishDate: '2025-08-01T10:00:00Z',
        excerpt: 'Distribution of machines and motorcycles to boost local businesses.',
        author: 'Admin',
        published: true
    },
    {
        title: 'Motion for Aminu Kano Hospital Rehabilitation',
        content: '<p>Hon. Hassan raised a critical motion on the floor of the House highlighting the severe shortage of heart surgeons and equipment at Aminu Kano Teaching Hospital. His advocacy has led to the setup of a parliamentary investigative committee to address these gaps and improve healthcare delivery.</p>',
        category: 'Legislative',
        imageUrl: '/assets/images/gallery/0-Portraits-Official/hon standing on speaker reading book.jpg',
        publishDate: '2024-06-15T10:00:00Z',
        excerpt: 'Legislative action to address equipment and staff shortages at AKTH.',
        author: 'Admin',
        published: true
    },
    {
        title: 'Bill for Federal Vocational College Advances',
        content: '<p>A bill sponsored by Hon. Hassan for the establishment of a Federal College of Vocational Skill Acquisition in Yankaba has passed its second reading. This legislation demonstrates his commitment to human capital development and equipping youth with practical skills for the future.</p>',
        category: 'Legislative',
        imageUrl: '/assets/images/gallery/0-Portraits-Official/public pres.jpg',
        publishDate: '2024-02-07T10:00:00Z',
        excerpt: 'Bill for Yankaba Vocational College passes second reading.',
        author: 'Admin',
        published: true
    },
    {
        title: 'Condemnation of Tudun Biri Bombing',
        content: '<p>Hon. Hassan has strongly condemned the tragic bombing incident at Tudun Biri. In a passionate address, he called for immediate justice for the victims and urged the government to take decisive measures to prevent such occurrences in the future.</p>',
        category: 'Legislative',
        imageUrl: '/assets/images/gallery/0-Portraits-Official/potraitn.jpg',
        publishDate: '2023-12-05T10:00:00Z',
        excerpt: 'Strong call for justice and prevention following tragic incident.',
        author: 'Admin',
        published: true
    },
    {
        title: 'Continuity and Gratitude: Voices from Nassarawa',
        content: '<p>"4+4 Insha Allahu" echoes across Nassarawa as residents share testimonials of Hon. Hassan\'s impact. From accessible leadership to tangible infrastructure like street lights and transformers, the community stands united in their support for his continued service.</p>',
        category: 'Politics',
        imageUrl: '/assets/images/gallery/4-Youth-Women-Empowerment/project gathers.jpg',
        publishDate: '2024-09-01T10:00:00Z',
        excerpt: 'Community testimonials highlight infrastructure and leadership impact.',
        author: 'Admin',
        published: true
    }
];

const seed = async () => {
    try {
        const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/ghali-dashboard';
        console.log('Connecting to MongoDB...');
        await mongoose.connect(uri);
        console.log('Connected');

        await News.deleteMany();
        console.log('Cleared existing news');

        await News.insertMany(newsData);
        console.log(`Created ${newsData.length} news entries`);

        await mongoose.connection.close();
        process.exit(0);
    } catch (error) {
        console.error('Error seeding news:', error);
        process.exit(1);
    }
};

seed();
