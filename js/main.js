// Window Reload on logo click
document.querySelector(".navbar-brand").addEventListener("click", () => {
  window.location.reload();
});
// Turn bars into X on clicking on bars
let barsContent = document.querySelector(".navbar-light .navbar-toggler");
let bars = document.querySelectorAll(".bars span");
let started = false;
barsContent.onclick = () => {
  if (!started) {
    bars.forEach((e) => {
      if (e.className === "first") {
        e.style.setProperty(
          "transform",
          "rotate(-45deg)translate(-5.25px,5.25px)"
        );
      } else if (e.className === "third") {
        e.style.setProperty(
          "transform",
          "rotate(45deg)translate(-5.25px,-5.25px)"
        );
      } else if (e.className === "second") {
        e.style.width = "0";
      }
    });
    started = true;
  } else {
    bars.forEach((e) => {
      e.style.setProperty("transform", "rotate(0deg)translate(0px,0px)");
      e.style.width = "100%";
    });
    started = false;
  }
};
let allLinks = document.querySelectorAll(".navbar-nav .nav-item .nav-link");
let sections = document.querySelectorAll("body > div");
//Add Active Class to Section whose link button is clicked
allLinks.forEach((link) => {
  link.onclick = (e) => {
    allLinks.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
    // Scroll to section on its link click
    e.preventDefault();
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
    bars.forEach((e) => {
      e.style.setProperty("transform", "rotate(0deg)translate(0px,0px)");
      e.style.width = "100%";
    });
    document.querySelector(".navbar-collapse").classList.remove("show");
    document
      .querySelector(".navbar-toggler")
      .setAttribute("aria-expanded", "false");
    document.querySelector(".navbar-toggler").classList.toggle("collapsed");
    started = false;
  };
});
// Animate Width on scroll & Scroll to top
let skills = document.querySelector(".skills");
let progresses = document.querySelectorAll(
  ".skills .container .row .progress-bar"
);
let up = document.querySelector(".up");
let sectionHeading = document.querySelectorAll(".special-heading");
sections.forEach((e) => {
  if (
    !e.classList.contains("up") &&
    !e.classList.contains("settings") &&
    !e.classList.contains("footer")
  ) {
    console.log(e);
    console.log(e.offsetTop);
  }
});
window.onscroll = function () {
  // Add Active Class To Section In ViewPort Area
  sections.forEach((section) => {
    if (
      !section.classList.contains("up") &&
      !section.classList.contains("settings") &&
      !section.classList.contains("footer")
    ) {
      if (
        window.scrollY >= section.offsetTop - 20 &&
        window.scrollY <= section.offsetHeight + section.offsetTop
      ) {
        // sectionHeading.forEach((head) => {
        //   if (head.dataset.section === section.className) {
        //     head.style.setProperty("transform", "translateY(0px)");
        //     head.style.opacity = "1";
        //   }
        // });
        allLinks.forEach((e) => {
          e.classList.remove("active");
        });
        allLinks.forEach((e) => {
          if (section.className.toUpperCase() === e.innerHTML.toUpperCase()) {
            allLinks.forEach((link) => {
              link.classList.remove("active");
            });
            e.classList.add("active");
          } else {
            if (e.innerHTML === "Home") {
              e.classList.add("active");
            }
          }
        });
      } else {
        if (
          !section.classList.contains("up") &&
          !section.classList.contains("settings") &&
          !section.classList.contains("footer")
        ) {
          // sectionHeading.forEach((head) => {
          //   if (head.dataset.section === section.className) {
          //     head.style.setProperty("transform", "translateY(50px)");
          //     head.style.opacity = "0";
          //   }
          // });
        }
      }
    }
  });
  // console.log(window.scrollY);
  // COMMENT ###################################
  // 250 = section.offsetTop + 250
  // 740 = next section.offsetTop - 135
  // if (window.scrollY >= 250 && window.scrollY <= 755) {
  //   sectionHeading.forEach((head) => {
  //     head.style.setProperty("transform", "translateY(0px)");
  //     head.style.opacity = "1";
  //   });
  // } else if (window.scrollY >= 925 && window.scrollY <= 1421) {
  //   sectionHeading.forEach((head) => {
  //     head.style.setProperty("transform", "translateY(0px)");
  //     head.style.opacity = "1";
  //   });
  // } else if (window.scrollY >= 1630 && window.scrollY <= 2135) {
  //   sectionHeading.forEach((head) => {
  //     head.style.setProperty("transform", "translateY(0px)");
  //     head.style.opacity = "1";
  //   });
  // } else if (window.scrollY >= 2325 && window.scrollY <= 2835) {
  //   sectionHeading.forEach((head) => {
  //     head.style.setProperty("transform", "translateY(0px)");
  //     head.style.opacity = "1";
  //   });
  // } else if (window.scrollY >= 3040) {
  //   sectionHeading.forEach((head) => {
  //     head.style.setProperty("transform", "translateY(0px)");
  //     head.style.opacity = "1";
  //   });
  // } else {
  //   sectionHeading.forEach((head) => {
  //     head.style.setProperty("transform", "translateY(50px)");
  //     head.style.opacity = "0";
  //   });
  // }
  // Scroll to top
  if (window.scrollY >= 1000) {
    up.style.right = "30px";
  } else {
    up.style.right = "-60px";
  }
  // Animate width
  if (window.scrollY >= skills.offsetTop - 50) {
    progresses.forEach((e) => {
      e.classList.add("ps-3");
      e.style.width = e.dataset.width;
    });
  }
};
up.onclick = () => {
  // allLinks.forEach((link) => {
  //   link.classList.remove("active");
  //   if (link.innerHTML === "Home") {
  //     link.classList.add("active");
  //   }
  // });
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// Start PopupBox
// let projImages = document.querySelectorAll(
//   ".portfolio .container .row .hover .image"
// );
// projImages.forEach((e) => {
//   e.addEventListener("click", (e) => {
//     let popupOverlay = document.createElement("div");
//     popupOverlay.className = "over";
//     document.body.appendChild(popupOverlay);
//     let popupBox = document.createElement("div");
//     popupBox.className = "popup";
//     document.body.appendChild(popupBox);
//     let imagTitle = document.createElement("h5");
//     imagTitle.innerHTML = e.target.alt;
//     popupBox.appendChild(imagTitle);
//     let imag = document.createElement("img");
//     imag.className = "im";
//     imag.src = e.target.src;
//     popupBox.appendChild(imag);
//     let close = document.createElement("span");
//     close.className = "close";
//     close.innerHTML = "x";
//     popupBox.appendChild(close);
//   });
// });
// document.addEventListener("click", (e) => {
//   if (e.target.className === "close") {
//     e.target.parentElement.remove();
//     let ov = document.querySelector(".over");
//     ov.remove();
//   }
// });

// End PopupBox

// // Start SlideShow
let projects = document.querySelectorAll(
  ".portfolio .container .row .hover .image"
);
let slideshowProjects = document.querySelectorAll(
  ".portfolio .slide-show .container .carousel-item img"
);
let slideShow = document.querySelector(".portfolio .slide-show");
let close = document.querySelector(
  ".portfolio .slide-show .carousel .carousel-inner .close"
);
let preview = document.querySelectorAll(
  ".portfolio .slide-show .carousel .carousel-inner .preview"
);
let next = document.querySelector(
  ".portfolio .slide-show .carousel .carousel-control-next"
);
let prev = document.querySelector(
  ".portfolio .slide-show .carousel .carousel-control-prev"
);
projects.forEach((e) => {
  e.addEventListener("click", (e) => {
    slideshowProjects.forEach((p) => {
      if (e.currentTarget.firstElementChild.src === p.src) {
        slideshowProjects.forEach((p) => {
          p.parentElement.classList.remove("active");
        });
        p.parentElement.classList.add("active");
        close.style.display = "block";
        slideShow.classList.add("start");
        preview.forEach((e) => {
          e.style.display = "flex";
        });
      }
    });
  });
});
close.onclick = (ele) => {
  slideShow.classList.remove("start");
  preview.forEach((e) => {
    e.style.display = "none";
  });
  ele.target.style.display = "none";
};
next.addEventListener("click", (e) => {
  e.stopPropagation();
});
prev.addEventListener("click", (e) => {
  e.stopPropagation();
});
let imagesOverlay = document.querySelectorAll(
  ".portfolio .container .row .hover .image .overlay"
);
document.addEventListener("click", (e) => {
  if (
    !e.target.classList.contains("overlay") &&
    e.target.tagName !== "H4" &&
    e.target.tagName !== "SPAN" &&
    e.target.tagName !== "I" &&
    e.target.tagName !== "A" &&
    e.target.tagName !== "P" &&
    e.target.tagName !== "IMG" &&
    e.target !== close
  ) {
    if (slideShow.classList.contains("start")) {
      slideShow.classList.remove("start");
      preview.forEach((e) => {
        e.style.display = "none";
      });
      close.style.display = "none";
    }
  }
});
// Slide-on-touch Small Screens
let carousel = document.querySelector(".portfolio .slide-show .carousel");
if ((next.style.dislay = "none")) {
  document;
  carousel.classList.toggle("slide-on-touch");
  carousel.setAttribute("data-bs-touch", "true");
}
// if (
//   document.querySelector(".portfolio .slide-show .carousel.slide-on-touch")
//     .style.opacity === "1"
// ) {
//   console.log("yes");
//   close.parentElement.parentElement.parentElement.setAttribute(
//     "data-bs-touch",
//     "true"
//   );
// } else {
//   console.log("no");
//   close.parentElement.parentElement.parentElement.setAttribute(
//     "data-bs-touch",
//     "false"
//   );
// }

// End SlideShow
// Start Direction Aware Hover
/*
 * Get the direction by which an element as been hovered.
 *
 * It is done by determining in which quadrant is the mouse
 * inside the element when mouseenter/mouseleave event starts.
 * This is done using trigonometry on the pointer position
 * relative to the center of the element.
 * @see https://freelance-drupal.com/node/79 for details
 *
 * @param event
 *   The event triggering the computation.
 *
 * @result string
 *   Can be 'top', 'right', 'bottom', 'left' depending on the situation.
 */
const getHoverDirection = function (event) {
  var directions = ["top", "right", "bottom", "left"];
  var item = event.currentTarget;

  // Width and height of current item
  var w = item.offsetWidth;
  var h = item.offsetHeight;

  // Calculate the x/y value of the pointer entering/exiting, relative to the center of the item.
  // Scale (sort of normalize) the coordinate on smallest side to the scale of the longest.
  var x =
    (event.clientX - item.getBoundingClientRect().left - w / 2) *
    (w > h ? h / w : 1);
  var y =
    (event.clientY - item.getBoundingClientRect().top - h / 2) *
    (h > w ? w / h : 1);

  // Calculate the angle to the center the pointer entered/exited
  // and convert to clockwise format (top/right/bottom/left = 0/1/2/3).
  var d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

  return directions[d];
};

document.addEventListener("DOMContentLoaded", function () {
  // Loop over items (in a IE11 compatible way).
  var items = document.getElementsByClassName("hover");
  for (var i = 0; i < items.length; i++) {
    // Loop over the registered event types.
    ["mouseenter", "mouseleave"].forEach(function (eventname) {
      items[i].addEventListener(
        eventname,
        function (event) {
          // Retrieve the direction of the enter/leave event.
          var dir = getHoverDirection(event);

          // Reset classes.
          // event.currentTarget.className = 'item hover';
          // > If support for IE11 is not needed.
          // event.currentTarget.classList.remove('mouseenter', 'mouseleave', 'top', 'right', 'bottom', 'left');
          // > If support for IE11 is needed.
          event.currentTarget.classList.remove("mouseenter");
          event.currentTarget.classList.remove("mouseleave");
          event.currentTarget.classList.remove("top");
          event.currentTarget.classList.remove("right");
          event.currentTarget.classList.remove("bottom");
          event.currentTarget.classList.remove("left");

          // Add the event and direction classes.
          // > If support for IE11 is not needed.
          // event.currentTarget.classList.add(event.type, dir);
          // > If support for IE11 is needed.
          event.currentTarget.className += " " + event.type + " " + dir;
        },
        false
      );
    });
  }
});
// End Direction Aware Hover
// Start Setting
let gear = document.querySelector(".gear");
let settings = document.querySelector(".settings");
gear.addEventListener("click", (e) => {
  e.target.classList.toggle("fa-spin");
  e.target.parentElement.classList.toggle("pos2");
  e.target.parentElement.parentElement.classList.toggle("start-0");
});
// Start Change mainColor
let colors = document.querySelectorAll(
  ".settings .colors-option .colors-list li"
);
colors.forEach((e) => {
  if (window.localStorage.getItem("color")) {
    document.documentElement.style.setProperty(
      "--thirdColor",
      window.localStorage.getItem("color")
    );
    if (localStorage.getItem("secondColor") === e.dataset.color) {
      colors.forEach((e) => {
        e.classList.remove("active");
      });
      e.classList.add("active");
    }
  }
  e.onclick = () => {
    // Remove active class to all colors
    colors.forEach((e) => {
      e.classList.remove("active");
    });
    // Add active class to current color
    e.classList.add("active");
    localStorage.setItem("secondColor", e.dataset.color);
    document.documentElement.style.setProperty("--thirdColor", e.dataset.color);
    window.localStorage.setItem("color", e.dataset.color);
  };
});
// Start Navbar Scroll
let nav = document.querySelector(".navbar");
let yesNo = document.querySelectorAll(".yes-no span");
yesNo.forEach((ele) => {
  if (localStorage.getItem("navbar")) {
    if (ele.innerHTML === localStorage.getItem("navbar")) {
      if (ele.innerHTML === "Yes") {
        yesNo.forEach((e) => {
          e.classList.remove("active");
        });
        ele.classList.add("active");
        nav.classList.add("position-fixed");
      } else {
        yesNo.forEach((e) => {
          e.classList.remove("active");
        });
        ele.classList.add("active");
        nav.classList.replace("position-fixed", "position-absolute");
      }
    }
  }
  ele.addEventListener("click", () => {
    yesNo.forEach((e) => {
      e.classList.remove("active");
    });
    if (ele.innerHTML === "Yes") {
      nav.classList.add("position-fixed");
      localStorage.setItem("navbar", "Yes");
    } else {
      nav.classList.replace("position-fixed", "position-absolute");
      localStorage.setItem("navbar", "No");
    }
    ele.classList.add("active");
  });
});
// CHANGE MAIN BACKGROUNDS
let backImages = document.querySelectorAll(
  ".settings .change-background .images img"
);
let backNumbers = document.querySelector(
  ".settings .change-background .back-numbers"
);
Object.values(backNumbers.children).forEach((backNumber) => {
  backNumber.addEventListener("click", (e) => {
    Object.values(backNumbers.children).forEach((backNumber) => {
      backNumber.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});
let mainBackImages = document.querySelector(".landing .carousel-inner");
backImages.forEach((image) => {
  image.addEventListener("click", (e) => {
    if (backNumbers.firstElementChild.classList.contains("active")) {
      if (
        !e.currentTarget.classList.contains("selected2") &&
        !e.currentTarget.classList.contains("selected3")
      ) {
        mainBackImages.firstElementChild.style.setProperty(
          "background-image",
          e.currentTarget.dataset.url
        );
        localStorage.setItem("firstBg", e.currentTarget.dataset.url);
        backImages.forEach((image) => {
          image.classList.remove("selected");
        });
        e.currentTarget.classList.add("selected");
      }
    } else if (
      backNumbers.firstElementChild.nextElementSibling.classList.contains(
        "active"
      )
    ) {
      if (
        !e.currentTarget.classList.contains("selected") &&
        !e.currentTarget.classList.contains("selected3")
      ) {
        mainBackImages.firstElementChild.nextElementSibling.style.setProperty(
          "background-image",
          e.currentTarget.dataset.url
        );
        localStorage.setItem("secondBg", e.currentTarget.dataset.url);
        backImages.forEach((image) => {
          image.classList.remove("selected2");
        });
        e.currentTarget.classList.add("selected2");
      }
    } else if (
      !e.currentTarget.classList.contains("selected") &&
      !e.currentTarget.classList.contains("selected2")
    ) {
      mainBackImages.lastElementChild.style.setProperty(
        "background-image",
        e.currentTarget.dataset.url
      );
      localStorage.setItem("thirdBg", e.currentTarget.dataset.url);
      backImages.forEach((image) => {
        image.classList.remove("selected3");
      });
      e.currentTarget.classList.add("selected3");
    }
  });
});
if (localStorage.getItem("firstBg")) {
  mainBackImages.firstElementChild.style.setProperty(
    "background-image",
    localStorage.getItem("firstBg")
  );
  backImages.forEach((image) => {
    if (image.dataset.url === localStorage.getItem("firstBg")) {
      image.classList.add("selected");
    }
  });
}
if (localStorage.getItem("secondBg")) {
  mainBackImages.firstElementChild.nextElementSibling.style.setProperty(
    "background-image",
    localStorage.getItem("secondBg")
  );
  backImages.forEach((image) => {
    if (image.dataset.url === localStorage.getItem("secondBg")) {
      image.classList.add("selected2");
    }
  });
}
if (localStorage.getItem("thirdBg")) {
  mainBackImages.lastElementChild.style.setProperty(
    "background-image",
    localStorage.getItem("thirdBg")
  );
  backImages.forEach((image) => {
    if (image.dataset.url === localStorage.getItem("thirdBg")) {
      image.classList.add("selected3");
    }
  });
}
// Reset Options
let resetBtn = document.querySelector(".settings .reset");
resetBtn.addEventListener("click", () => {
  localStorage.removeItem("color");
  localStorage.removeItem("secondColor");
  localStorage.removeItem("navbar");
  localStorage.removeItem("firstBg");
  localStorage.removeItem("secondBg");
  localStorage.removeItem("thirdBg");
  window.location.reload();
});
// End Settings
// Scroll to section on btns click
let btn = document.querySelectorAll(".btn");
btn.forEach((b) => {
  b.onclick = () => {
    sections.forEach((sec) => {
      if (b.dataset.section === sec.className) {
        sec.scrollIntoView({
          behavior: "smooth",
        });
        // allLinks.forEach((link) => {
        //   link.classList.remove("active");
        //   if (sec.className.toUpperCase() === link.innerHTML.toUpperCase()) {
        //     link.classList.add("active");
        //   }
        // });
      }
    });
  };
});

// INITIALIZE AOS

AOS.init();
