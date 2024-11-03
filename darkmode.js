//DARKMODE
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
