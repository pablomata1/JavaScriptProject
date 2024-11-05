let testText =  "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest(){
    //Sets the test text
    document.getElementById('inputText').value = testText;

    //Reset results and timer
    document.getElementById('output').innerHTML = '';    
    startTime = new Date().getTime();
    console.log(startTime);

    // Change button text and functionality
    // var button = document.getElementById("btn");
    // button.innerHTML = "End Test";
    // button.onclick = ensssdTest;


}

function endTest(){
//This line captures the current time when the test ends.
    endTime = new Date().getTime();
    console.log(startTime, " -----" , endTime);

// Calculate time elapsed and words per minute (WPM)
    var timeElapsed = (endTime - startTime) / 1000; // in seconds
    var userTypedText = document.getElementById("userInput").value;

    //Disable user input
    document.getElementById('userInput').readOnly = true;

    //Split the text using regex to count words correctly
    //Computes the number of words typed by splitting the input text using a regular expression to consider words separated by spaces, tabs, or newlines. 
    //Filtering ensures counting valid words, excluding empty strings.
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    var wpm = 0; //Default value

    //It checks if timeElapsed is not zero and typedWords is a valid number.
    if(timeElapsed !== 0 && !isNaN(typedWords)){
        wpm = Math.round((typedWords/timeElapsed) * 60)
    }

    //Display results 
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
                '<p>Total Length: ' + userTypedText.length + '</p>'  + 
                "<p>Words Typed: " + typedWords + "</p>" +
                "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
                "<p>Words Per Minute (WPM): " + wpm + "</p>";

    //Reset button
    // var button = document.getElementById('btn');
    // button.innerHTML = "Start Test";
    // button.onclick = startTest;

}

