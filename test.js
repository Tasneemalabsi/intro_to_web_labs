let email = prompt("Please enter your email: ");
while (true) {
  let check = true;
  let count = 0;
  if (email[0] === "@" || email[0] === " ") {
    alert("The email is invalid, try again");
    email = prompt("Please enter your email: ");
  } else {
    for (let i = 1; i < email.length; i++) {
      if (email[i] == " ") {
        check = false;
        break;
      }
      if (email[i] === "@") {
        count++;
      }
    }
    if (count === 1 && check) {
      alert("Valid email");
      break;
    } else {
      alert("The email is invalid, try again");
      email = prompt("Please enter your email: ");
    }
  }
}

let password;
count =0;
let capital = 0;
while(true){
    password=prompt("enter your password");
    if(password.length<6 || password.length>12){
        alert("Invalid Password, try again");
    }
    else{
    for(let i=0; i<password.length; i++){
        if(!isNaN(password[i])){
            count++;
        }
        if(password[i]===password[i].toUpperCase()){
            capital++
        }
    }
    if(capital>0 && count>0){
        alert("Valid Password");
        break;
    }
    else{
        alert("Invalid Password, try again");
        count = 0;
        capital=0;
    }
    }
}
document.write(`<input type="email" value="${email}" style="margin-bottom:20px;">`);
document.write("<br>");
document.write(`<input type="password" value="${password}" style="margin-top:20px;"`);