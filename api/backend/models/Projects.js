const mongoose = require("mongoose")

const {Schema} = mongoose

const{categorySchema} = require("./Category")

const{servicesSchema} = require("./Services")

const projectsSchema = new Schema({
    name: String,
    budget: Number,
    category: {
        type: [categorySchema],
    },
    costs: {
        type: Number,
        require: true,
    },
    services: {
        type:[servicesSchema],
    },
},
{ timestamps: true }
)

const Projects = mongoose.model("projects", projectsSchema)
 
module.exports = Projects