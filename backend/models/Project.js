const mongoose = require("mongoose")
const ProjectSchema = new mongoose.Schema({
    clientId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Client"
    },
    name : {
        type : String,
        require:true
    },
    description : {
        type : String,
        require:true
    },
    status : {
        type : String,
        enum : ["Not Started" ,  "In Progress" , "Completed"]
    }
})

module.exports = mongoose.model("Project" , ProjectSchema)