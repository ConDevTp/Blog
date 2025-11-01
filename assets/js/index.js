// Header
if (window.innerWidth < 550) {
  document.getElementById("menu-items").classList.add("show-items");
  document.getElementById("menu_mobile").classList.add("Toogle_Menu_Mobile");
}

function ShowMenuItems() {
  if (document.getElementById("menu-items").classList.contains("show-items")) {
    document.getElementById("menu-items").classList.remove("show-items");
    if (window.innerWidth < 550) {
      document
        .getElementById("arrow-menu-header")
        .classList.add("turn-arrow-header");
    } else {
      document
        .getElementById("arrow-menu-header")
        .classList.remove("turn-arrow-header");
    }
  } else {
    document.getElementById("menu-items").classList.add("show-items");

    if (window.innerWidth < 550) {
      document
        .getElementById("arrow-menu-header")
        .classList.remove("turn-arrow-header");
    } else {
      document
        .getElementById("arrow-menu-header")
        .classList.add("turn-arrow-header");
    }
  }
}

function Toggle_Menu_Mobile() {
  if (
    document
      .getElementById("menu_mobile")
      .classList.contains("Toogle_Menu_Mobile")
  ) {
    document
      .getElementById("menu_mobile")
      .classList.remove("Toogle_Menu_Mobile");
  } else {
    document.getElementById("menu_mobile").classList.add("Toogle_Menu_Mobile");
  }
}
// Header END

// Body
// -- Boxes
const containers = document.querySelectorAll(".con-boxes");
const btnNexts = document.querySelectorAll(".btn-next");
const btnPrevs = document.querySelectorAll(".btn-prev");

function getGap() {
  return window.innerWidth < 500 ? 20 : 30;
}

function getBoxWidth(container) {
  const box = container.querySelector(".box");
  const style = window.getComputedStyle(box);
  const marginRight = parseInt(style.marginRight) || 0;
  return box.offsetWidth + marginRight + getGap();
}

btnNexts.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    containers[index].scrollLeft += getBoxWidth(containers[index]);
  });
});

btnPrevs.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    containers[index].scrollLeft -= getBoxWidth(containers[index]);
  });
});
