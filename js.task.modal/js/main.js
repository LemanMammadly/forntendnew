let modalBtn = document.getElementById("btn")
let modal = document.getElementById("alldiv")
let closeBtn = document.getElementById("close")

modalBtn.onclick = function(){
  modal.style.display = "block"
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target === modal){
    modal.style.display = "none"
  }
}