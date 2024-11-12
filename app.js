// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Get all the dropdown items
  const dropdownItems = document.querySelectorAll(".dropdown-item");

  // Loop through each item and add a click event listener
  dropdownItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Get the text of the clicked item
      const selectedText = this.textContent;

      // Find the dropdown toggle button and set its text to the selected item
      const dropdownButton = document.querySelector("#dropdownMenuButton1");
      dropdownButton.textContent = selectedText;
    });
  });
});

const dropdownElementList = document.querySelectorAll(".dropdown-toggle");
const dropdownList = [...dropdownElementList].map(
  (dropdownToggleEl) => new bootstrap.Dropdown(dropdownToggleEl)
);
