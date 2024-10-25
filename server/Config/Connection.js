import {MongoClient, ServerApiVersion} from "mongodb"

//Sets up connection via env file. Sets paramiters.
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri, {
    serverApi:{
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

//Checks to ensure connection.
try{
    await client.connect();
    await client.db("admin").command({ ping: 1});
    console.log("Ping successfull. DB connected");
} catch(err){
    console.error(err);
}

//States client.
let db = client.db("Commanders");

export default db;