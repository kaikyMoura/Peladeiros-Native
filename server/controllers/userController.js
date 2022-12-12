const User = require("../models/userModel");

exports.creteNewUser = async (req, res) => {
    try {
        const model = await User.create(req.body);

        res.status(201).json({
            status: "Success",
            data: {
                user: model
            }
        });
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "User not created!" 
        });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const userObject = {...req.query}
        const query = User.find(userObject);

        const model = await query;

        res.status(200).json({
            status: "Success",
            totals: model.length,
            data: {
                model
            }
        });
    } catch (error) {
        res.status(404).json({
            status: "Failed",
            data: {
                message: "Not user results!"
            }
        });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const model = await User.findById(req.params.id);
        
        res.status(200).json({
            status: "Success",
            data: {
                model
            }
        });
    } catch (error) {
        res.status(404).json({
            status: "Failed",
            data: {
                message: "Not user result!"
            }
        });
    }
};

exports.updateUserById = async (req, res) => {
    try {
        const model = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: "Success",
            data: {
                model
            }
        });
    } catch (error) {
        res.status(404).json({
            status: "Failed",
            message: "User not updated!" 
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        let model = await User.findByIdAndRemove(req.params.id);

        res.status(204).json({
            status: "Success",
            data: {
                model
            }
        });
    } catch (error) {
        res.status(404).json({
            status: "Failed",
            message: "User not deleted!"
        });
    }
};