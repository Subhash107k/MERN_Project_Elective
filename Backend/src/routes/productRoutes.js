import { Router } from "express";

const productRouters = Router();

productRouters
.route("/")
.post((req, res, next) => {
res.json("Product created successfully");
})
.get((req, res, next) => {
    res.json("Products retrieved successfully");
});


productRouters
.route("/:id")
.get((req, res, next) => {})
.delete((req, res, next) => {})
.patch((req, res, next) => {});

export default productRouters;



/*
localhost:8000/product, post
localhost:8000/product, get
localhost:8000/product/:id, get
localhost:8000/product/:id, delete
localhost:8000/product/:id, patch

*/