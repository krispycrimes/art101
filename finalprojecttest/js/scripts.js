$(document).ready(function() {
    // Hide the loading screen and show the content
    $('#loading-screen').fadeOut('slow', function() {
        $('#madlibs-container').fadeIn('slow');
    });

    $('#madlibs-form').submit(function(event) {
        event.preventDefault();

        var noun = $('#noun').val();
        var verb = $('#verb').val();
        var adjective = $('#adjective').val();

        var story = `Twice upon a time, there was a ${adjective} ${noun} that loved to ${verb}.`;

        $('#result').text(story);
    });
});
