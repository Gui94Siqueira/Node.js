const mongoose = require("mongoose")

async function main() {

    try {
        mongoose.set("strictQuery", true)

        await mongoose.connect(
            "mongodb+srv://guilherme94siqueira:q1ymQZgAELtW6LUp@cluster0.hl7fhcr.mongodb.net/?retryWrites=true&w=majority"
        )

        console.log("Conectamos ao banco!")
        
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main