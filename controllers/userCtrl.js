'use strict';

var User = require('../models/users.js');
//var Product = require('../models/products.js');

var create = function(req, res) {
  User.create(req.body, function(err, result) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(result);
    }
  });
};

var add = function(req, res) {
  //Grab the product
  Product.findOne({_id: req.body._id})
  .exec(function(err, product) {
    if (err) {
      res.status(500).json(err);
    } else {
      //Update the user with the product
      User.findOne({_id: req.params.userId})
      .exec(function(err, user) {
        user.products.push(product);
        user.save(function(err) {
          if (err) {
            res.status(500).json(err);
          } else {
            res.status(200).json(user);
          }
        });
      });
    }
  });
};

var read = function(req, res) {
  User.find()
  .populate('products')
  .exec(function(err, users) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(users);
    }
  });
};

var update = function(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(result);
    } 
  });
};

var remove = function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err, result) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(result);
    } 
  });
};

module.exports = {
  create: create,
  add: add,
  read: read, 
  update: update,
  remove: remove
};