const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
    text: String,
    category: String,
    isCompleted: Boolean,
})

module.exports = Person