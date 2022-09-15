const db = require("../models");
const User = db.user;
const Role = db.role;

exports.getRoleList = (req, res) => {
  Role.
    find().
    exec((err, roles) => {
      if(err){
        res.status(500).send("Server Error");
      }
      res.status(200).send(roles);
    });
};
