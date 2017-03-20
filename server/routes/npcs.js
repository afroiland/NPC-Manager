var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/NPC';

router.get('/', function(req, res) {
  // console.log('get request');
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
      res.sendStatus(500);
    }
    client.query('SELECT * FROM npcs',
      function(err, result) {
      done();
      if(err) {
        console.log('select query error: ', err);
        res.sendStatus(500);
      }
      // console.log('result.rows: ', result.rows);
      res.send(result.rows);
    });
  });
});

router.put('/:npcId', function(req, res) {
  console.log('put request');
  console.log('req.params: ', req.params);
  console.log('req.body: ', req.body);
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
      res.sendStatus(500);
    }
    client.query('UPDATE ',   //put all the update stuff here once figure out how to send info. req.body is empty, req.params has id and that's it.
    //[player.new_point_total, playerID],
    function(err, result) {
      if(err) {
        console.log('update error: ', err);
        res.sendStatus(500);
      } else {
        // console.log('successfully updated points for', player.first_name + " " + player.last_name);
        res.sendStatus(200);
      }
    });
  });
});


module.exports = router;
