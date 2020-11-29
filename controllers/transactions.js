const Transaction=require('../models/Transactions')

//get all transactions
//GET/api/v1/transactions
//access public
exports.getTransactions=async (req,res,next)=>{
    try {
        const transactions= await Transaction.find()
    } catch (error) {
        
    }
}

//add a transaction
//POST/api/v1/transactions
//access public
exports.addTransaction=async (req,res,next)=>{
    res.send("Post Transaction")
}

//delete transaction
//DELETE/api/v1/transactions/:id
//access public
exports.deleteTransaction=async (req,res,next)=>{
    res.send("Delete ansaction")
}