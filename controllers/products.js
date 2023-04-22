const Product = require('../models/products')

exports.createProduct = async (req, res) => {
    try {
        const {name, price} = req.body;
        if (!name || !price) {
            return res.status(400).json({success: false,message: 'Please provide name and price'})
        }

        const product = await Product.create({...req.body});
7
        return res.status(200).json({success: true, total: product.length, data: product})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false,message: error.message})
    }
}

exports.getAllProducts = async (req, res) => {
  try {
    const products =  await Product.find({});

    return res.status(200).json({success: true, total: products.length, data: products})
  } catch (error) {
    console.log(error)
    return res.status(500).json({success: false,message: error.message})
  }
}

exports.getProduct = async (req, res) => {
    try {
        const {id} = req.params;

        const singleProduct = await Product.findById(id);

        if (!singleProduct) {
            return res.status(404).json({success: false, message: 'Product not found'})
        }

        return res.status (200).json({success: true, data: singleProduct})
    } catch  (error) {
        console.log(error)
        return res.status(500).json({success: false,message: error.message});
    }
    
} 

exports.updateProduct = async (req, res) => {
    try {
        const {id} = req.params;

        const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        })

        if (!updateProduct) {
            return res.status(404).json({success: false, message: 'Product not found'})
        } 
        {
            return res.status(200).json({success: true, data: updateProduct}) 
        }
    } catch (error) {
        console.log(error)
        return  res.status(500).json({success: false, message:error.message})
    }        
    }
    exports.updateProductPut = async (req, res) => {
        try {
            const {id} = req.params;
    
            const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
                new: true,
                runValidators: true
            })
    
            if (!updateProduct) {
                return res.status(404).json({success: false, message: 'Product not found'})
            } 
            {
                return res.status(200).json({success: true, data: updateProduct}) 
            }
        } catch (error) {
            console.log(error)
            return  res.status(500).json({success: false, message:error.message})
        }        
        }
    
        exports.deleteProduct = async (req, res) =>{
        try {
            const {id} = req.params;
            const deleteProduct = await Product.findByIdAndDelete(id);

        if (!deleteProduct) {
            return res.status(404).json({success: false, message: 'Product not found'})
        }
        return res.status(200).json({success: true, message: 'Product has been deleted'})
        } catch (error) {
          console.log(error)
          return res.status(500).json({success: false, message: error.message})  
        }
    }