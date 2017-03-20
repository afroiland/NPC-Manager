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
  // console.log('req.params: ', req.params);
  var info = req.body;
  // console.log('info: ', info);
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
      res.sendStatus(500);
    }
    client.query('UPDATE NPCs SET notes=$1 WHERE id=$2',
    [info.notes, info.id],
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
