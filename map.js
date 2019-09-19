/* global mapboxgl */
/* global MapboxDirections */
/* global turf */


mapboxgl.accessToken = 'pk.eyJ1Ijoic2NoaWFyaXp6aSIsImEiOiJjajE4a3NuZWowNzQ5MzNvN2xkdGh2YnVwIn0.dOZQgGCs8Fwxpy7bmRvvTg' // CHANGE TO YOUR ACCESS Token =)

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/schiarizzi/ck0qu0sut1hqi1dqc8dms4rho', // stylesheet location
    center: [-77.709610, 38.134557], // starting position [lng, lat] 
    zoom: 9 // starting zoom
})

map.on('load', function () {
 
    map.addLayer({
          "id": "wind-data",
          "type": "circle",
          "source": {
          type: 'vector',
          url: 'mapbox://schiarizzi.c6a7kfik'
        },
            paint: {
    // increase the radius of the circle as the zoom level and mass value increases
    'circle-radius': {
      property: 'mass',
      type: 'exponential',
      stops: [
        [{ zoom: 15, value: 1 }, 5],
        [{ zoom: 15, value: 62 }, 50],
        [{ zoom: 22, value: 1 }, 250],
        [{ zoom: 22, value: 62 }, 1000],
      ]
    },
    'circle-color': {
      property: 'mass',
      type: 'exponential',
      stops: [
        [0, 'rgba(236,222,239,0)'],
        [10, '#ffffad'],
        [30, '#f5e07a'],
        [100, '#f5bf42'],
        [250, '#f7b228'],
        [500, '#e35f27'],
        [10000, '#d93b3b']
      ]
    },
      'circle-stroke-color': 'white',
      'circle-stroke-width': 2,
      'circle-opacity': {
        stops: [
          [14, 0],
          [15, 1]
        ]
      }
    }
  });

});


