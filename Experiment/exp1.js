//Display Student info

let StudentName ="Shruti"
let StudentId = 105
let StudentAge = 21

// console.log(StudentName);
// console.log(StudentId);
// console.log(StudentAge);
document.writeln(StudentName + "<br>")
document.writeln(StudentId + "<br>")
document.writeln(StudentAge + "<br>")

//dispaly numbers using loop

for(let i=1;i <= 10;i++)
{
    console.log(i);
    
}


//student pass or fail

let marks = 75

if(marks<=75)
{
    console.log("Student Pass");
    
}
else{
    console.log("Student fail");
    
}

//odd-even check
let num=10

if(num % 2 ==0)
{
    console.log("Even");
    
}
else{
    console.log("Odd");
    
}


//get student info

let StudentInfo ={
    name : prompt("Enter name"),
    age : prompt("Enter age"),
    
};
document.write("Student Name: " + StudentInfo.name+"<br>");
document.write("Student Age: " + StudentInfo.age +"<br>");