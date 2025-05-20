let lastScrollTop = 0;
const topSection = document.getElementById("top-section");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        topSection.classList.add("hidden");
    } else {
        // Scrolling up
        topSection.classList.remove("hidden");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});