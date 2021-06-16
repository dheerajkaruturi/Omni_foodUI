// for sticky navigation
/*$(document).ready(function () {
  $(".js-section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "120px",
    }
  );
});*/
/* =============================================================== */
//animations:
$(document).ready(function () {
  $(".feature-animation").waypoint(
    function () {
      $(".feature-animation").addClass(" animate__animated animate__fadeIn ");
    },
    {
      offset: "95%",
    }
  );
  $(".hero-text-animation").waypoint(
    function () {
      $(".hero-text-animation").addClass(" animate__animated animate__flash ");
    },
    {
      offset: "50%",
    }
  );
  $(".hero-text-animation").waypoint(
    function () {
      $(".hero-text-animation").addClass(" animate__animated animate__flash ");
    },
    {
      offset: "30%",
    }
  );
  $(".steps-box-animation").waypoint(
    function () {
      $(".steps-box-animation").addClass(" animate__animated animate__fadeInUpBig ");
    },
    {
      offset: "95%",
    }
  );
  $(".plan-box-animation").waypoint(
    function () {
      $(".plan-box-animation").addClass(" animate__animated animate__heartBeat ");
    },
    {
      offset: "75%",
    }
  );
});
/* =============================================================== */
// Mobile Navigation Toggle:
/*const toggleButton = document.getElementsByClassName('toggle-menu-button')[0];
const navBarLinks = document.getElementsByClassName('nav-links')[0];

toggleButton.addEventListener('click', () => {
navBarLinks.classList.toggle('active')
})*/

function myFunction(){
  var x = document.getElementsByClassName("nav-links");
  var displaySetting = x[0].style.display;
  if (displaySetting === "none"){
    x[0].style.display = "block";
  }
  else {
    x[0].style.display = "none";
  }
}
