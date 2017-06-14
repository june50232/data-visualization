var handleIframeSize = function() {
    var height = $(window).height();
    var width = $(window).width();
    $('#iframe393citizen').css('min-height', height).css('width', width);
};

var handleLightBoxSize = function() {
    var width = $(window).width();
    var height = (width / 2.2);
    $('#lightBoxYoutubePlayer').css('width', width).css('min-height', height);
};

var renderIframe = function() {
    $('#lightBoxYoutubePlayerContainer').append('<iframe id="lightBoxYoutubePlayer" src="https://www.youtube.com/embed/BTkM9CDQjc4" frameborder="0" allowfullscreen></iframe>');
    handleLightBoxSize();
};

var removeIframe = function() {
    $('#lightBoxYoutubePlayer').remove();
};

var renderLightBox = function() {
    $('#lightBox').addClass('active');
    renderIframe();
};

var closeLightBox = function() {
    $('#lightBox').removeClass('active');
    removeIframe();
};

var initialLightBoxEvent = function() {
    $('#lightBoxButton').on('click', renderLightBox);
    $('#closeButton').on('click', closeLightBox);
};

$(document).ready(function() {

    handleIframeSize();
    initialLightBoxEvent();
    handleLightBoxSize();
});