
let light = document.getElementById("light");
let body = document.body;

light.addEventListener("click", function(){
   let localS =  body.classList.toggle("dark")
   localStorage.setItem("light", localS)
})

let localSto = localStorage.getItem("light")
if(localSto == "true"){
   body.classList.add("dark")
}
else{
    body.classList.remove("dark")
}