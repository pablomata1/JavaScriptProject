
//Access to HTML elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');

//Task list storage array
let tasks =  [];

//Adds task to task[] array and displays input
function addTask(){
    //retrieves taskInput value and trims any trailing whitespace using trim()
    const taskText = taskInput.value.trim();
    if(taskText){
        tasks.push({text: taskText});
        taskInput.value = '';
        displayTasks();
    }
}

//displays tasks list
function displayTasks(){
    taskList.innerHTML = '';
    tasks.forEach((task, index) =>{
        //creates a new element
        const li = document.createElement('li');
        //creates html content inside li element
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
        
        //A trigger even, when a checkbox state changes, its triggers toggle task.
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        //appends li element to tasklistElement
        taskList.appendChild(li);

    });
}    

//toggles completed checkbox
function toggleTask(index){
    console.log('task: ' + JSON.stringify(tasks) )
    //creates a new property to object and sets it to true or false
    tasks[index].completed = !tasks[index].completed;
    console.log('After toggle task: ' + JSON.stringify(tasks) )

    displayTasks();
}

function clearCompleted(){
// filters the tasks array to retrieve only the tasks that are not marked as completed (task.completed is false) 
//Returning a new array excluding completed tasks.
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

addTaskBtn.addEventListener('click', addTask);
clearCompletedBtn.addEventListener('click', clearCompleted);
displayTasks();