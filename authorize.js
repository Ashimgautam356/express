// this is not how we authorize the user but this is just example for learning.


const authorize = (req,res,next)=>{
    const {user}= req.query;    
    if(user === 'john'){
        req.user = {name:'john',id:3}
        next()
    }
    else{
        res.status(401).send('Unauthorized')
    }
}
module.exports = authorize