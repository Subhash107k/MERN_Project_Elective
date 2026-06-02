/*
 * Simple Express application
 * - attaches a listener on the configured port
 */

import express, { application, json } from 'express';
import fristRoute from './src/routes/fristRoutes.js';
import productRouters from './src/routes/productRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import mongoose from 'mongoose';


const app = express();
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}`);
    mongoose.connect("mongodb://localhost:27017");
});
 
/* == Class 3: Define routes
 * Database operations (CRUD)
 * - Create: POST
 * - Read:   GET
 * - Update: PUT/PATCH
 * - Delete: DELETE
 *
 * Base URL: http://localhost:8000
 */

/*
localhost:8000, post => "a"
localhost:8000, get => "b"
localhost:8000, delete => "d"
localhost:8000, patches => "c"



 app.post("/",(req, res,next)=>{
    console.log("a");
})
app.get("/",(req, res,next)=>{
    console.log("b");
})
app.delete("/",(req, res,next)=>{
    console.log("d");
})
app.patch("/",(req, res,next)=>{
    console.log("c");
})

*/
app.use(json());  // makes ours backend to take data from postman and use it in our backend
// app.use(fristRoute);
// app.use("/product", productRouters);
app.use("/user", userRoutes);



/*
localhost:8000/product, post
localhost:8000/product, get
localhost:8000/product/:id, get
localhost:8000/product/:id, delete
localhost:8000/product/:id, patch

*/