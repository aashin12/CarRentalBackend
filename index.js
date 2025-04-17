//import json server
const jsonserver = require('json-server')

//create server
const carRentalServer = jsonserver.create()

//create a middleware to parse the json data
const middleware = jsonserver.defaults()

//path for the data to store
const routes = jsonserver.router('db.json')

carRentalServer.use(middleware)
carRentalServer.use(routes)

//server port
PORT = 4000 || process.env.PORT 

//server run
carRentalServer.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);
    
})