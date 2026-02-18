document.getElementById('add-money-btn').addEventListener('click', function () {
  //   get bank
  const bankAccount = getValueFromInput('add-money-bank');
  if (bankAccount === 'select-bank') {
    alert('please select a bank');
    return;
  }
  //   get account number
  const accno = getValueFromInput('add-money-number');
  if (accno.length != 11) {
    alert('invalid acc. no');
  }
  //   get amount
  const amount = getValueFromInput('add-money-amount');
  const currentBalance = getBalance();
  const newBalance = currentBalance + Number(amount);
  //   verify pin
  const pin = getValueFromInput('add-money-pin');
  if (pin === '1234') {
    alert(`add money successfull from ${bankAccount}`);
    setBalance(newBalance);
  } else {
    alert('invalid');
    return;
  }
});
