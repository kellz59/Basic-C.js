var operator = prompt("Enter the operator");
var firstnum =parseInt(prompt("firstnum"));
var secondnum =parseInt(prompt("secondnum"));
let result;
if (operator == '+') {
   result = firstnum+secondnum;
}
else if (operator == '-') {
   result = firstnum-secondnum;
}
else if (operator == '*') {
   result = firstnum*secondnum;
}
else if (operator == '/') {
   result = firstnum/secondnum;
}
alert(result);


    
    
