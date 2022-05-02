const incrementBtn = document.getElementById('increment')
const decrementBtn = document.getElementById('decrement')
let counter =0

function incrementCounter(){
    const counterEl = document.getElementById('counter')
    counter++
    counterEl.innerText = counter
}

function decrementCounter(){
    if (counter > 0){
    const counterEl = document.getElementById('counter')
    counter--
    counterEl.innerText = counter
    }
}

incrementBtn.addEventListener('click', incrementCounter)
decrementBtn.addEventListener('click', decrementCounter)