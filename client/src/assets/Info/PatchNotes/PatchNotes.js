import { v4 as uuidv4 } from 'uuid';

let PatchNotes = [
    {
        id: 0,
        title: "Patch 1.0",
        slug: uuidv4(),
        content: "Patch1.0",
        thumbnail: "https://cdn.shopify.com/s/files/1/1570/8351/files/robin-on-branch-royalty-free-image-1567774522_480x480.jpg?v=1729596990",
        date: "11/6/2025",
    },
    {
        id: 1,
        title: "Patch 1.1",
        slug: uuidv4(),
        content: "",
        thumbnail: "https://cdn.shopify.com/s/files/1/1570/8351/files/robin-on-branch-royalty-free-image-1567774522_480x480.jpg?v=1729596990",
        date: "11/6/2025",
    },
];

export { PatchNotes }

//How to render content. From where.
//Other sites (league, dota) will render individual components for each change. Component itself would be easy to make, but how do I pass the information.

//Big arrays? Small objects with few universal properties? Title. Image. Changes. New vs numbers changes. Could work but is it the best way?

//JS files within JS files? Content can be a Patch1.0.js file get's referenced. Inside Patch1.0 I can have the actual list of changes. But how do I make the rendering
//consistent. Dota/League page have categories as well. How would that work. Seperate components for each category. But then how do I get each patch page structure rendered
//without making a million new components for each patch.
///Could do a if! render if category does not apply. Will hide for example the hero changes if there are no hero changes in the patch.