function checkCashRegister(price, cash, cid) {
  
    function changeSubtractor(changeDueBack, currency, indexOfCID){
    let currentCashInDrawer = cashInDrawerDescOrder[indexOfCID][1]
    let changeLeft = changeDueBack
    let counter = 0;
    while (currentCashInDrawer > 0 && changeLeft >= currency) {
        counter++;
        changeLeft = Math.round(changeLeft * 100)/100 - currency;
        currentCashInDrawer = Math.round(currentCashInDrawer * 100)/100 - currency;
      }
      if((counter > 0 || cashInDrawerDescOrder[indexOfCID][1] === 0) && cashInDrawerDescOrder[0][1] === 0) {
        changeBreakdown.unshift([cashInDrawerDescOrder[indexOfCID][0], counter * currency])
    } else if (counter > 0 || cashInDrawerDescOrder[indexOfCID][1] === 0){
      changeBreakdown.push([cashInDrawerDescOrder[indexOfCID][0], counter * currency])
    }
    cashInDrawerDescOrder[indexOfCID][1] = currentCashInDrawer
    return changeLeft;
  }

  function totalAmountInDrawerCalculator(){
    total = 0;
   cashInDrawerDescOrder.map(amount => total += amount[1])
   return total
  }

  function finalMessageCreator(drawerTotal, changeTotal){
    finalMessage.status = drawerTotal > 0 && changeTotal === 0 ? "OPEN" 
                        : drawerTotal === 0 && changeTotal === 0 ? "CLOSED" : "INSUFFICIENT_FUNDS"
    finalMessage.change = changeTotal === 0 ? changeBreakdown : [];
  }

  const currencyAmountInDescOrder = [
    100,
    20,
    10,
    5,
    1,
    .25,
    .1,
    .05,
    .01
  ]
  let cashInDrawerDescOrder = cid.reverse()  
  let totalAmountInDrawer = 0;
  let change = (cash - price)
  let changeBreakdown = [];
  let finalMessage = {
    'status': "",
    'change': [],
  }

  currencyAmountInDescOrder.forEach((amount, index ) => {
    change = changeSubtractor(change, amount, index)      
   })

   totalAmountInDrawer = totalAmountInDrawerCalculator()
   finalMessageCreator(totalAmountInDrawer, change)


  return `Status: ${finalMessage.status}, change: ${finalMessage.change} <br><br>
  {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
  `
}


document.getElementById('root').innerHTML = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])