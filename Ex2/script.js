function names(a, b, c){
    var a = prompt("Tell me your name");
    var b = prompt("Tell another name");
    var c = prompt("Tell another name");
    console.log("Welcome " + a + ", " + b + ", " + c + ".");
}


function age (year){
    var year = prompt("Tell me your yeah of brith");
    alert(2022-year);
}


function nameAge(n1, n2, n3, a1, a2, a3){
    var n1 = prompt("Tell me your name"); 
    var a1 = prompt("Tell me " + n1 + "'s age");
    var n2 = prompt("Tell me your name"); 
    var a2 = prompt("Tell me " + n2 + "'s age");
    var n3 = prompt("Tell me your name"); 
    var a3 = prompt("Tell me " + n3 + "'s age");
    alert("Welcome " + n1 + ", you are " + a1 +". " + "Welcome " + n2 + ", you are " + a2 +". " + "Welcome " + n3 + ", you are " + a3 +". ")
}
nameAge();
