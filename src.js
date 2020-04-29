var totalValue;
var lossValue;
getPrice = function () {
   var numVal1 = Number(document.getElementById("price").value);
   var numVal2 = Number(document.getElementById("discount").value) / 100;
   totalValue = numVal1 - (numVal1 - (numVal1 * numVal2))
   document.getElementById("total").value = totalValue.toFixed(2);
   lossValue = totalValue * 2
   document.getElementById("loss").value = lossValue.toFixed(2);
}
getAmount = function () {
   var numVal3 = Number(document.getElementById("sharePrice").value);
   var numVal4 = Number(document.getElementById("noOfShares").value);
   var preExitValue =  totalValue/numVal4;
   var exitValue = preExitValue + numVal3;
   var preStopLoss = lossValue/numVal4;
   var stopLoss =numVal3 - preStopLoss;
   document.getElementById("Exit").value = exitValue.toFixed(2);
   document.getElementById("stopLoss").value = stopLoss.toFixed(2);
}