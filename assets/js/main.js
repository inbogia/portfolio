/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Developer"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

window.addEventListener('scroll', scrollActive)
document.addEventListener("DOMContentLoaded", function() {
  console.log("Script loaded");

  const socialIconsContainer = document.querySelector(".social_icons");
  const footerSocialIconsContainer = document.querySelector(".footer-social-icons");

  // Function to add event listeners to icons
  function addEventListenersToIcons(container) {
      const icons = container.querySelectorAll(".icon");
      icons.forEach(function(icon) {
          const iconType = icon.querySelector("i").className.split(" ").pop(); // Get the last class name
          icon.addEventListener("click", function() {
              switch (iconType) {
                  case "uil-instagram":
                      window.open("https://www.instagram.com/ingli.b", "_blank");
                      break;
                  case "uil-linkedin-alt":
                      window.open("https://www.linkedin.com/in/ingkli", "_blank");
                      break;
                  case "uil-github-alt":
                      window.open("https://github.com/ingli0", "_blank");
                      break;
                  default:
                      console.error("Invalid icon clicked");
                      break;
              }
          });
      });
  }

  // Add event listeners to icons in both containers
  if (socialIconsContainer) {
      addEventListenersToIcons(socialIconsContainer);
  } else {
      console.error("Social icons container not found.");
  }

  if (footerSocialIconsContainer) {
      addEventListenersToIcons(footerSocialIconsContainer);
  } else {
      console.error("Footer social icons container not found.");
  }
});


document.getElementById('downloadCVBtn1').addEventListener('click', function() {
  var link = document.createElement('a');
  link.href = 'assets/cv/Ingkli_boja_cv.pdf'; // Replace 'path_to_cv1.pdf' with the actual path to your CV
  link.download = 'ingkli_boja_cv.pdf'; // The name you want for the downloaded file
  link.click();
});

// Download CV 2
document.getElementById('downloadCVBtn2').addEventListener('click', function() {
  var link = document.createElement('a');
  link.href = 'assets/cv/Ingkli_boja_cv.pdf'; // Replace 'path_to_cv2.pdf' with the actual path to your CV
  link.download = 'ingkli_boja_cv.pdf'; // The name you want for the downloaded file
  link.click();
});

// Download CV 3
document.getElementById('downloadCVBtn3').addEventListener('click', function() {
  var link = document.createElement('a');
  link.href = 'assets/cv/Ingkli_boja_cv.pdf'; // Replace 'path_to_cv3.pdf' with the actual path to your CV
  link.download = 'ingkli_boja_cv.pdf'; // The name you want for the downloaded file
  link.click();
});