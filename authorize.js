const authorize = (req,res,next)=>{
    const {user} = req.query;
    console.log(user)
    if(user=='john')
    {
        req.user = {name:'john',id:3}
        //console.log(req.item)
        res.write('hello john')
        res.end()                   //whenever response header is changed , end the process
    }
    
    else
    {
        res.status(401).send('unauthorized')
    }
    next()
}

module.exports = authorize