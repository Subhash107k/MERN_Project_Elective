import { Router } from "express";
import User from "../schema/userSchema.js";

const userRoutes = Router();

userRoutes
.route("/")          // localhost:8000/user
.post(async (req, res, next) => {
    /* send data from postman to backend and create a user in database */
   // console.log(req.body);
    //res.json({ message: "User created successfully", data: req.body });
    try {
        let result = await User.create(req.body);
        res.json({
            success: true,
            message: "User created successfully.",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
})

.get(async (req, res, next) => {
    try {
        let result = await User.find();
        res.json({
            success: true,
            message: "Users read successfully.",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
});

userRoutes
.route("/:id")

.get(async (req, res, next) => {
    //console.log(req.params.id);
    try {
        let result = await User.findById(req.params.id);

        if (result) {
            res.json({
                success: true,
                message: "User read successfully.",
                result: result,
            });
        } else {
            res.json({
                success: false,
                message: "User not found.",
            });
        }
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
})

.delete(async (req, res, next) => {
    try {
        let result = await User.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "User deleted successfully.",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
})

.patch(async (req, res, next) => {
    try {
        let result = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json({
            success: true,
            message: "User updated successfully.",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
});

export default userRoutes;

/* 
localhost:8000/user, post
localhost:8000/user, get
localhost:8000/user/:id, get
localhost:8000/user/:id, delete
localhost:8000/user/:id, patch
*/

/* 
User.create(req.body)
User.find()
User.findById(req.params.id)
User.findByIdAndDelete(req.params.id)
User.findByIdAndUpdate(req.params.id, req.body, { new: true })
*/