import express from 'express'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import { isAdminUser } from '../middlewares/adminMiddleware.js'
 export const router =express.Router()

 router.get('/welcome',authMiddleware,isAdminUser,(req,res)=>{
    res.status(200).json({
        msg:"welcome to admin page"
    })
 })