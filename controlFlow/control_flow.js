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

//---------------Nested if else

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


//----------------Switch Case Conditional

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


//------------------Ternary Conditional

let isAuthenticated = true;

let authenticatedStatus = isAuthenticated ? 'Authenticated' : 'Not Authenticated'; 
console.log('Aunthenticated Status: ', authenticatedStatus); //Authenticated Status: Authenticated


//----------------------------Addtional Tasks Practice--------------------------------------

//------------if else practice
let person = 'Employee';
let accessService;

if(person === 'Employee'){
    accessService = 'Dietary Services';
}else if(person === 'Customer'){
    accessService = 'Customer Service'
}else{
    accessService = 'No Services';
}

console.log('Access Service: ', accessService); //Access Service:  Dietary Services


//--------------Nested if else statements practice

let isEnrolled = true;
let personMessage;

if(isEnrolled){
    if(person === 'Employee'){
        personMessage = 'Welcome to Dietary Services, you have a one to one interaction with a dietician';
    }else{
        personMessage=  'Welcome, subscriber';
    }
}else{
    personMessage = 'You are not enrolled'
}

console.log('Person Message: ', personMessage); //Person Message:  Welcome to Dietary Services, you have a one to one interaction with a dietician


//-----------------swicth statements practice

let serviceMember = 'subscriber';
let accessType;

switch(serviceMember){
    case 'manager' :
        accessType = 'manager';
        break;
    case 'regular' :
        accessType = 'regular';
        break;
    case 'subscriber' :
        accessType = 'subscriber';
        break;
    default:
        accessType = 'No access'
}

console.log('Access Type: ', accessType); //Access Type:  subscriber


//----------------------Tenary practice statements
let isSubscribed = true;

let subscribeStatus = isSubscribed ? 'You are enrolled already' : 'You need to enroll';

console.log('Subscribe Status: ', subscribeStatus); //Subscribe Status:  You are enrolled already


