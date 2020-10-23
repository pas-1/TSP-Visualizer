const runVisualize = document.getElementById('start-btn')

function visualize(e) {
   e.preventDefault()
   clearUI()
   createDistanceMatrix()
   createDistancesObj()
   getTspDistances()
   createCoordOrder()
   drawLine()
}

// Event listeners
runVisualize.addEventListener('click', visualize)
