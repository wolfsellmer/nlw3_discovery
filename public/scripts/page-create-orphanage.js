const map = L.map('mapid').setView([-23.1864166,-45.8889975], 15);

L.tileLayer
    ('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
  
});
// L.marker([-23.1864166,-45.8889975], {icon})
//     .addTo(map)


let marker;

map.on('click',(event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)

        //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

// add campo de fotos

function addPhotoField(){
    // get container of photos #images

    const container = document.querySelector('#images')
    const fieldsContaier = document.querySelectorAll('.new-upload')
    const newFieldConatainer = fieldsContaier[fieldsContaier.length - 1].cloneNode(true)
    
    const input = newFieldConatainer.children[0]
    if(input.value == ""){
        return
    }
    input.value = ""
    
    container.appendChild(newFieldConatainer)
}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContaier = document.querySelectorAll('.new-upload')
    if(fieldsContaier.length < 2){
        span.parentNode.children[0].value = ""
        return
    }
    span.parentNode.remove();
}

// select yes or no

function toggleSelect(event){
    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'))

    const button = event.currentTarget
    button.classList.add('active')

    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value


}