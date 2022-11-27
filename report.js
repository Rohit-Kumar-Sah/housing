window.addEventListener("DOMContentLoaded", (event) => {
  // tabbed carousel acivation

  const options = {
    // root: document.querySelector(".tabbedContent"),
    rootMargin: `-${
      document.querySelector(".scrollspy")?.getBoundingClientRect().height
    }px 0px 0px 0px `,
    threshold: [0, 1],
  };

  // overview section callback
  function overviewCallback(entries, observer) {
    entries.forEach((entry) => {
      console.log("b", entry);
      if (
        entry.rootBounds.top <
        entry.boundingClientRect.top + entry.boundingClientRect.height
      ) {
        activateThisTab(entry);
        console.log("hora overview in");
        entry.target.classList.add("in");
      }
      if (
        entry.rootBounds.top >=
        entry.boundingClientRect.top + entry.boundingClientRect.height
      ) {
        activateThisTab(entry);
        entry.target.classList.remove("in");
        console.log("hora overview out");
      }
    });
  }
  let overviewObserver = new IntersectionObserver(overviewCallback, options);
  overviewObserver.observe(document.querySelector(".overview"));

  // about section callback
  function aboutCallback(entries, observer) {
    entries.forEach((entry) => {
      console.log("c", entry);
      if (
        entry.rootBounds.top <
        entry.boundingClientRect.top + entry.boundingClientRect.height
      ) {
        activateThisTab(entry);
        entry.target.classList.add("in");
        console.log("hora about in");
      }
      if (
        entry.rootBounds.top >=
        entry.boundingClientRect.top + entry.boundingClientRect.height
      ) {
        activateThisTab(entry);
        entry.target.classList.remove("in");
        console.log("hora about out");
      }
    });
  }
  let aboutObserver = new IntersectionObserver(aboutCallback, options);
  aboutObserver.observe(document.querySelector(".about"));

  // belowPrice section callback
  function belowPriceCallback(entries, observer) {
    entries.forEach((entry) => {
      console.log("d", entry);
      if (
        entry.rootBounds.top <
        entry.boundingClientRect.top + entry.boundingClientRect.height
      ) {
        entry.target.classList.add("in");
        activateThisTab(entry);
        console.log("hora below price in", entry.target.classList[0]);
      }
      if (
        entry.rootBounds.top >=
        entry.boundingClientRect.top + entry.boundingClientRect.height
      ) {
        entry.target.classList.remove("in");
        activateThisTab(entry);
        console.log("hora below price out", entry.target.classList[0]);
      }
    });
  }
  let belowPriceObserver = new IntersectionObserver(
    belowPriceCallback,
    options
  );
  belowPriceObserver.observe(document.querySelector(".below_price"));

  // developer section callback
  function developerCallback(entries, observer) {
    entries.forEach((entry) => {
      console.log("e", entry);
      if (
        entry.rootBounds.top <
        entry.boundingClientRect.top + entry.boundingClientRect.height
      ) {
        activateThisTab(entry);
        entry.target.classList.add("in");
        console.log("hora developer in");
      }
      if (
        entry.rootBounds.top >=
        entry.boundingClientRect.top + entry.boundingClientRect.height
      ) {
        activateThisTab(entry);
        entry.target.classList.remove("in");
        console.log("hora developer out");
      }
    });
  }
  let developerObserver = new IntersectionObserver(developerCallback, options);
  developerObserver.observe(document.querySelector(".developer"));

  //activate tab

  //activating a tab in nav carousel
  function activateThisTab(me) {
    me = me.target.classList;
    fna();
  }
  //find correct tab to focus
  function fna() {
    let a = document.querySelector(".carousel_content .in")?.classList[0];
    document.querySelector(`.scrollspy .active`)?.classList.remove("active");
    document
      .querySelector(`.scrollspy .card.${a}__card`)
      ?.classList.add("active");

    let sdata = document
      .querySelector(".scrollspy .cards")
      ?.getBoundingClientRect();

    let rdata = document
      .querySelector(`.scrollspy .active`)
      ?.getBoundingClientRect();
    if (rdata && sdata) {
      if (sdata.right >= rdata.right && sdata.left <= rdata.left) {
      }

      if (sdata.right > rdata.right && sdata.left > rdata.left) {
        let n = sdata.left + rdata.left;
        document.querySelectorAll(".scrollspy .card").forEach((ele) => {
          ele.style.transform = `translate(0px)`;
        });
      }
      if (sdata.left < rdata.left && sdata.right < rdata.right) {
        let n = sdata.right - rdata.right - rdata.width;
        document.querySelectorAll(".scrollspy .card").forEach((ele) => {
          ele.style.transform = `translate(${n}px)`;
        });
      }
    }
  }

  // bring up a section when tab is clicked in tabbed carousel
  document.querySelectorAll(`.scrollspy .card`)?.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      let cls = e.target.classList[1].split("__")[0];

      document.querySelector(`.carousel_content .${cls}`).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      //understand when scrollIntoView is over
      currPageXOffset = window.pageXOffset;
      currPageYOffset = window.pageYOffset;
      var scrollDone = setInterval(function () {
        if (
          currPageXOffset == window.pageXOffset &&
          currPageYOffset == window.pageYOffset
        ) {
          clearInterval(scrollDone);
          // console.log(" finished scrolling");
          window.scrollBy({
            top: -50,
            left: 0,
            behavior: "instant",
          });
        }
        currPageXOffset = window.pageXOffset;
        currPageYOffset = window.pageYOffset;
      }, 50);
    });
  });
});
