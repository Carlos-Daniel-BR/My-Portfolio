// Smooth Scrolling
$(".navbar a, .btn").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});

// Sticky menu background
window.addEventListener("scroll", function () {
    if (window.scrollY > 150) {
        document.querySelector(".navbar").style.opacity = 0.9;
    } else {
        document.querySelector(".navbar").style.opacity = 1;
    }
});

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Desenvolvedor Web", "Programador", "Bughunter", "Freelancer","Hacker ético", "Desenvolvedor Front-end", "Músico"];
const typingDelay = 100;
const erasingDelay = 65;
const newTextDelay = 1500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

var button = document.querySelector(".view-more")
var image0 = document.getElementById("hidden-image0")
var image1 = document.getElementById("hidden-image1")


function clique() {
  if (image0.style.display == 'inline-block' && image1.style.display == 'inline-block') {
      image0.style.display = 'none'
      image1.style.display = "none"
      button.innerHTML = "Ver mais..."
  } else {
      image0.style.display = 'inline-block'
      image1.style.display = 'inline-block'
      button.innerHTML = "Ver menos"
  }
}

window.sr = ScrollReveal({ reset: true })

sr.reveal('#showcase-container', {duration: 1150})

sr.reveal('.about-me', {duration: 2000})

sr.reveal('#features-container', {
  rotate: { x: 0, y: 80, z: 0}, 
  duration: 2000})

sr.reveal('#gallery-container', {
  rotate: {x: 50, y: 50, z: 0},
  duration: 2000})