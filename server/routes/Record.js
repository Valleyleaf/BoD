import express from "express";

import db from "../Config/Connection";

import {ObjectID} from "mongodb";

const router = express.Router();


router.get("/", async (req, res) => {
    //Get collection, convert items to array.
    let collection = await db.collection('records');
    let results = await collection.find({}).toArray();
    if (!result) res.send("Collection not found").status(404);
    else res.send(results).status(200);
});


router.get('/:id', async (req, res) => {
    //Get individual items from collection.
    let collection = await db.collection('records');
    let query = { _id: new ObjectID(req.params.id)};
    let result = await collection.findOne(query);

    if (!result) res.send("Commander ID not found").status(404);
    else res.send(result).status(200);
});

router.post('/', async (req, res) =>{
    //Replace below with proper paramiters.
    try {
        let newDocument = {
            name: req.body.name,
            title: req.body.title,
            thumbnail: req.body.thumbnail,
            thumbnailAlt: req.body.thumbnailAlt,
            image: req.body.image,
            description: req.body.description,
            lore: req.body.lore,
            primaryStat: req.body.primaryStat,
            stats: req.body.stats,
            faction: req.body.faction,
            roles: req.body.roles,
            //Make sure below can pull properly. They are their own objects.
            ability0: req.body.ability0,
            ability1: req.body.ability1,
            ability2: req.body.ability2,
            ability3: req.body.ability3,
            ability4: req.body.ability4
        };
        let collection = await db.collection("Commanders");
        let result = await collection.insertOne(newDocument);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding Commander");
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectID(req.params.id)}
        const updates = {
            $set: {
                name: req.body.name,
                title: req.body.title,
                thumbnail: req.body.thumbnail,
                thumbnailAlt: req.body.thumbnailAlt,
                image: req.body.image,
                description: req.body.description,
                lore: req.body.lore,
                primaryStat: req.body.primaryStat,
                stats: req.body.stats,
                faction: req.body.faction,
                roles: req.body.roles,
                //Make sure below can pull properly. They are their own objects.
                ability0: req.body.ability0,
                ability1: req.body.ability1,
                ability2: req.body.ability2,
                ability3: req.body.ability3,
                ability4: req.body.ability4
            },
        };

        let collection = await db.collection("Commanders");
        let result = await collection.updateOne(query, updates);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating Commander")
    }
});

router.delete("./:id", async (req, res) => {
    try {
        const query = { _id: new ObjectID(req.params.id)};
        const updates = {
            $set: {
                name: req.body.name,
                title: req.body.title,
                thumbnail: req.body.thumbnail,
                thumbnailAlt: req.body.thumbnailAlt,
                image: req.body.image,
                description: req.body.description,
                lore: req.body.lore,
                primaryStat: req.body.primaryStat,
                stats: req.body.stats,
                faction: req.body.faction,
                roles: req.body.roles,
                //Make sure below can pull properly. They are their own objects.
                ability0: req.body.ability0,
                ability1: req.body.ability1,
                ability2: req.body.ability2,
                ability3: req.body.ability3,
                ability4: req.body.ability4
            },
        };
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating (Del) Commander");
    }
});