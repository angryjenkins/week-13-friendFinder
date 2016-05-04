// Your api-routes.js file should include two routes:

//     A GET route with the url /api/friends. This will be used to display a JSON of all possible friends
//     A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friendsArray = require('../data/survey-data.js');
var path = require('path');

module.exports = function(app){

app.get('/api/friends', function(req, res){
    res.json(friendsArray);
});

app.post('/api/friends', function(req, res){

        console.log("friend finder submitted! formData below");

        var formData = req.body;
        var scoreboard = [];

        console.log(formData);

        for(i=0;i<friendsArray.length;i++){
          var compatibility = 0;

          if(friendsArray[i].favColor == formData.favColor){
            compatibility++;
          }
          if(friendsArray[i].favSport == formData.favSport){
            compatibility++;
          }
          if(friendsArray[i].favCountry == formData.favCountry){
            compatibility++;
          }
          if(friendsArray[i].hobby == formData.hobby){
            compatibility++;
          }
          if(friendsArray[i].dinnerGuest == formData.dinnerGuest){
            compatibility++;
          }
          if(friendsArray[i].transportation == formData.favColor){
            compatibility++;
          }
          if(friendsArray[i].vs_zombies == formData.vs_zombies){
            compatibility++;
          }
          if(friendsArray[i].animalFear == formData.animalFear){
            compatibility++;
          }
          if(friendsArray[i].cartoon == formData.cartoon){
            compatibility++;
          }
          if(friendsArray[i].boardGame == formData.boardGame){
            compatibility++;
          }


          var score = {
            name: friendsArray[i].name,
            compatibility: compatibility
          }

          scoreboard.push(score);

        }

        console.log(scoreboard);
        //need to compare objects here to determine new best friend.

      
        scoreboard.sort(function(a, b) {
            return parseFloat(b.compatibility) - parseFloat(a.compatibility);
        });

        var match = scoreboard[0].name;


        console.log(formData.name + '! Meet your new friend .... %s!', match);

        friendsArray.push(formData);



// res.json(true);
//add answer comparison logic.

});

// app.post('/api/clear', function(req, res){
//        // Empty out the arrays of data
//        friendsArray = [];

//        console.log(friendsArray);
//    })

}
