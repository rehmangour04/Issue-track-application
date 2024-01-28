/** @format */
require("dotenv").config();

const MongoClient = require("mongodb").MongoClient;

const url = process.env.MONGO_URL;

async function getEmpData() {
  let client = await MongoClient.connect(url);
  let connection = client.db("issueTracker"); // Establish connection
  return connection.collection("IssueTracker2023"); // creating a collection and naming it also
}

module.exports = getEmpData;

//mongodb+srv://Rehman1234:<password>@cluster5.gwxoqtq.mongodb.net/?retryWrites=true&w=majority
