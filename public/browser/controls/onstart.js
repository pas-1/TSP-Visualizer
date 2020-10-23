function onLoadCoords() {
   // Initial random coords.
   const initialCoords = [
      [10.12, 54.32],
      [11.97, 57.71],
      [21.01, 52.23],
      [30.52, 50.45],
      [26.09, 44.43],
      [21.09, 47.43],
      [13.4, 52.52],
   ]
   // Add pins to mapbox.
   function initialPins(input) {
      const el = document.createElement('div')
      el.className = 'marker'
      el.innerText = '🔴'
      el.addEventListener('click', (e) => {
         e.stopPropagation()
      })
      const marker = new mapboxgl.Marker(el).setLngLat(input).addTo(map)
   }
   initialCoords.forEach((elem) => initialPins(elem))
   initialCoords.forEach((elem) => containerPins.push(elem))
}
