const express = require('express');

const app = express();
app.use(express.json())
const password = 'osEmLtNQlJWWqY4p';


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbUser007:osEmLtNQlJWWqY4p@Sj@cluster0.b8lgl.mongodb.net/organicdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("organicdb").collection("products");
  console.log('Allahuakbar')
//   client.close();
});


app.get('/',(req, res)=>{
    res.send('Yaah, it is working..')
})


app.listen(3000);