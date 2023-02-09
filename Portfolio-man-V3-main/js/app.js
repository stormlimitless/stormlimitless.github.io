// Typing Animation i javascript 

// var string = "Hello, I'm Henrik Storm, web design and developer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam magni sit"; 
// var timer;
// var array = string.split("");


// function Text () {
// 	if (array.length > 0) {
// 		document.getElementById("text-JS").innerHTML += array.shift();
// 	} else {
// 		clearTimeout(timer);
// 			}
// 	loopTimer = setTimeout("Text()",30); /* change-speed */

//   console.log("Typing animation JS ")
// }
// Text(); 


// ------------------------------------------

// copyright update date on current years

function AgeCopyright() {
 

  // The current date
  var currentDate = new Date();

  // The age in years
  var age = currentDate.getFullYear() - birthDate.getFullYear();

 e();

  // If the date has already happened this year
  if (month < 0 || month == 0 && day < 0) {
      age--;
  }

}


// ---------------------



const filter_btns = document.querySelectorAll(".filter-btn");
const records_numbers = document.querySelectorAll(".number");
const footer_input = document.querySelector(".footer-input");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");

footer_input.addEventListener("focus", () => {
  footer_input.classList.add("focus");
});

footer_input.addEventListener("blur", () => {
  if (footer_input.value != "") return;
  footer_input.classList.remove("focus");
});

function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));

filter_btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;

    $(".grid").isotope({ filter: filterValue });
  })
);

$(".grid").isotope({
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
  transitionDuration: "0.6s",
});

window.addEventListener("scroll", () => {
  skillsEffect();
  countUp();
});

function checkScroll(el) {
  let rect = el.getBoundingClientRect();
  if (window.innerHeight >= rect.top + el.offsetHeight) return true;
  return false;
}



function countUp() {
  if (!checkScroll(records_wrap)) return;
  records_numbers.forEach((numb) => {
    const updateCount = () => {
      let currentNum = +numb.innerText;
      let maxNum = +numb.dataset.num;
      let speed = 100;
      const increment = Math.ceil(maxNum / speed);

      if (currentNum < maxNum) {
        numb.innerText = currentNum + increment;
        setTimeout(updateCount, 1);
      } else {
        numb.innerText = maxNum;
      }
    };

    setTimeout(updateCount, 400);
  });
}

var mySwiper = new Swiper(".swiper-container", {
  speed: 1100,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});




// parallax

// Select all elements with class "parallax"
var elements = document.getElementsByClassName("parallax");

// Listen for scroll event on the window
window.addEventListener("scroll", function(){
  // Loop through all elements with class "parallax"
  for(var i = 0; i < elements.length; i++){
    // Get the speed of the element from the "data-speed" attribute
    var speed = elements[i].dataset.speed;

    // Calculate the new position of the element
    var yPos = window.pageYOffset / speed; 
    var coords = '50% '+ yPos + 'px';

    // Update the background position of the element
    elements[i].style.backgroundPosition = coords;
  }
});

// 


  var elements = document.getElementsByClassName("parallax");
  window.addEventListener("scroll", function(){
    for(var i = 0; i < elements.length; i++){
      var speed = elements[i].dataset.speed;
      var yPos = -(window.pageYOffset / speed); 
      elements[i].style.transform = "translate3d(0," + yPos + "px, 0)";
    }
  });




  // When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("navbab-1").style.top = "0";
  } else {
    document.getElementById("navbab-1").style.top = "-50px";
  }
}




// ---------------------------------------------------------------------------------------
// Dropdown Menu

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// End of Dropdown Menu
// -------------------------------------------------------------------------------------------------



// deom buttten 
const demoButton = document.getElementById("demo-button");

demoButton.addEventListener("click", function() {
    window.location.href = "Portfolio-demo.html";
});


// gallery-image for Portfolio

$(document).ready(function(){
  $(".img-description").click(function(){
      $(this).toggleClass("flip");
  });
});



// card porfolio 


const contentWrapper = document.querySelector('.content-wrapper');
const modalWrapper = document.querySelector('.modal-wrapper');
const modalButtons = document.querySelectorAll('.modal-toggle');

modalButtons.forEach(button => {
button.addEventListener('click', () => {
contentWrapper.classList.toggle('modal--active');
modalWrapper.classList.toggle('modal--active');
});
});


// end of card porfoilloS
