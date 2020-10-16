// Default token.
mapboxgl.accessToken =
    'pk.eyJ1IjoicHNpbW9uMTIzIiwiYSI6ImNrZzlrc3JtajBsamEycG15d3ptbTAyNHYifQ.O03tUgnnyZTSEoFyVzYALQ'

// Night mode for mapbox.
function setDayNightMap() {
    const curTime = new Date().getHours()
    if (curTime > 8 && curTime < 19) {
        return 'mapbox://styles/mapbox/light-v10?optimize=true'
    } else return 'mapbox://styles/mapbox/dark-v10?optimize=true'
}

// Map layers.
const map = new mapboxgl.Map({
    container: 'map',
    style: setDayNightMap(),
    zoom: 3.75,
    center: [11.41, 50.52],
})

// Contains the user's set coords.
let containerPins = []

// Set user pins to the map.
function setPins(e) {
    if (document.getElementById('drop-btn').innerText === ' Lock Map') {
        e.preventDefault()
        const el = document.createElement('div')
        el.className = 'marker'
        el.innerText = '📍'
        el.style.fontSize = '1.1rem'

        el.addEventListener('click', (e) => {
            e.stopPropagation()
        })

        let marker = new mapboxgl.Marker(el).setLngLat(e.lngLat).addTo(map)
        containerPins.push([e.lngLat.lng, e.lngLat.lat])
    } else return true
}

map.on('click', setPins)
