document.getElementById('login-btn').addEventListener('click', function () {
  //   get the number input
  const numberInput = document.getElementById('input-number');
  const contactNumber = numberInput.value;
  console.log(contactNumber);
  //   get pin input
  const pinInput = document.getElementById('input-pin');
  const pinValue = pinInput.value;
  console.log(pinValue);
  //   match number & pin
  if (contactNumber == '01234567890' && pinValue == '1234') {
    alert('login succesfull');
    window.location.assign('/DOM-project/home.html');
  } else {
    alert('login failed');
    return;
  }
});
