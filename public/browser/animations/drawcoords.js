// Correctly calculated distances.
function drawCorrectLine() {
    // Create tuples from coords.
    let input = containerPins
    let output = input.reduce((r, a, i) => {
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

// Correctly calculated distances.
function drawRandomLine() {
    // Create tuples from coords.
    let input = containerPins
    let output = input.reduce((r, a, i) => {
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
            'line-color': '#d9534f',
            'line-width': 3,
            'line-opacity': 1,
        },
    })
}

// Event listeners
map.on('dblclick', drawCorrectLine)
