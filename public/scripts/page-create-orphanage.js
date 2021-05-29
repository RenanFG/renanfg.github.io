//create map
const map = L.map('mapid').setView([-27.2195391,-49.6485356], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
})

//create and add marker
let marker;

map.on('click',(event) => {

    const lat= event.latlng.lat;
    const lng= event.latlng.lng;
    // colocar valores no input

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    //verifica se marker existe
    marker && map.removeLayer(marker);

    // add icon layer

    marker = L.marker([lat,lng], { icon }).addTo(map);
});

//upload images

function addPhotoField(){
    // catch #images, dup .new-image. clear. add dup to image container
    const container = document.querySelector('#images');
    const fieldsContainer = document.querySelectorAll('.new-upload');
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);
    // verificar se esta vazio
    const input = newFieldContainer.children[0];

    if(input.value == ""){
        return
    }

    input.value ="";
    container.appendChild(newFieldContainer);
}

function deleteField(event){
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll(".new-upload");
    if (fieldsContainer.length <= 1) {
      // clean field value
      span.parentNode.children[0].value = "";
      return;
    }
  
    // delete field
    span.parentNode.remove();
}

//troca sim/nao
function toggleSelect(event) {
    // remove the .active class from the buttons
    document.querySelectorAll('.button-select button')
    .forEach(function (button) {
      button.classList.remove("active")
    })
  
    // put the .active class on the clicked button
    const button = event.currentTarget
    button.classList.add("active")
  
    // update input hidden with the selected value
    const input = document.querySelector('[name="open_on_weekends"]')
  
    // check yes or no
    input.value = button.dataset.value
  }