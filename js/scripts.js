// Get all the elements with the 'growable' class
const growableElements = document.querySelectorAll(".growable");

// Add a click event listener to each element
growableElements.forEach((element) => {
  element.addEventListener("click", (event) => {
    // If the element has the 'grown' class, navigate to the external site
    if (element.classList.contains("details")) {
      window.location.href = "https://example.com";
    } else {
      // Otherwise, add the 'grown' class to the element
      element.classList.add("details");
    }
  });
});
