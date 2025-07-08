// const fs = require('fs');
// const path = require('path');

// const commandersFolder = path.join(__dirname, 'Commanders');

// export function joinCommanders() {
//     fs.readdir(commandersFolder, (err, files) => {
//         if (err) {
//             console.error('Error reading the directory:', err);
//             return;
//         }

//         const CommanderFiles = files.filter(file => file.endsWith('.js'));

//         const contentsArray = [];

//         CommanderFiles.forEach(file => {
//             const filePath = path.join(commandersFolder, file);
//             const content = fs.readFileSync(filePath, 'utf-8');
//             contentsArray.push(content);
//         });

//         console.log(contentsArray);
//     });
// }

