// Nodes as chars.
let nodes = []

// Distances between node pairs.
let distances = {}

// Container for final values.
let result = {}

// Initial length to start with.
let initlen

function getTspDistances() {
   initlen = Math.pow(5, containerPins.length)
   return (result = new NaiveTsp(nodes, distances, 'A').shortestPath())
}

class NaiveTsp {
   constructor(vtx, edg, start) {
      this.vtx = vtx.slice(0)
      this.edg = edg
      this.start = start
      this.vtx.push(this.start)
   }

   existsShorter(initlen) {
      // generate all permutations
      let permuts = []
      this.getAllPossiblePermuts(this.vtx, permuts)

      // iterate permutations. A for loop is used here instead of forEach since we might need early exit
      for (i = 0; i < permuts.length; i++) {
         let sum = 0
         let el = permuts[i]
         for (j = 0; j < el.length - 1; j++) {
            let key = el[j] + el[j + 1]
            sum = sum + this.edg[key]
         }
         // return true only if path is shorter, starts and ends in the same node
         if (sum < parseInt(initlen) && el[0] === el[el.length - 1]) {
            return {
               exists: true,
               path: el,
               length: sum,
            }
         }
      }
      return {
         exists: false,
      }
   }

   shortestPath() {
      let permuts = []
      this.getAllPossiblePermuts(this.vtx, permuts)

      let pathLength = Number.MAX_VALUE
      let path = []
      permuts.forEach((el) => {
         let sum = 0
         for (let i = 0; i < el.length - 1; i++) {
            let key = el[i] + el[i + 1]
            sum = sum + this.edg[key]
         }

         if (
            sum < pathLength &&
            el[0] === this.start &&
            el[el.length - 1] === this.start
         ) {
            pathLength = sum
            path = el
         }
      })
      return {
         path: path,
         length: pathLength,
      }
   }

   getPermuts(array, start, result) {
      if (start >= array.length) {
         const arr = array.slice(0)
         result.push(arr)
      } else {
         let i
         for (i = start; i < array.length; ++i) {
            this.swap(array, start, i)
            this.getPermuts(array, start + 1, result)
            this.swap(array, start, i)
         }
      }
   }
   getAllPossiblePermuts(array, result) {
      this.getPermuts(array, 0, result)
   }

   swap(array, from, to) {
      const tmp = array[from]
      array[from] = array[to]
      array[to] = tmp
   }
}
