var BMI = function (number1, number2){
	return ((number1 / (number2 ** 2))*703);
};

var number1 = parseInt(prompt("Enter your weight in lbs "));
var number2 = parseInt(prompt("Enter your height in inches "));
var result = BMI(number1,number2);

alert(result);