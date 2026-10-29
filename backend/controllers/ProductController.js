const Products=require("../models/product");

//add products                                             -->vendor access
const addProduct=async(req,res)=>{
    try{
        const newProduct=req.body;
        await Products.create({...newProduct,brand:newProduct.brand.toLowerCase()});
        res.status(200).json({message:"product added succesfully"})
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"failed to add"})
    }
};
//get all products                                         -->all types of users
const productDetails=async(req,res)=>{
    try{
        const allProducts= await Products.find();
        if(allProducts.length==0){
        res.status(404).json({message:"products not found"});
        }
        res.status(200).json({message:"get successfully",allProducts});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"failed to get products"});
    }

}

//update product details                                   -->vendor access
const updateProducts=async(req,res)=>{
    try{
        const foundProduct=await Products.findById(req.param.id);
        if(foundProduct==null){
            res.status(404).json({message:"invalid product id"});
        }
        else{
            const updatedProduct=await Products.findOneAndUpdate({_id:req.param.id},req.body,{new:true},
         );
        res.status(200).json({message:"update products successfully",updatedProduct});
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"failed to update products"});
    }
}
//delete product                                           -->vendor access
const deleteProduct = async(req,res)=>{
    try{
        const foundProduct = await Products.findById(req.param.id);
        if(foundProduct==null){
            res.status(404).json({message:"Product not found to delete"});
        }
        else{
            await Product.findByIdAndDelete(req.params.id);
            res.status(200).json({message:"Product deleted successfully"});
        }
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Failed to delete product"});
    }
};
//get products based on prices(min and max)                -->all types of users
const getProductBasedOnPrice=async(req,res)=>{
    try{    
        const { max, min } = req.query;
        const filteredProduct = await Products.find({cost:{$gte:min,$lte:max}});
        if(filteredProduct.length==0){
            res.status(404).json({message:'no products found in that range ${min} To ${max}'})
        }
        else{
            res.status(200).json({filterProducts});
        }
    }
    catch(error){
        console.log(error);
         res.status(500).json({message:"Failed to get filtered products"});

    }
};
//get products based on brand name                         -->all types of users
const getProductBasedOnBrand=async(req,res)=>{
    try{    
        const { brand } = req.query;
        const filteredProduct = await Products.find({brand:brand.toLowerCase()});
        if(filteredProduct.length==0){
            res.status(404).json({message:'no products found on brand ${brand}'});
        }
        res.status(200).json({filteredProduct});
    }
    catch(error){
        console.log(error);
         res.status(500).json({message:"Failed to get filtered products"});
    }
};
//get products on pagination
const getLimitedProducts=async(req,res)=>{
    try{
        const {page, limit}=req.query;
        const skip = (page - 1) * limit;
        const foundProduct = await Products.find().skip(skip).limit(limit);
        if(filteredProduct.length==0){
            res.status(404).json({message:'no products found in this page'});
        }
         res.status(200).json({ currentPage: page, limit: limit, data: foundProduct});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"failed to get filtered products"});
    }
};

module.exports={addProduct, productDetails, updateProducts, deleteProduct, getProductBasedOnPrice, getProductBasedOnBrand, getLimitedProducts}
