// DOM Selections
const nameField = document.getElementById('name');

const otherTitle = document.getElementById('other-title');
const titleSelect = document.getElementById('title');

const colorSelect = document.getElementById('color');
const colorOptions = document.querySelector("#color").children;
const colorsDiv =  document.getElementById('colors-js-puns');
const shirtDesign = document.getElementById('design');
const colorDefault = document.createElement('option');
  colorSelect.appendChild(colorDefault);
  colorDefault.selected = "selected";
  colorDefault.textContent = "Please select a T-shirt theme";

const activities = document.querySelector('.activities');
let totalCost = 0;
const costDisplay = document.createElement('h3');
  activities.appendChild(costDisplay);
  costDisplay.textContent = '$0'
const activityChecks = activities.querySelectorAll('input');

const userPayment = document.getElementById('payment');
const paymentOptions = userPayment.querySelectorAll('option');
const CCDiv = document.getElementById('credit-card');
const paypalDiv = document.getElementById('paypal');
const bitcoinDiv = document.getElementById('bitcoin');

const name = document.getElementById('name');
const email = document.getElementById('mail');
const ccNum = document.getElementById('cc-num');
const zip = document.getElementById('zip');
const cvv = document.getElementById('cvv');

const submitButton = document.querySelector('button');
  submitButton.type = 'button';

// Focuses on the name field when page loads
nameField.focus();

// Hides 'other' job title text field
otherTitle.style.display = "none";

// Shows other job title text field when other is selected
titleSelect.addEventListener("change", e => {
  if (e.target.value === "other") {
    otherTitle.style.display = "";
  } else if (e.target.value !== "other") {
    otherTitle.style.display = "none";
  }
});

// Filters available color options by t-shirt theme and hides colors when no theme is selected
for (i = 0; i < colorOptions.length; i++) {
colorOptions[i].style.display = "none";
};
colorsDiv.style.display = 'none';

shirtDesign.addEventListener("change", e => { 
  colorDefault.selected = "selected";
  if (e.target.value === "js puns") {
    colorDefault.textContent = "Please select a Color";
    colorsDiv.style.display = '';
    for (i = 0; i < colorOptions.length; i++) {
      if (i < 3) {
        colorOptions[i].style.display = "";
      } else if (i > 2) {
        colorOptions[i].style.display = "none";
      }
    };
  } else if (e.target.value === "heart js") {
    colorDefault.textContent = "Please select a Color";
    colorsDiv.style.display = '';
    for (i = 0; i < colorOptions.length; i++) {
      if (i > 2 && i < 6) {
        colorOptions[i].style.display = "";
      } else if (i < 3) {
        colorOptions[i].style.display = "none";
      }
    };
  } else if (e.target.value === "Select Theme") {
    colorDefault.textContent = "Please select a T-shirt theme";
    colorsDiv.style.display = 'none';
    for (i = 0; i < colorOptions.length; i++) {
      colorOptions[i].style.display = "none";
      };
  }
});

// Disables overlapping activites and calculates activity cost
activities.addEventListener("change", e => { 
  const input = e.target;
  const cost = parseInt(input.getAttribute("data-cost"), 10);
  const targetEventTime = input.getAttribute("data-day-and-time");
  if (input.checked) {
    totalCost += cost;
    costDisplay.textContent = `$${totalCost}`;
    for (i = 0; i < activityChecks.length; i++) {
      activityTime = activityChecks[i].getAttribute("data-day-and-time");
      if (activityTime === targetEventTime && input !== activityChecks[i]) {
        activityChecks[i].disabled = true;
      }
    }
  } else {
    totalCost -= cost;
    costDisplay.textContent = `$${totalCost}`;
    for (i = 0; i < activityChecks.length; i++) {
      activityTime = activityChecks[i].getAttribute("data-day-and-time");
      if (activityTime === targetEventTime && input !== activityChecks[i]) {
        activityChecks[i].disabled = false;
      }
    }
  }
});

// Hides the 'select payment method' option and sets credit card to default
for (i = 0; i < paymentOptions.length; i++) {
  if (paymentOptions[i].value === 'select method') {
    paymentOptions[i].style.display = 'none';
  } else if (paymentOptions[i].value === 'credit card') {
    paymentOptions[i].selected = 'selected'
  }
}

// Hides or displays relevant payment divs as selected
paypalDiv.style.display = 'none';
bitcoinDiv.style.display = 'none';

userPayment.addEventListener("change", e => {
  const option = e.target;
  if (option.value === 'credit card') {
    CCDiv.style.display = '';
    paypalDiv.style.display = 'none';
    bitcoinDiv.style.display = 'none';
  } else if (option.value === 'paypal') {
    CCDiv.style.display = 'none';
    paypalDiv.style.display = '';
    bitcoinDiv.style.display = 'none';
  } else if (option.value === 'bitcoin') {
    CCDiv.style.display = 'none';
    paypalDiv.style.display = 'none';
    bitcoinDiv.style.display = '';
  }
});

//** */
//
// Validation
//
//** */

// Creates validation messages
const nameMessage = document.createElement('label');
  name.insertAdjacentElement('afterend', nameMessage);  
  nameMessage.className = 'valid-message';
  nameMessage.textContent = "Please enter a name";
  nameMessage.style.display = 'none';
const mailMessage = document.createElement('label');
  email.insertAdjacentElement('afterend', mailMessage);  
  mailMessage.className = 'valid-message';
  mailMessage.textContent = "Please enter an email";
  mailMessage.style.display = 'none';
