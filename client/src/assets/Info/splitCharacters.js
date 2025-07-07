const fs = require('fs');
const path = require('path');

// Adjust the path to Characters.js as needed
const charactersFile = path.join(__dirname, 'client/src/assets/Info/Characters.js');
const commandersDir = path.join(__dirname, 'client/src/assets/Info/Commanders');

// Read Characters.js
const fileContent = fs.readFileSync(charactersFile, 'utf-8');

// Extract the Characters array using a regex
const match = fileContent.match(/let Characters\s*=\s*(\[[\s\S]*?\]);/);
if (!match) {
  console.error('Could not find Characters array!');
  process.exit(1);
}

const charactersArrayString = match[1];

// Safely evaluate the array (use with trusted code only)
const Characters = eval(charactersArrayString);

// Ensure Commanders directory exists
if (!fs.existsSync(commandersDir)) {
  fs.mkdirSync(commandersDir);
}

// Write each character to its own file
Characters.forEach(character => {
  if (!character || !character.title) return;
  const fileName = character.title.replace(/[^a-z0-9]/gi, '_') + '.js';
  const filePath = path.join(commandersDir, fileName);
  const fileData = `const Commander = ${JSON.stringify(character, null, 2)};\nexport default Commander;\n`;
  fs.writeFileSync(filePath, fileData, 'utf-8');
  console.log(`Created: ${fileName}`);
});

//Above is AI generated, not sure if it works.