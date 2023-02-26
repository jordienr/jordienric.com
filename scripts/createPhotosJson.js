// Create a photos.json with all the photos in the photos folder

const fs = require('fs');
const path = require('path');

const photosDir = path.join(__dirname, '../public/photos');
const photosJson = path.join(__dirname, '../public/photos.json');

const photos = fs.readdirSync(photosDir);

const photosJsonContent = JSON.stringify(photos);

fs.writeFileSync(photosJson, photosJsonContent);