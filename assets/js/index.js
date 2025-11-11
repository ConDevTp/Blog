// Header

if (window.innerWidth < 550) {
  document.getElementById("menu-items").classList.add("show-items");
}

window.addEventListener("resize", function () {
  if (window.innerWidth < 550) {
    document.getElementById("menu-items").classList.add("show-items");
  }

  closeMenu();
});

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
    document.getElementById("body").classList.remove("no-scroll");
    document.getElementById("overlay").style.display = "none";
    document
      .getElementById("menu_mobile")
      .classList.remove("Toogle_Menu_Mobile");
  } else {
    document.getElementById("body").classList.add("no-scroll");
    document.getElementById("overlay").style.display = "block";
    document.getElementById("menu_mobile").classList.add("Toogle_Menu_Mobile");
  }
}

function closeMenu() {
  document.getElementById("menu_mobile").classList.remove("Toogle_Menu_Mobile");
  document.body.classList.remove("no-scroll");
  document.getElementById("overlay").style.display = "none";
}

function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.dataset.theme;
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.dataset.theme = newTheme;

  // تغییر عکس‌ها
  const images = document.querySelectorAll("img.theme-img");
  images.forEach((img) => {
    const lightSrc = img.dataset.light;
    const darkSrc = img.dataset.dark;
    img.src = newTheme === "dark" ? darkSrc : lightSrc;
  });
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
// -- Boxes END

// Body END

// About Us - For Blogs

function changeblog() {
  var items = document.getElementsByClassName("blognew");
  var lastelement = items[4].cloneNode(true);

  items[4].remove();

  var conblog = document.getElementById("conblogs");
  conblog.prepend(lastelement);

  changeblogdown();
}

function changeblogdown() {
  var items = document.getElementsByClassName("formyblog1");
  const node = items[0];
  const clone = node.cloneNode(true);
  items[0].remove();
  document.getElementById("formyblog").appendChild(clone);
}

setInterval(changeblog, 4000);

// About Us - END For Blogs
// About Us - For Question
function openticket(obj, obj1, obj3) {
  if (document.getElementById(obj).classList.contains("boxitemshow")) {
    document.getElementById(obj).classList.remove("boxitemshow");
    document.getElementById(obj).classList.add("boxitemshowclose");
    document.getElementById(obj1).src = "./assets/img/up.svg";
  } else {
    document.getElementById(obj).classList.add("boxitemshow");
    document.getElementById(obj).classList.remove("boxitemshowclose");
    document.getElementById(obj1).src = "./assets/img/down.svg";
  }

  if (
    obj3.getElementsByClassName("boxitem")[0].classList.contains("borderbotm")
  ) {
    obj3.getElementsByClassName("boxitem")[0].classList.remove("borderbotm");
    obj3.getElementsByClassName("boxitem")[0].classList.add("borderselected");
  } else {
    obj3.getElementsByClassName("boxitem")[0].classList.add("borderbotm");
    obj3
      .getElementsByClassName("boxitem")[0]
      .classList.remove("borderselected");
  }
}
// About Us - END For Question

// Contact Us - For Change Icon Select

function ChangeIcon() {
  document.getElementById("conselect").classList.toggle("selectconclose");
}

// Contact Us - END For Change Icon Select
