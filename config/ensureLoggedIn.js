
module.exports = function(req,res,next){
    //401 is unauthorized
    if (!req.user) return res.status(401).json('Unauthorized')
    next()
}