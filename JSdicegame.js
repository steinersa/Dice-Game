
let inputPlayerOne = prompt("Player 1, please enter your team name:");
let inputPlayerTwo = prompt("Player 2, please enter your team name:");

let playerTwoScore = 0;
let playerOneScore = 0;


function diceRoll(sides) {
	let results = Math.floor(Math.random() * sides) + 1;
	return results
}

function runGame() {

	// while 

	if(playerOneScore == 0) {
		alert("The starting gun goes off and you head towards the first obstacle... monkey bars! To complete the monkey bars and move onto the next obstacle, roll an even number using a four-sided dice. Click OK to roll!");
		if(obstacleOneMonkeyBars(inputPlayerOne)){
			playerOneScore++;
		}
	}
	if(playerTwoScore == 0) {
		alert("The starting gun goes off and you head towards the first obstacle... monkey bars! To complete the monkey bars and move onto the next obstacle, you must roll an even number using a four-sided dice. Click OK to roll!");
		if(obstacleOneMonkeyBars(inputPlayerTwo)){
			playerTwoScore++;
		}
	}
	if(playerOneScore == 1) {
		alert("You approach the second obstacle... hurdles! To clear the hurdles and advance to the next obstacle, roll a number greater than 2 on a six-sided dice! CLick OK to roll.");
		if (obstacleTwoHurdles(inputPlayerOne)) {
			playerOneScore++;
		}
	}
	if(playerTwoScore == 1) {
		alert("You approach the second obstacle... hurdles! To clear the hurdles and advance to the next obstacle, roll a number greater than 2 on a six-sided dice! Click OK to roll.");
		if (obstacleTwoHurdles(inputPlayerTwo)) {
			playerTwoScore++;
		}
	}
	if(playerOneScore == 2) {
		alert("You run to the hula hoop laying on the ground, the third obstacle. Hula hoop for as many seconds as you can! Roll higher than 13 on a 20-sided dice to advance to the next obstacle! CLick OK to roll.");
		if (obstacleThreeHulaHoop(inputPlayerOne)) {
			playerOneScore++;
		}
	}
	if(playerTwoScore == 2) {
		alert("You run to the hula hoop laying on the ground, the third obstacle. Hula hoop for as many seconds as you can! Roll higher than 13 on a 20-sided dice to advance to the next obstacle! Click OK to roll.");
		if (obstacleThreeHulaHoop(inputPlayerTwo)) {
			playerTwoScore++;
		}
	}
	if(playerOneScore == 3) {
		alert("Now you're all warmed up for the tire course! Roll to navigate through the tires! Roll anything greater than a 4 on an eight-sided dice to advance to the next obstacle! Click OK to roll.");
		if (obstacleFourTireCourse(inputPlayerOne)) {
			playerOneScore++;
		}
	}
	if(playerTwoScore == 3) {
		alert("Now you're all warmed up for the tire course! Roll to navigate through the tires! Roll anything greater than a 4 on an eight-sided dice to advance to the next obstacle! Click OK to roll.");
		if (obstacleFourTireCourse(inputPlayerTwo)) {
			playerTwoScore++;
		}
	}
	if(playerOneScore == 4) {
		alert("You're at the fifth obstacle... the rope climb! It's quite daunting looking up at the bell you need to ring at the top of the rope. But don't worry, you can do it! All you have to do is roll greater than 5 on a ten-sided dice. Click OK to roll.");
		if (obstacleFiveRopeClimb(inputPlayerOne)) {
			playerOneScore++;
		}
	}
	if(playerTwoScore == 4) {
		alert("You're at the fifth obstacle... the rope climb! It's quite daunting looking up at the bell you need to ring at the top of the rope. But don't worry, you can do it! All you have to do is roll greater than 5 on a ten-sided dice. Click OK to roll.");
		if (obstacleFiveRopeClimb(inputPlayerTwo)) {
			playerTwoScore++;
		}
	}
	if(playerOneScore == 5) {
		alert("Yay! You made it to the final obstacle. All you have to do is successfully walk across the balance beam. To do this, roll greater than 8 on a twelve-sided dice. Click OK to roll.");
		if (obstacleSixBalanceBeam(inputPlayerOne)) {
			playerOneScore++;
		}
	}
	if(playerTwoScore == 5) {
		alert("Yay! You made it to the final obstacle. All you have to do is successfully walk across the balance beam. To do this, roll greater than 8 on a twelve-sided dice. Click OK to roll.");
		if (obstacleSixBalanceBeam(inputPlayerTwo)) {
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
		alert("Congrats, " +player+ "! You made it through the monkey bars! Continue to the hurdles.");
		return true;
	}
	else if (results%2 != 0) {
		alert("Oh no, " +player+ ". You slipped up and had to restart the obstacle! Try again next round.");
		return false;
	}
}


function obstacleTwoHurdles(player) {
	let sides = 6;
	let results = diceRoll(sides);
	alert("You rolled "+results+"!")
	if (results>4 == true) {
		alert("Yay, " +player+ "! All hurdles were cleared! Next obstacle... the Hula Hoop!");
		return true;
	}
	else if (results<=4 && results>2 == true) {
		alert("Not too shabby, " +player+ "! Onto the hula hoop next!");
		return true;
	}
	else if (results<=2 == true) {
		alert("Yikes, " +player+ "! You hit a hurdle and had a total wipeout... try again next round!");
		return false;
	}
}


function obstacleThreeHulaHoop(player) {
	let sides = 20;
	let results = diceRoll(sides);
	alert("You rolled "+results+"!")
	if (results<=5 == true) {
		alert("You really should practice hula hooping more, " +player+ " ... barely got it to stay up. Try again next round!");
		return false;
	}
	else if (results>5 && results<=10 == true) {
		alert("Hey, " +player+ ", try again next round and see if you can do it a little longer!");
		return false;
	}
	else if (results>10 && results<=13 == true) {
		alert("Oh so close, " +player+ "! Try again next time!");
		return false;
	}
	else if (results>13 && results<=20 == true) {
		alert("Impressive, " +player+ "! Get going to the tire course!");
		return true;
	}
}


function obstacleFourTireCourse(player) {
	let sides = 8;
	let results = diceRoll(sides);
	alert("You rolled "+results+"!")
	if (results<=2 == true) {
		alert("Face plant. Ouch, try again next round, " +player+ "!");
		return false;
	}
	else if (results>2 && results<=4 == true) {
		alert("Oh so close to passing, " +player+ "! Give it another try next round!");
		return false;
	}
	else if (results>4 && results<=6) {
		alert("Made it! Barely, but still a success. Head over to the rope climb, " +player+ "!");
		return true;
	}
	else if (results>6 && results<=8) {
		alert("Nice job, " +player+ "! You breezed through the tire course. Onto the rope climb!");
		return true;
	}
}


function obstacleFiveRopeClimb(player) {
	let sides = 10;
	let results = diceRoll(sides);
	alert("You rolled "+results+"!")
	if (results<=2) {
		alert("Get a grip, " +player+ "! Try again next time.");
		return false;
	}
	else if (results>2 && results<=4) {
		alert("Shake that rope burn off, " +player+ ", and try again next round!");
		return false;
	}
	else if (results>4 && results<=5) {
		alert("Oh so close, " +player+ "! Your fingers grazed the string on the bell, but not enough to ring it. Give it another go next round!");
		return false;
	}
	else if (results>5 && results<= 8) {
		alert("Made it, " +player+ "! Head over to the final obstacle... the balance beam!");
		return true;
	}
	else if (results>8 && results<=10) {
		alert("Awesome job, " +player+ "! Did you train with Tarzan? Advance to the final obstacle... the balance beam!")
		return true;
	}
}


function obstacleSixBalanceBeam(player) {
	let sides = 12;
	let results = diceRoll(sides);
	alert("You rolled "+results+"!")
	if (results<=3) {
		alert("Jeez, " +player+ ". Almost broke your ankle on that fall. Get back up and try again next time!");
		return false;
	}
	else if (results<3 && results<=8) {
		alert("Super wobbly on the beam... give it another go next turn, " +player+ "!");
		return false;
	}
	else if (results>8 && results<=12) {
		alert("CONGRATULATIONS, " +player+ "! You successfully made it through the obstacle course!");
		return true;
	}
}
