const fs = require('fs').promises;
const ExifParser = require('exif-parser');
const images = require('../public/photos.json');

const newJson = []

images.forEach(imgName => {
    const path = `public/photos/${imgName}`;
    const prodPath = `/photos/${imgName}`;
    fs.readFile(path).then(data => {
        const parser = ExifParser.create(data);

        parser.enableBinaryFields(true);
        parser.enableTagNames(true);
        parser.enableImageSize(true);
        parser.enableReturnTags(true);

        const img = parser.parse();
        newJson.push({ ...img, path: prodPath, name: imgName });

        fs.writeFile('public/exif.json', JSON.stringify(newJson, null, 2));
    });
})


