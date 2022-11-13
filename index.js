window.addEventListener("DOMContentLoaded", (event) => {
  //location selected information
  document.querySelector("#userCity").addEventListener("change", (e) => {
    let location = document.querySelector("#userCity").value;
    document.querySelector(".userLocation").innerText = location;
  });
  //carousel right arrow handler
  document.querySelectorAll(".right_arrow").forEach((ele) => {
    ele.addEventListener("click", (e) => {
      let thecardWidth = e.target.parentNode
        .querySelector(".card")
        .getBoundingClientRect().width;

      //matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())
      let currentTranslateValue = window
        .getComputedStyle(e.target.closest(".carousel").querySelector(".card"))
        .getPropertyValue("transform");
      //extracting translateX
      let currentTranslateXValue = +currentTranslateValue.split(",")[4];
      let thecarousel = e.target.closest(".carousel").querySelectorAll(".card");

      let toTranslate = currentTranslateXValue - thecardWidth;
      thecarousel.forEach((card) => {
        card.style.transform = `translateX(${toTranslate}px)`;
      });
      updateArrows(e);
    });
  });

  //carousel left arrow handler
  document.querySelectorAll(".left_arrow").forEach((ele) => {
    ele.addEventListener("click", (e) => {
      let thecardWidth = e.target.parentNode
        .querySelector(".card")
        .getBoundingClientRect().width;

      //matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())
      let currentTranslateValue = window
        .getComputedStyle(e.target.closest(".carousel").querySelector(".card"))
        .getPropertyValue("transform");
      //extracting translateX
      let currentTranslateXValue = +currentTranslateValue.split(",")[4];
      let thecarousel = e.target.closest(".carousel").querySelectorAll(".card");

      let toTranslate = currentTranslateXValue + thecardWidth;

      thecarousel.forEach((card) => {
        card.style.transform = `translateX(${toTranslate}px)`;
      });
      updateArrows(e);
    });
  });

  //if first element is out of view-port enable left arrow else disable
  //if last element is out of view-port enable right arrow else disable
  function updateArrows(e) {
    let currentCarousel = e.target.closest(".carousel");
    let leftArrow = currentCarousel.querySelector(".left_arrow");
    let rightArrow = currentCarousel.querySelector(".right_arrow");

    let firstCard = currentCarousel.querySelector(".card:first-child");
    let lastCard = currentCarousel.querySelector(".card:last-child");

    let currentCarouselStart = currentCarousel.getBoundingClientRect().x;
    let currentCarouselEnd =
      currentCarousel.getBoundingClientRect().x +
      currentCarousel.getBoundingClientRect().width;

    let firstCardStart = firstCard.getBoundingClientRect().x;
    let firstCardEnd =
      firstCard.getBoundingClientRect().x +
      firstCard.getBoundingClientRect().width;

    let lastCardStart = lastCard.getBoundingClientRect().x;
    let lastCardEnd =
      lastCard.getBoundingClientRect().x +
      lastCard.getBoundingClientRect().width;
    if (Math.round(firstCardStart) >= Math.round(currentCarouselStart)) {
      //first card visible , hide left arrow
      leftArrow.style.display = "none";
    } else {
      leftArrow.style.display = "block";
    }
    if (Math.round(lastCardEnd) <= Math.round(currentCarouselEnd)) {
      //last card visible , hide left arrow
      rightArrow.style.display = "none";
    } else {
      rightArrow.style.display = "block";
    }
  }

  //open mobile city overlay
  let mplaces = document.querySelector(".mplaces");
  document.querySelector(".mlocation").addEventListener("click", (e) => {
    mplaces.style.display = "block";
    [...document.body.children].forEach((ele) => {
      if (!ele.classList.contains("mplaces")) {
        ele.style.display = "none";
      }
    });
  });
  document.querySelector(".cross").addEventListener("click", (e) => {
    mplaces.style.display = "none";
    [...document.body.children].forEach((ele) => {
      if (!ele.classList.contains("mplaces")) {
        ele.style.display = "block";
      }
    });
  });
  document.querySelector(".hamburger").addEventListener("click", (e) => {
    document.querySelector(".quickNavOverlay").style.display = "block";
    document.querySelector(".quickNavContent").style.display = "block";
    document.body.style.overflow = "hidden";
  });
  document.querySelector(".quickNavOverlay").addEventListener("click", (e) => {
    document.querySelector(".quickNavOverlay").style.display = "none";
    document.querySelector(".quickNavContent").style.display = "none";
    document.body.style.overflow = "unset";
  });
});
