const Cart=require("../models/cart");
const mongoose=require("mongoose")
//add cart
const AddToCart=async(req,res)=>{
    try{
        const  {userId,productId}=req.body;
        const foundCaughtProduct=await Cart.findOne({ userId: VendorId});
        if(foundCaughtProduct.length==null){
            await Cart.create({userId: new mongoose,Type:ObjectId(vendorId),
                productIds:[new mongoose:Type.ObjectId(productId)],
            });
            res.status(200).json({message: "product added to cart successfully"})
        }else{
            await Cart.updateOne(
                { userId:new mongoose.Types.ObjectId(userId)},
                {
                    $addToSet:{product}
                }

            )

        }

    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"failed to cart"});
            
        }
}