
// alert("The starting gun goes off and you head towards the first obstacle... monkey bars! To complete the monkey bars and move onto the next obstacle, you must roll an even number using a four-sided dice. Click OK to roll!");
// obstacleOneMonkeyBars();
// alert("With the monkey bars behind you, you approach the hurdles! To clear the hurdles and advance to the next obstacle, roll a number greater than 2 on a six-sided dice!");
// obstacleTwoHurdles();
// alert("Phew, glad the hurdles are over! You run to the hula hoop laying on the ground ahead of you. Hula hoop for as many seconds as you can, roll higher than 13 on a 20-sided dice to advance to the next obstacle!");
// obstacleThreeHulaHoop();
// alert("Now you're all warmed up for the tire course! Roll to navigate through the tires! Roll anything greater than a 4 on an eight-sided dice to advance to the next obstacle!");
// obstacleFourTireCourse();
// alert("It's quite daunting looking up at the bell you need to ring at the top of the rope. But don't worry, you can do it! All you have to do is roll greater than 5 on a ten-sided dice.");
// obstacleFiveRopeClimb();
// alert("Yay! You made it to the final obstacle. All you have to do is successfully walk across the beam. To do this, roll greater than 8 on a twelve-sided dice.");
// obstacleSixBalanceBeam();

//let playerOneScore = [obstacleOneMonkeyBars(), obstacleTwoHurdles(), obstacleThreeHulaHoop(), obstacleFourTireCourse(), obstacleFiveRopeClimb(), obstacleSixBalanceBeam()];
//let playerTwoScore = [obstacleOneMonkeyBars(), obstacleTwoHurdles(), obstacleThreeHulaHoop(), obstacleFourTireCourse(), obstacleFiveRopeClimb(), obstacleSixBalanceBeam()];

let playerTwoScore = 0;
let playerOneScore = 0;


function diceRoll(sides) {
	let results = Math.floor(Math.random() * sides) + 1;
	return results
}

function runGame(){

	// while 

	if(playerOneScore == 0) {
		alert("The starting gun goes off and you head towards the first obstacle... monkey bars! To complete the monkey bars and move onto the next obstacle, you must roll an even number using a four-sided dice. Click OK to roll!");
		if(obstacleOneMonkeyBars("playerOne")){
			playerOneScore++;
		}
	}
	if(playerTwoScore == 0) {
		alert("The starting gun goes off and you head towards the first obstacle... monkey bars! To complete the monkey bars and move onto the next obstacle, you must roll an even number using a four-sided dice. Click OK to roll!");
		if(obstacleOneMonkeyBars("playerTwo")){
			playerTwoScore++;
		}
	}
	if(playerOneScore == 1) {
		alert("With the monkey bars behind you, you approach the hurdles! To clear the hurdles and advance to the next obstacle, roll a number greater than 2 on a six-sided dice!");
		if (obstacleTwoHurdles("playerOne")) {
			playerOneScore++;
		}
	}
	if(playerTwoScore == 1) {
		alert("With the monkey bars behind you, you approach the hurdles! To clear the hurdles and advance to the next obstacle, roll a number greater than 2 on a six-sided dice!");
		if (obstacleTwoHurdles("playerTwo")) {
			playerTwoScore++;
		}
	}
	if(playerOneScore == 2) {
		alert("Phew, glad the hurdles are over! You run to the hula hoop laying on the ground ahead of you. Hula hoop for as many seconds as you can, roll higher than 13 on a 20-sided dice to advance to the next obstacle!");
		if (obstacleThreeHulaHoop("playerOne")) {
			playerOneScore++;
		}
	}
	if(playerTwoScore == 2) {
		alert("Phew, glad the hurdles are over! You run to the hula hoop laying on the ground ahead of you. Hula hoop for as many seconds as you can, roll higher than 13 on a 20-sided dice to advance to the next obstacle!");
		if (obstacleThreeHulaHoop("playerTwo")) {
			playerTwoScore++;
		}
	}
	if(playerOneScore == 3) {
		alert("Now you're all warmed up for the tire course! Roll to navigate through the tires! Roll anything greater than a 4 on an eight-sided dice to advance to the next obstacle!");
		if (obstacleFourTireCourse("playerOne")) {
			playerOneScore++;
		}
	}

	if(playerTwoScore == 3) {
		alert("Now you're all warmed up for the tire course! Roll to navigate through the tires! Roll anything greater than a 4 on an eight-sided dice to advance to the next obstacle!");
		if (obstacleFourTireCourse("playerTwo")) {
			playerTwoScore++;
		}
	}
	if(playerOneScore == 4) {
		alert("It's quite daunting looking up at the bell you need to ring at the top of the rope. But don't worry, you can do it! All you have to do is roll greater than 5 on a ten-sided dice.");
		if (obstacleFiveRopeClimb("playerOne")) {
			playerOneScore++;
		}
	}
	if(playerTwoScore == 4) {
		alert("It's quite daunting looking up at the bell you need to ring at the top of the rope. But don't worry, you can do it! All you have to do is roll greater than 5 on a ten-sided dice.");
		if (obstacleFiveRopeClimb("playerTwo")) {
			playerTwoScore++;
		}
	}
	if(playerOneScore == 5) {
		alert("Yay! You made it to the final obstacle. All you have to do is successfully walk across the beam. To do this, roll greater than 8 on a twelve-sided dice.");
		if (obstacleSixBalanceBeam("playerOne")) {
			playerOneScore++;
		}
	}
	if(playerTwoScore == 5) {
		alert("Yay! You made it to the final obstacle. All you have to do is successfully walk across the beam. To do this, roll greater than 8 on a twelve-sided dice.");
		if (obstacleSixBalanceBeam("playerTwo")) {
			playerTwoScore++;
		}
	}
	else {
		runGame();
	}
}



