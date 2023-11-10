document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    // Function to remove the "active" class from all navigation links
    function removeActiveClass() {
        navLinks.forEach((link) => link.classList.remove("active"));
    }

    // Event listeners for each section
    sections.forEach((section) => {
        section.addEventListener("click", function () {
            removeActiveClass();
            this.classList.add("active");

            // Get the section's corresponding navigation link and make it active
            const link = document.querySelector(`a[href="#${section.id}"]`);
            if (link) {
                link.classList.add("active");
            }
        });
    });

    // Highlight the "active" navigation link when the page loads
    const currentSection = sections[0];
    currentSection.classList.add("active");
    const currentLink = document.querySelector(`a[href="#${currentSection.id}"]`);
    if (currentLink) {
        currentLink.classList.add("active");
    }
});
