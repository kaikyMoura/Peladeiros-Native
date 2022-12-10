const express = require("express");

const router = express.Router();
const {creteNewUser, getAllUsers, getUserById, updateUserById, updateUserByAccount, deleteUser} = require("../controllers/userController");

router.route("/Inicial")
.post(creteNewUser)
.patch(updateUserByAccount)
.get(getAllUsers);

router.route("/Inicial/:account")
.patch(updateUserByAccount);

router.route("/Home")
.get(getAllUsers);

router.route("/Home/:id")
.get(getUserById)
.patch(updateUserById)
.delete(deleteUser);

module.exports = router;