const activityMessage = document.createElement('label');
  activities.insertAdjacentElement('afterend', activityMessage);  
  activityMessage.className = 'valid-message';
  activityMessage.textContent = "Please select at least one activity";
  activityMessage.style.display = 'none';

const numMessage = document.createElement('label');
  ccNum.insertAdjacentElement('afterend', numMessage);  
  numMessage.className = 'valid-message';
  numMessage.textContent = "Please enter a valid credit card number";
  numMessage.style.display = 'none';
const zipMessage = document.createElement('label');
  zip.insertAdjacentElement('afterend', zipMessage);  
  zipMessage.className = 'valid-message';
  zipMessage.textContent = "Please enter a valid five digit zip code";
  zipMessage.style.display = 'none';
const cvvMessage = document.createElement('label');
  cvv.insertAdjacentElement('afterend', cvvMessage);  
  cvvMessage.className = 'valid-message';
  cvvMessage.textContent = "Please enter a CVV code";
  cvvMessage.style.display = 'none';

const submitMessage = document.createElement('label');
  submitButton.insertAdjacentElement('afterend', submitMessage);
  submitMessage.className = 'valid-message';
  submitMessage.textContent = "";
  submitMessage.style.display = 'none';

// Function checks that a name has been entered
function validName() {
  if (name.value) {
    return true;
  } else {
    return false;
  }
}
// Displays validation message if no name is entered
name.addEventListener("input", e => {
  const vname = validName();
  if (vname === true) {
    nameMessage.style.display = 'none';
  } else {
    nameMessage.style.display = '';
  }
});
// Function checks that the user has entered a valid email and changes message in real time
function validMail() {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value !== '' && regex.test(email.value)) {
    return true;
  }
  if (email.value !== '' && !regex.test(email.value)) {
    mailMessage.textContent = "Please enter a valid email example: sample@email.com"
  }
  if (email.value === '') {
    mailMessage.textContent = "Please enter an email"
  }
  return false;
}
// Displays validation message if an invalid email is entered
email.addEventListener("input", e => {
  if (validMail()) {
    mailMessage.style.display = 'none';
  } else {
    mailMessage.style.display = '';
  }
});
email.addEventListener("blur", e => {
  if (validMail()) {
    mailMessage.style.display = 'none';
  } else {
    mailMessage.style.display = '';
  }
});

// Function validates that at least one activity is selected
function activityChecked() {
  for (i = 0; i < activityChecks.length; i++) {
    if (activityChecks[i].checked) {
      return true;
    }
  }
  return false;
}
// Displays message if no activity is selected
activities.addEventListener("change", e => { 
  const vactivity = activityChecked();
  if (vactivity === true) {
    activityMessage.style.display = 'none';
  } else {
    activityMessage.style.display = '';
  }
});
// Function checks that a valid credit card number has been entered
function validCC() {
  const regex = /^\d{13,16}$/;
  if (ccNum.value !== '' && regex.test(ccNum.value)) {
    return true;
  } else {
    return false;
  }
}
// Displays message if an invalid CC number is entered
ccNum.addEventListener("input", e => {
  const cc = validCC();
  if (cc === true) {
    numMessage.style.display = 'none';
  } else {
    numMessage.style.display = '';
  }
});
// Function checks that a valid zip code has been entered
function validZip() {
  const regex = /^\d{5}$/;
  if (zip.value !== '' && regex.test(zip.value)) {
    return true;
  } else {
    return false;
  }
}
// Displays message if an invalid zip code has been entered
zip.addEventListener("input", e => {
  if (validZip()) {
    zipMessage.style.display = 'none';
  } else {
    zipMessage.style.display = '';
  }
});
// function checks that a valid cvv number has been entered
function validCVV() {
  const regex = /^\d{3}$/;
  if (cvv.value !== '' && regex.test(cvv.value)) {
    return true;
  } else {
    return false;
  }
}
// Displays message if an invalid cvv number is entered
cvv.addEventListener("input", e => {
  const vcvv = validCVV();
  if (vcvv === true) {
    cvvMessage.style.display = 'none';
  } else {
    cvvMessage.style.display = '';
  }
});

// Master validation function
function validateAll() {
  const checkName = validName();
  const checkMail = validMail();
  const checkActivity = activityChecked();
  const checkNum = validCC();
  const checkZip = validZip();
  const checkCVV =  validCVV();
  if (userPayment.value === 'select method') {
    return false;
  } else if (userPayment.value === 'credit card' && checkName
  && checkMail && checkActivity && checkNum && checkZip && checkCVV) {
    return true; 
  } else if (userPayment.value !== 'credit card' && checkName 
  && checkMail && checkActivity) {
    return true;
  } else {
    return false;
  }
}

// Disables the submit button unless all inputs are valid 
document.addEventListener('change', e => {
  if (validateAll()) {
    submitButton.type = 'submit';
  } else {
    submitButton.type = 'button';
  }
});

// Displays error messages when submit button is clicked and scrolls up if email or name are not valid
submitButton.addEventListener('click', e => {
  if (!validName() || !validMail()) {
    window.scrollTo({
      top: 200,
      behavior: 'smooth'
    });
  }
  if (!validName()) {
    nameMessage.style.display = '';
  } 
  if (!validMail()) {
    mailMessage.style.display = '';
  } 
  if (!activityChecked()) {
    activityMessage.style.display = '';
  } 
  if (!validCC()) {
    numMessage.style.display = '';
  } 
  if (!validZip()) {
    zipMessage.style.display = '';
  } 
  if (!validCVV()) {
    cvvMessage.style.display = '';
  }
})