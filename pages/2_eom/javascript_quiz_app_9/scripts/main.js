let Otvet = document.querySelector('#check_button_1');
let Povtor = document.querySelector('#check_button_2');
let Dalee = document.querySelector('#check_button_3');

Povtor.classList = ('disabled_button');
Povtor.addEventListener('click' , function(){
    window.location.reload();
});


let numberOfQuestion = 9; 
let numberOfQuestionSum = 9;
let numberOfQuestionPlace = document.querySelector('#number_of_question')
let numberOfQuestionPlaceDescription = document.querySelector('#number_of_question_in_description')

numberOfQuestionPlace.innerHTML = numberOfQuestion + '.';
numberOfQuestionPlaceDescription.innerHTML = numberOfQuestion + '/' + numberOfQuestionSum;

let stepMarkerPlace = document.querySelector('.step_marker');
console.log("stepMarkerPlace")
for (let i = 0; i < numberOfQuestion; i++){
    let markers = document.createElement('img');
    markers.src = "./content/radio_button_blue.svg";
    stepMarkerPlace.appendChild(markers);
}

for (let i = 0; i < numberOfQuestionSum-numberOfQuestion; i++){
    let markers = document.createElement('img');
    markers.src = "./content/radio_button.svg";
    stepMarkerPlace.appendChild(markers);
}

localStorage.setItem('answer_'+numberOfQuestion, JSON.stringify({questionPlace: true}));

