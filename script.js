document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            // Prevent the default link behavior
            e.preventDefault();

            // Remove the "active" class from all links
            navLinks.forEach((navLink) => navLink.classList.remove("active"));

            // Add the "active" class to the clicked link
            this.classList.add("active");

            // Scroll to the section based on the href attribute
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({
                behavior: "smooth",
            });
        });
    });
});
