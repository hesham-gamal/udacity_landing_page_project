/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const sections = Array.from(document.querySelectorAll("section"));
const menuItem = document.getElementById("navbar__list");
let nubmerOfList = sections.length;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// Build the Navbar
function creatNavMenu() {
  for (section of sections) {
    sectionName = section.getAttribute("data-nav");
    sectionId = section.getAttribute("id");
    navList = document.createElement("li");
    navList.innerHTML = `<a class='menu__link' href='#${sectionId}'>${sectionName}</a>`;
    menuItem.appendChild(navList);
  }
}

// Check if section in viewport

function checkViewPort(elem) {
  let sectionPostion = elem.getBoundingClientRect();
  return sectionPostion.top >= 0;
}

// Add class 'active' to section when near top of viewport
function sectionActiveToggle() {
  for (section of sections) {
    if (checkViewPort(section)) {
      if (!section.classList.contains("your-active-class")) {
        section.classList.add("your-active-class");
      }
    } else {
      section.classList.remove("your-active-class");
    }
  }
}

// Scroll to anchor ID using scrollTO event
function scrollToSectionOnClick() {
  let navbarLink = document.querySelectorAll(".menu__link");
  navbarLink.forEach((element) => {
    element.addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector(element.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
creatNavMenu();

// Scroll to section on link click
scrollToSectionOnClick();

// Set sections as active
document.addEventListener("scroll", sectionActiveToggle);
