window.addEventListener("DOMContentLoaded", (event) => {
  // open header search bar

  document.querySelector(".searchbar").addEventListener("click", (e) => {
    document.querySelector(".searchbar").classList.add("hideSearch");
    document.querySelector(".textSearchBar").classList.remove("hideSearch");
  });

  // open filter
  document.querySelectorAll(".dropdown")?.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      if (
        e.target.closest(".dropdown") &&
        !e.target.closest(".dropdown").querySelector(".dropdownPills.show")
      ) {
        console.log("wop");
        let dd = e.target.closest(".dropdown");
        document.querySelector(".dropdownPills.show")?.classList.remove("show");
        dd.querySelector(".dropdownPills").classList.add("show");
        dd.querySelector(".dropdownTitle .close").classList.add("rotated");
      } else {
        let dd = e.target.closest(".dropdown");
        dd.querySelector(".dropdownPills").classList.remove("show");
        dd.querySelector(".dropdownTitle .close").classList.remove("rotated");
      }
    });
  });

  //if anywhere on document is clicked
  document.querySelector("body.listing").addEventListener("click", (e) => {
    console.log(e.target.classList);
    if (
      e.target.classList[0] !== "textSearchBar" &&
      e.target.classList[0] !== "searchbar"
    ) {
      document.querySelector(".textSearchBar").classList.add("hideSearch");
      document.querySelector(".searchbar").classList.remove("hideSearch");
    }
  });
});
