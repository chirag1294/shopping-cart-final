// function updateOrder1() {
// 	var X = document.getElementById("price").value.substring(1);
// 	var Y = document.getElementById("small1");
// 	var value = Y[Y.selectedIndex].text;
// 	var Z = value * X;
// 	document.getElementById("total1").value = "$" + Z.toFixed(2);
// 	var Z2 = document.getElementById("total2").value;
// 	var sub1 = (Z2.substr(1) == "") ? 0 : Z2.substr(1);
// 	document.getElementById("total3").value = (Z+parseFloat(sub1));
// 	var tax = ((13*parseFloat(document.getElementById("total3").value))/100);
// 	document.getElementById("total4").value = tax;
// 	document.getElementById("total5").value =  parseFloat(document.getElementById("total3").value) + tax;
// }
// function updateOrder2() {
// 	var P = document.getElementById("price2").value.substring(1);
// 	var Q = document.getElementById("small2");
// 	var value1 = Q[Q.selectedIndex].text;
// 	var R = value1 * P;
// 	document.getElementById("total2").value  = "$" + R.toFixed(2)
// 	var R2 = document.getElementById("total1").value;
// 	var sub2 = (R2.substr(1) == "") ? 0 : R2.substr(1);
// 	document.getElementById("total3").value = (R+parseFloat(sub2));
// 	var tax1 = ((13*parseFloat(document.getElementById("total3").value))/100);
// 	alert(tax1);
// 	alert(document.getElementById("total4").value);
// 	document.getElementById("total4").value = tax1;
// 	document.getElementById("total5").value =  parseFloat(document.getElementById("total4").value) + tax1;
// }

function loadDefault(){
	var price = parseFloat(document.getElementById("price").value.substring(1));
	var quantity = parseFloat(document.getElementById("small1").value);
	document.getElementById("total1").value = "$ "+parseFloat(price*quantity).toFixed(2);
	price = parseFloat(document.getElementById("price2").value.substring(1));
	quantity = parseFloat(document.getElementById("small2").value);
	document.getElementById("total2").value = "$ "+parseFloat(price*quantity).toFixed(2);
	updateTotal();
	updateTax();
	updateGrandTotal();
}
loadDefault();

function updateOrder1() {
	var price = parseFloat(document.getElementById("price").value.substring(1));
	var quantity = parseFloat(document.getElementById("small1").value);
	// alert(X+" ### "+Y);
	document.getElementById("total1").value = "$ "+parseFloat(price*quantity).toFixed(2);
	updateTotal();
	updateTax();
	updateGrandTotal();
}
function updateOrder2() {
	var price = parseFloat(document.getElementById("price2").value.substring(1));
	var quantity = parseFloat(document.getElementById("small2").value);
	// alert(X+" ### "+Y);
	document.getElementById("total2").value = "$ "+parseFloat(price*quantity).toFixed(2);
	updateTotal();
	updateTax();
	updateGrandTotal();
}
function updateTotal(){
	var product1Price = parseFloat(document.getElementById("total1").value.substring(1));
	var product2Price = parseFloat(document.getElementById("total2").value.substring(1));
	document.getElementById("total3").value = "$ "+(product1Price+product2Price).toFixed(2);
}
function updateTax(){
	var taxPercent = 13;
	var taxAmount = (parseFloat(document.getElementById("total3").value.substring(1))*taxPercent)/100;
	document.getElementById("total4").value = "$ "+(taxAmount.toFixed(2));
}
function updateGrandTotal(){
	var totalAmount = parseFloat(document.getElementById("total3").value.substring(1));
	var taxAmount = parseFloat(document.getElementById("total4").value.substring(1));
	document.getElementById("total5").value = "$ "+(totalAmount+taxAmount).toFixed(2);
}
