$(document).ready(function() {
    $('#madlibs-form').submit(function(event) {
        event.preventDefault();
        
        var noun = $('#noun').val();
        var verb = $('#verb').val();
        var adjective = $('#adjective').val();
        
        var story = `Once upon a time, there was a ${adjective} ${noun} that loved to ${verb}.`;
        
        $('#result').text(story);
    });
});
