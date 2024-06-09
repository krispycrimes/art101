// lab10.js - This simple JavaScript/jQuery script appends new elements to an output div
// Requirements: jQuery must be loaded for this script to work.
// Author: Kristine Gail Buriel
// Date: 06/08/2024

function generateRandomText() {
  const text = "LoReM IpSuM DoLoR SiT AmEt, CoNsEcTeTuR AdIpIsCiNg eLiT. sEd dO EiUsMoD TeMpOr iNcIdIdUnT Ut lAbOrE Et dOlOrE MaGnA AlIqUa. Ut eNiM Ad mInIm vEnIaM, qUiS NoStRuD ExErCiTaTiOn uLlAmCo lAbOrIs nIsI Ut aLiQuIp eX Ea cOmMoDo cOnSeQuAt.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  return text.slice(randStart, randStart + randLen);
}

// click listener for button
$("#make-convo").click(function(){
  const newText = generateRandomText();
  $("#output").append(`
      <div class="text">
      < img id="shade" src="https://github.com/krispycrimes/art101/blob/1db4dd5744d62493265ad4dfe2158e373dd61787/lab10/img/boo.png"> 
          <p>${newText}</p>
      </div>
  `);
});