function obstacleOneMonkeyBars(player) {
	let sides = 4;
	let results = diceRoll(sides);
	alert("You rolled "+results+"!")
	if (results%2 == 0) {
		alert("Congrats" +player+ "You made it through the monkey bars! Continue to the hurdles.");
		return true;
	}
	else if (results%2 != 0) {
		alert("Oh no, "+player +"you slipped up and had to restart the obstacle! Try again next round.");
		return false;
	}
}


function obstacleTwoHurdles() {
	let sides = 6;
	let results = diceRoll(sides);
	alert("You rolled "+results+"!")
	if (results>4 == true) {
		alert("Yay, all hurdles were cleared! Next obstacle!");
		return true;
	}
	else if (results<=4 && results>2 == true) {
		alert("Your foot caught a hurdle which caused you to stumble a bit, but not too shabby! Onto the next obstacle!");
		return true;
	}
	else if (results<=2 == true) {
		alert("Yikes, you hit a hurdle and had a total wipeout... try again next round!");
		return false;
	}
}


function obstacleThreeHulaHoop() {
	let sides = 20;
	let results = diceRoll(sides);
	alert("You rolled "+results+"!")
	if (results<=5 == true) {
		alert("You really should practice hula hooping more... barely got it to stay up. Try again next round!");
		return false;
	}
	else if (results>5 && results<=10 == true) {
		alert("Hey, at least you kind of got it to stay off the ground! Try again and see if you can do it a little longer next time!");
		return false;
	}
	else if (results>10 && results<=13 == true) {
		alert("Oh so close! Try again next time!");
		return false;
	}
	else if (results>13 && results<=20 == true) {
		alert("Impressive! Get going to the tire course!");
		return true;
	}
}


function obstacleFourTireCourse() {
	let sides = 8;
	let results = diceRoll(sides);
	alert("You rolled "+results+"!")
	if (results<=2 == true) {
		alert("Face plant. Ouch, try again next round!");
		return false;
	}
	else if (results>2 && results<=4 == true) {
		alert("Oh, so close to passing! Give it another try next round!");
		return false;
	}
	else if (results>4 && results<=6) {
		alert("Made it! Barely, but still a success. Head over to the rope climb!");
		return true;
	}
	else if (results>6 && results<=8) {
		alert("Nice job! You breezed through the tire course. Onto the rope climb!");
		return true;
	}
}


function obstacleFiveRopeClimb() {
	let sides = 10;
	let results = diceRoll(sides);
	alert("You rolled "+results+"!");
	if (results<=2) {
		alert("Get a grip! Try again next time.");
		return false;
	}
	else if (results>2 && results<=4) {
		alert("Shake that rope burn off and try again next round!");
		return false;
	}
	else if (results>4 && results<=5) {
		alert("Oh so close! Your fingers grazed the string on the bell, but not enough to ring it. Give it another go next round!");
		return false;
	}
	else if (results>5 && results<= 8) {
		alert("Made it! Head over to the final obstacle... the balance beam!");
		return true;
	}
	else if (results>8 && results<=10) {
		alert("Awesome! Did you train with Tarzan? Advance to the final obstacle... the balance beam!")
		return true;
	}
}


function obstacleSixBalanceBeam() {
	let sides = 12;
	let results = diceRoll(sides);
	alert("You rolled "+results+"!");
	if (results<=3) {
		alert("Jeez, almost broke your ankle on that fall. Get back up and try again next time!");
		return false;
	}
	else if (results<3 && results<=8) {
		alert("Super wobbly on the beam... give it another go next turn!");
		return false;
	}
	else if (results>8 && results<=12) {
		alert("CONGRATULATIONS! You successfully made it through the obstacle course!");
		return true;
	}
}
