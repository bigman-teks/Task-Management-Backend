const mongoose = require("mongoose")


const connectDB = async () => {
    try {
        console.log("Connecting to Mongose")
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to MongoDB ✅")

    } catch (error) {
        console.log("error")
        console.log("MongoDB Connection Error:", error.message)
        process.exit(1)   // stop server if DB fails
}

}

module.exports = connectDB
