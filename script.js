var handleIframeSize = function() {
    var height = $(window).height();
    var width = $(window).width();
    $('#iframe393citizen').css('min-height', height).css('width', width);
};

var toggleLightBoxActive = function() {
    $('#chartLightBoxShadow').toggleClass('active');
    $('#chartLightBox').toggleClass('active');
};

var initialLightBoxEvent = function() {
    $('#chartLightBoxButton').on('click', toggleLightBoxActive);
    $('#closeButton').on('click', toggleLightBoxActive);
};

$(document).ready(function() {

    handleIframeSize();
    initialLightBoxEvent();

});