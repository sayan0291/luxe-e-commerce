import mongoose,{ Schema } from "mongoose";

const ItemSchema = new Schema(
    {
        productId: {
            type: Schema.Types.ObjectId,
            ref: "Product"
        },
        availble: {
            type: Number,
            required: true,
            default: 5
        }
    }
)

const cartSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        cartItems: [
            ItemSchema
        ]
    }
)

export const Cart = mongoose.model("Cart",cartSchema)