const express = require('express')
const app = express()
const PORT = 8080


let data = [
  { id: 1, name: 'bot1' },
  { id: 2, name: 'bot2' },
];

//middleware
app.use(express.json())

// ENDPOINT - HTTP VERBS (method) && Routes (or paths)
// The method informs the nature of request and the route is a further subdirectory (basically we direct the request to the body of code to respond appropriately, and these locations or routes are called endpoints)

// Type 1 - Website endpoints (these endpoints are for sending back html and they typically come when a user enters a url in a browser)

app.get('/', (req,res) =>{
    res.send(`
    <body>
        <h2>Data:</h2>
        <p>${JSON.stringify(data)}</p>
    </body>`)    
})

// Type 2 - API Endpoint 
//CRUD-method create-post read-get update-put and delete-delete
// READ
app.get('/api/data', (req, res) => res.json(data));

// CREATE
app.post('/api/data', (req, res) => {
  const item = { id: data.length + 1, name: req.body.name };
  data.push(item);
  res.status(201).json(item);
});

// UPDATE
app.put('/api/data/:id', (req, res) => {
  const item = data.find(d => d.id == req.params.id);
  if (!item) return res.sendStatus(404);
  item.name = req.body.name;
  res.json(item);
});

// DELETE
app.delete('/api/data/:id', (req, res) => {
  data = data.filter(d => d.id != req.params.id);
  res.sendStatus(200);
});
app.listen(PORT , () => console.log(`server listen to port ${PORT}`))