let users = {}; // creation of an empty dictionary to store the information about the sport and the corresponding username and password
var globalsports = localStorage.getItem('globalsports');
let strInfo=''

function loadUsersFromLocalStorage() {
  const userDataString = localStorage.getItem('users');
  if (userDataString) {
    users = JSON.parse(userDataString); // Parse data from LocalStorage
    console.log(users); // for checking
  }
}



function checkLogin() {
  const sport = document.getElementById("my_sport").value.toLowerCase();
  const username = document.getElementById("my_username").value;
  const password = document.getElementById("my_password").value;
  globalsports=sport.value;
  localStorage.setItem('globalsports', sport);
  console.log(globalsports)
  // console.log(users[sport])
  // console.log(users[sport].username === username)
  // console.log(users[sport].password === password)

  if (users[sport] && users[sport].username == username && users[sport].password == password) {
    return true;  // Login successful
  } 
  return false;
}

function sign_in() {
  loadUsersFromLocalStorage(); // Load users data before checking login
  if (checkLogin()) {
    location.href = "announcement.html"; // Assuming this redirects to another page
    alert("You have successfully logged in!");
  } else {
    alert("invalid username or password");
  }
}

// Call loadUsersFromLocalStorage on page load
loadUsersFromLocalStorage();

  function home(){
    location.href ="login.html";
  }
 
  
  function authority() {
    const username = document.getElementById("authority_username").value;
    const password = document.getElementById("authority_pass").value;
  
    return username === "IIT" && password === "123";
  }
    
 
  function adduser() {
    if (authority()) {
      const newUser = document.getElementById("new_user").value;
      const newSport = document.getElementById("new_sports").value.toLowerCase();
      const newPass = document.getElementById("new_password").value;
  
      if (!users[newSport]) { // Check if sport doesn't exist yet
        const userObject = { username: newUser, password: newPass };
        let userData = localStorage.getItem('users');
        let usersObject;
        if (userData) {
          usersObject = JSON.parse(userData); // Parse existing data from LocalStorage
        } 
        else {
          usersObject = {}; // Create empty object if no data exists
        }
        console.log(usersObject)
        usersObject[newSport] = userObject; // Add new user data
        localStorage.setItem('users', JSON.stringify(usersObject)); // Store updated data
        console.log(usersObject)
        
        const result = document.getElementById("result");
        result.innerHTML = "Added user successfully (stored locally)";
        console.log(usersObject); // You can access the stored data from LocalStorage
      } 
      else {
        
        const result = document.getElementById("result");
        result.innerHTML = "User already exist corresponiding to this sports";
      }
    } 
    else {
      const result = document.getElementById("result");
      result.innerHTML = "Invalid authority. Unable to add the user.";
    }
  }
  

  function announce(text) {
    const userDataString = localStorage.getItem('announce');
    if (userDataString) {
      strInfo = JSON.parse(userDataString); // Parse data from LocalStorage
      console.log(strInfo); // for checking
    }
    let hello = strInfo+'\n'+text;
    localStorage.setItem('already',JSON.stringify(hello))
    localStorage.setItem('announce', JSON.stringify(hello)); // Store updated data
    alert("An announcement has been made!");//giving an alert whenever an announcement is made
        
    location.href="details.html";
    };


    
  function announce1(text){
    let final = document.getElementById(globalsports);
    console.log(final)
    console.log("Announcement: " + text); // Announce the text with proper formatting
    console.log(globalsports)
    if (final){
      var para = final.querySelector("p")
      
      para.innerHTML= "Announcement: " + text;
      
      
    };
  };
  
  
  const buttons = document.querySelectorAll(".announcement");
  
  // Loop through each button and add a click event listener
  buttons.forEach(button => {
    button.addEventListener("dblclick", () => {
      announce(button.innerHTML); // Calling of announce function on double click
    });
  });
  


function loadInfo(){
  const userDataString = localStorage.getItem('announce');
  if (userDataString) {
    strInfo = JSON.parse(userDataString); // Parse data from LocalStorage
    console.log(strInfo); // for checking
  }
  announce1(strInfo)
}



function deleteInfo(){

  const emptyStr ="";
  localStorage.removeItem('announce')
  localStorage.setItem('announce', JSON.stringify(emptyStr)); // Store updated data
  alert("All the previous announcements has been deleted!");//giving an alert whenever we make deletation
      
  location.href="details.html";
  }