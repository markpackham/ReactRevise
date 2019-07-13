const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        //In real life this array's data would come from a database
        {id: 1, firstName: 'Mark', lastName: 'Packham'},
        {id: 2, firstName: 'Paul', lastName: 'Packham'},
        {id: 3, firstName: 'Richard', lastName: 'Jack'},
    ];

    res.jsonp(customers);
});

const port = 5555;

app.listen(port, () => console.log('Server started on port ${port}')
)
;


/*
After running "npm run server"

visit here
http://localhost:5555/api/customers
 */