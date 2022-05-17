require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

// modddleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hkk7c.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    // Collection
    const serviceCollection = client
      .db("doctors_portal")
      .collection("services");

    //   All Data Services Load=========>>>>
    app.get("/service", async (req, res) => {
      const services = await serviceCollection.find({}).toArray();
      res.send(services);
    });
  } finally {
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello From Doctor Uncle!");
});

app.listen(PORT, () => {
  console.log(`Doctors App listening on port ${PORT}`);
});
