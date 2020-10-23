// Nodes as chars.
let nodes = []

// Distances between node pairs.
let distances = {}

// Container for final values.
let result = {}

function getTspDistances() {
   return (result = new NaiveTsp(nodes, distances, 'A'))
}

class NaiveTsp {
   constructor(vtx, edg, start) {
      this.vtx = vtx.slice(0)
      this.edg = edg
      this.start = start
      this.vtx.push(this.start)
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
