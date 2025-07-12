import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    cartData: {
        type: Array,
        default: [],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,// Automatically manage createdAt and updatedAt fields, and track if the cart is minimized
    minimized: false // This field is not standard in Mongoose, but you can use it to track if the cart is minimized
});

const userModel = mongoose.models.user || mongoose.model("User", userSchema);


export default userModel;