// Set view of Leaflet map based on screen size
var layer = new L.StamenTileLayer('toner-background');
if ($(window).width() < 626) {
	var map = new L.Map('map').setView([52.5,13.4],6);
} else {
	var map = new L.Map('map').setView([52,13],7);
}
map.addLayer(layer);
