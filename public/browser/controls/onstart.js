function onLoadCoords() {
   const initialCoords = [
      [2.35, 48.86],
      [0.12, 51.51],
      [21.01, 52.23],
      [30.52, 50.45],
      [26.09, 44.43],
      [19.04, 47.5],
      [13.4, 52.52],
   ]

   function initialPins(input) {
      const el = document.createElement('div')
      el.className = 'marker'
      el.innerText = '🔴'
      el.addEventListener('click', (e) => {
         e.stopPropagation()
      })
      new mapboxgl.Marker(el).setLngLat(input).addTo(map)
   }
   initialCoords.forEach((elem) => {
      initialPins(elem)
      containerPins.push(elem)
   })
}
