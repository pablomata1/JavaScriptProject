let userRole ='admin';
let accessLevel;

//Check what access does the userRole have
if(userRole === 'admin'){
    accessLevel = 'Full access granted';
}else if(userRole === 'mangager'){
    accessLevel= 'Limited access granted';
}else{
    accessLevel = 'No access granted';
}

console.log('Access Level: ', accessLevel); //Access Level: Full access granted

//--------------------

let isLoggedIn = true;
let userMessage;

//Check if user is logged in and check what user it is for a custom message
if(isLoggedIn){
    if(userRole === 'admin'){
        userMessage = 'Welcome, Admin!';
    }else{
        userMessage = 'Welcome, User!';
    }
}else{
    userMessage = 'Please log in to access the system';
}

console.log('User Message: ', userMessage ); //'User Message: Welcome, Admin!'


//----------------------

let userType = 'subscriber';
let userCategory;

//Check what type of user it is using a switch statment
switch(userType){
    case 'admin':
        userCategory = 'Administrator';
        break;
    case 'manager': 
        userCategory = 'Manager';
        break;
    case 'subscriber':
        userCategory= 'subscriber';
        break;    
    default:
        userCategory= 'unknown';   
}

console.log("User Category: ", userCategory); //User Category: subscriber


//------------------------

let isAuthenticated = true;

let authenticatedStatus = isAuthenticated ? 'Authenticated' : 'Not Authenticated'; 
console.log('Aunthenticated Status: ', authenticatedStatus); //Authenticated Status: Authenticated