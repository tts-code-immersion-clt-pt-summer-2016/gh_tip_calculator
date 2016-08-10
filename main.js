var bill_amount = prompt("What is your bill?");
var tip_amount = Number(bill_amount) * 0.20;
var total_amount = Number(bill_amount) + Number(tip_amount)
alert("Your Total Bill is $" + (total_amount))