function checkAnswer() { 
    const answer = document.getElementById("answer").value;
    const answerClass = document.getElementById("answer");
    if (answer === "PI") {
        answerClass.classList.add('correct');

    } else { 
        answerClass.classList.add('incorrect');
        localStorage.setItem('answer_'+numberOfQuestion, JSON.stringify({questionPlace: false}));
    } 
    const answer2 = document.getElementById("answer2").value; 
    const answerClass2 = document.getElementById("answer2")
    if (answer2 === "PG") {

        answerClass2.classList.add('correct');
    } else { 
        answerClass2.classList.add('incorrect');
        localStorage.setItem('answer_'+numberOfQuestion, JSON.stringify({questionPlace: false}));
    } 
    const answer3 = document.getElementById("answer3").value; 
    const answerClass3 = document.getElementById("answer3")
    if (answer3 === "PG") {

        answerClass3.classList.add('correct');
    } else { 
        answerClass3.classList.add('incorrect');
        localStorage.setItem('answer_'+numberOfQuestion, JSON.stringify({questionPlace: false}));
    } 
    const answer4 = document.getElementById("answer4").value; 
    const answerClass4 = document.getElementById("answer4")
    if (answer4 === "PG") {

        answerClass4.classList.add('correct');
    } else { 
        answerClass4.classList.add('incorrect');
        localStorage.setItem('answer_'+numberOfQuestion, JSON.stringify({questionPlace: false}));
    } 
    const answer5 = document.getElementById("answer5").value; 
    const answerClass5 = document.getElementById("answer5")
    if (answer5 === "PI") {

        answerClass5.classList.add('correct');
    } else { 
        answerClass5.classList.add('incorrect');
        localStorage.setItem('answer_'+numberOfQuestion, JSON.stringify({questionPlace: false}));
    } 
    
    const answer6 = document.getElementById("answer6").value; 
    const answerClass6 = document.getElementById("answer6")
    if (answer6 === "PI") {
        answerClass6.classList.add('correct');

    } else { 
        answerClass6.classList.add('incorrect');
        localStorage.setItem('answer_'+numberOfQuestion, JSON.stringify({questionPlace: false}));
    } 

    const answer7 = document.getElementById("answer7").value; 
    const answerClass7 = document.getElementById("answer7")
    if (answer7 === "PI") {
        answerClass7.classList.add('correct');

    } else { 
        answerClass7.classList.add('incorrect');
        localStorage.setItem('answer_'+numberOfQuestion, JSON.stringify({questionPlace: false}));
    } 

    const answer8 = document.getElementById("answer8").value; 
    const answerClass8 = document.getElementById("answer8")
    if (answer8 === "LA") {

        answerClass8.classList.add('correct');
    } else { 
        answerClass8.classList.add('incorrect');
        localStorage.setItem('answer_'+numberOfQuestion, JSON.stringify({questionPlace: false}));
    } 

    const answer9 = document.getElementById("answer9").value; 
    const answerClass9 = document.getElementById("answer9")
    if (answer9 === "LA") {

        answerClass9.classList.add('correct');
    } else { 
        answerClass9.classList.add('incorrect');
        localStorage.setItem('answer_'+numberOfQuestion, JSON.stringify({questionPlace: false}));
    } 

    const answer10 = document.getElementById("answer10").value; 
    const answerClass10 = document.getElementById("answer10")
    if (answer10 === "LA") {

        answerClass10.classList.add('correct');
    } else { 
        answerClass10.classList.add('incorrect');
        localStorage.setItem('answer_'+numberOfQuestion, JSON.stringify({questionPlace: false}));
    } 

    const answer11 = document.getElementById("answer11").value; 
    const answerClass11 = document.getElementById("answer11")
    if (answer11 === "LIC") {
        localStorage.setItem('answer_'+numberOfQuestion, JSON.stringify({questionPlace: true}));
        answerClass11.classList.add('correct');
    } else { 
        answerClass11.classList.add('incorrect');
        localStorage.setItem('answer_'+numberOfQuestion, JSON.stringify({questionPlace: false}));
    } 

    const answer12 = document.getElementById("answer12").value; 
    const answerClass12 = document.getElementById("answer12")
    if (answer12 === "LIC") {

        answerClass12.classList.add('correct');
    } else { 
        answerClass12.classList.add('incorrect');
        localStorage.setItem('answer_'+numberOfQuestion, JSON.stringify({questionPlace: false}));
    } 

    const answer13 = document.getElementById("answer13").value; 
    const answerClass13 = document.getElementById("answer13")
    if (answer13 === "LIC") {

        answerClass13.classList.add('correct');
    } else { 
        answerClass13.classList.add('incorrect');
        localStorage.setItem('answer_'+numberOfQuestion, JSON.stringify({questionPlace: false}));
    } 

    const answer14 = document.getElementById("answer14").value; 
    const answerClass14 = document.getElementById("answer14")
    if (answer14 === "AIA") {

        answerClass14.classList.add('correct');
    } else { 
        answerClass14.classList.add('incorrect');
        localStorage.setItem('answer_'+numberOfQuestion, JSON.stringify({questionPlace: false}));
    } 

    
    const answer16 = document.getElementById("answer16").value; 
    const answerClass16 = document.getElementById("answer16")
    if (answer16 === "LIC") {

        answerClass16.classList.add('correct');
    } else { 
        answerClass16.classList.add('incorrect');
        localStorage.setItem('answer_'+numberOfQuestion, JSON.stringify({questionPlace: false}));
    } 

    const answer17 = document.getElementById("answer17").value; 
    const answerClass17 = document.getElementById("answer17")
    if (answer17 === "LIC") {

        answerClass17.classList.add('correct');
    } else { 
        answerClass17.classList.add('incorrect');
        localStorage.setItem('answer_'+numberOfQuestion, JSON.stringify({questionPlace: false}));
    } 
    const answer18 = document.getElementById("answer18").value; 
    const answerClass18 = document.getElementById("answer18")
    if (answer18 === "LIC") {

        answerClass18.classList.add('correct');
    } else { 
        answerClass18.classList.add('incorrect');
        localStorage.setItem('answer_'+numberOfQuestion, JSON.stringify({questionPlace: false}));
    } 



    Otvet.classList.add('disabled_button');
    Povtor.classList.remove('disabled_button');
    Dalee.classList.remove('disabled_button');
}

let popUpWindow = document.querySelector('#popup1')

function showPopUp(){
    popUpWindow.classList.remove('close')
}

function closePopUp(){
    popUpWindow.classList.add('close')
}

let popUpWindow2 = document.querySelector('#popup2')

function showPopUp2(){
    popUpWindow2.classList.remove('close')
}

function closePopUp2(){
    popUpWindow2.classList.add('close')
}

