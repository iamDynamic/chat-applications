function n$r(){
var t2 = document.getElementById("t2")
var n2 = document.getElementById("n2")
var NameId = localStorage.getItem("Your Name Is :")
var RoomId = localStorage.getItem("your room id is :")
t2.innerHTML = NameId
n2.innerHTML = RoomId


}
window.onload = ()=>{
var NameId = localStorage.getItem("Your Name Is :")
var RoomId = localStorage.getItem("your room id is :")
t2.innerHTML = NameId
n2.innerHTML = RoomId        

}
function animate(){ 
  var to_be_animate = document.getElementById("to-be-animate")
  console.log(`first url =  ${to_be_animate.src}` )  
  to_be_animate.addEventListener("click",()=>{
      to_be_animate.src = "/images/animated img 1.gif "
      console.log(`second url =  ${to_be_animate.src}` )  
      setTimeout(()=>{
          to_be_animate.src = "/images/static img 1.png "
          console.log(`third url =  ${to_be_animate.src}` ) 
      },1000)
})
}
async function ApiReqest() {
   var randomImg = document.getElementById("RandomImg")
   const response = await fetch("https://api.pexels.com/v1/search?query=tree&per_page=1", {
             headers: {
                       "Authorization": "RuDENAxzuHAkBVC4d3hQmLmjjpIvLWxGeHq9hx3a2X19pt1HQ2eQuClm"
             }
   });
   var resp = await response.json();
   console.log(resp)
   for (i = 0; i < resp.photos.length; i++) {
             randomImg.innerHTML += `<img width="50px" height="50px" style="border-radius:50%" src="${resp.photos[i].src.tiny} alt="connect to the internet"">`
   }
}
ApiReqest()
n$r()
animate()
// localStorage.clear()