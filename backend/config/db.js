const mongoose = require("mongoose");
const DbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Db connected successfully");
    } catch (error) {
        console.log("Failed to connect:", error.message);
    }
}
module.exports = DbConnection;