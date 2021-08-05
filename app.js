const birthdate = document.querySelector("#enter-date");
const luckynumber = document.querySelector("#lucky-number");
const output = document.querySelector("#text");
const button = document.querySelector("#check");
var sum = 0;
button.addEventListener("click", function clickbutton () {
    var newdate = Number(birthdate.value.replaceAll("-",""));
while (newdate > 0) {
    sum = sum + (newdate % 10);
    newdate = Math.floor(newdate / 10);
}
console.log(sum)
if (sum % luckynumber.value === 0){
    output.innerText = "Your Birthday is Lucky!!!"
}else{
    output.innerText = "Your Birthday is not lucky"
}

});





