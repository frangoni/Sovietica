const UserModel =   require('../models/User')

const userController = {

    register(req,res){
       UserModel.create(req.body)
        .then(user => {
            res.status(201).send(user)})
        .catch(err=>{res.status(500).send(err)});
    },

    login(req,res) {
        res.send(req.user);
    },

    logout(req,res) {
        req.logOut()
        res.sendStatus(200);
    },

    me(req,res) {
        if(!req.user) {
            return res.sendStatus(401);
        }
        res.send(req.user);
    }, 

    admin(req,res) {
        if(req.body.clave == "sovietica") {
            UserModel.findById(req.user.id)
            .then(user => user.rol = "admin")
            .then(()=>res.sendStatus(201))
            .catch(err=> res.status(500).send(err))
        }
    }

}

module.exports = userController;

