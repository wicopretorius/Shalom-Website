(function () {
  "use strict"; // Start of use strict

  var mainNav = document.querySelector("#mainNav");

  if (mainNav) {
    var navbarCollapse = mainNav.querySelector(".navbar-collapse");

    if (navbarCollapse) {
      var collapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });

      var navbarItems = navbarCollapse.querySelectorAll("a");

      // Closes responsive menu when a scroll trigger link is clicked
      for (var item of navbarItems) {
        item.addEventListener("click", function (event) {
          collapse.hide();
        });
      }
    }

    // Collapse Navbar
    var collapseNavbar = function () {
      var scrollTop =
        window.scrollY !== undefined
          ? window.scrollY
          : (
              document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scrollTop;

      if (scrollTop > 100) {
        mainNav.classList.add("navbar-shrink");
      } else {
        mainNav.classList.remove("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    collapseNavbar();
    // Collapse the navbar when page is scrolled
    document.addEventListener("scroll", collapseNavbar);

    // Hide navbar when modals trigger
    var modals = document.querySelectorAll(".portfolio-modal");

    for (var modal of modals) {
      modal.addEventListener("shown.bs.modal", function (event) {
        mainNav.classList.add("d-none");
      });

      modal.addEventListener("hidden.bs.modal", function (event) {
        mainNav.classList.remove("d-none");
      });
    }
  }

  const panels = document.querySelectorAll(".panel");

  panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      removeActiveClasses();
      panel.classList.add("active");
    });
  });

  function removeActiveClasses() {
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
  }

  const imgs01 = document.getElementById("imgs01");
  const leftBtn01 = document.getElementById("left01");
  const rightBtn01 = document.getElementById("right01");
  const scrollLength = 400;
  const img = document.querySelectorAll("#imgs01 img");
  console.log (img);
  let idx01 = 0;

  let interval01 = setInterval(run01, 3000);

  function run01() {
    idx01++;
    changeImage01();
  }

  function changeImage01() {
    if (idx01 > img.length - 1) {
      idx01 = 0;
    } else if (idx01 < 0) {
      idx01 = img.length - 1;
    }

    imgs01.style.transform = `translateX(${-idx01 * scrollLength}px)`;
  }

  function resetInterval01() {
    clearInterval(interval01);
    interval01 = setInterval(run01, 3000);
  }

  rightBtn01.addEventListener("click", () => {
    idx01++;
    changeImage01();
    resetInterval01();
  });

  leftBtn01.addEventListener("click", () => {
    idx01--;
    changeImage01();
    resetInterval01();
  });

  const imgs02 = document.getElementById("imgs02");
  const leftBtn02 = document.getElementById("left02");
  const rightBtn02 = document.getElementById("right02");

  //const carousel_image02 = document.querySelectorAll('#imgs02 carousel_image02')

  let idx02 = 0;

  let interval02 = setInterval(run02, 3000);

  function run02() {
    idx02++;
    changeImage02();
  }

  function changeImage02() {
    if (idx02 > img.length - 1) {
      idx02 = 0;
    } else if (idx02 < 0) {
      idx02 = img.length - 1;
    }

    imgs02.style.transform = `translateX(${-idx02 * scrollLength}px)`;
  }

  function resetInterval02() {
    clearInterval(interval02);
    interval02 = setInterval(run02, 3000);
  }

  rightBtn02.addEventListener("click", () => {
    idx02++;
    changeImage02();
    resetInterval02();
  });

  leftBtn02.addEventListener("click", () => {
    idx02--;
    changeImage02();
    resetInterval02();
  });

  const imgs03 = document.getElementById("imgs03");
  const leftBtn03 = document.getElementById("left03");
  const rightBtn03 = document.getElementById("right03");

  //const carousel_image02 = document.querySelectorAll('#imgs02 carousel_image02')

  let idx03 = 0;

  let interval03 = setInterval(run03, 3000);

  function run03() {
    idx03++;
    changeImage03();
  }

  function changeImage03() {
    if (idx03 > img.length - 1) {
      idx03 = 0;
    } else if (idx03 < 0) {
      idx03 = img.length - 1;
    }

    imgs03.style.transform = `translateX(${-idx03 * scrollLength}px)`;
  }

  function resetInterval03() {
    clearInterval(interval03);
    interval03 = setInterval(run03, 3000);
  }

  rightBtn03.addEventListener("click", () => {
    idx03++;
    changeImage03();
    resetInterval03();
  });

  leftBtn03.addEventListener("click", () => {
    idx03--;
    changeImage03();
    resetInterval03();
  });

  const imgs04 = document.getElementById("imgs04");
  const leftBtn04 = document.getElementById("left04");
  const rightBtn04 = document.getElementById("right04");

  //const carousel_image02 = document.querySelectorAll('#imgs02 carousel_image02')

  let idx04 = 0;

  let interval04 = setInterval(run04, 3000);

  function run04() {
    idx04++;
    changeImage04();
  }

  function changeImage04() {
    if (idx04 > 4 - 1) {
      //img.length
      idx04 = 0;
    } else if (idx04 < 0) {
      idx04 = 4 - 1; //img.length
    }

    imgs04.style.transform = `translateX(${-idx04 * scrollLength}px)`;
  }

  function resetInterval04() {
    clearInterval(interval04);
    interval04 = setInterval(run04, 3000);
  }

  rightBtn04.addEventListener("click", () => {
    idx04++;
    changeImage04();
    resetInterval04();
  });

  leftBtn04.addEventListener("click", () => {
    idx04--;
    changeImage04();
    resetInterval04();
  });

  const imgs05 = document.getElementById("imgs05");
  const leftBtn05 = document.getElementById("left05");
  const rightBtn05 = document.getElementById("right05");

  //const carousel_image02 = document.querySelectorAll('#imgs02 carousel_image02')

  let idx05 = 0;

  let interval05 = setInterval(run05, 3000);

  function run05() {
    idx05++;
    changeImage05();
  }

  function changeImage05() {
    if (idx05 > 3 - 1) {
      //img.length
      idx05 = 0;
    } else if (idx05 < 0) {
      idx05 = 3 - 1; //img.length
    }

    imgs05.style.transform = `translateX(${-idx05 * scrollLength}px)`;
  }

  function resetInterval05() {
    clearInterval(interval05);
    interval05 = setInterval(run05, 3000);
  }

  rightBtn05.addEventListener("click", () => {
    idx05++;
    changeImage05();
    resetInterval05();
  });

  leftBtn05.addEventListener("click", () => {
    idx05--;
    changeImage05();
    resetInterval05();
  });

  const imgs06 = document.getElementById("imgs06");
  const leftBtn06 = document.getElementById("left06");
  const rightBtn06 = document.getElementById("right06");

  //const carousel_image02 = document.querySelectorAll('#imgs02 carousel_image02')

  let idx06 = 0;

  let interval06 = setInterval(run06, 3000);

  function run06() {
    idx06++;
    changeImage06();
  }

  function changeImage06() {
    if (idx06 > 1 - 1) {
      //img.length
      idx06 = 0;
    } else if (idx06 < 0) {
      idx06 = 1 - 1; //img.length
    }

    imgs06.style.transform = `translateX(${-idx06 * scrollLength}px)`;
  }

  function resetInterval06() {
    clearInterval(interval06);
    interval06 = setInterval(run06, 3000);
  }

  rightBtn06.addEventListener("click", () => {
    idx06++;
    changeImage06();
    resetInterval06();
  });

  leftBtn06.addEventListener("click", () => {
    idx06--;
    changeImage06();
    resetInterval06();
  });
})(); // End of use strict
