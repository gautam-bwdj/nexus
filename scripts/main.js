function highlightLink(link) {
  link.style.borderBottom = "2px solid var(--primary)";
  link.style.color = "var(--primary)";
}

const originalActive = document.querySelector(".nav-menu a.active");
if (originalActive) {
  highlightLink(originalActive);
}
