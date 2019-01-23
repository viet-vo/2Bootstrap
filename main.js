function arithmetic(a, b, operator) {
    switch (operator) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            return a / b;
    }
}

$(document).ready(function () {
    $('#email').click(function () {
        $(this).focus();
        $(this).select();
        document.execCommand('copy');
        $("#copyTarget").html("Copied to clipboard").show().fadeOut(1200);
    });
    $('#button-land').click(function () {
        $("landing").slideUp(1000)
    })
});
var map;

function initMap() {
    var myLatLng = {
        lat: 33.687,
        lng: -117.872
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 33.687,
            lng: -117.872
        },
        zoom: 12,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "I'm in this area. Reach out and let's get some coffee!"
    });
}