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
  console.log('info: ', info);
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
      res.sendStatus(500);
    }
    client.query('UPDATE NPCs SET notes=$1, items=$2, dialogue=$3 WHERE id=$4',
    [info.notes, info.items, info.dialogue, info.id],
    function(err, result) {
      if(err) {
        console.log('update error: ', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });
  });
});

router.post('/', function(req, res) {
  var info = req.body;
  console.log('info: ', info);
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
      res.sendStatus(500);
    }
    client.query('INSERT INTO NPCs (name, level, class, MaxHP, CurrentHP, AC, Str, Ex_Str, Int, Dex, Con, Wis, Cha, Items, Notes, Dialogue) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)',
    [info.name, info.level, info.class, info.maxhp, info.maxhp, info.ac, info.str, info.ex_str, info.int, info.dex, info.con, info.wis, info.cha, info.items, info.notes, info.dialogue],
    function(err, result) {
      if(err) {
        console.log('update error: ', err);
        res.sendStatus(500);
      } else {
        console.log('successfully added npc ' + info.name);
        res.sendStatus(200);
      }
    })
  })
})


module.exports = router;
