function setDayNightMap() {
   const curTime = new Date().getHours()
   if (curTime > 8 && curTime < 19) {
      return 'mapbox://styles/mapbox/light-v10?optimize=true'
   } else return 'mapbox://styles/mapbox/dark-v10?optimize=true'
}

const map = new mapboxgl.Map({
   container: 'map',
   style: setDayNightMap(),
   zoom: 3.75,
   center: [11.41, 50.52],
})
