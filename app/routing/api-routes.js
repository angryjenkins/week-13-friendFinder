// Your api-routes.js file should include two routes:

//     A GET route with the url /api/friends. This will be used to display a JSON of all possible friends
//     A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friendsArray  = require('../data/survey-data.js');
var path          = require('path');

module.exports = function(app){

app.get('/api/friends', function(req, res){
    res.json(friendsArray);
});

app.post('/api/friends', function(req, res){

  console.log("friend finder submitted! formData below");

  var formData    = req.body;
  var scoreboard  = [];

  console.log(formData);

  for(i=0;i<friendsArray.length;i++){
    var compatibility = 0;
    var commonGround = [];

    if(friendsArray[i].favColor == formData.favColor){
      compatibility++;
      commonGround.push("You both like " + formData.favColor.toLowerCase());
    }
    if(friendsArray[i].favSport == formData.favSport){
      compatibility++;
      commonGround.push("You both like " + formData.favSport.toLowerCase());

    }
    if(friendsArray[i].favCountry == formData.favCountry){
      compatibility++;
      commonGround.push("You both want to visit " + formData.favCountry);

    }
    if(friendsArray[i].hobby == formData.hobby){
      compatibility++;
      commonGround.push("You both like to " + formData.hobby.toLowerCase());

    }
    if(friendsArray[i].dinnerGuest == formData.dinnerGuest){
      compatibility++;
      commonGround.push("You both want to dine with " + formData.dinnerGuest);

    }
    if(friendsArray[i].transportation == formData.favColor){
      compatibility++;
      commonGround.push("You both prefer to commute in a  " + formData.transportation.toLowerCase());

    }
    if(friendsArray[i].vs_zombies == formData.vs_zombies){
      compatibility++;
      commonGround.push("You both would battle zombies with a  " + formData.vs_zombies.toLowerCase());

    }
    if(friendsArray[i].animalFear == formData.animalFear){
      compatibility++;
      commonGround.push("You both would steer clear of a " + formData.animalFear.toLowerCase());

    }
    if(friendsArray[i].cartoon == formData.cartoon){
      compatibility++;
      commonGround.push("You both prefer " + formData.cartoon);

    }
    if(friendsArray[i].boardGame == formData.boardGame){
      compatibility++;
      commonGround.push("You both enjoy playing " + formData.boardGame);

    }

    var score = {
      name: friendsArray[i].name,
      pic: friendsArray[i].pic,
      compatibility: compatibility,
      common: commonGround
    }

    scoreboard.push(score);

  }

  console.log(scoreboard);

  //sort the scores by descending compatibilty, the highest will be first.
  scoreboard.sort(function(a, b) {
      return parseFloat(b.compatibility) - parseFloat(a.compatibility);
  });

  var match = scoreboard[0];

  console.log(formData.name + ': Meet your new friend .... %s!', match.name);

  friendsArray.push(formData);

  //REPLACE THIS WITH MODAL/PAGE DISPLAY!!
  res.json(match);

  // res.sendFile(path.join(__dirname + '/../public/match.html'));

});


}
