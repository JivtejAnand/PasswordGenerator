const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3",
    "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-",
    "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let output = document.getElementById("password")
let output2 = document.getElementById("password2")
let checkbox = document.getElementById("pressed");
let checkbox1 = document.getElementById("pressed1");
let checkbox2 = document.getElementById("pressed2");



let newArray = []
let newArray2 = []

function myFunction() {
    for (let i = 0; i < 15; i++) {
        newArray[i] = characters[randNo()]
        newArray2[i] = characters[randNo()]
    }
    

    if(checkbox.checked == false && checkbox1.checked == false && checkbox2.checked == false){
        output.textContent = "Choose elements"
        output2.textContent = "Choose elements"
    }

    else {
        output.textContent = newArray.join("")
        output2.textContent = newArray2.join("")
    }
    
}

function copy() {
    
    
    alert("Copied the text: " + output.textContent + " and " + output2.textContent )
    
}

function randNo() {
    if(checkbox.checked && checkbox1.checked && checkbox2.checked){
        
        let rand = Math.floor(Math.random() * characters.length)
        return rand 
    }

    else if (checkbox.checked && checkbox1.checked){
        let rand = Math.floor(Math.random() * 62)
        return rand
    }

    else if (checkbox1.checked && checkbox2.checked){
        let rand = Math.floor(Math.random() * 40 + 52)
        return rand
    }

    else if(checkbox1.checked){
        let rand = Math.floor(Math.random() * 10 + 52)
        return rand 
    }

    else if(checkbox2.checked){
        let rand = Math.floor(Math.random() * 24 + 63)
        return rand 
    }
    else if (checkbox.checked) {
        let rand = Math.floor(Math.random() * 52)
        return rand
    }

    
    
}



