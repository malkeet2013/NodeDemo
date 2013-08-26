
$(document).ready(function () {
    $('#vwMap').click(function () {
        var marker = $('#title').html() + "\n" + $('#description').html(); 
        showMap(marker);
    });
    function showMap(markdata) {
        $('#mpDisplay').gmap().bind('init', function (ev, map) {
            $('#mpDisplay').gmap('addMarker', { 'position': '34.0194543,-118.4911912', 'bounds': true }).click(function () {
                $('#mpDisplay').gmap('openInfoWindow', { 'content': markdata }, this);
            });
        });
    }
});