let distanceMatrix
let correctCoords = []

function createDistanceMatrix() {
   // Distance between two coords.
   function distance(coord1, coord2) {
      return Math.hypot(coord1[0] - coord2[0], coord1[1] - coord2[1])
   }
   // Multidimensional distance matrix array.
   distanceMatrix = new Array(containerPins.length)
   for (i = 0; i < containerPins.length; i++) {
      distanceMatrix[i] = new Array(containerPins.length)
      for (j = 0; j < containerPins.length; j++) {
         distanceMatrix[i][j] = distance(containerPins[i], containerPins[j])
      }
   }
}

function createDistancesObj() {
   let numWorkContainer = []
   let lexWorkContainer = []
   let count = 0
   function toLetters(num) {
      var mod = num % 26,
         pow = (num / 26) | 0,
         out = mod ? String.fromCharCode(64 + mod) : (--pow, 'Z')
      return pow ? toLetters(pow) + out : out
   }
   for (j = 0; j < distanceMatrix.length; j++) {
      count++
      nodes.push(toLetters(count))
      for (k = 0; k < distanceMatrix.length; k++) {
         if (distanceMatrix[j][k] > 0) {
            numWorkContainer.push(distanceMatrix[j][k])
         }
      }
   }
   for (l = 0; l < nodes.length; l++) {
      for (m = 0; m < nodes.length; m++) {
         if (nodes[l] != nodes[m]) {
            lexWorkContainer.push(nodes[l].concat(nodes[m]))
         }
      }
   }
   distances = lexWorkContainer.reduce(
      (o, k, i) => ({ ...o, [k]: numWorkContainer[i] }),
      {}
   )
}

function createCoordOrder() {
   function toNumbers(letter) {
      return letter.toLowerCase().charCodeAt(0) - 97
   }
   let numPathList = []
   for (i = 0; i < result.vtx.length; i++) {
      numPathList.push(toNumbers(result.vtx[i]))
   }
   for (i = 0; i < numPathList.length; i++) {
      correctCoords.push(containerPins[numPathList[i]])
   }
}
