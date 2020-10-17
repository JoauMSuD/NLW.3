//create map
const map = L.map('mapid').setView([-22.805989822680967,-45.19969125901768], 14.5);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [48, 58],
    iconAnchor:[29, 68],
    popupAnchor:[170, 2]
});

//create popup

const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 100,
    minHeight: 240
}).setContent('Casa Puríssimo Coração de Maria <a href="orphanages.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

//create and add marker

L.marker([-22.805989822680967,-45.19969125901768], {icon})
.addTo(map)
.bindPopup(popup)
   