# Smooth Out TM Behavior

```javascript
let guesses = [];

function updateGuesses( guess ) {

    // Record the guess in an array
    guesses.push(guess); 
    
    // Ensure only the last 10 items are kept
    if (guesses.length > 10) {
        // Remove the oldest value if we exceed 10
        guesses.shift(); 
    }
}

function findMostFrequentGuess() {
    if (guesses.length === 0) {
        return null; // Return null if there are no values
    }
  
    const frequencyMap = {}; // Object to map each value to its frequency
    let maxFrequency = 0;
    let mostFrequentGuess = guesses[0];

    for (const guess of guesses) {
        if (frequencyMap[guess]) {
            frequencyMap[guess]++; // Increment frequency count
        } else {
            frequencyMap[guess] = 1; // Initialize frequency count
        }
      
        // Check if current value is now the most frequent
        if (frequencyMap[guess] > maxFrequency) {
            maxFrequency = frequencyMap[guess];
            mostFrequentGuess = guess;
        }
    }

    return mostFrequentGuess;
}





```
