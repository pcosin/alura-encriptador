btnCript = document.querySelector(".encriptar");
btnDes = document.querySelector(".desencriptar");
btnCopy = document.querySelector(".copiar");

Input = document.querySelector(".main-input");
SecondText = document.querySelector(".second-text")
InfoToggle = document.querySelector(".info-togle")

let newInput
let keys
let solution

btnCript.addEventListener('click', encriptar)
btnDes.addEventListener('click', desencriptar)
btnCopy.addEventListener('click', copy)


function encriptar() {

    newInput = Input.value
    replacer()
    pegar()
    reset()
    display()

}


function desencriptar() {
    newInput = Input.value
    desreplacer()
    pegar()
    reset()
    
}

function replacer() {
    keys = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    }

    solution = newInput.replace(/[aeiou]/g, m => keys[m])
    console.log(solution)
}

function desreplacer() {
   

    solution = newInput.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    console.log(solution)


}

function pegar() {

    if(SecondText !== '') {
        SecondText.innerHTML = "";
        let para  = document.createElement('p');
        var node = document.createTextNode(solution);
        para.appendChild(node)
        SecondText.appendChild(para);

    }
    else {  
    let para  = document.createElement('p');
    var node = document.createTextNode(solution);
    para.appendChild(node)
    SecondText.appendChild(para);

    }
  

}



function reset() {
    Input.value = Input.defaultValue 
}

function display() {
    btnCopy.style.display = "block";
    InfoToggle.style.display = "none"

}


function copy() {

    let textCopy = SecondText.textContent
    navigator.clipboard.writeText(textCopy).then(() => {
       
        alert("Copied!"); 
    })
    
}