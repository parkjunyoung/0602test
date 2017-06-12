export default {
    register(req, res) {
        console.log(req.body);
        res.json({ user: "ho1234c@gmail.com" });
    }
}
