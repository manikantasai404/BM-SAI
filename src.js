var numVal1
var numVal3;
var totalValue;
var lossValue;
var totalAmmount;
var totalShares;
getPrice = function () {
    numVal1 = Number(document.getElementById("price").value);
    var numVal2 = Number(document.getElementById("discount").value) / 100;
    totalValue = numVal1 - (numVal1 - (numVal1 * numVal2));
    document.getElementById("total").value = totalValue.toFixed(2)+10;
    lossValue = totalValue * 2
    document.getElementById("loss").value = lossValue.toFixed(2);
}
getTotalAmount = function () {
    
    var numVal6 = Number(document.getElementById("marginee").value);
    totalAmmount = numVal1 * numVal6;
    document.getElementById("totalmoney").value = totalAmmount.toFixed(2);
}
getTotalShares = function () {
    numVal3 = Number(document.getElementById("sharePrice").value);
    totalShares = totalAmmount /numVal3;
    document.getElementById("totalShares").value = totalShares.toFixed(2);
}
getAmount = function () {
    var preExitValue = totalValue / totalShares;
    var exitValue = preExitValue + numVal3;
    var preStopLoss = lossValue / totalShares;
    var stopLoss = numVal3 - preStopLoss;
    document.getElementById("Exit").value = exitValue.toFixed(2);
    document.getElementById("stopLoss").value = stopLoss.toFixed(2);
}

