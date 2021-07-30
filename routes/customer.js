const express=require('express')
const customerModel = require('../models/customer.model')
const router=express.Router()
router.get('/customer',async(req,res)=>{
   try{
       const customer=await customerModel.find()
       res.render('customers/list',{customer:customer})
   }catch(e){
       console.log(e)
       res.redirect('/')
   }
})

router.get('/customer',async(req,res)=>{
    try{
        const customer=await customerModel.find()
        res.render('customers/list',{customer:customer})
    }catch(e){
        console.log(e)
        res.redirect('/')
    }
 })
router.get('/customer/add',async(req,res)=>{
    res.render('customers/add')
})
router.post('/customer/add',async(req,res)=>{
    try{
        const newCustomer=new customerModel({
            name:req.body.name,
            old:req.body.old
       })
        await newCustomer.save()
        res.redirect('/customer')
    }catch(e)
    {
        console.log(e)
        res.redirect('/')
    }
})
router.delete('/customer/delete/:id',async(req,res)=>{
    try{
        await customerModel.findByIdAndDelete(req.params.id)
        res.redirect('/customer')
    }catch(e)
    {
        console.log(e)
        res.redirect('/')
    }
})
router.put('/customer/edit/:id',async(req,res)=>{
    try{
        const customer = await customerModel.findById(req.params.id)
        customer.name=req.body.name
        customer.old=req.body.old
        await customer.save()
        res.redirect("/customer")
    }catch(e)
    {
        console.log(e)
        res.redirect('/')
    }
})
router.get('/customer/edit/:id',async(req,res)=>{
    try{
        const customer = await customerModel.findById(req.params.id)
        res.render('customers/edit',{customer:customer})
    }catch(e)
    {
        console.log(e)
        res.redirect('/')
    }
})

module.exports=router