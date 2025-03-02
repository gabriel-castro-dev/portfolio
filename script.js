//MOUSETRACING
/*const centro = document.getElementById("center")
var colors = ['#ffa500', '#ffff00', '#ff0000']

centro.addEventListener("mousemove",(event) =>{
  var circle = document.createElement("div");
  circle.setAttribute("class", "circle");
  document.getElementById("center").appendChild(circle); 

  circle.style.left = event.clientX + 'px';
  circle.style.top = event.clientY + 'px';

  
  var color = colors[Math.floor(Math.random() * colors.length)];
  circle.style.borderColor = color;


  circle.style.transition = "all 0.5s linear 0s";

  circle.style.left = circle.offsetLeft - 20 + 'px';
  circle.style.top = circle.offsetTop - 20 + 'px';

  circle.style.width = "50px";
  circle.style.height = "50px";
  circle.style.borderWidth = "5px";
  circle.style.opacity = 0;
  circle.style.zIndex = 0;
  setTimeout(() => {
    document.getElementById("center").removeChild(circle)
  }, 2000);
})

//CARROSEL
var carousel = document.getElementsByClassName('imgList')[0],currentSlide, nextSlide;

document.getElementsByClassName("right")[0].addEventListener('click', function(){
  console.log(document.getElementsByClassName('imgList')[0])
  var length = document.querySelectorAll('.imgList li').length;

  currentSlide = +carousel.getAttribute('data-slide');
  nextSlide = +currentSlide === (length - 1) ? 0 : +currentSlide + 1;
   
  carousel.setAttribute('data-slide', nextSlide);
  console.log(nextSlide);
  console.log(document.querySelectorAll('.imgList li')) 
  
  document.querySelectorAll('.imgList li').forEach(element => 
   
    {
      console.log(element)
   element.style.position = 'relative'
   element.style.transition = 'all 1s ease'
   element.style.right = 'calc(' + nextSlide + ' * 700px)'
  
  });
});

document.getElementsByClassName("left")[0].addEventListener('click', function() {
  var length = document.querySelectorAll('.imgList li').length;
  currentSlide = carousel.getAttribute('data-slide');
  nextSlide = +currentSlide === 0 ? (length - 1) : +currentSlide - 1;
  
  carousel.setAttribute('data-slide', nextSlide);
  console.log(+nextSlide);
  document.querySelectorAll('.imgList li').forEach(element => {
    element.style.position = 'relative'
    element.style.transition = 'all 1s ease'
    element.style.right = 'calc(' + nextSlide + ' * 700px)'
   
  });
});
*/
// Enhanced Dark Mode Toggle with smooth transitions
document.addEventListener('DOMContentLoaded', () => {
  // Add transition class to body for smooth color changes
  document.body.classList.add('color-transition');
  
  const checkbox = document.querySelector("#check");
  const status = localStorage.getItem("dark-mode");
  
  // Set initial state based on localStorage
  if (status === "ativado") {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }
  
  // Apply dark mode based on initial state
  darkmode();
  
  // Add smooth transition class to all elements
  addTransitionsToElements();
});

// Add smooth transitions to various elements
function addTransitionsToElements() {
  const elementsToTransition = document.querySelectorAll('a, button, #header, .slider, img');
  elementsToTransition.forEach(el => {
    if (!el.classList.contains('transition-added')) {
      el.style.transition = 'all 0.3s ease';
      el.classList.add('transition-added');
    }
  });
}

// Dark mode toggle function
function darkmode() {
  const darkbody = document.body;
  const checkbox = document.querySelector("#check");

  if (checkbox.checked) {
    darkbody.classList.add("dark");
    localStorage.setItem("dark-mode", "ativado");
    
    // Additional styling for dark mode
    document.querySelectorAll('a').forEach(link => {
      link.style.transition = 'color 0.3s ease';
    });
    
  } else {
    darkbody.classList.remove("dark");
    localStorage.setItem("dark-mode", "desativado");
  }
  
  // Re-apply transitions after mode change
  setTimeout(addTransitionsToElements, 100);
}

// Add this style tag for transitions to the head
const styleElement = document.createElement('style');
styleElement.textContent = `
  .color-transition, .color-transition * {
    transition: background-color 0.5s ease, 
                background 0.5s ease, 
                color 0.5s ease;
  }
`;
document.head.appendChild(styleElement);
