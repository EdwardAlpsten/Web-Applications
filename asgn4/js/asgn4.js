var model = require('./model.js');

// A "Router" object allows a module to perform "local" routing

var router = require('express').Router();

// This module will be used as a router
module.exports = router;

// Return a user object with two properties (username and email)
// if the specified username exists in DB
router.get('/getuser/:username', function(req, res) {
  var username = req.params.username;

  model.User.findOne(
    { username: username },
    'username email',   // Don't send password

    function(err, user) {
      if (err) {
        res.sendStatus(500);
      }

      res.json(user);
    }
  );

});

// TODO: Add your code here

// For TODO 1
router.get('/p1', function(req, res) {
  // retrieve all users from DB
  model.User.find({},

  function(err,users){
    if (err) {
      res.send("Miiiistake");
      next();
    }
    else{
      res.send(users);
    }
  });

  // Return them in JSON format
  //res.send("Not yet implemented.");  // Place holder
});

// For TODO 1
router.get('/p1', function(req, res) {
  // retrieve all users from DB

  // Return them in JSON format
  res.send("Not yet implemented.");  // Place holder
});

// For TODO 2
router.get('/p2', function(req, res) {


  model.User.create({
    username: req.query.username, email: req.query.email, password: req.query.password},
    function (err,user){
      if (err){
        res.send("Miistake" + err);
      }
      else {
        res.send(req.query);
      }
    });

});

// For TODO 3
router.get('/p3', function(req, res) {
  var input = req.query.tag.trim();
  // Lägg till att söka enbart efter flera tags
  model.Item.find({
    tags: input
  },
  function(err,items){
    if (err) {
      res.send("Miiiistake");
      next();
    }
    else{
        if (input.length==0){
          model.Item.find({}, function(err,items2){if(err){res.send("Miiistake"),next()}else{res.send(items2)}});
        }
        else{
          res.send(items);
        }

    }});


  //res.send("Not yet implemented.");  // Place holder
});

// For TODO 4
router.get('/p4', function(req, res) {

  var user = req.query.username;

model.User.findOne({
    username: user
  },'_id',

  function(err,user){
    if (err) {
      res.send("Miiiistake");
      next();
    }
    else{

      model.Item.find({
          owner: user._id
        },

        function(err,items){
          if (err) {
            res.send("Miiiistake");
            next();
          }
          else{
            res.send(items);
            model.Item.remove({
                owner: user._id
              },

              function(err,items2){
                if (err) {
                  res.send("Miiiistake");
                  next();
                }
                else{
                }
              });
          }
        });
      //res.send(user);
    }
  });


  //res.send("Not yet implemented.");  // Place holder
});

// For TODO 5
router.get('/p5', function(req, res) {
  var user = req.query.username;

  model.User.findOne({
      username: user
    },'_id',

    function(err,user){
      if (err) {
        res.send("Miiiistake");
        next();
      }
      else{
        model.Item.updateMany({
            owner: user._id
          },
          { $push: {tags:"asgn4"}},

          function(err,items){
            if (err) {
              res.send("Miiiistake");
              next();
            }
            else{
              model.Item.find({
                  owner: user._id
                },

                function(err,items){
                  if (err) {
                    res.send("Miiiistake");
                    next();
                  }
                  else{
                    res.send(items);
                  }
                });
            }
          });
        //res.send(user);
      }
    });

  //res.send("Not yet implemented.");  // Place holder
});
