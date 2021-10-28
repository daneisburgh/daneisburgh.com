// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");

const ignoreFiles = [".DS_Store"];

const getAllFilePaths = (directory, filePaths) => {
    filePaths = filePaths || [];
    const files = fs.readdirSync(directory);

    for (const file of files) {
        if (!ignoreFiles.includes(file)) {
            const filePath = `${directory}/${file}`;

            if (fs.statSync(filePath).isDirectory()) {
                filePaths = getAllFilePaths(filePath, filePaths);
            } else {
                filePaths.push(filePath.replace("src/", ""));
            }
        }
    }

    return filePaths;
};

fs.writeFileSync(
    "src/assets/file-paths.json",
    JSON.stringify(getAllFilePaths("src/assets"))
);
