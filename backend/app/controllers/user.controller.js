const db = require("../models");
const User = db.user;
const Role = db.role;


exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  User.
    find().
    populate('roles').
    exec((err, users) => {
      if(err){
        res.status(500).send("Server Error");
      }
      res.status(200).send(users);
    });
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
