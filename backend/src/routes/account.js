import db from '../models';

export default {
    register(req, res) {
        console.log(req.body);
        db.User.create(req.body)
            .then(() => {
                res.json(req.body);
            })
    }
}
