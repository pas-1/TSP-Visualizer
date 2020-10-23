let containerPins = []

function setPins(e) {
   if (document.getElementById('drop-btn').innerText === ' Lock Map') {
      e.preventDefault()
      const el = document.createElement('div')
      el.className = 'marker'
      containerPins.length === 0 ? (el.innerText = '🟢') : (el.innerText = '🔴')
      el.addEventListener('click', (e) => {
         e.stopPropagation()
      })

      new mapboxgl.Marker(el).setLngLat(e.lngLat).addTo(map)
      containerPins.push([e.lngLat.lng, e.lngLat.lat])
   } else return true
}

map.on('click', setPins)
