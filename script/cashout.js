document.getElementById('cashout-btn').addEventListener('click', function () {
  // get agent number
  const cashoutNumberInput = document.getElementById('cashout-number');
  const cashoutNummber = cashoutNumberInput.value;
  console.log(cashoutNummber);
  if (cashoutNummber.length != 11) {
    alert('invalid');
    return;
  }
  //   get amount
  const cashoutAmountInput = document.getElementById('cashout-amount');
  const cashoutAmount = cashoutAmountInput.value;
  console.log(cashoutAmount);
  //   get curretnt element
  const balanceElement = document.getElementById('balance');
  const balance = balanceElement.innerText;
  console.log(balance);
  //   calculate new balance
  const newBalance = Number(balance) - Number(cashoutAmount);
  if (newBalance < 0) {
    alert('invalid');
    return;
  }

  //   get pin & verify
  const cashoutPinInput = document.getElementById('cashout-pin');
  const pin = cashoutPinInput.value;
  if (pin === '1234') {
    alert('successfull');
    console.log('my new balance', newBalance);
    balanceElement.innerText = newBalance;
  } else {
    alert('invalid');
    return;
  }
});
