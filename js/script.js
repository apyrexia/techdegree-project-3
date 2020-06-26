// DOM Selections
const nameField = document.getElementById('name');
const otherTitle = document.getElementById('other-title');
const titleSelect = document.getElementById('title');
const colorSelect = document.getElementById('color');
const colorOptions = document.querySelector("#color").children;
const shirtDesign = document.getElementById('design');

// Focus on the name field on page load
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
const colorDefault = document.createElement('option');
  colorSelect.appendChild(colorDefault);
  colorDefault.selected = "selected";
  colorDefault.textContent = "Please select a T-shirt theme";

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