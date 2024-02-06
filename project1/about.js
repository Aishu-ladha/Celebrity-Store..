let butt = document.querySelector("button");
let body = document.querySelector("body");
butt.onclick = () => {
  console.log("first");
};
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu");
  const menuOptions = document.querySelector(".menu-options");

  menuButton.addEventListener("click", function () {
    menuOptions.style.display =
      menuOptions.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function (event) {
    const isClickInsideMenu =
      menuButton.contains(event.target) || menuOptions.contains(event.target);

    if (!isClickInsideMenu) {
      menuOptions.style.display = "none";
    }
  });
});
