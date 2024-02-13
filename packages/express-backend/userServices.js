import mongoose from "mongoose";
import userModel from "./user.js";

mongoose.set("debug", true);

mongoose
    .connect("mongodb://localhost:27017/users", {
        useNewUrlParse: true,
        userUnifiedTopology: true,
})
.catch((error) => console.log(error));

function addUser(user) {
    const userToAdd = new userModel(user);
    const promise = userToAdd.save();
    return promise;
}

function findUserById(id) {
    return userModel.findById(id);
}

function findUserByUserName(userName) {
    return userModel.find({ userName: userName });
}

function findUserByUserNameAndPassword(userName, password) {
    return userModel.find({userName: userName, password: password});
}

function findUserByEmail(email) {
    return userModel.find({email: email});
}

function deleteUser(id) {
    return userModel.findByIdAndDelete(id);
}

export default {
    addUser,
    findUserById,
    findUserByUserName,
    findUserByUserNameAndPassword,
    findUserByEmail,
    deleteUser
};