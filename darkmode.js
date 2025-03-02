/*//DARKMODE
const checkbox = document.querySelector("#check")
function darkmode(){
  const darkbody = document.body

  if(checkbox.checked){
    darkbody.classList.add("dark")
    localStorage.setItem("dark-mode","ativado")
  }
  else{
    darkbody.classList.remove("dark")
    localStorage.setItem("dark-mode","desativado")
  }
}
addEventListener("DOMContentLoaded", ()=>{
    const status = localStorage.getItem("dark-mode")
    if(status ==="ativado"){
        checkbox.checked = true
    }
    else{
        checkbox.checked = false
    }
    darkmode()
})
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
