function grade (){
    var grade = parseInt(prompt ("Tell me the grade"));
    if(grade >= 5 && grade <= 8 ){
        alert(true);
    }
    else if(grade > 8 && grade < 11) {
        alert ("Excellent")
    } 
    else if (grade == 11){
        alert ("Perfect")
    }
    else if(grade >= 0 && grade < 5){
        alert(false);
    }
    else{
        alert("Out of range")
    }
}
grade();
