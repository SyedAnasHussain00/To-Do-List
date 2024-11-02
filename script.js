let input = document.getElementById("input");
let ul = document.getElementById("ul");

function addtask(){
        if(input.value == ''){
            alert("You must type something");
        }
        else{
            let li = document.createElement("li");
            li.innerHTML = input.value;
            ul.appendChild(li);
            let span = document.createElement("span")
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
        input.value = "";
}

ul.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("li")
    }
        
    else if(e.target.tagName =="SPAN"){
        e.target.parentElement.remove();
    }
}, false);