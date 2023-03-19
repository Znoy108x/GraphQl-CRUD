const express = require("express")
const {graphqlHTTP} = require("express-graphql")
const schema = require("./schema/schema")
const cors = require("cors")


require("colors")
require("dotenv").config()
require("./db")()


const app = express()

app.use(cors({
  origin : "http://localhost:3000" 
}))
app.use("/graphql" , graphqlHTTP({
   schema ,
   graphiql : process.env.NODE_ENV === "DEV"
}))






// Server Running !
const PORT = process.env.PORT || 5000
app.listen((PORT) ,(
  console.log(`Server Running on ${PORT}`.rainbow)
))