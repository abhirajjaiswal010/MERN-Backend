export const isAdminUser=(req,res,next)=>{
    if(req.userInfo.role!=='admin'){
        return res.status(404).json({
            success:false,
            msg:'access denied!Admin rights required'
        })
    }
    next()
}