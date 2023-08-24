var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE

    function createObstacle(x, y) {
      var hitZoneSize = 20;
      var damageFromObstacle = 10;
      var meteoriteHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      meteoriteHitZone.x = x;
      meteoriteHitZone.y = y;
      game.addGameItem(meteoriteHitZone);
      var obstacleImage = draw.bitmap("img/bird.png");
      obstacleImage.x = -60
      obstacleImage.y = -45
      obstacleImage.rotationalVelocity = -3 * Math.random();
      meteoriteHitZone.addChild(obstacleImage);


  };


  createObstacle(1000, 350);


    var hitZoneSize = 25;
  var damageFromObstacle = 10;
  var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);

  sawBladeHitZone.x = 400;
  sawBladeHitZone.y = 100;
  game.addGameItem(sawBladeHitZone);
  var obstacleImage = draw.bitmap("img/sawblade.png");
  sawBladeHitZone.addChild(obstacleImage);
  

  function createSawBlade(sawBladeHitZone, sawBladeHitZoney) {
      
     
     // your code to be reused goes here
     }
     
     
  var enemy = game.createGameItem("enemy", 25);
  var redSquare = draw.rect(50, 50, "red");
  redSquare.x = -25;
  redSquare.y = -25;
  enemy.addChild(redSquare);
      
  enemy.x = 400;
  enemy.y = groundY - 50;


  game.addGameItem(enemy);

  enemy.velocityX = -1

  enemy.rotationalVelocity = 4

  enemy.onPlayerCollision = function () {game.changeIntegrity(-10)};

  enemy.onProjectileCollision = function () {game.increaseScore(100);
    enemy.fadeOut();}

   
    

        createReward(1000, groundY - 10);
        createEnemy(400, groundY - 10);
        createEnemy(800, groundY - 100);
        createEnemy(1200, groundY - 50);
    

        function createMarker(x,y) {
            var enemy = game.createGameItem("marker", 25);
            var redSquare = draw.rect(50, 50, "white");
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = x
            enemy.y = y
            game.addGameItem(enemy);
            enemy.velocityX = -1
            enemy.rotationalVelocity = -1 * Math.random();
            enemy.onPlayerCollision = function () {
                startLevel()
            };
            enemy.onProjectileCollision = function () {
                startLevel()
            };
        }
        createMarker(1600, groundY - 30);
        


  function createMarker(x,y) {
      var enemy = game.createGameItem("marker", 25);
      var redSquare = draw.rect(50, 50, "white");
      redSquare.x = -25;
      redSquare.y = -25;
      enemy.addChild(redSquare);
      enemy.x = x
      enemy.y = y
      game.addGameItem(enemy);
      enemy.velocityX = -1
      enemy.rotationalVelocity = -1 * Math.random();
      enemy.onPlayerCollision = function () {
          startLevel()
      };
      enemy.onProjectileCollision = function () {
          startLevel()
      };
    }

    createMarker(1600, groundY - 30)
 
   enemy.onPlayerCollision = function () {game.changeIntegrity(-10)};
 

  
    function startLevel() {
      // TODO 13 goes below here
    var level =
    { gameItems: [
      { type: "reward", x: 500, y: groundY - 60},
      { type: "sawblade", x: 400, y: groundY },
      { type: "sawblade", x: 600, y: groundY },
      { type: "sawblade", x: 900, y: groundY },
    ], }

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
