const map = L.map('mapid').setView([-23.1864166,-45.8889975], 15);

L.tileLayer
    ('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: "/public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
});

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240, 
    minHeight:240
}).setContent('Lar das meninas <a href="orphanege.html?id1" class="choose-ophanage"> <img src="/public/images/arrow-white.svg"> </a>');

L.marker([-23.1864166,-45.8889975], {icon})
    .addTo(map)
    .bindPopup(popup);
