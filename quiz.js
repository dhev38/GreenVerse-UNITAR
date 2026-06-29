const quiz=[

{

question:"Adakah anda membawa tumbler ke kampus?",

answers:["Ya","Kadang-kadang","Tidak"],

correct:0

},

{

question:"Adakah anda menutup lampu selepas kelas?",

answers:["Ya","Kadang-kadang","Tidak"],

correct:0

},

{

question:"Di manakah anda membuang botol plastik?",

answers:[

"Tong kitar semula",

"Tong biasa",

"Di mana-mana"

],

correct:0

},

{

question:"Adakah anda menggunakan bekas makanan sendiri?",

answers:["Ya","Kadang-kadang","Tidak"],

correct:0

},

{

question:"Adakah anda menyokong kempen hijau di UNITAR?",

answers:["Ya","Mungkin","Tidak"],

correct:0

}

];

let current=0;

let score=0;

let selected=-1;

loadQuestion();

function loadQuestion(){

let q=quiz[current];

document.getElementById("question").innerHTML=q.question;

let answers="";

q.answers.forEach((a,index)=>{

answers+=`

<div class="answer"

onclick="selectAnswer(${index})">

${a}

</div>

`;

});

document.getElementById("answers").innerHTML=answers;

document.getElementById("progressBar").style.width=

((current)/quiz.length)*100+"%";

selected=-1;

}

function selectAnswer(i){

selected=i;

document.querySelectorAll(".answer")

.forEach(el=>el.classList.remove("selected"));

document.querySelectorAll(".answer")[i]

.classList.add("selected");

}

function nextQuestion(){

if(selected==-1){

alert("Sila pilih jawapan.");

return;

}

if(selected===quiz[current].correct){

score++;

}

current++;

if(current<quiz.length){

loadQuestion();

}

else{

showResult();

}

}

function showResult(){

let text="";

if(score==5){

text="🌍 Eco Hero";

}

else if(score>=3){

text="🌿 Green Supporter";

}

else{

text="🍂 Masih Boleh Diperbaiki";

}

document.querySelector(".quiz-card").innerHTML=`

<h1>${text}</h1>

<h2>

Skor anda:

${score}/${quiz.length}

</h2>

<p>

Terima kasih kerana menyertai
Cabaran Hijau GreenVerse!

</p>

<button

onclick="location.reload()"

class="primary-btn">

Cuba Lagi

</button>

`;

}