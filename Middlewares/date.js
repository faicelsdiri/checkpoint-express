const Datee= (req,res,next)=>{
    const date = new Date()
    const d =date.getDay()
    const h =date.getHours()
    if (!(d<5 && d>0 && h>= 9 && h<=17 )) {
        res.send("hors service")
    }
    next()
}
module.exports=Datee;