let map = L.map('map').setView([58.373523, 26.716045], 12)
const osm =
L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
 maxZoom: 19,
 attribution: 'OpenStreetMap contributors',
});
osm.addTo(map)

//https://sasageospatial.github.io/3_practice


// default map settings
function defaultMapSettings() {
 map.setView([58.373523, 26.716045], 12)
}

