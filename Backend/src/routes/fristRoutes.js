//make routes
// use that routes in index.js

import { Router } from "express";

let fristRoute = Router()
fristRoute
.route("/")
.get((req, res, next) => {
    console.log(req.body) // data access from postman
    console.log("successful response");
    
})

.post((req, res, next) => {
    console.log(req.body)
    console.log("Welcome to 4th class MERN")
});

fristRoute
.route("/job")
.get((req, res, next) => {
    console.log("Job details MERN");
})

.patch((req, res, next) => {
    console.log("Job updated MERN");
});

fristRoute
.route("/:id1/a/:id2") // dynamic params & a  =static params
.get((req, res, next) => {
    console.log(req.body) //request body from postman
    console.log(req.params) // to access dynamic params from url of prams localhost:8000/123/a/456  
    console.log("Dynamic and static params in MERN");
});


export default fristRoute;
/*
localhost:8000, post => "Welcome to 4th class MERN"
localhost:8000, get => "Hi MERN"
localhost:8000/job, get => "Job details MERN"
localhost:8000, patch => "Job updated MERN"
localhost:8000/:id, get => "Dynamic params in MERN"
localhost:8000/:id1/a/:id2, get => "Dynamic and static params in MERN"
*/  
