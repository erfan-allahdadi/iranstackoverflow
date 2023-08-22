const { Schema } = require("mongoose");

const userSchema = new Schema({
    name: String
})

export default userSchema