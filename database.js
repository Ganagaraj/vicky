const { MongoClient } = require("mongodb")
const url = "mongodb+srv://ganagaraj:ganagaraj6209@cluster0.7y2zbmf.mongodb.net/test"
const client = new MongoClient(url);


async function read(data) {

    try {
        await client.connect();
        var result = await client.db("mavens").collection("logins").findOne(data);
        return result;
    } catch (err) {
        console.error("boom:",
            err);
    } finally {
        await client.close();
    }

}

async function add(data) {

    try {
        await client.connect();
        await client.db("mavens").collection("logins").insertOne(data);

    } catch (err) {
        console.error("boom:",
            err);
    } finally {
        await client.close();
		
		System.out.println("CHINNAVAR"); 
    }

}



module.exports = { read, add };