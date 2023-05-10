let map = L.map('map').setView([58.373523, 26.716045], 12)
const osm =
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
 maxZoom: 19,
 attribution: 'OpenStreetMap contributors',
});
osm.addTo(map)

//https://sasageospatial.github.io/3_practice/geojson/tartu_city_celltowers_edu.geojson
// add geoJSON polygons layer*


// add popup to each feature
function popUPinfo(feature, layer) {
 layer.bindPopup(feature.properties.NIMI)
}
// add geoJSON polygons layer
async function addDistrictsGeoJson(url) {
 const response = await fetch(url)
 const data = await response.json()
 const polygons = L.geoJson(data, {
 onEachFeature: popUPinfo,
 })
 polygons.addTo(map)
}
addDistrictsGeoJson('geojson/tartu_city_districts_edu.geojson')

// default map settings
function defaultMapSettings() {
 map.setView([58.373523, 26.716045], 12)
}

// add geoJSON layer
async function addCelltowersGeoJson(url) {
 const response = await fetch(url)
 const data = await response.json()
 const markers = L.geoJson(data) 
 const clusters = L.markerClusterGroup() 
 clusters.addLayer(markers) 
 clusters.addTo(map) 
}
addCelltowersGeoJson('geojson/tartu_city_celltowers_edu.geojson')