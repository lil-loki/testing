document.getElementById("1").addEventListener("click",()=>{alert(document.getElementById("1").innerHTML)});
document.getElementById("2").addEventListener("click",()=>{alert(document.getElementById("2").innerHTML)});
document.getElementById("3").addEventListener("click",()=>{alert(document.getElementById("3").innerHTML)});
document.getElementById("4").addEventListener("click",()=>{alert(document.getElementById("4").innerHTML)});

let box = document.getElementsByClassName("box");

function sendAlert(){
      alert("hi")  
}



for (let i = 0; i < box.length; i++) {
     box[i].addEventListener("mouseover",()=>{box[i].style.backgroundColor = "red"});        
}

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("mouseout",()=>{box[i].style.backgroundColor = "black"});        
}

