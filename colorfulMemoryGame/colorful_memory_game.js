const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
//creates a new array with dupplicates of the colors array and shuffles them.
let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;

const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');


//Creates cards 
function generateCards() {
    //It utilizes a 'for…of' loop to iterate over each element (color) in the 'cards' array. For each color in the 'cards' array:
    for (const color of cards) {
    //creates card element 
        const card = document.createElement('div');
        card.classList.add('card');
        //It sets the 'dataset.color' attribute of the card element to the current color value from the 'cards' array. 
        //add property data on tag example: data-color: 'color'
        card.dataset.color = color;
        card.textContent = '?';
        gameContainer.appendChild(card);
    }
}


//Shuffles cards
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        //For refernce on how random generator expression works below:
        //https://www.w3schools.com/js/js_random.asp
        //random number from 0 to i+1, if i is 7, then from 0-6, 7 is excluded
        const j = Math.floor(Math.random() * (i + 1));
        // This line efficiently swaps the values at positisons 'i' and 'j' without requiring a temporary variable
        //Uses destructuring assignment
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function handleCardClick(event) {
    //This line retrieves the element that triggered the event (in this case, a clicked card) and assigns it to the 'card' variable
    //The target property returns the element where the event occured.
    const card = event.target;
    //This 'if' statement checks whether the clicked element is a card and if it's already matched. If either condition is true:
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return;
    }
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);
    //Checks if two cards have been selected. If two cards have been chosen, it uses 'setTimeout()' to delay the execution of the 'checkMatch()' function by 500 milliseconds. 
    //This brief delay allows the player to see both selected cards before their comparison briefly.
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

//Evaluates whether the two selected cards match each other in the memory match game.
function checkMatch() {
    //This line uses array destructuring to assign the first two elements of the 'selectedCards' array to 'card1' and 'card2'. 
    //These variables represent the two cards selected by the player for comparison.
    const [card1, card2] = selectedCards;

    //This checks if the color value stored in the 'dataset.color' attribute of 'card1' matches the color value of 'card2'.
    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    selectedCards = [];
}

function startGame() {
    //duration of match
    let timeLeft = 30;
    startbtn.disabled = true;
    score = 0; // Reset score to zero
    scoreElement.textContent = `Score: ${score}`;
    //starts timer
    startGameTimer(timeLeft);
    //shuffles cards
    cards = shuffle(colors.concat(colors));
    selectedCards = [];
    gameContainer.innerHTML = '';
    generateCards();
    gameContainer.addEventListener('click', handleCardClick);
}

function startGameTimer(timeLeft) {
    timerElement.textContent = `Time Left: ${timeLeft}`;
    //Initiates an interval that triggers a function every second (1000 milliseconds) to update the timer.
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft === 0) {
            //Stops the interval, effectively ending the timer from counting down further.
            clearInterval(gameInterval);
            let timeLeft = 30;
            alert('Game Over!');
            startbtn.disabled = false;
        }
    }, 1000);
}

//Triggers Start Game
startbtn.addEventListener('click', startGame);