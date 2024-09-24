import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    rating: {
        rate: { type: Number, required: true },
        count: { type: Number, required: true }
    }
})


export const Product = mongoose.model('Product', productSchema);