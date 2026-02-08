const fs = require('fs');
const path = require('path');

const sourceImage = path.join(__dirname, 'public', 'assets', 'images', 'schorlashiphealth.jpg');
const destDir = path.join(__dirname, 'public', 'assets', 'images');

const missingImages = [
    'placeholder_farming.jpg',
    'placeholder_phone.jpg',
    'placeholder_road_2.jpg',
    'placeholder_water.jpg',
    'placeholder_road.jpg',
    'placeholder_light.jpg',
    'placeholder_power.jpg',
    'placeholder_school.jpg',
    'placeholder_students.jpg',
    'placeholder_scholarship.jpg',
    'placeholder_clinic.jpg',
    'placeholder_outreach.jpg'
];

if (fs.existsSync(sourceImage)) {
    missingImages.forEach(image => {
        const destPath = path.join(destDir, image);
        if (!fs.existsSync(destPath)) {
            fs.copyFileSync(sourceImage, destPath);
            console.log(`Created ${image}`);
        } else {
            console.log(`${image} already exists`);
        }
    });
} else {
    console.error('Source image not found:', sourceImage);
    // Fallback: create a 1x1 blank jpg if source fails (minimal header)
    // checking if we can just write a dummy file
    console.log("Attempting to create dummy files...");
    missingImages.forEach(image => {
        const destPath = path.join(destDir, image);
        if (!fs.existsSync(destPath)) {
            fs.writeFileSync(destPath, 'dummy content');
            console.log(`Created dummy ${image}`);
        }
    });
}
