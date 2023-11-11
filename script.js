document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");
  const contentSection = document.getElementById("content");

  // Function to load content dynamically
  function loadContent(sectionId) {
    fetch(sectionId + ".html")
      .then((response) => response.text())
      .then((data) => {
        contentSection.innerHTML = data;
      })
      .catch((error) => {
        console.error("Error loading content: " + error);
      });
  }

  // Initial load of the "About" section
  loadContent("#about");

  // Add click event listeners to the navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove the "active" class from all links
      navLinks.forEach((navLink) => navLink.classList.remove("active"));

      // Add the "active" class to the clicked link
      this.classList.add("active");

      // Load the content for the clicked section
      const targetId = this.getAttribute("href");
      loadContent(targetId);
    });
  });
});
