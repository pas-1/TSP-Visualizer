function drawLine() {
   // Create tuples from coords for Mapbox.
   let output = correctCoords
      .flatMap((i) => [i, i])
      .slice(1, 2 * correctCoords.length - 1)
      .reduce((r, a, i) => {
         if (i % 2) {
            r[r.length - 1].push(a)
         } else {
            r.push([a])
         }
         return r
      }, [])
   // Add line from coordinates.
   map.addLayer({
      id: 'number',
      minzoom: 3,
      maxzoom: 9,
      source: {
         type: 'geojson',
         data: {
            type: 'FeatureCollection',
            features: [
               {
                  type: 'Feature',
                  properties: {},
                  geometry: {
                     type: 'MultiLineString',
                     coordinates: output,
                  },
               },
            ],
         },
      },
      type: 'line',
      layout: {
         'line-join': 'round',
         'line-cap': 'round',
      },
      paint: {
         'line-color': '#5bc0de',
         'line-width': 3,
         'line-opacity': 1,
      },
   })
}
