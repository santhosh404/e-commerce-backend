import { Product } from "../model/product.model.js";


export const getProductHandler = async (req, res) => {
    try {
        const product = await Product.find();
        res.status(200).json({
            success: true,
            status: 200,
            data: {
                product: product
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            error: error.message
        });
    }
}


export const productFilterHandler = async (req, res) => {
    const { title, category } = req.query;

    try {
        let filter = {};

        if (title && title !== '') {
            filter.title = { $regex: title, $options: 'i' }; 
        }

        if (category && category !== 'all') {
            filter.category = category;
        }

        const products = await Product.find(filter);

        // Return the response
        return res.status(200).json({
            success: true,
            status: 200,
            data: {
                product: products
            }
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            error: error.message
        });
    }
};


export const getProductByIdHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const singleProduct = await Product.findById(id);
        if (!singleProduct) {
            return res.status(404).json({
                success: false,
                status: 404,
                error: 'Product not found'
            });
        }
        return res.status(200).json({
            success: true,
            status: 200,
            data: {
                product: singleProduct
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            error: error.message
        });
    }
}


