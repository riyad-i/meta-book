const User = require('../../models/user')

const jwt = require('jsonwebtoken')

const bcrypt = require('bcrypt')

async function create(req,res){
    try {
        const user = await User.create(req.body)
        const token = createJWT(user)
        res.json(token)
    } catch (error) {
        res.status(400).json(error)
    }
}


function createJWT(user){
    return(jwt.sign(
        //data payload
        {user},
        process.env.SECRET,
        {expiresIn: '24h'}

    ))
}

function checkToken(req,res) {
  // req.user will always be there for you when a token is sent
  console.log('req.user', req.user);
  res.json(req.exp);
}


async function login(req, res){
    //find user by email
    //compare password with hashed password
    //create token
    try {
        //find user by email
        const user = await User.findOne({ email: req.body.email });
        if (!user) throw new Error();
        //compare password
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) throw new Error();
        res.json( createJWT(user) );
      } catch {
        res.status(400).json('Bad Credentials');
      }


    // try {
    //     const user = User.findOne({email: req.body.email})
    //     if (user) {
    //         console.log('found user:', user);
    //         const match = bcrypt.compare(req.body.password, user.password)
    //         if (match){
    //             const token = createJWT(user)
    //             res.json(token)
    //         }
    //     }

    // } catch (error) {
    //     console.log(error);
    //     res.status(400).json(error)
    // }
}



module.exports = {
    create,
    login,
    checkToken
}