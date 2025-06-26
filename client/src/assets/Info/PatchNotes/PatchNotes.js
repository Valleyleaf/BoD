import { v4 as uuidv4 } from 'uuid';

let PatchNotes = [
    {
        id: 0,
        title: "Patch 1.0",
        slug: uuidv4(),
        content: require('./Patch1.0.md'),
        thumbnail: "https://cdn.britannica.com/92/100692-050-5B69B59B/Mallard.jpg",
        date: "11/6/2025",
    },
];

export { PatchNotes }

//Create render-to function that adds articles here. OR create new js for
//each article then render all?
//Create a backend function to upload and update articles to mongoDB?