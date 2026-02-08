const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, 'public', 'assets', 'images', 'gallery');
const outputFile = path.join(__dirname, 'all_images.json');

function getFiles(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return [];

    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const relativePath = path.relative(path.join(__dirname, 'public'), fullPath).replace(/\\/g, '/');
        const stat = fs.statSync(fullPath);

        if (stat && stat.isDirectory()) {
            results = results.concat(getFiles(fullPath));
        } else {
            if (/\.(jpg|jpeg|png|gif)$/i.test(file)) {
                results.push('/' + relativePath);
            }
        }
    });
    return results;
}

const files = getFiles(galleryDir);
fs.writeFileSync(outputFile, JSON.stringify(files, null, 2));
console.log('Images listed to ' + outputFile);
