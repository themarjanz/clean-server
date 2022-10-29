const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

// Warning : Do not use production

// marjan
// j7IBhw9KoGPMOlKe

app.use(cors({
    origin: "*",
}))


app.use(express.json());

const uri = "mongodb+srv://marjan:j7IBhw9KoGPMOlKe@cluster0.jjhtyuc.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {
        await client.connect();
        const servicesCollection = client.db("cleanCo").collection("service");

        app.get("/service", async (req, res) => {
            const services = await servicesCollection.find({}).toArray();
            res.send(services);
        });

    } finally {
    }
}
run().catch(console.dir);


app.get("/", async (req, res) => {
    res.send("Hello World")
});



app.listen(port, () => {
    console.log(`Ami Dowracci port ${port}`);
})