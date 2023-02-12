const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://mohan:<mohan>@cluster0.boqvxjr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("bookStore").collection("devices");
  console.log(collection);
  client.close();
});
