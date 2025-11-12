const express = require('express')
const app = express()
const PORT = 8080

let data = ['bot1']

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
app.get('/api/data', (req, res) =>{
    res.send(data)
})

//CRUD-method create-post read-get update-put and delete-delete
app.post('/api/data', (req,res) => {
    const newEntry = req.body
    console.log(newEntry);
    data.push(newEntry.name)
    res.sendStatus(201)

})

app.listen(PORT , () => console.log(`server listen to port ${PORT}`))