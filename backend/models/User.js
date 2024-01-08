const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 4
    },
    password: {
        type: String,
        required: true,
    },
});

const UserModel = mongoose.model('User', UserSchema);  // Use mongoose.model() here

module.exports = UserModel;


//mongodb+srv://blog:Vves5I9z8EDVYbAD@cluster0.ct5rtcy.mongodb.net/your-database-name?retryWrites=true&w=majority'