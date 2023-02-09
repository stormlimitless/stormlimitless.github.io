//Filter functionality
var services = document.querySelectorAll(".service");
var filterInput = document.getElementById("filter-input");

filterInput.addEventListener("keyup", function() {
  var filterValue = this.value.toLowerCase();
  for (var i = 0; i < services.length; i++) {
    var serviceName = services[i].querySelector("h2").textContent;
    if (serviceName.toLowerCase().indexOf(filterValue) > -1) {
      services[i].style.display = "block";
    } else {
      services[i].style.display = "none";
    }
  }
});

//Tabs functionality
var tabButtons = document.querySelectorAll(".tab-button");

for (var i = 0; i < tabButtons.length; i++) {
  tabButtons[i].addEventListener("click", function() {
    var category = this.dataset.category;
    for (var j = 0; j < services.length; j++) {
      if (services[j].dataset.category === category || category === "all") {
        services[j].style.display = "block";
      } else {
        services[j].style.display = "none";
      }
    }
  });
}

//Carousel functionality
var slideIndex = 1;
var prevButton = document.getElementById("prev-button");
var nextButton = document.getElementById("next-button");

function showSlides(n) {
  if (n > services.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = services.length;
  }
  for (var i = 0; i < services.length; i++) {
    services[i].style.display = "none";
  }
  services[slideIndex - 1].style.display = "block";
}

prevButton.addEventListener("click", function() {
  showSlides(slideIndex -= 1);
});

nextButton.addEventListener("
