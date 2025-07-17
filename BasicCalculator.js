let num1= parseFloat(prompt("Enter the num1:"));
let operator= prompt("Enter the operator(+,-,*,/):");
let num2=parseFloat(prompt("Enter the num2:"));
switch(operator)
{
    case '+':
        alert(num1+num2);
        break;
    case '-':
        alert(num1-num2);
        break;
    case '*':
        alert(num1*num2);
        break;
    case '/':
        alert(num1/num2);
        break;
default:
        alert("Invalid operator!!");
}