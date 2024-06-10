$(document).ready(function() {
    // Hide the loading screen and show the content
    $('#loading-screen').hide(); 
        $('#madlibs-container').show();
    });

    // random word library
    function fillEmptyFields() {
        const words = {
            subjectAdjective: ["urgent", "important", "critical", "essential", "World-Ending", "Career-Destroying", "Courtesy", "Polite", "Kind", "Aggressive", "Definitely Not Passive Aggressive"],
            dailyTask: ["the report", "the meeting", "the presentation", "showering", "the project", "breathing", "hygiene", "work", "Workplace Behavior", "Dancing", "Eating"],
            personName: ["Ross", "Rachel", "Monica", "Chandler", "Phoebe", "John", "Jim", "Pam", "Karen", "Trixie", "Katya", "Laurentius", "Walter", "Skyler", "Jesse", "Ash", "Saul", "Carrie", "Larry", "Mike"],
            negativeAdjective1: ["terrible", "awful", "dismal", "soon", "well", "unwell", "hurtfully"],
            dailyTask2: ["the task", "your responsibility", "the assignment", "the quest", "feeding your kids", "paying your bills", "the mandatory compliments"],
            number: ["3", "5", "7", "21", "666", "70", "1781", "0", "42", "500", "526,000", "30"],
            adjective1: ["severe", "serious", "grave"],
            noun1: ["incident", "problem", "issue", "mistake", "disaster", "fumble"],
            noun2: ["delays", "halt", "stop", "blockages", "drama"],
            department: ["HR", "Finance", "Development", "Child Protection Services", "Fire Department"],
            pluralNoun1: ["consequences", "issues", "problems", "disaster", "tragedy", "chaos", "mayhem"],
            adjective2: ["avoidable", "preventable", "unnecessary", "absurd"],
            pastVerb: ["completed", "finished", "done"],
            dailyTask3: ["task", "responsibility", "assignment"],
            noun3: ["effort", "commitment", "dedication"],
            negativeEmotion1: ["frustrated", "annoyed", "angry"],
            verb1: ["sabotage", "undermine", "disrupt"],
            project: ["project", "initiative", "event"],
            adjective3: ["unprofessional", "disruptive", "counterproductive"],
            pluralNoun2: ["meetings", "deadlines", "projects"],
            negativeAdjective2: ["horrendous", "unacceptable", "abysmal", "embarassing"],
            verb2: ["function", "operate", "work"],
            verbIng: ["procrastinating", "delaying", "stalling"],
            noun4: ["chaos", "confusion", "disorder"],
            noun5: ["turmoil", "disturbance", "disruption"],
            verb3: ["behave", "act", "conduct"],
            negativeAdjective3: ["unprofessional", "rude", "disrespectful"],
            negativeAdjective4: ["unacceptable", "unbearable", "intolerable"],
            adjective4: ["negative", "hostile", "toxic"],
            adjective5: ["bad", "negative", "poor"],
            verb4: ["comply", "follow", "adhere"],
            noun6: ["skills", "attitude", "abilities"],
            pluralNoun3: ["colleagues", "team members", "employees", "children"],
            negativeAdjective5: ["disappointing", "unpleasant", "unsatisfactory"],
            noun7: ["behavior", "attitude", "conduct"],
            negativeAdjective6: ["inexcusable", "shameful", "disgraceful"],
            pluralNoun4: ["consequences", "outcomes", "results"],
            negativeEmotion2: ["disappointed", "upset", "angry"],
            negativeEmotion3: ["annoyed", "frustrated", "irritated"],
            adjective6: ["poor", "subpar", "unsatisfactory"],
            verb5: ["improve", "change", "adjust"],
            verb6: ["do", "act", "behave"],
            pluralNoun5: ["measures", "actions", "steps"],
            verb7: ["cooperate", "comply", "collaborate"],
            adjective7: ["positively", "productively", "effectively"],
            adjective8: ["immediate", "prompt", "quick", "speedy", "swift", "thoughtful"],
            yourName: ["Your Name", "Anonymous", "Supreme Decider of Everything Right", "Your Boss", "Your Mom", "Your Archnemesis"]
        };

        for (const key in words) {
            const input = $(`#${key}`);
            if (input.val() === "") {
                const randomIndex = Math.floor(Math.random() * words[key].length);
                input.val(words[key][randomIndex]);
            }
        }
    }

    // fill empty fields
    $('#fill-fields-btn').click(function() {
        fillEmptyFields();
    });

    // Handle form submission
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

        // Construct the story with the filled-in words
        var story = `Subject: ${subjectAdjective} Notice Regarding ${dailyTask}
    Dear ${personName},
    I hope this email finds you ${negativeAdjective1}. I am writing to inform you that your failure to complete ${dailyTask2} ${number} times has resulted in a series of ${adjective1} consequences.
    Firstly, this ${noun1} has caused a significant ${noun2} in the ${department}. As a result, we are now facing ${pluralNoun1} that are ${adjective2} and completely avoidable if only you had ${pastVerb} the ${dailyTask3}.
    Additionally, your lack of ${noun3} has left everyone feeling ${negativeEmotion1}. Its almost as if youre intentionally trying to ${verb1} the entire ${project} with your ${adjective3} behavior. The ${pluralNoun2} have been nothing short of ${negativeAdjective2}, making it impossible for us to ${verb2} effectively.
    Moreover, your constant ${verbIng} has created an environment of ${noun4} and ${noun5}. The way you ${verb3} around the office is not only ${negativeAdjective3} but also ${negativeAdjective4}, contributing to a ${adjective4} atmosphere. Your ${adjective5} attitude and refusal to ${verb4} have made it clear that you lack the ${noun6} needed for this role.
    To make matters worse, your interactions with the ${pluralNoun3} have been ${negativeAdjective5} at best. The ${noun7} you exhibit is nothing short of ${negativeAdjective6}, and it's high time you faced the ${pluralNoun4} of your actions. We are all ${negativeEmotion2} and ${negativeEmotion3} with your ${adjective6} performance.
    Therefore, I am formally requesting that you take immediate steps to ${verb5} your behavior. If you fail to ${verb6}, further ${pluralNoun5} will be necessary. This is your final warning to ${verb7} and start contributing ${adjective7}ly to the team.
    Thank you for your ${adjective8} attention to this matter.
    Without remorse,
    Coldly,
    ${yourName}`;

        // Display the story in the #result div
        $('#result').text(story);
    });
});

 <div id="container">
const port = 3000

const server = http.createServer(function(req, res){
    const express = require('express');
    const nodemailer = require('nodemailer');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    
    const app = express();
    const port = 3000;
    
    // Middleware
    app.use(cors());
    app.use(bodyParser.json());
    
    // API endpoint to send email
    app.post('/send-email', (req, res) => {
        const { fromEmail, toEmail, subject, message } = req.body;
    
        // Nodemailer transporter configuration
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'your-email@gmail.com', // Replace with your email
                pass: 'your-email-password'   // Replace with your email password
            }
        });
    
        const mailOptions = {
            from: fromEmail,
            to: toEmail,
            subject: subject,
            text: message
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).send(error.toString());
            }
            res.status(200).send('Email sent: ' + info.response);
        });
    });
    
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
    
})

server.listen(port, function(error){
    if (error){
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port'+ port)
    }
})
</div>
