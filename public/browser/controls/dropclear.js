const dropPins = document.getElementById('drop-btn')
const removePin = document.getElementById('remove-btn')
const clearMap = document.getElementById('clear-btn')

function deleteOld() {
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
   correctCoords.length != 0 ? deleteOld() : console.log('Map is clear')
}

function removeLastPin(e) {
   e.preventDefault()
   const elements = document.getElementsByClassName('marker')
   if (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0].parentNode.lastChild)
      containerPins.pop()
   } else alert('No Pins on the Map! 🏳️')
   correctCoords.length != 0 ? deleteOld() : console.log('Map is clear')
}

function deleteDropPins(e) {
   e.preventDefault()
   function runDeletePins() {
      const elements = document.getElementsByClassName('marker')
      while (elements.length > 0) {
         elements[0].parentNode.removeChild(elements[0])
      }
      containerPins.length = 0
   }
   if (containerPins.length === 0) {
      alert('No Pins on the Map! 🏳️')
   } else if (confirm('Do you want to clear all Pins? 🗺️')) runDeletePins()
   correctCoords.length != 0 ? deleteOld() : console.log('Map is clear')
}

// Event listeners
dropPins.addEventListener('click', changeDropPins)
removePin.addEventListener('click', removeLastPin)
clearMap.addEventListener('click', deleteDropPins)
