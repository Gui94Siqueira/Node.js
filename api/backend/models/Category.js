const mongoose = require("mongoose")

const { Schema } = mongoose

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    },
    { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema)

module.exports = {
    Category,
    categorySchema,
};