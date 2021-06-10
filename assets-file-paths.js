const fs = require('fs');

const getAllFilePaths = (directory, filePaths) => {
    filePaths = filePaths || [];
    const files = fs.readdirSync(directory);

    for (const file of files) {
        const filePath = `${directory}/${file}`;

        if (fs.statSync(filePath).isDirectory()) {
            filePaths = getAllFilePaths(filePath, filePaths);
        } else {
            filePaths.push(filePath.replace('src/', ''));
        }
    }

    return filePaths;
}

fs.writeFileSync('src/assets/file-paths.json', JSON.stringify(getAllFilePaths('src/assets')));
