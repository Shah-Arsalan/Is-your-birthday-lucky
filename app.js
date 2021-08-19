const birthdate = document.querySelector("#enter-date");
const luckynumber = document.querySelector("#lucky-number");
const output = document.querySelector("#text");
const button = document.querySelector("#check");
var sum = 0;
button.addEventListener("click", function clickbutton () {
    var newdate = Number(birthdate.value.replaceAll("-",""));
    //console.log(newdate)
while (newdate > 0) {
    sum = sum + (newdate % 10);
    newdate = Math.floor(newdate / 10);
}
//console.log(sum)
//console.log(newdate)
if (sum % luckynumber.value === 0){
    output.innerText = "Your Birthday is Lucky!!!"
}else{
    output.innerText = "Your Birthday is not lucky"
}

});





