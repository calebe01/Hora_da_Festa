const mongoose = require("mongoose")

async function main() { 

    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect(
            "mongodb+srv://calebedepsn:Z9zs3qX3LqAPOQFv@cluster0.0zfc2ou.mongodb.net/?retryWrites=true&w=majority"
        )
      console.log("Conectado ao banco!")
    } catch (error) {
        console.log(`erro: ${error}`)
    }
}

module.exports = main 