const visualizeAlgo = document.getElementById('start-btn')

function runVisual(e) {
   e.preventDefault()
   createDistanceMatrix()
   if (visualizeAlgo.innerText === ' Visualize Path!') {
      visualizeAlgo.innerHTML = `<span><i class="fas fa-stop"></i> Stop Visual</span>`
   } else if (visualizeAlgo.innerText === ' Stop Visual') {
      visualizeAlgo.innerHTML = `<span><i class="fas fa-rocket"></i> Visualize Path!</span>`
   }
}

// Event listeners
visualizeAlgo.addEventListener('click', runVisual)
