let mongoose = require('mongoose');

let connectDataBase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDataBase;