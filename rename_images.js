const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, 'public', 'assets', 'images', 'gallery');

function sanitizeFilename(filename) {
    return filename
        .replace(/\s+/g, '-')       // Replace spaces with -
        .replace(/[^\w\-\.]/g, '')  // Remove non-word chars except - and .
        .toLowerCase();
}

function processDirectory(directory) {
    if (!fs.existsSync(directory)) {
        console.log(`Directory not found: ${directory}`);
        return;
    }

    const files = fs.readdirSync(directory);

    files.forEach(file => {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else {
            const sanitized = sanitizeFilename(file);
            if (file !== sanitized) {
                const newPath = path.join(directory, sanitized);
                fs.renameSync(fullPath, newPath);
                console.log(`Renamed: ${file} -> ${sanitized}`);
            }
        }
    });
}

console.log('Sanitizing filenames in:', galleryDir);
processDirectory(galleryDir);
console.log('Done!');
