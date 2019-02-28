let doorImage1 = document.getElementById("door1");

let doorImage2 = document.getElementById("door2");

let doorImage3 = document.getElementById("door3");

const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

const startButton = document.getElementById("start");

let currentlyPlaying = true;

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }else if(choreDoor === 1){
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }else if(choreDoor  === 2){
    openDoor3 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }
};

const openFirstDoor = function(){
  if((!isClicked(doorImage1) === true) && (currentlyPlaying === true)){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
}

doorImage1.onclick = openFirstDoor;

const openSecondDoor = function(){
  if((!isClicked(doorImage2) === true) && (currentlyPlaying === true)){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }

}

doorImage2.onclick = openSecondDoor;

const openThirdDoor = function(){
  if((!isClicked(doorImage3) === true) && (currentlyPlaying === true)){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }

}

doorImage3.onclick = openThirdDoor;

startButton.onclick = () => {
  if(currentlyPlaying === false){
    startRound();
  }

}

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;

  randomChoreDoorGenerator();
}

const gameOver = (status) => {
  if(status === 'win'){
    startButton.innerHTML = 'You win! Play again?';
  }else{
    startButton.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false;
}
//This isBot function deterimines if the door's src contains the game-ending ChoreBot image.
const isBot = (door) => {
  if(door.src === botDoorPath){
    return true;
  }
  else{
    return false;
  }
}

const isClicked = (door) => {
  if(door.src === closedDoorPath){
    return false;
  } else{
    return true;
  }
}

const playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors === 0){
    gameOver('win');
  }else if(isBot(door)){
    gameOver();
  }else{

  }
}

startRound();
