const express = require('express');
const app = express();
const ObjectId = require('mongodb').ObjectId;
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
  // read data
  app.get('/products',(req, res)=>{
    collection.find({})
    .toArray((err, documents)=>{
      res.send(documents);
    })
  })

  // add products
  app.post("/addProducts",(req, res)=>{
    const product = req.body;
    console.log(product);
    collection.insertOne(product)
    .then(result=>{
      res.send('Successfully done !')
    })
  })

  // delete product , import ObjectId from mongodb
  app.delete('/delete/:id',(req, res)=>{
    console.log(req.params.id);
    collection.deleteOne({_id: ObjectId(req.params.id) })
    .then(result=>{
      console.log(result)
    })
    
  })
  
});



app.listen(3000);