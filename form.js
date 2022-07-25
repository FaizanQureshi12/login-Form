
//  let limit = function limit(){
//   let password = document.querySelector('#password').value
//   if(password.length >8){
//   limit.innerHTML = "Enter only Eight Characters";
//   return;  
//   } 
// }
// limit();

let show_password = () => {
  const pass1 = document.getElementById("code");
  if (pass1.type === "code") {
    pass1.type = "text";
  } else {
    pass1.type = "code";
  }
}
let users = []
function alluser() {
  let alluserinstring = localStorage.getItem('users')
  users = JSON.parse(alluserinstring) || []
  console.log('users')
}
alluser();

function signup() {
  let username = document.getElementById('UserName').value
  let password = document.getElementById('password').value
  let confirmpassword = document.getElementById('Confirmpassword').value

  if (password.value === confirmpassword.value) {
    let newuser = {
      username: document.getElementById('UserName').value,
      K_email: email,
      password: document.getElementById('password').value,
      confirmpassword: document.getElementById('confirmpassword').value,
      K_password: password,

    }

    if (let i = 0; i < users.length; i++) {
      if (users[i].K_email === email) {
        alert("UserName is Already Exist")
        return;
      }
    }
    users.push(newuser)
    localStorage.setItem('users', JSON.stringify(users))
    move();
  }
  else {
    alert('password not same')
  }
}

function login() {
  let login = document.getElementById('login').value
  let code = document.getElementById('code').value
  if (login.length !== 0 && user.length == 0 && code.length !== 0) {
    alert('Enter A valid Email or Password')
    return;
  }
  for (let i = 0; i < users.length; i++) {
    if (user[i].k_email === login && user[i].K_password === code) {
      move();
      return;
    }
    else if (users[i].K_email !== login && users[i].K_email === login) {
      alert("Wrong Password")
      return;
    }
  }
}
function move() {
  window.location.href = "./Dashboard.html";
}
function signup() {
  window.location.href = './Dashboard.html'
}