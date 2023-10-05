const mongoose = require("mongoose")

const { Schema } = mongoose

const servicesSchema = new Schema({
    name: String,
    cost: Number,
    description: String,
    }
);

const Services = mongoose.model("Services", servicesSchema)

module.exports = {
    Services,
    servicesSchema,
};