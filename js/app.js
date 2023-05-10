let map = L.map('map').setView([58.373523, 26.716045], 12)
const osm =
L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
 maxZoom: 19,
 attribution: 'OpenStreetMap contributors',
});
osm.addTo(map)

//https://sasageospatial.github.io/3_practice/geojson/tartu_city_celltowers_edu.geojson
// add geoJSON polygons layer*


async function addDistrictsGeoJson(url) {
 const response = await fetch(url)
 const data = await response.json()
 const polygons = L.geoJson(data)
 polygons.addTo(map)
}
addDistrictsGeoJson('geojson/tartu_city_districts_edu.geojson')