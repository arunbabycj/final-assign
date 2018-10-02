const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const fs = require('fs');
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname , '../dist/Assignment/')));
require('./routes.js')(app, path);
require('./socket.js')(app, io, fs);
require('./listen.js')(http);



const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'AssignmentTest';

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    //db.dropDatabase();
    require('./create.js')(app, db);
    require('./read.js')(app, db);
    require('./add.js')(app, db);
    require('./update.js')(app, db);
    require('./remove.js')(app, db);


    db.collection("users").find({}).toArray(function(err, issues) {
      if (err)
          console.log(err);
      else
          console.log(issues);
    });

    db.collection("groups").find({}).toArray(function(err, issues) {
      if (err)
          console.log(err);
      else
          console.log(issues);
    });


  let uname = "";
  let pwd = "";
  app.get('/users/check/:data', (req, res) => {
    console.log("1",req.params.data);
    var user = req.params.data;
    db.collection("users").findOne({"username":user}, function(err, result) {
        if (err) throw err;
        console.log("2",result);
        var pass = result.password;
        console.log("3",pass);
        if (pwd == pass){
          res.send({"ok": true});
        }else{
          res.send({"ok": false});
        }
  });
});

app.get('/password/check/:data', (req, res) => {
  pwd = req.params.data;
  console.log("4",pwd);
});


var arraygroup = [];
app.post('/groups/add', (req, res) => {
  var groupname = "";
  db.collection("groups").find({}).toArray(function(err, issues) {
    if (err)
        console.log(err);
    else
    console.log("issues",issues);
      if (issues === undefined || issues.length == 0){
        console.log("groups name are undefined");
      }else{
        console.log("groups name are",issues[0].allgroup);
        arraygroup = issues[0].allgroup;
      }
  });
  var thisgroup = [];
  var user = req.body.user;
  var group = req.body.groupname;
  var deletename = "";
  console.log(group,user);
  console.log("this is",arraygroup);
  db.collection("users").findOne({"username":user}, function(err, result) {
    if (result.groupname.length==0){
      console.log("group length is 0");
      //result.groupname.push(group);
      arraygroup.push(group);
      thisgroup.push(group);
      var array = thisgroup;
      //var array = arraygroup;
      console.log(array);
      console.log("this is arraygroup",arraygroup);
      db.collection("users").findOneAndUpdate({"username":user},
      {$set: {username:result.username,
      password:result.password,
      groupname:array}},  function(err,doc) {
        if (!doc){
          console.log('Could not load Document');
        } else {
          if (err){
            res.status(400).send('Update failed');
          }else{
            var groups = {allgroup:array}
            res.json(doc);
          }
        }
      });
    }else{
      console.log(arraygroup);
      console.log("inside", result.groupname);
      thisgroup = result.groupname;
      for (var i = 0; i<arraygroup.length; i++){

        console.log("array",arraygroup);
        //if (group === arraygroup[i]){
        if (arraygroup.indexOf(group) > -1){
          console.log("group already in")
        }else{
          console.log("group length is more than 0");
          //result.groupname.push(group);
          arraygroup.push(group);
          thisgroup.push(group);
          var array = thisgroup;
          db.collection("users").findOneAndUpdate({"username":user},
          {$set: {username:result.username,
          password:result.password,
          groupname:array}},  function(err,doc) {
            if (!doc){
              console.log('Could not load Document');
            } else {
              if (err){
                res.status(400).send('Update failed');
              }else{
                res.json(doc);
              }
            }
          });
        }
      }
    }
    db.collection("groups").drop()
    var myobj = { allgroup: arraygroup};
    db.collection("groups").insertOne(myobj, function(err, res) {
       if (err) throw err;
      console.log("all group added");
      //console.log(res);
    });
  });
});

// newgroups/add
//groups/delete
app.post('/newgroups/add', (req, res) => {
  var thisgroup = [];
  var user = req.body.user;
  var group = req.body.groupname;
  db.collection("users").findOne({"username":user}, function(err, result) {
    if (result.groupname.length==0){
      console.log("group length is 0");
      thisgroup.push(group);
      var array = thisgroup;
      //var array = arraygroup;
      console.log(array);
      console.log("this is arraygroup",arraygroup);
      db.collection("users").findOneAndUpdate({"username":user},
      {$set: {username:result.username,
      password:result.password,
      groupname:array}},  function(err,doc) {
        if (!doc){
          console.log('Could not load Document');
        } else {
          if (err){
            res.status(400).send('Update failed');
          }else{
            var groups = {allgroup:array}
            res.json(doc);
          }
        }
      });
    }else{
      thisgroup = result.groupname;
        console.log("new group",group,user);
        thisgroup.push(group);
        var array = thisgroup;
        db.collection("users").findOneAndUpdate({"username":user},
          {$set: {username:result.username,
          password:result.password,
          groupname:array}},  function(err,doc) {
          if (!doc){
            console.log('Could not load Document');
          } else {
            if (err){
              res.status(400).send('Update failed');
            }else{
              res.json(doc);
            }
          }
      });
    };
  });
});

// newgroups/add
//groups/delete
  app.post('/groups/delete', (req, res) => {
    var user = req.body.user;
    var group = req.body.groupname;
    db.collection("users").findOne({"username":user}, function(err, result) {
      var thisgroup = [];
      thisgroup = result.groupname;
      var index = thisgroup.indexOf(group);
      if (index > -1) {
        thisgroup.splice(index, 1);
      }
      var array = thisgroup;
      db.collection("users").findOneAndUpdate({"username":user},
        {$set: {username:result.username,
        password:result.password,
        groupname:array}},  function(err,doc) {
        if (!doc){
          console.log('Could not load Document');
        } else {
          if (err){
            res.status(400).send('Update failed');
          }else{
            res.json(doc);
          }
        }
      });
    });
  });
});

app.use('/', router);

// db.collection("groups").insertOne(groups, function(err, res) {
//   if (err) throw err;
//   console.log("all group added");
//   //console.log(res);
// });
// db.collection("groups").findOne({"groupname":groups}, function(err, result) {
//   //console.log(result);
//   if (err) throw err;
//   if(result === null) {
//     console.log("notmatch");
//     db.collection("groups").insertOne(group, function(err, res) {
//       if (err) throw err;
//       console.log("group added");
//       //console.log(res);
//     });
//     res.send({"ok": true});
//   }else {
//     console.log("match");
//     res.send({"ok": false});
//   }
// });
//   var groups = {allgroup:arraygroup};
//   console.log("this is arraygroup",arraygroup)
// //  db.collection("groups").insertOne(groups, function(err, res) {
// //  db.collection("groups").findOneAndUpdate({"username":user}
//   //  if (err) throw err;
//     console.log("all group added");
    //console.log(res);
    // var groups = {allgroup:array};
    // console.log("this is arraygroup",arraygroup)
    // db.collection("groups").insertOne(groups, function(err, res) {
    //   if (err) throw err;
    //   console.log("all group added");
    //   //console.log(res);
    // });
    // res.json(doc);
