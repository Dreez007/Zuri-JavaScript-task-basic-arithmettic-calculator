const num1 = parseFloat(prompt("Enter First number: "));
const num2 = parseFloat(prompt("Enter Second number: "));
const operator = prompt("Enter Operator (+, -, *, /, %)");
let result = 0;
if(isNaN(num1) || isNaN(num2)){
    alert("Error!! Refresh")
} else{
    if(operator == "+"){
        result = num1 + num2;
    } else if(operator == "-"){
        result = num1 - num2;
    } else if(operator == "*"){
        result = num1 * num2;
    } else if(operator == "/"){
        result = num1 / num2;
    }
    else if(operator == "%"){
        result = num1 % num2;
    }
}
alert(num1 + operator + num2 + "=" + result)