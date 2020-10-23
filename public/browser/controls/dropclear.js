const dropPins = document.getElementById('drop-btn')
const removePin = document.getElementById('remove-btn')
const clearMap = document.getElementById('clear-btn')
const elements = document.getElementsByClassName('marker')

function removeOldData() {
   map.removeLayer('number')
   map.removeSource('number')
   correctCoords.length = 0
   distanceMatrix.length = 0
}

function changeDropPins(e) {
   e.preventDefault()
   if (dropPins.innerText === ' Drop Pins') {
      dropPins.innerHTML = `<span><i class="fas fa-lock"></i> Lock Map</span>`
   } else if (dropPins.innerText === ' Lock Map') {
      dropPins.innerHTML = `<span><i class="fas fa-map-pin"></i> Drop Pins</span>`
   }
   correctCoords.length != 0 ? removeOldData() : console.log('Map is ready')
}

function removeLastPin(e) {
   e.preventDefault()
   if (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0].parentNode.lastChild)
      containerPins.pop()
   } else alert('No Pins on the Map! 🏳️')
   correctCoords.length != 0 ? removeOldData() : console.log('Map is ready')
}

function deleteDropPins(e) {
   e.preventDefault()
   function runDeletePins() {
      while (elements.length > 0)
         elements[0].parentNode.removeChild(elements[0])
      containerPins.length = 0
   }
   if (containerPins.length === 0) alert('No Pins on the Map! 🏳️')
   else if (confirm('Do you want to delete all Pins? 🗺️')) runDeletePins()
   correctCoords.length != 0 ? removeOldData() : console.log('Map is ready')
}

// Event listeners
dropPins.addEventListener('click', changeDropPins)
removePin.addEventListener('click', removeLastPin)
clearMap.addEventListener('click', deleteDropPins)
