export default {
    getCategoryList(req, res) {
        res.json(categoryList);
    },
    product(req,res){
        res.send("product");
    },
    productWrite(req,res){
        res.json({ 
            message : "success"
        });
    }
};
