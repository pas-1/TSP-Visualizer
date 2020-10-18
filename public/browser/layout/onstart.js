function onLoadCoords() {
   // Initial set of random coords
   const initialCoords = [
      [13.41, 52.52],
      [21.01, 52.22],
      [2.35, 48.86],
      [12.5, 54.9],
      [12.56, 55.68],
      [18.06, 54.33],
      [30.52, 50.45],
      [26.09, 44.43],
      [21.09, 47.43],
      [19.09, 44.43],
   ]
   // Add pins to mapbox.
   function initialPins(input) {
      const el = document.createElement('div')
      el.className = 'marker'
      el.innerText = '🔴'
      el.addEventListener('click', (e) => {
         e.stopPropagation()
      })
      new mapboxgl.Marker(el).setLngLat(input).addTo(map)
   }
   initialCoords.forEach((elem) => initialPins(elem))
   initialCoords.forEach((elem) => containerPins.push(elem))
}
