console.log("hello script js");

var maxHours = 40;
var normalRate = 20;
var hoursWorked;
var totalPay;
var normalPay;
var overtimeHours;
var overtimePay;
var overtimeRate = 30;

var calculatePay = function(hoursWorked){
  if (hoursWorked > maxHours){
    overtimeHours = hoursWorked - maxHours;
    overtimePay = overtimeHours * overtimeRate;
    normalPay = maxHours * normalRate;
    totalPay = normalPay + overtimePay;
    // return totalPay;
    display("bob is paid $" + totalPay);
  } else {
    normalPay = hoursWorked * normalRate;
    totalPay = normalPay;
    // return totalPay;
    display("bob is paid $" + totalPay);
  }
};
