const btn=document.querySelectorAll(".button")
const screen=document.querySelector(".screen")
function buttonPressed() {
    var screenValue=""
    btn.forEach(button=> {
        button.addEventListener("click",e=> {
            var buttonValue=e.target.getAttribute("value")
            if(buttonValue=="C") {
                screenValue=""
                screen.textContent=screenValue
            }
            else if(buttonValue=="=") {
                screen.textContent=eval(screenValue)
                screenValue=""
            }
            else {
                screenValue+=buttonValue
                screen.textContent=screenValue
            }
        })
    })
}
buttonPressed()


