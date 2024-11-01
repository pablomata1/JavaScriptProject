let count = 0;

function increaseCount(){
    count++;
    displayCount();//displays the count
    checkCount(); // checks count value and displays message
    console.log(count);
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML = count;
}

function checkCount(){
    if(count === 10){
        alert('Your instagram post gained 10 followers! Congratulations!')
    }else if(count === 20){
        alert('Your instagram post gained 20 followers! Congratulations!')
    }
}