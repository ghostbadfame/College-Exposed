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

        const id = new ObjectId(req.query.id);
        const result = await collection.findOne({ _id: id });
        res.status(200).json(result);
  }    
  catch(err) {
    console.log(err);
    res.status(500).json("Internal error 500");
  }
}