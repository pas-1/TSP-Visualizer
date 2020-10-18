// Contains all user's coords.
let containerPins = []

// Set user pins to map.
function setPins(e) {
   if (document.getElementById('drop-btn').innerText === ' Lock Map') {
      e.preventDefault()
      const el = document.createElement('div')
      el.className = 'marker'
      el.innerText = '🔴'

      el.addEventListener('click', (e) => {
         e.stopPropagation()
      })

      let marker = new mapboxgl.Marker(el).setLngLat(e.lngLat).addTo(map)
      containerPins.push([e.lngLat.lng, e.lngLat.lat])
   } else return true
}

map.on('click', setPins)
