//MOUSETRACING
const centro = document.getElementById("center")
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
