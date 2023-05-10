let email = prompt("Please enter your email: ");
let check = true;
let arr = email.split("@")
let str = arr[1];
let parts = str.split(".");
while(true){
    if(email.split("@").length != 2){
        alert("email is invalid");
    }
    else if (arr[0].length == 0){
        alert("email is invalid");
    }
    else if (arr[1])
}
