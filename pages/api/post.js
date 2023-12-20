import { connectToDatabase } from "../../lib/mongodb/index";
import { ObjectId } from "mongodb";

let cachedClient = null;

async function getClient() {
  if (!cachedClient) {
    cachedClient = await connectToDatabase();
  }
  return cachedClient;
}

export default async function handler(req, res) {
  try{
       const client = await getClient();
        const dbName = req.query.db;
        const collectionName = req.query.collection;
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const { title , img } = req.body;
          const review = {
           title,
           img
        };
        await collection.insertOne(review);
        res.status(201).json({ message: "Review submitted successfully" });
  }    
  catch(err) {
    console.log(err);
    res.status(500).json("Internal error 500");
  }
}