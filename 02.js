let users = {}; // creation of an empty dictionary to store the information about the sport and the corresponding username and password
  
function loadUsersFromLocalStorage() {
  const userDataString = localStorage.getItem('users');
  if (userDataString) {
    users = JSON.parse(userDataString); // Parse data from LocalStorage
    console.log(users); // for checking
  }
}

function saveUsersToLocalStorage() {
  localStorage.setItem('users', JSON.stringify(users)); // Store data in LocalStorage 
}

function checkLogin() {
  const username = document.getElementById("my_username").value;
  const password = document.getElementById("my_password").value;
  const sport = document.getElementById("my_sport").value.toLowerCase();

  if (users[sport] && users[sport].username === username && users[sport].password === password) {
    return true;  // Login successful
  } 
  return false;
}

function sign_in() {
  loadUsersFromLocalStorage(); // Load users data before checking login
  if (checkLogin()) {
    location.href = "04.html"; // Assuming this redirects to another page
    alert("You have successfully logged in!");
  } else {
    alert("invalid username or password");
  }
}

// Call loadUsersFromLocalStorage on page load
loadUsersFromLocalStorage();

  function home(){
    location.href ="02.html";
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
        let userData = localStorage.getItem('usersObject');
        let usersObject;
        if (userData) {
          usersObject = JSON.parse(userData); // Parse existing data from LocalStorage
        } 
        else {
          usersObject = {}; // Create empty object if no data exists
        }
        usersObject[newSport] = userObject; // Add new user data
        localStorage.setItem('users', JSON.stringify(usersObject)); // Store updated data
        
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

  
  
  const buttons = document.querySelectorAll(".announcement");
  
  // Loop through each button and add a click event listener
  buttons.forEach(button => {
    button.addEventListener("dblclick", () => {
      announce(button.innerHTML); // Calling of announce function on double click
    });
  });
  
  function announce(text) {
    console.log("Announcement: " + text); // Announce the text with proper formatting
    
    alert("An announcement has been made!");//giving an alert whenever an announcement is made
  }