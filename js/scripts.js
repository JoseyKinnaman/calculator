var BMI = function (number1, number2){
	return ((number1 / (number2 ** 2))*703);
};

var number1 = parseInt(prompt("Enter your weight in lbs "));
var number2 = parseInt(prompt("Enter your height in inches "));
var result = BMI(number1,number2);

alert(result);

var Temp = function (number1){
    return ((number1 * 9/5) + 32)
};

var number1 = parseInt (prompt ("Enter the temp in Celsius "));
var result = Temp(number1);

alert(result);

var ounce = function (number1){
    return (number1 / 8)
};
var number1 = parseInt(prompt("Enter Ounces"));
var result = ounce(number1);

alert(result);