const path = require('path');
const fs = require('fs');
const reactDocs = require('react-docgen');

const SRC_PATH = path.join(process.cwd(), 'src');

const docs = {};

function getDocsFromDirectory(directoryPath) {
    const src = fs.readdirSync(directoryPath);
    return src.map(async filename => {
        const filePath = path.join(directoryPath, filename);
        const stats = fs.lstatSync(filePath);
        if (stats.isDirectory()) return;

        const content = fs.readFileSync(filePath);
        try {
            const componentInfo = await reactDocs.parse(content);
            docs[filename.replace('.jsx', '')] = componentInfo;
        } catch (err) {}
    });
}

Promise.all(getDocsFromDirectory(SRC_PATH))
    .then(() =>
        Promise.all(getDocsFromDirectory(path.join(SRC_PATH, 'shapes')))
    )
    .then(() => {
        fs.writeFileSync(
            path.join(process.cwd(), 'example/src/assets/docs.generated.json'),
            JSON.stringify(docs, null, 2)
        );
        process.exit();
    });
