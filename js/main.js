var submit = document.getElementById("submit")
function CheckTheInputs() {
     var text = document.getElementById("text");
     var number = document.getElementById("number");
     var tv = text.value
     var nv = number.value
     if (tv == "" && nv == "") {
          console.error("Emty Inputs")
     } 
     if(tv == "" && nv != ""){
          console.error("Emty Inputs room")
     }
     if(tv != "" && nv == ""){
          console.error("Emty Inputs name")
     }  else {
          console.log(`this is your freind name : ${ tv}`);
          console.log(`this is your room id${nv}`);
          var test = localStorage.setItem("Your Name Is :",tv)
          var test2 = localStorage.setItem("your room id is :",nv)
           console.log(test)
           console.log(test2)
           location.href = "/html/chat.html"
     }

}
// ================================================ // 

submit.addEventListener("click", CheckTheInputs)
// localStorage.clear()