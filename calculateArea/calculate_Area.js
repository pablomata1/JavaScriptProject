let length;
let width;

function calculateArea(){

    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    

    let area = length * width;
        
    console.log(length);
    console.log(width);
    console.log(area);

    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}


let grocery1;
let grocery2;
let grocery3;

function calculateAmount(){
    grocery1 = parseFloat(document.getElementById('grocery1').value);
    grocery2 = parseFloat(document.getElementById('grocery2').value);
    grocery3 = parseFloat(document.getElementById('grocery3').value);

    let amount = grocery1 + grocery2 + grocery3;

    document.getElementById('resultAmount').innerText = `The total amount is: $ ${amount}`;
}