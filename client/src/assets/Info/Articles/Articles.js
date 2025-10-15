import { v4 as uuidv4 } from 'uuid';

let Articles = [
    {
        id: 0,
        title: "Coming Soon",
        slug: uuidv4(),
        content: "Articles are coming soon. Stay tuned. Don't hit read more. It just breaks.",
        thumbnail: "https://i.imgur.com/SgTOOTo.jpeg",
        author: "KingIRat",
        date: "11/6/2025",
    }
];

export { Articles }

//Create render-to function that adds articles here. OR create new js for
//each article then render all?
//Create a backend function to upload and update articles to mongoDB?