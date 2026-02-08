const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, 'public', 'assets', 'images', 'gallery');

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
console.log(JSON.stringify(files, null, 2));
