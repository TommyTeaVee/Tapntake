const jwt = require('jsonwebtoken')
const config = require('../config/auth.config.js')
const db = require('../models')
const User = db.user
const Role = db.role

const verifyToken = (req, res, next) => {
    
    let token = req.headers["x-access-token"]

    if(!token) {
        return res.status(403).send({msg: 'No token provided!'})
    }

    jwt.verify(token, config.secrete, (err, decoded) => {
        if(err) {
            return res.status(401).send({ msg: 'Unauthorized!' })
        }
        req.userId = decoded.id

        next()
    }) 
}

const verification = (req, res, next) => {
    verifyToken((req, res), () => {
        if(req.userId == req.params.id){
            next()
        }else{
            return res.status(404).json({ msg: "You not allowed to do that" })
        }
    })
}

const isAdmin = (req, res, next) => {

    User.findById(req.userId).exec((req, user) => {
        if(err) {
            res.status(500).send({ msg: err})
            return
        }

        Role.find({

            _id:{ $in: user.roles }

        },(err, roles) => {
            if(err) {
                res.status(500).send({ msg: err })
                return
            }

            for(let i = 0; i < roles.length; i++) {
                if(roles[i].name == 'admin'){

                    next()

                    return
                }

            }

            res.status(403).send({ msg: 'Require Admin Role!'})

            return
        })
    })
}

const isModerator = (req, res, next) => {
    
    User.findById(req.userId).exec((err, user) => {
        
        if(err){
            res.status(500).send({ msg: err})

            return
        }

        Role.find({
            
            _id: { $in: user.roles }

        }, (err, roles) => {

            if(err) {
                res.status(500).send({ msg: err})
                return
            }

            for(let i = 0; i < roles.length; i++){
                if(role[i].name === 'moderator') {

                    next()
                    return
                }
            }

            res.status(403).send({ msg: 'Require Moderator Role!' })
            return
        })
    })
}

const authJwt = {
    verifyToken,
    isAdmin,
    isModerator,
    verification
}

module.exports = authJwt