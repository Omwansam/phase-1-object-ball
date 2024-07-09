function gameObject() {
    return {
      home: {
        teamName: 'Brooklyn Nets',
        colors: ['Black', 'White'],
        players: {
          'Alan Anderson': {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          'Reggie Evans': {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          'Brook Lopez': {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          'Mason Plumlee': {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          'Jason Terry': {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: 'Charlotte Hornets',
        colors: ['Turquoise', 'Purple'],
        players: {
          'Jeff Adrien': {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          'Bismack Biyombo': {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          'DeSagna Diop': {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          'Ben Gordon': {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          'Brendan Haywood': {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
  console.log(gameObject());
/*
  function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
  }
  
  console.log(homeTeamName());
*/
// function that returns the team name 
function teamName() {
  return gameObject()["home"]["teamName"];
}

console.log(homeTeamName());

// function that returns the number of points scored bt a player
function numPointsScored(){
  let numPoints = gameObject();
  return numPoints["home"]["players"]["Alan Anderson"]["points"];
}

// function that returns a players shoe size
function shoeSize(){
  return gameObject()["away"]["players"]["Bismack Biyombo"]["shoe"];
}

//function that returns the team colors
function teamColors(){
  return gameObject()["home"]["colors"];
}

//function that returns the player numbers 
function playerNumbers(){
  return gameObject()["home"]["players"]["Jason Terry"]["number"];
}

// function that returns a players stats
function playerStats(){
  return gameObject()["away"]["players"]["Jeff Adrien"];
}

// function that returns the number of rebounds of the player with the largest shoes 
function bigShoeRebounds(){
  let largestShoeSize = -Infinity;
  let playerWithLargeShoes;

  // iterating through thee nested objects
  for(let team in gameObject()){
    for (let player in gameObject()[team]["players"]){
      let shoeSize = gameObject()[team]["players"][player]["shoe"];
      if (shoeSize > largestShoeSize){
        largestShoeSize = shoeSize;
        playerWithLargeShoes = player;
        debugger
      }
    } 
  }
  // returning th number of rebounds 
  return gameObject().home.players[playerWithLargestShoes].rebounds || gameObject().away.players[playerWithLargestShoes].rebounds;
debugger
}