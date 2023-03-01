console.log("Script 2");

// function sayHello(parameter1){
//   console.log("Hello" + parameter1);
// }


// let name = prompt("Enter your name: ");
// sayHello(" Yreish");
// sayHello(" Samantha");
// sayHello(" Will");
// sayHello(" Xyrone");
// sayHello(" Jorge");
// sayHello(" Eloim");

//adding function example

// function sum(number1,number2){
//   console.log(number1+number2);
// }

// sum(10, 20);

//Solve: get name, email, 101 grade, 102 grade, 103 grade (numbers).

function registerStudent(){
  console.log("Register function");
  
  let studentName = prompt("Enter student name: ");
  let studentEmail = prompt("Enter your student email address: ");
  let grade101 = Number(prompt("Enter your 101 grade: "));
  let grade102 = Number(prompt("Enter your 102 grade: "));
  let grade103 = Number(prompt("Enter your 103 grade: "));

  // console.log(studentName, studenEmail);
  // console.log(grade101, grade102, grade103);

  let gpa = (grade101+grade102+grade103)/3;

  document.getElementById("studentInfo").innerHTML = `
  <div class="student">
    <h2>Student data</h2>
    <p>Name: ${studentName} </p>
    <p>Email: ${studentEmail}</p>
    <p>GPA: ${gpa} </p>
  </div>
  `;
}

