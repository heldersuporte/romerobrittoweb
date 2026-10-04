const menuToggle = document.querySelector(".menu-toggle");
const sideMenu = document.querySelector(".side-menu");
const menuScrim = document.querySelector(".menu-scrim");
const closeButton = document.querySelector(".drawer-close");

function setMenuOpen(isOpen) {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  sideMenu.setAttribute("aria-hidden", String(!isOpen));
  sideMenu.inert = !isOpen;
  sideMenu.classList.toggle("is-open", isOpen);
  menuScrim.hidden = !isOpen;
  document.body.classList.toggle("menu-open", isOpen);

  if (isOpen) {
    requestAnimationFrame(() => menuScrim.classList.add("is-visible"));
    closeButton.focus();
  } else {
    menuScrim.classList.remove("is-visible");
    menuToggle.focus();
  }
}

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});
closeButton.addEventListener("click", () => setMenuOpen(false));
menuScrim.addEventListener("click", () => setMenuOpen(false));
sideMenu.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuOpen(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
  }
});