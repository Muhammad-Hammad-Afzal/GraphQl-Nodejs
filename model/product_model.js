import { Schema, model } from "mongoose"

const productSchema = Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    createdAt: { type: String, required: true },
})

export default model("Products", productSchema)