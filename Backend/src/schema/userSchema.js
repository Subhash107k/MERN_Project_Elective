import {Schema, model} from 'mongoose';

let userSchema = Schema({
    name: {
        type: String,
        required: [true, "name is required"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    Address: {
        type: String,
        required: [true, "address is required"],
    },
    Phone: {
        type: Number,
        required: [true, "phone number is required"],
    },

});

let  User = model("User", userSchema);
export default User;