const { MongoClient } = require("mongodb");


const client = new MongoClient(process.env.MONGODB_CNN);
async function dbConnection() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
    } catch (err) {
        console.log(err.stack);
    }
}

module.exports = {dbConnection}