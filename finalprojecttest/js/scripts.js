$(document).ready(function() {
    // Hide the loading screen and show the content
    $('#loading-screen').fadeOut(3000, function() { // Slowing down the fade out to 3 seconds
        $('#madlibs-container').fadeIn('slow');
    });
    $('#madlibs-form').submit(function(event) {
        event.preventDefault();

        var subjectAdjective = $('#subjectAdjective').val();
        var dailyTask = $('#dailyTask').val();
        var personName = $('#personName').val();
        var negativeAdjective1 = $('#negativeAdjective1').val();
        var dailyTask2 = $('#dailyTask2').val();
        var number = $('#number').val();
        var adjective1 = $('#adjective1').val();
        var noun1 = $('#noun1').val();
        var noun2 = $('#noun2').val();
        var department = $('#department').val();
        var pluralNoun1 = $('#pluralNoun1').val();
        var adjective2 = $('#adjective2').val();
        var pastVerb = $('#pastVerb').val();
        var dailyTask3 = $('#dailyTask3').val();
        var noun3 = $('#noun3').val();
        var negativeEmotion1 = $('#negativeEmotion1').val();
        var verb1 = $('#verb1').val();
        var project = $('#project').val();
        var adjective3 = $('#adjective3').val();
        var pluralNoun2 = $('#pluralNoun2').val();
        var negativeAdjective2 = $('#negativeAdjective2').val();
        var verb2 = $('#verb2').val();
        var verbIng = $('#verbIng').val();
        var noun4 = $('#noun4').val();
        var noun5 = $('#noun5').val();
        var verb3 = $('#verb3').val();
        var negativeAdjective3 = $('#negativeAdjective3').val();
        var negativeAdjective4 = $('#negativeAdjective4').val();
        var adjective4 = $('#adjective4').val();
        var adjective5 = $('#adjective5').val();
        var verb4 = $('#verb4').val();
        var noun6 = $('#noun6').val();
        var pluralNoun3 = $('#pluralNoun3').val();
        var negativeAdjective5 = $('#negativeAdjective5').val();
        var noun7 = $('#noun7').val();
        var negativeAdjective6 = $('#negativeAdjective6').val();
        var pluralNoun4 = $('#pluralNoun4').val();
        var negativeEmotion2 = $('#negativeEmotion2').val();
        var negativeEmotion3 = $('#negativeEmotion3').val();
        var adjective6 = $('#adjective6').val();
        var verb5 = $('#verb5').val();
        var verb6 = $('#verb6').val();
        var pluralNoun5 = $('#pluralNoun5').val();
        var verb7 = $('#verb7').val();
        var adjective7 = $('#adjective7').val();
        var adjective8 = $('#adjective8').val();
        var yourName = $('#yourName').val();

        var story = `Subject: ${subjectAdjective} Notice Regarding ${dailyTask}
Dear ${personName},
I hope this email finds you ${negativeAdjective1}. I am writing to inform you that your failure to complete ${dailyTask2} ${number} times has resulted in a series of ${adjective1} consequences.
Firstly, this ${noun1} has caused a significant ${noun2} in the ${department}. As a result, we are now facing ${pluralNoun1} that are ${adjective2} and completely avoidable if only you had ${pastVerb} the ${dailyTask3}.
Additionally, your lack of ${noun3} has left everyone feeling ${negativeEmotion1}. It’s almost as if you’re intentionally trying to ${verb1} the entire ${project} with your ${adjective3} behavior. The ${pluralNoun2} have been nothing short of ${negativeAdjective2}, making it impossible for us to ${verb2} effectively.
Moreover, your constant ${verbIng} has created an environment of ${noun4} and ${noun5}. The way you ${verb3} around the office is not only ${negativeAdjective3} but also ${negativeAdjective4}, contributing to a ${adjective4} atmosphere. Your ${adjective5} attitude and refusal to ${verb4} have made it clear that you lack the ${noun6} needed for this role.
To make matters worse, your interactions with the ${pluralNoun3} have been ${negativeAdjective5} at best. The ${noun7} you exhibit is nothing short of ${negativeAdjective6}, and it's high time you faced the ${pluralNoun4} of your actions. We are all ${negativeEmotion2} and ${negativeEmotion3} with your ${adjective6} performance.
Therefore, I am formally requesting that you take immediate steps to ${verb5} your behavior. If you fail to ${verb6}, further ${pluralNoun5} will be necessary. This is your final warning to ${verb7} and start contributing ${adjective7}ly to the team.
Thank you for your ${adjective8} attention to this matter.
Without remorse,
Coldly,
${yourName}`;

        $('#result').text(story);
    });
});
