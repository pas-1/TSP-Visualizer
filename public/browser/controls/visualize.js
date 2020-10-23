const runVisualize = document.getElementById('start-btn')

function visualize(e) {
   e.preventDefault()
   createDistanceMatrix()
   createDistancesObj()
   createCoordOrder()
   drawLine()
}

// Event listeners
runVisualize.addEventListener('click', visualize)
