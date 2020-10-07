/* send a customized message based on time*/


console.log("i am in hello.js");

//get the date and time
var today= new Date();
var hoursNow= today.getHours();
//display the greeting message
var greeting = "";
if (hoursNow <= 12){
  greeting = "good morning"
}else{
  greeting = "good afternoon"
}

// write to the doc
document.write(greeting)