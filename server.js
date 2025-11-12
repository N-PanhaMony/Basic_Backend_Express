const express = require('express')
const app = express()
const PORT = 8080

let data ={
    id : 1,
    'name' : 'Bot'
}


// ENDPOINT - HTTP VERBS (method) && Routes (or paths)
// The method informs the nature of request and the route is a further subdirectory (basically we direct the request to the body of code to respond appropriately, and these locations or routes are called endpoints)

// Type 1 - Website endpoints (these endpoints are for sending back html and they typically come when a user enters a url in a browser)

app.get('/', (req,res) =>{
    res.send('<h1>Home</h1>')
})

// Type 2 - API Endpoint 
app.get('/api/data', (req, res) =>{
    res.send(data)
})

app.listen(PORT , () => console.log(`server listen to port ${PORT}`))