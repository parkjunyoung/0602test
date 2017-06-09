import express from 'express';
import category from '../config/category';

export default {
    category(req, res) {
        res.json(category);
    },
    product(req,res){
        res.send("product");
    },
    productWrite(req,res){
        res.send("product write1");
    }
};
