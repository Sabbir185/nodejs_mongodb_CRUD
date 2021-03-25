const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


const password = 'osEmLtNQlJWWqY4p';


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbUser007:osEmLtNQlJWWqY4p@cluster0.b8lgl.mongodb.net/organicdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


app.get("/",(req, res)=>{
  res.sendFile(__dirname + '/index.html');
})


client.connect(err => {
  const collection = client.db("organicdb").collection("products");
  // perform actions on the collection object
  app.post("/addProducts",(req, res)=>{
    const product = req.body;
    collection.insertOne(product)
    .then(result=>{
      res.send('Successfully done !')
    })
  })
  
});



app.listen(3000);