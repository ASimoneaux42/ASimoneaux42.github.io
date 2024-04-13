/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
  };
  var walker = {
    positionX : 0, // the x-coordinate location for the box
    speedX : 0, // the speed for the box along the x-axis
    positionY : 0, // the y-coordinate location for the box
    speedY : 0, // the speed for the box along the y-axis
  }
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  // SETUP...
  $(document).on('keydown', handleKeyDown);
  $(document).on('keyup', handleKeyUp);

  // CORE LOGIC...
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
      console.log("left pressed")
      walker.speedX = -5;
      walker.speedY = 0;
    }  
    else if (event.which === KEY.RIGHT) {
      console.log("right pressed")
      walker.speedX = +5;
      walker.speedY = 0;
    }  
    else if (event.which === KEY.UP) {
      console.log("up pressed")
      walker.speedY = -5;
      walker.speedX = 0;
    }  
    else if (event.which === KEY.DOWN) {
      console.log("down pressed")
      walker.speedY = +5;
      walker.speedX = 0;
    }  
  }
  function handleKeyUp(event) {
    if (event.which === KEY.LEFT) {
      console.log("left pressed")
      walker.speedX = 0;
      walker.speedY = 0;
    }  
    else if (event.which === KEY.RIGHT) {
      console.log("right pressed")
      walker.speedX = 0;
      walker.speedY = 0;
    }  
    else if (event.which === KEY.UP) {
      console.log("up pressed")
      walker.speedY = 0;
      walker.speedX = 0;
    }  
    else if (event.which === KEY.DOWN) {
      console.log("down pressed")
      walker.speedY = 0;
      walker.speedX = 0;
    }  
  }
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()
    wallCollision()
    redrawGameItem()
  }
  
  /* 
  Called in response to events.
  */
  function handleEvent(event) {

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionGameItem(){
    walker.positionX += walker.speedX; // update the position of the box along the x-axis
    walker.positionY += walker.speedY; // update the position of the box along the y-axis
  }
  function redrawGameItem(){
    $("#gameItem").css("left", walker.positionX); // draw the box in the new location, positionX pixels away from the "left"
    $("#gameItem").css("top", walker.positionY); // draw the box in the new location, positionY pixels away from the "top"
  }
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  function wallCollision(){
  if (walker.positionX > $("#board").width()){
      walker.speedX = 0;
      walker.speedY = 0;
  }
  else if (walker.positionX < 0){
      walker.speedX = 0;
      walker.speedY = 0;
  }
  if (walker.positionY > $("#board").height()){
    walker.speedX = 0;
    walker.speedY = 0;
  }
  else if (walker.positionY < 0){
    walker.speedX = 0;
    walker.speedY = 0;
  }
}
}
