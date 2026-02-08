const fs = require('fs');
const path = require('path');

const missingFiles = [
    'placeholder_scholarship.jpg',
    'placeholder_clinic.jpg',
    'placeholder_outreach.jpg',
    'placeholder_hospital_plan.jpg',
    'placeholder_sewing.jpg',
    'placeholder_cash.jpg',
    'placeholder_farming.jpg',
    'placeholder_transport.jpg',
    'placeholder_phone.jpg',
    'placeholder_road_2.jpg',
    'placeholder_road.jpg',
    'placeholder_power.jpg',
    'placeholder_school.jpg',
    'placeholder_light.jpg',
    'placeholder_water.jpg',
    'placeholder_students.jpg',
    'assets/pattern.png' // This one needs a subdir check
];

const publicDir = path.join(__dirname, '../public');
const assetsImgDir = path.join(publicDir, 'assets/images');
const sourceImage = path.join(publicDir, 'assets/ghaliphoto.jpg'); // existing source

if (!fs.existsSync(assetsImgDir)) {
    fs.mkdirSync(assetsImgDir, { recursive: true });
}

// Ensure source exists for copying (or create a dummy buffer)
let sourceBuffer;
if (fs.existsSync(sourceImage)) {
    sourceBuffer = fs.readFileSync(sourceImage);
} else {
    // Create a 1x1 pixel jpg or check for another
    // searching for any jpg
    console.log('Source image not found, looking for ANY jpg in gallery...');
    // ... logic to find fallback, but for now assuming we might fail if no images.
    // simpler: valid 1x1 pixel transparent gif or just text content for now if image invalid
    // But since these are images, let's try to copy 'apc logo.jpg' if exists
    const backupSource = path.join(publicDir, 'assets/images/gallery/apc logo.jpg');
    if (fs.existsSync(backupSource)) {
        sourceBuffer = fs.readFileSync(backupSource);
    } else {
        console.log("No source image found to copy. Creating dummy text files (browser will still 404/invalid image them but at least file exists)");
        sourceBuffer = Buffer.from("dummy image content");
    }
}

missingFiles.forEach(file => {
    let targetPath;
    if (file.includes('/')) {
        targetPath = path.join(publicDir, file);
    } else {
        targetPath = path.join(assetsImgDir, file);
    }

    const dir = path.dirname(targetPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    if (!fs.existsSync(targetPath)) {
        fs.writeFileSync(targetPath, sourceBuffer);
        console.log(`Created: ${file}`);
    } else {
        console.log(`Exists: ${file}`);
    }
});
