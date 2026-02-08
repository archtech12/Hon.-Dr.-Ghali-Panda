const fs = require('fs');
const path = require('path');

// Correct source path: public/assets/schorlashiphealth.jpg
const sourceImage = path.join(__dirname, 'public', 'assets', 'schorlashiphealth.jpg');
const imagesDir = path.join(__dirname, 'public', 'assets', 'images');
const assetsDir = path.join(__dirname, 'public', 'assets');

const missingImagesInImagesDir = [
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

// ghaliphoto.jpg is expected in public/assets/ based on the error URL /assets/ghaliphoto.jpg
// (Next.js public folder maps to /)
const missingImagesInAssetsDir = [
    'ghaliphoto.jpg'
];

function restore() {
    if (!fs.existsSync(sourceImage)) {
        console.error('Source image not found at:', sourceImage);
        console.log('Listing public/assets content:');
        try {
            console.log(fs.readdirSync(assetsDir));
        } catch (e) {
            console.log('Could not list assets dir');
        }
        return;
    }

    console.log('Restoring images...');

    // Restore images in public/assets/images/
    if (!fs.existsSync(imagesDir)) {
        fs.mkdirSync(imagesDir, { recursive: true });
    }

    missingImagesInImagesDir.forEach(image => {
        const destPath = path.join(imagesDir, image);
        if (!fs.existsSync(destPath)) {
            fs.copyFileSync(sourceImage, destPath);
            console.log(`Created public/assets/images/${image}`);
        } else {
            console.log(`public/assets/images/${image} already exists`);
        }
    });

    // Restore images in public/assets/
    missingImagesInAssetsDir.forEach(image => {
        const destPath = path.join(assetsDir, image);
        if (!fs.existsSync(destPath)) {
            fs.copyFileSync(sourceImage, destPath);
            console.log(`Created public/assets/${image}`);
        } else {
            console.log(`public/assets/${image} already exists`);
        }
    });
}

restore();
