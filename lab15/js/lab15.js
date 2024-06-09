// index.js - AJAX
// Author: Kristibe b
// Date: 6/9/24

const URL = "https://yesno.wtf/api";

$("#activate").click(function(){
    let question = $("#input").val();
    console.log(question);
    $("#the-question").html("<p>Your Question: <span class='bold'>" + question + "</span></p>")

    $.ajax({
        url: URL,
        type: "GET"
    })
    .done(function(data) {
    
        let yN =  data.answer;
        $("#output").html("<p>Your Answer: <span class='bold'>" + yN + "</span></p>" + "<img class='center' src=" + data.image + ">");    
    });
})