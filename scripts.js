const menu = document.querySelector(".navegacion-principal");
menu.addEventListener("click", (e) => {
  e.preventDefault();
  if (!e.target.classList.contains("inactive")) {
    location.href = e.target.href;
  }
});
