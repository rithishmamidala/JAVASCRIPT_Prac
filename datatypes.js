let points = 0;
let c = 0;

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function subtractFromRandomNumber(subtractNumber) {
  const randomNumber = generateRandomNumber(1000, 9999);
  const result = randomNumber - subtractNumber;
  
  if (result > 0) {
    points += 10;
  }
  
  const log = document.getElementById('game-log');
  const logMessage = document.createElement('p');
  logMessage.textContent = `Random Number: ${randomNumber}   Subtracting number: ${subtractNumber}\nResult: ${result}\nPoints: ${points}`;
  log.appendChild(logMessage);
  
  // Scroll to bottom of log
  log.scrollTop = log.scrollHeight;
  
  c++;
  if (c >= 3) {
    endGame();
  }
}

function endGame() {
  const log = document.getElementById('game-log');
  const endMessage = document.createElement('p');
  if (points > 0) {
    endMessage.textContent = "Hurraaaaay.....!!! You Won";
    endMessage.classList.add('win');
  } else {
    endMessage.textContent = "OoooPs! You Lost";
    endMessage.classList.add('lose');
  }
  log.appendChild(endMessage);
}

function runEvery20Seconds() {
  if (c < 3) {
    subtractFromRandomNumber(generateRandomNumber(1000, 9999)); 
    setTimeout(runEvery20Seconds, 5000); // Repeat every 20 seconds (20000 milliseconds)
  }
}

// Start the game
runEvery20Seconds();
