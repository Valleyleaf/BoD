import { v4 as uuidv4 } from 'uuid';

let PatchNotes = [
    {
        id: 0,
        title: "Patch 1.0",
        slug: uuidv4(),
        content: require('./Patch1.0.md'),
        thumbnail: "https://cdn.shopify.com/s/files/1/1570/8351/files/robin-on-branch-royalty-free-image-1567774522_480x480.jpg?v=1729596990",
        date: "11/6/2025",
    },
    {
        id: 1,
        title: "Patch 1.1",
        slug: uuidv4(),
        content: require('./Patch1.0.md'),
        thumbnail: "https://cdn.shopify.com/s/files/1/1570/8351/files/robin-on-branch-royalty-free-image-1567774522_480x480.jpg?v=1729596990",
        date: "11/6/2025",
    },
];

export { PatchNotes }

//Create render-to function that adds articles here. OR create new js for
//each article then render all?
//Create a backend function to upload and update articles to mongoDB?