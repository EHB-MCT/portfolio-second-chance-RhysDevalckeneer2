const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors')
require('dotenv').config()

// const client = new MongoClient(process.env.MURL, { useNewUrlParser: true, useUnifiedTopology: true })

const app = express();
const port = process.env.PORT || 6200;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

/**
*   Show info page
*/ 
app.get('/', (req, res) => {
    res.status(300).redirect('/info.html');
})

app.listen(port, () => {
  console.log(`Movieclub API listening at http://localhost:${port}`)
})