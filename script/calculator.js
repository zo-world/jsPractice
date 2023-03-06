console.log("Calculator");

function Calculator(){
  //get number 1 from the prompt
  //get number 2 from the prompt
  //convert the prompt to a number
  //display them on the console
  
  let op = prompt("Enter the operator (+ - / *)");
  let num1 = Number(prompt("Enter your first number :"))
  let num2 = Number(prompt("Enter your second number :"))
  
  switch (op) {
    case "+":
      Sum(num1, num2);
      break;
    case "-":
      Sub(num1, num2);
      break;
    case "*":
      Mult(num1, num2);
      break;
    case "/":
      Div(num1, num2);
      break;
    default:
      alert("Invalid operator"); 
  }

  // console.log(num1, num2);

  // let sum = num1 + num2;
  // let sub = num1 - num2;
  // let mult = num1 * num2;
  // let div = num1 / num2;

}

function Sum(a,b){
  let total = a+b;
  document.getElementById("results").innerHTML =`
  <p>${a} + ${b} = ${total}</p>
  `;
  return total;
}
function Sub(a,b){
  let total = a-b;
  document.getElementById("results").innerHTML =`
  <p>${a} - ${b} = ${total}</p>
  `;
  return total;
}
function Mult(a,b){
  let total = a*b;
  document.getElementById("results").innerHTML =`
  <p>${a} * ${b} = ${total}</p>
  `;
  return total;
}
function Div(a,b){
  let total = a/b;
  document.getElementById("results").innerHTML =`
  <p>${a} / ${b} = ${total}</p>
  `;
  return total;
}