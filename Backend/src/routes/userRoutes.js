import { Router } from "express";

let userRoutes = Router();

userRoutes
.route("/")
.post((req, res, next) => {
  res.json("User created successfully.");

})
.get((req, res, next) => {});

userRoutes
.route("/:id")
.get((req, res, next) => {})
.delete((req, res, next) => {})
.patch((req, res, next) => {});

export default userRoutes;

/* 
localhost:8000/user, post
localhost:8000/user, get
localhost:8000/user/:id, get
localhost:8000/user/:id, delete
localhost:8000/user/:id, patch
*/