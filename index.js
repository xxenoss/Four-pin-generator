const showAutoGenPin = document.getElementById("gen-pin-show")
const generateButton = document.getElementById("auto-gen-button")
const numberButton = document.querySelectorAll(".number-button")
const showCLickedNumber = document.getElementById("pin-input-show")
const submitButton = document.getElementById("submit-button")
var tryAgainNumber = document.getElementById("try-again")


//Generate Random Number
function pinGeneration(){
    var randomNumber = Math.floor(1000 + Math.random()*9000)
    return randomNumber
}
// Show Radom Number by clicking Generate button

function showGeneratePin(){
    generateButton.addEventListener("click", function(){
        showAutoGenPin.setAttribute("value", pinGeneration())
        document.getElementsByClassName("not-match")[0].style.display = "none";
        document.getElementsByClassName("matched")[0].style.display = "none"

        
    })

}
showGeneratePin()


// Number click & Show in the display.

numberButton.forEach(button => {
    button.addEventListener("click", function(){
        var numberValue = button.textContent
        allNumberShow(numberValue)
        removeNumber(numberValue)
    })
})
var x =""
function allNumberShow(value){
    if (value === "X"){
        x = x.slice(0, -1)
        showCLickedNumber.setAttribute("value", x )
    }
    else if(value ==="C"){
        x = ""
        showCLickedNumber.setAttribute("value", x )

    }
    else{
        var add = value.toString();
        x+=add
        showCLickedNumber.setAttribute("value", x )
    }
}

// remove a number

function removeNumber(value){
    if (value === "X"){
        x.slice(0, -1)
    }
    
}



//checking same or not.
function submit(){
    var randomValue = document.getElementById("gen-pin-show").getAttribute("value")
        
        matchOrNot(x, randomValue)
        

    }
submitButton.addEventListener("click", submit)

//show match or not match

function matchOrNot(inputValue, genValue){
    if (inputValue === genValue){
        document.getElementsByClassName("matched")[0].style.display = "block"
        window.fadeOut(100).fadeIn(100)
    }
    else{
        document.getElementsByClassName("not-match")[0].style.display = "block"
        var count = parseFloat(tryAgainNumber.textContent)
        count-=1
        tryAgainNumber.textContent = count.toString(); 
        if (tryAgainNumber.textContent === "0"){
            document.querySelector("body").classList.add("game-over")
            setTimeout(function(){
                location.reload()
            }, 700)
        }

        
    }

}





