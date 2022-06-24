// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 
let lyrics = ""
for (let i = 99; i > 0; i--) {
    lyrics += +i + "bottles of beer on the wall, " + "</br>";
    lyrics += +i + " bottles of beer, " + "</br>";
    lyrics += "Take one down and pass it around," + "</br>";
    lyrics += +(i - 1) + " bottles of beer on the wall, " + "</br>";
    lyrics += "<br>&nbsp;</br><br>&nbsp;</br>"
}
document.getElementById("beer").innerHTML = lyrics;




//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let m_order = "";
months.forEach(Function1);
document.getElementById("for-in").innerHTML = m_order;

function Function1(orders) {
    m_order += orders + "<br>";
}







// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph

let word = "HappyAmerica";

let txt = "";
for (let x of word) {
    txt += x + "<br>";
}

document.getElementById("for-of").innerHTML = txt;


// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph

let numbers = "";
let i = 1;
while (i < 51) {
    numbers += i + "<br>";
    i++;
}
document.getElementById("while").innerHTML = numbers;