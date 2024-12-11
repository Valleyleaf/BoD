import {MongoClient, ServerApiVersion} from "mongodb"
import dotenv from "dotenv";

dotenv.config();
console.log("ATLAS_URI from .env:", process.env.ATLAS_URI);
console.log("Working directory:", process.cwd());
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
    console.log("Ping successful. DB connected");
} catch(err){
    console.error("Error connecting to the database:", err.message);
    process.exit(1);
} finally {
    await client.close();
}

let db = client.db("Commanders");

export default db;