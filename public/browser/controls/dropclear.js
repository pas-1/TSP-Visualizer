const dropPins = document.getElementById('drop-btn')
const removePin = document.getElementById('remove-btn')
const clearMap = document.getElementById('clear-btn')

function changeDropPins() {
    if (dropPins.innerText === ' Drop Pins') {
        dropPins.innerHTML = ''
        dropPins.innerHTML = `<span><i class="fas fa-lock"></i> Lock Map</span>`
    } else if (dropPins.innerText === ' Lock Map') {
        dropPins.innerHTML = ''
        dropPins.innerHTML = `<span><i class="fas fa-map-pin"></i> Drop Pins</span>`
    }
}

function removeLastPin() {
    const elements = document.getElementsByClassName('marker')
    if (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0].parentNode.lastChild)
        containerPins.pop()
    } else alert('No Pins on the Map! 🏳️')
}

function deleteDropPins() {
    if (containerPins.length === 0) {
        alert('No Pins on the Map! 🏳️')
    } else if (confirm('Do you want to delete all Pins? 🗺️')) runDeletePins()
    function runDeletePins() {
        const elements = document.getElementsByClassName('marker')
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0])
        }
        containerPins.length = 0
    }
}

// Event Listeners
dropPins.addEventListener('click', changeDropPins)
removePin.addEventListener('click', removeLastPin)
clearMap.addEventListener('click', deleteDropPins)
