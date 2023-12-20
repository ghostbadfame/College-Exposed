import { connectToDatabase } from "../../lib/mongodb/index";
import { ObjectId } from "mongodb";

// Predefine the client connection to avoid connecting for every request
let cachedClient = null;

async function getClient() {
  if (!cachedClient) {
    cachedClient = await connectToDatabase();
  }
  return cachedClient;
}

export default async function handler(req, res) {
  try {
    const client = await getClient();
    const dbName = req.query.db;
    const collectionName = req.query.collection;
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    switch (req.method) {
      case "POST": {
        if (dbName === "avg-reviews") {
          const { totalRating, totalCount } = req.body;
          const filter = {}; // An empty filter object to update all documents in the collection
          const update = { $set: { rating: totalRating, count: totalCount } };
          const options = { upsert: true };
          await collection.updateMany(filter, update, options);
        } else {
          const { rating, comment, userName, imgUrl } = req.body;
          const review = {
            rating: Number(rating),
            comment,
            userName,
            imgUrl,
          };
          await collection.insertOne(review);
        }
        res.status(201).json({ message: "Review submitted successfully" });
        break;
      }
      case "DELETE": {
        const id = new ObjectId(req.query.id);
        await collection.deleteOne({ _id: id });
        res.status(200).json({ message: "Document deleted successfully" });
        break;
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}