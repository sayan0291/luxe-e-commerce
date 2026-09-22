import mongoose,{ Schema } from "mongoose"

export const productSchema = new Schema({
    brand: {
        type: String,
        required: true,
    },
    descriptions: {
        type: String,
        required: true,
        trim: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    available: {
        type: Number,
        default: 10
    }
},{timestamps: true})

export const Product = mongoose.model("Product",productSchema);