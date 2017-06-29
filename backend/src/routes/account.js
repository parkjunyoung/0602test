import db from '../models';

export default {
    register(req, res) {
        let user = req.body;
        db.User.findOrCreate({
            where: { email: req.body.email }, 
            defaults: { email: user.email, password: user.password, name: user.name }
        }).spread((model, created) => {
            console.log(created);
            if(created) res.json(req.body); //todo: if register success, redirect for login
            else res.status(409).send("EXISTING_EMAIL");
        })
    },

    login(req, res) {
        
    }
}
