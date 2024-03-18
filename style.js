$(document).ready(function () {
  $("#menu").click(function () {
    $(".datas").slideToggle("slow");
  });
});

var swiper = new Swiper(".image-slider", {
  grabCursor: true,
  effect: "creative",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  creativeEffect: {
    prev: {
      shadow: false,
      translate: [0, 0, -1000000],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});

var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1080: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
function mOver() {
  document.getElementById("box").style.backgroundColor = "var(---pink)";
  document.getElementById("box").style.backgroundColor = "var(---pink)";
  document.getElementById("h5").style.color = "var(---white)";
  document.getElementById("date").style.color = "var(---white)";
  document.getElementById("para").style.color = "var(---white)";
}
function mOut() {
  document.getElementById("box").style.backgroundColor = "#ffffff5b";
  document.getElementById("h5").style.color = "var(---black)";
  document.getElementById("date").style.color = "var(---black)";
  document.getElementById("para").style.color = "var(---black)";
}

function mOver2() {
  document.getElementById("box2").style.backgroundColor = "var(---pink)";
  document.getElementById("h52").style.color = "var(---white)";
  document.getElementById("date2").style.color = "var(---white)";
  document.getElementById("para2").style.color = "var(---white)";
}
function mOut2() {
  document.getElementById("box2").style.backgroundColor = "#ffffff5b";
  document.getElementById("h52").style.color = "var(---black)";
  document.getElementById("date2").style.color = "var(---black)";
  document.getElementById("para2").style.color = "var(---black)";
}

function mOver3() {
  document.getElementById("box3").style.backgroundColor = "var(---pink)";
  document.getElementById("h53").style.color = "var(---white)";
  document.getElementById("date3").style.color = "var(---white)";
  document.getElementById("para3").style.color = "var(---white)";
}
function mOut3() {
  document.getElementById("box3").style.backgroundColor = "#ffffff5b";
  document.getElementById("h53").style.color = "var(---black)";
  document.getElementById("date3").style.color = "var(---black)";
  document.getElementById("para3").style.color = "var(---black)";
}

function mOver4() {
  document.getElementById("box4").style.backgroundColor = "var(---pink)";
  document.getElementById("h54").style.color = "var(---white)";
  document.getElementById("date4").style.color = "var(---white)";
  document.getElementById("para4").style.color = "var(---white)";
}
function mOut4() {
  document.getElementById("box4").style.backgroundColor = "#ffffff5b";
  document.getElementById("h54").style.color = "var(---black)";
  document.getElementById("date4").style.color = "var(---black)";
  document.getElementById("para4").style.color = "var(---black)";
}

let loader = document.querySelector(".loading");

window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add("dispper");
}
