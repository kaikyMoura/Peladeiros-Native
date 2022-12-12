const express = require("express");

const router = express.Router();
const {creteNewUser, getAllUsers, getUserById, updateUserById, deleteUser} = require("../controllers/userController");

router.route("/Criar")
.post(creteNewUser);

router.route("/Home")
.get(getAllUsers)
.get(getUserById);

router.route("/Detalhes/:id")
.patch(updateUserById)
.delete(deleteUser);

module.exports = router;
