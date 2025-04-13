let login_card = document.querySelector(".login-card")
let login = document.querySelector(".login")
let password = document.querySelector(".password")
let button = document.querySelector(".button")



button.addEventListener('click', () => {
    let loginValue = login.value; 
    let passwordValue = password.value; 

    if (loginValue === "oval" && passwordValue === "1234") {
        window.open("index2.html");
    } else {
        alert("Неверный логин или пароль");
    }
});



// document.getElementById('data').addEventListener('ckick', function(){
//     let login_value = document.getElementById('login').value
//     let password_value  = document.getElementById('password').value

//     let suitableLogin = "4612"
//     let suitablePassword = "123456789"

//     button.addEventListener('click', function(){
//         if(login == suitableLogin & password == suitablepa){
//                 window.open("index2.html");
//         }

//         else{
//             alert("пошёл нахуй")
//         }
//     })
// })

// let login_value = document.getElementById('login').value
// let password_value  = document.getElementById('password').value

// let suitableLogin = "4612"
// let suitablePassword = "123456789"

// button.addEventListener('click', function(){
//     if(login == suitableLogin & password == suitablepa){
//             window.open("index2.html");
//     }

//     else{
//         alert("пошёл нахуй")
//     }
// })







// let login = "oval";
// let password = 1234;

// if(login == oval & password == 1234){
//     button.addEventListener('click', () =>{
//         window.open("index2.html")
//     })
// }
// else{
//     alert("пошёл нахуй")
// }




// let user = {};

// function User(login, password){
//     this.login=login;
//     this.password=password;
// }

// function createId(sers){
//     return Object.keys(users).length
// }

// for (const item in object) {
    
// }



// button.addEventListener('ckick', () =>{
//     const loginUser = login.value;
//     const passwordUser = password.value;

//     const user = new User(loginUser, passwordUser)


//     const userId = "Users" + createId(users);
//     users[userId] = user;
//     console.log(users);
// } )

// if(login=4612, password=123456789){
//     button.addEventListener('click', function(){
//         window.open("index2.html");
// })
// }
// else{
//     alert("пошёл нахуй")
// }

// button.addEventListener('click', function(){
//         window.open("index2.html");
// })



