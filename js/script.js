// DOM Selections
const nameField = document.getElementById('name');
const otherTitle = document.getElementById('other-title');
const titleSelect = document.getElementById('title');

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