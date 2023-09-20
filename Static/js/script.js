let latitudine = 41.11195395868712
let longitudine = 16.86029378729626

navigator.geolocation.getCurrentPosition(
    function (event) {
        console.log("l'utente ha accettato")
        console.log(event)
        latitudine = event.coords.latitude
        longitudine = event.coords.longitude
        createMap()
    },

    function (event) {
    }
)

function createMap() {
    let map = L.map('map').setView([latitudine, longitudine], 10);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    let marker = L.marker([latitudine, longitudine]).addTo(map);

    map.on("click", function(event){
        console.log(event)
        
        marker.remove()
        marker = L.marker([event.latlng.lat, event.latlng.lng]).addTo(map)

    })
}