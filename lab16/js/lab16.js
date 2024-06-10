// lab16.js - AJAX
// Author: Kristine b
// Date: 6/9/24

const URL = "https://xkcd.com/info.0.json";

$(document).ready(function() {
    $.ajax({
        url: URL,
        type: "GET",
        dataType: "json",
        success: function(comicObj) {
            console.log(comicObj);
            $("#output").html(`
                <h2>${comicObj.title}</h2>
                <img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}">
                <p>${comicObj.alt}</p>
            `);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }
    });
});