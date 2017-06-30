import db from '../models';
import passport from 'passport';

export default {
    register(req, res) {
        let user = req.body;

        db.User.findOrCreate({
            where: { email: req.body.email },
            defaults: { email: user.email, password: user.password, name: user.name }
        }).spread((model, created) => {
            if(created) res.json(req.body);
            else res.status(409).send("EXISTING_EMAIL");
        })
    },

    login(req, res, next) {
        passport.authenticate('local', (err, user, info) => {
            if(err){
                return next(err);
            }
            if(!user || info){
                return res.status(404).send(info);
            }
            const userData = {
                name: user.name,
                email: user.email,
            };

            return req.logIn(userData, err => {
                if (err) {
                    return next(err);
                }
                return res.json({ user: userData });
            });
        })(req, res, next)
    },

    logout(req, res){
        req.logout();
        res.status(200).send();
    }
}
