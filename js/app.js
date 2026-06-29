// ==============================
// GREENVERSE UNITAR
// app.js
// ==============================

// ==============================
// ECO CALCULATOR
// ==============================

function calculatePlastic() {

    let cups = document.getElementById("cups").value;

    if (cups === "" || cups < 0) {

        document.getElementById("result").innerHTML =
            "Sila masukkan bilangan cawan.";

        return;

    }

    let yearly = cups * 365;

    document.getElementById("result").innerHTML =

        "🌱 Anda menggunakan kira-kira <b>" +
        yearly +
        "</b> cawan plastik setahun.";

}

// ==============================
// GREEN PLEDGE
// ==============================

function addPledge(){

const text=document.getElementById("pledgeText").value.trim();

if(text===""){

alert("Sila masukkan komitmen anda.");

return;

}

const note=document.createElement("div");

note.className="note";

note.innerHTML="💚 "+text;

document.getElementById("pledgeWall")

.prepend(note);

document.getElementById("pledgeText").value="";

}

// ==============================
// NAVBAR SCROLL EFFECT
// ==============================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(255,255,255,0.95)";

        navbar.style.boxShadow =

            "0 10px 30px rgba(0,0,0,.08)";

    }

    else {

        navbar.style.background =

            "rgba(255,255,255,.72)";

        navbar.style.boxShadow =

            "none";

    }

});

// ==============================
// SCROLL ANIMATION
// ==============================

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.2

}

);

const hiddenElements=document.querySelectorAll(

".about-card,.issue-card,.tip-card,.stat-card"

);

hiddenElements.forEach(el=>observer.observe(el));

// ==============================
// COUNTER ANIMATION
// ==============================

const counters=document.querySelectorAll(".counter");

const speed=100;

counters.forEach(counter=>{

const animate=()=>{

const value=+counter.innerText.replace("%","");

const data=+counter.getAttribute("data-target") || value;

const time=Math.ceil(data/speed);

if(value<data){

counter.innerText=value+time;

setTimeout(animate,15);

}

else{

counter.innerText=data;

}

}

});

// ==============================
// BUTTON RIPPLE EFFECT
// ==============================

const buttons=document.querySelectorAll(

".primary-btn,.btn-nav,button"

);

buttons.forEach(btn=>{

btn.addEventListener("click",function(e){

let x=e.clientX-e.target.offsetLeft;

let y=e.clientY-e.target.offsetTop;

let ripple=document.createElement("span");

ripple.style.left=x+"px";

ripple.style.top=y+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

// ==============================
// BACK TO TOP BUTTON
// ==============================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ==============================
// HERO TYPING EFFECT
// ==============================

const hero=document.querySelector(".hero h1");

const originalText=hero.innerHTML;

hero.innerHTML="";

let i=0;

function typing(){

if(i<originalText.length){

hero.innerHTML+=originalText.charAt(i);

i++;

setTimeout(typing,40);

}

}

typing();