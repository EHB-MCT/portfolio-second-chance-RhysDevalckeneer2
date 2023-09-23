const bodyParser = require('body-parser');
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors')
require('dotenv').config()

const client = new MongoClient(process.env.MURL, { useNewUrlParser: true, useUnifiedTopology: true })

const app = express();
const port = process.env.PORT || 6200;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

/**
 * Show info page
 */
app.get('/', (req, res) => {
    res.status(300).redirect('/info.html');
});


app.get("/movies", async (req, res) => {
    try {
        // Connect to database
        await client.connect();
        // Retrieve the movies collection data
        const collection = client.db('movieclub').collection('movies');
        const movies = await collection.find({}).toArray();

        // Send back data with response
        res.status(200).send(movies);

    } catch (error) {
        console.log(error);
        res.status(500).json("Could not fetch movies");

    } finally {
        await client.close();
    }
});

app.post("/movies", async (req, res) => {

    try {
        await client.connect();
        const collection = client.db('movieclub').collection('movies');

        const movie = await collection.findOne({movie_id: req.body.movie_id});
        if(movie){
            console.log('Bad request: movie already exists with movie_id ' + req.body.movie_id);
            res.status(400).send('Bad request: movie already exists with movie_id ' + req.body.movie_id);
            return;
        } 

        let newMovie = {
            movie_id: req.body.movie_id,
            poster_path: req.body.poster_path,
            runtime: req.body.runtime
        }

         // Insert into the database
        let insertResult = await collection.insertOne(newMovie);
        console.log(insertResult);

         //Send back successmessage
        res.status(201).send(newMovie);
        return;
        
    } 

    catch(error){
        console.log(error);
        res.status(500).json('could not add movie');
    }

    finally {
        client.close();
        console.log('db closed')
    }
});

/**
 * Export app
 */
module.exports = app;