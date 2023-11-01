const all = document.getElementById("all");
const korea = document.getElementById("korea");
const japan = document.getElementById("japan");
const china = document.getElementById("china");

const menuItems = document.querySelector(".section-center");
const menu = menuItems.querySelectorAll(".menuitems");

function removeWord() {
  menu.forEach((menuitems) => {
    menuitems.style.display = "none";
  });
}

all.addEventListener("click", function () {
  removeWord();
  menu.forEach((menuitems) => {
    menuitems.style.display = "flex";
  });
});

korea.addEventListener("click", function () {
  removeWord();
  menu[0].style.display = "flex";
  menu[2].style.display = "flex";
  menu[6].style.display = "flex";
});

japan.addEventListener("click", function () {
  removeWord();
  menu[1].style.display = "flex";
  menu[5].style.display = "flex";
  menu[8].style.display = "flex";
});

china.addEventListener("click", function () {
  removeWord();
  menu[3].style.display = "flex";
  menu[4].style.display = "flex";
  menu[7].style.display = "flex";
});
