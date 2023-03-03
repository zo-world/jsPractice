console.log("Script 3");


function priceCalc(){
  console.log("Calculator");
  
  let price = prompt("Enter your price: ");
  let tax = prompt("Enter your state tax: ");
  let total = price + tax;

  // console.log(studentName, studenEmail);
  // console.log(grade101, grade102, grade103)

  document.getElementById("taxcalc").innerHTML=`
  <div class="calculator">
    <h2>Price Calculator</h2>
    <p>Price: ${price} </p>
    <p>Tax: ${tax}</p>
    <p>Total : ${total}</p>
  </div>
  `;
}
