import models from '../models';

export default {
    getCategoryList(req, res) {
        res.json(categoryList);
    },
    product(req,res){
        models.Product.findAll({

        }).then(function(products) {
            res.json({ products : products });
        });
    },
    productWrite(req,res){
        models.Product.create({
            product_name : req.body.product_name,
            price : req.body.price ,
            sale_price : req.body.sale_price ,
            description : req.body.description
        }).then(function() {
            res.json({ message : "success" });
        });
    },
    productdelete(req,res){
        models.Product.destroy({
            where: {
                id: req.params.id
            }
        }).then(function() {
            res.json({ message : "success" });
        });
        
    }
};
