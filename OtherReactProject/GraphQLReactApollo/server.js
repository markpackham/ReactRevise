//runs on "npm run server" visit http://localhost:5000/graphql
//to run client & server do "npm run dev"

/* Great thing about graphQL is you don't have to grab everything unlike REST
that often grabs massive JSON files, just get the stuff you want

eg just get all launch flight numbers

{
  launches{
    flight_number
  }
}

get a specific flight's number
{
  launch(flight_number: 2) {
    flight_number
    mission_name
  }
}

*/
const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const path = require('path');

const app = express();

// Allow cross-origin so local client can talk to local server
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


