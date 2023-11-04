// FAQ ACCORDIAN
document.addEventListener("DOMContentLoaded", () => {
  const faqContent = document.querySelector(".faq-content");
  faqContent.addEventListener("click", (e) => {
    const groupHeader = e.target.closest(".faq-group-header");
    if (!groupHeader) return;
    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".faq-group-body");
    const icon = group.querySelector("i");
    // Toggle Icons
    icon.classList.toggle("fa-minus");
    icon.classList.toggle("fa-plus");
    // Toggle Visibility of body
    groupBody.classList.toggle("open");
    // close other open faq bodies
    const otherGroups = document.querySelectorAll(".faq-group");
    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector(".faq-group-body");
        const otherGroupIcon = otherGroup.querySelector(".faq-group-header i");
        otherGroupBody.classList.remove("open");
        console.log(otherGroupBody, otherGroupIcon);
        otherGroupIcon.classList.remove("fa-minus");
        otherGroupIcon.classList.add("fa-plus");
      }
    });
  });
});
// Mobile Menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  hamburgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});
