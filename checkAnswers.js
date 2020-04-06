let modalButton = document.getElementById('myButton');

var correctAnswers;

let modal = document.getElementById('myModal');

let closeModal = document.getElementsByClassName('close')[0];



//when they click the 'submit test' button it will calculate how many correct answers the user has achieved in the test

modalButton.addEventListener("click", (e) => {
    
  
  //correct Answers is always reset every time the click the 'submit test' button
        correctAnswers = 0;



    //selecting each radio button that has been checked off by the user. also selecting each label element for each answer so i can style them later
        var q1 = document.querySelector('input[name="q1"]:checked');
        var q1a = document.getElementById('q1a');
        var q1b = document.getElementById('q1b');

        var q2 = document.querySelector('input[name="q2"]:checked');
        var q2a = document.getElementById('q2a');
        var q2b = document.getElementById('q2b');

        var q3 = document.querySelector('input[name="q3"]:checked');
        var q3a = document.getElementById('q3a');
        var q3b = document.getElementById('q3b');

        var q4 = document.querySelector('input[name="q4"]:checked');
        var q4a = document.getElementById('q4a');
        var q4b = document.getElementById('q4b');

        var q5 = document.querySelector('input[name="q5"]:checked');
        var q5a = document.getElementById('q5a');
        var q5b = document.getElementById('q5b');

        var q6 = document.querySelector('input[name="q6"]:checked');
        var q6a = document.getElementById('q6a');
        var q6b = document.getElementById('q6b');






    /*if the user selects an input element with the value of 'a' then 1 will be added to correct answers and they will have a green border. 
    if they select an input element with the value of 'b' it will be styled with a red border and nothing will be added to correct answers
    */
        if (q1 && q1.value == "a") {correctAnswers ++; q1a.className = 'right';}

        if (q1 && q1.value == "b") {q1b.className = 'wrong'}


        if (q2 && q2.value == "a") {correctAnswers ++; q2a.className = 'right'}

        if (q2 && q2.value == "b") {q2b.className = 'wrong'}


        if (q3 && q3.value == "a") {correctAnswers ++; q3a.className = 'right';}

        if (q3 && q3.value == "b") {q3b.className = 'wrong'}


        if (q4 && q4.value == "a") {correctAnswers ++; q4a.className = 'right';}

        if (q4 && q4.value == "b") {q4b.className = 'wrong'}


        if (q5 && q5.value == "a") {correctAnswers ++; q5a.className = 'right';}

        if (q5 && q5.value == "b") {q5b.className = 'wrong'}


        if (q6 && q6.value == "a") {correctAnswers ++; q6a.className = 'right';}

        if (q6 && q6.value == "b") {q6b.className = 'wrong'}

    //selects the paragraph element in the modal
    var message = document.getElementById('message');

    //takes the selected element and prints out the number of correct answers on the screen
    message.textContent = `You got ${correctAnswers} question(s) out of 6 correct.`;




    





//The defult css causes the model to be hidden. if they click the button the modul will display on the screen. 
if (e.target.tagName == 'BUTTON') {modal.style.display = 'block';}





});




//closes modal when they click on the span element. also it will erase the classnames from the label elements allowing the user to retake the take without knowing the correnct answers
closeModal.onclick = function() {
  modal.style.display = "none";
  
  var q1a = document.getElementById('q1a').className= "none";
  var q1b = document.getElementById('q1b').className= "none";

  var q2a = document.getElementById('q2a').className= "none";
  var q2b = document.getElementById('q2b').className= "none";

  var q3a = document.getElementById('q3a').className= "none";
  var q3b = document.getElementById('q3b').className= "none";

  var q4a = document.getElementById('q4a').className= "none";
  var q4b = document.getElementById('q4b').className= "none";

  var q5a = document.getElementById('q5a').className= "none";
  var q5b = document.getElementById('q5b').className= "none";

  var q6a = document.getElementById('q6a').className= "none";
  var q6b = document.getElementById('q6b').className= "none";
}




//lets me know if the javascript is linked correctly
alert('Javascript is linked correctly');

/*objectives for next time.

*/
