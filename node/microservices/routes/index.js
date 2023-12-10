let express = require('express');
let router = express.Router();

let Mongoose = require('mongoose').Mongoose;
let Schema = require('mongoose').Schema;

let oldMong = new Mongoose();
oldMong.connect('mongodb://localhost:27017/Game');
  
let GameSchema = new Schema({
  ObjectID: Number,
  title: String,
  image: String,
  address: String,
  description: String,
  Date: String
}, { collection: 'Game' });

let Game = oldMong.model('Game', GameSchema);

// Admin server page
router.get('/', async function (req, res, next) {
  res.render('index',{title: "Gametracker"});
});


// Crud
router.post('/createGame', async function (req, res, next) {
  let retVal = { response: "fail" }
  await Games.create({_id: req.body._id},
    function (err, res) {
      if (!err) {
        retVal = { response: "success" }
      }
    }
  )
  res.json(retVal);
});

// cRud   Should use GET . . . we'll fix this is Cloud next term
router.post('/readGame', async function (req, res, next) {
  let data;
  if (req.body.cmd == 'all') {
    data = await Games.find().lean()
  }
  else {
    data = await Games.find({ _id: req.body._id }).lean()
  }
  res.json({ Games: data });
})

// crUd   Should use PUT . . . we'll fix this is Cloud next term
router.post('/updateGame', async function (req, res, next) {
  let retVal = { response: "fail" }
  await Games.findOneAndUpdate({ _id: req.body._id }, req.body,
    function (err, res) {
      if (!err) {
        retVal = { response: "success" }
      }
    }
  )
  res.json(retVal);
});

// cruD   Should use DELETE . . . we'll fix this is Cloud next term
router.post('/deleteGame', async function (req, res, next) {
  let retVal = { response: "fail" }
  await Game.deleteOne({ _id: req.body._id },
    function (err, res) {
      if (!err) {
        retVal = { response: "success" }
      }
    }
  )
  res.json(retVal);
});





router.post('/getGame', async function (req, res, next) {
  const Game = await getGame();
  res.json(Game);
});

async function getGame() {
  data = await Game.find().lean();
  return { Games: data };
}

router.post('/saveGame', async function (req, res, next) {
  const Games = await saveGame(req.body);
  res.json(Game);
});

async function saveGame(theGame){
  console.log('theGame: ' + theGame);
  await Game.create(theGame,
    function (err, res) {
      if (err) {
        console.log('Could not insert new Game')
        return { saveGameResponse: "fail" };
      }
    }
  )
  return { saveGameResponse: "success" };
}

module.exports = router;