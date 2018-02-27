function initMap() {

    var uluru = {lat: 39.331966, lng: 23.136632};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom:11,
        center: uluru
    });

    var marker = new google.maps.Marker ({
        position:uluru,
        map:map
    });
    
}