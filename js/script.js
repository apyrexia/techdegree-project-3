// DOM Selections
const nameField = document.getElementById('name');

const otherTitle = document.getElementById('other-title');
const titleSelect = document.getElementById('title');

const colorSelect = document.getElementById('color');
const colorOptions = document.querySelector("#color").children;
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


// Focus on the name field when page loads
nameField.focus();

// Hides other job title text field
otherTitle.style.display = "none";

// Shows other job title text field when selected from dropdown
titleSelect.addEventListener("change", e => {
  if (e.target.value === "other") {
    otherTitle.style.display = "";
  } else if (e.target.value !== "other") {
    otherTitle.style.display = "none";
  }
});

// Filters available color options by t-shirt theme

for (i = 0; i < colorOptions.length; i++) {
colorOptions[i].style.display = "none";
};

shirtDesign.addEventListener("change", e => { 
  colorDefault.selected = "selected";
  if (e.target.value === "js puns") {
    colorDefault.textContent = "Please select a Color";
    for (i = 0; i < colorOptions.length; i++) {
      if (i < 3) {
        colorOptions[i].style.display = "";
      } else if (i > 2) {
        colorOptions[i].style.display = "none";
      }
    };
  } else if (e.target.value === "heart js") {
    colorDefault.textContent = "Please select a Color";
    for (i = 0; i < colorOptions.length; i++) {
      if (i > 2 && i < 6) {
        colorOptions[i].style.display = "";
      } else if (i < 3) {
        colorOptions[i].style.display = "none";
      }
    };
  } else if (e.target.value === "Select Theme") {
    colorDefault.textContent = "Please select a T-shirt theme";
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

// Hides the 'select payment method' option

for (i = 0; i < paymentOptions.length; i++) {
  if (paymentOptions[i].value === 'select method') {
    paymentOptions[i].style.display = 'none';
  }
}

// Hides or displays relevant payment types as selected

CCDiv.style.display = 'none';
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