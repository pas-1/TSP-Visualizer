let distanceMatrix

function distance(coord1, coord2) {
   return Math.hypot(coord1[0] - coord2[0], coord1[1] - coord2[1])
}

function createDistanceMatrix() {
   distanceMatrix = new Array(containerPins.length)
   for (i = 0; i < containerPins.length; i++) {
      distanceMatrix[i] = new Array(containerPins.length)
      for (j = 0; j < containerPins.length; j++) {
         distanceMatrix[i][j] = distance(containerPins[i], containerPins[j])
      }
   }
}
