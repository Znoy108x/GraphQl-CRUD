const mongoose = require("mongoose")

const connectToMongoose = () =>{
    mongoose.connect(`${process.env.DATA_BASE_URI}` , () =>{
        console.log(`Connected to the ${process.env.DB_NAME}`.rainbow)
    })
}
module.exports =  connectToMongoose