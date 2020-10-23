const runVisualize = document.getElementById('start-btn')

function visualize(e) {
   e.preventDefault()
   clearUI()
   createDistanceMatrix()
   createDistancesObj()
   getTspDistances()
   createCoordOrder()
   drawLine()
   console.log(result)
}

// Event listeners
runVisualize.addEventListener('click', visualize)
