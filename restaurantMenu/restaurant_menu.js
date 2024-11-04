//const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Outmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];
const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];

//Using map method for iteration
//Creates a new array list of p elements 
//Displays the list to the HTml file 
 const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;
console.log(breakfastMenuItemsHTML);



//Using forEach array method
//Adds p tags to a list, then displays them in the HTML file
let mainCourseItem ='';
mainCourseMenu.forEach((item,index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
console.log(mainCourseItem);

document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;


//for loop iteration
let dessertItem ='';
for(let i = 0; i<dessertMenu.length; i++){
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;

