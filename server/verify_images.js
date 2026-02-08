const fs = require('fs');
const path = require('path');

// Extract image paths from a simplified version of the seed data file content
// Since I can't easily import the array from the seed file without module.exports (it's not exported there),
// I'll regex it or just copy the paths I know are there.
// Actually, I can read the seed file and use regex to find all paths.

const seedFile = path.join(__dirname, 'seed-real-projects.js');
const content = fs.readFileSync(seedFile, 'utf8');
const regex = /'\/assets\/[^']+'/g;
const matches = content.match(regex);

if (!matches) {
    console.log('No image paths found in seed file.');
    process.exit(1);
}

const paths = matches.map(m => m.replace(/'/g, ''));
const publicDir = path.join(__dirname, '../public');

console.log(`Checking ${paths.length} image paths...`);

let missingCount = 0;
paths.forEach(p => {
    const fullPath = path.join(publicDir, p);
    if (!fs.existsSync(fullPath)) {
        console.error(`❌ Missing: ${p}`);
        missingCount++;
        // Create dummy file for missing
        const dir = path.dirname(fullPath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

        // Copy a placeholder or create a dummy file
        try {
            const source = path.join(publicDir, 'assets', 'ghaliphoto.jpg');
            if (fs.existsSync(source)) {
                fs.copyFileSync(source, fullPath);
                console.log(`   ✅ Created placeholder for: ${p}`);
            } else {
                fs.writeFileSync(fullPath, 'dummy content');
                console.log(`   ⚠️ Created dummy text file for: ${p} (source missing)`);
            }
        } catch (err) {
            console.error(`   Failed to create placeholder: ${err.message}`);
        }
    } else {
        // console.log(`✅ Found: ${p}`);
    }
});

if (missingCount === 0) {
    console.log('✅ All images exist!');
} else {
    console.log(`⚠️ Fixed ${missingCount} missing images with placeholders.`);
}
