function iMap() {
  const selector = document.getElementById("map");
  const center = { lat:  48.25463614441969, lng:2.480690883316028  };
  const options = {
    center: center,
    zoom: 8
  };
  const map = new google.maps.Map(selector, options);
  return map;
}
map.data.loadGeoJson('geo-alimconfiance_idf_oise.json');

fetch('geo-alimconfiance_idf_oise.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
    
    function eqfeed_callback(response) {
      map.data.addGeoJson(response);
    }
/*
var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);





// Replace ./data.json with your JSON feed
fetch('./geo-alimconfiance_idf_oise.json').then(response => {
  return response.json();
}).then(data => {
  // Work with JSON data here
  console.log(data);
}).catch(err => {
  // Do something for an error here
});
*/