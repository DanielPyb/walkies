const tracker = document.querySelector("#tracker");
const clicker = document.querySelector("#clicker");
const levels = document.querySelector(".levels")
const buttons = levels.querySelectorAll(".btn");
const info = document.querySelector(".info");
const formerWalks = document.querySelector("#former-walks")
const body = document.querySelector("body");

let today = new Date();
let date =  today.getDate() + "-"  + (today.getMonth()+1) + "-" + today.getFullYear();

const Walkers = {
    listFormerWalks: [],
    dateList: []
}

const quote = document.querySelector(".quote");

let targetValue = "lvl-1";
let lvl = 1;

buttons.forEach(btns => btns.addEventListener("click", (e)=>{
    e.preventDefault();
    targetValue = e.target.id;
    info.innerHTML = "";
    buttons.forEach(button =>
        button.classList.remove("active"));
    switch (targetValue){
        default:
            info.innerHTML = "5k - 10k perfect for beginners";
            e.target.classList.add("active");
            return lvl = 1;
            break;
        case "lvl-2":
            info.innerHTML = "8k - 12k getting a bit more serious";
            e.target.classList.add("active");
            return lvl = 2;
            break;
        case "lvl-3":
            info.innerHTML = "10k - 15k trying harder"
            e.target.classList.add("active");
            return lvl = 3;
            break;
        case "lvl-4":
            info.innerHTML = "this could be anything";
            e.target.classList.add("active");
            return lvl = 4;
            break;
    }  
}));

function newQuote(){
    quote.innerHTML = "";
    let quoted = Math.floor(Math.random() * quotes.length)
    quote.innerHTML = quotes[quoted];
}

function newWalk(){
    let retrievedWalks = localStorage.getItem("Walkers");
    let parsedWalks = JSON.parse(retrievedWalks);
    Walkers.listFormerWalks = parsedWalks.listFormerWalks;
    Walkers.dateList = parsedWalks.dateList;
    formerWalks.innerHTML = "";
    for(let i = 0; i < parsedWalks.listFormerWalks.length; i++){
        formerWalks.innerHTML += `
        <li>${parsedWalks.dateList[i]}, ${parsedWalks.listFormerWalks[i]}</li>
        `
}
};


clicker.addEventListener("click", (e)=>{
    e.preventDefault();
    if(!Walkers.dateList.includes(date)){
    let walkDistance = Math.floor(Math.random() * 20000) + 1;
    switch(lvl){
        case 1:
            walkDistance = Math.floor(Math.random() * 5000) + 5001;
            tracker.innerHTML = walkDistance;
            Walkers.listFormerWalks.unshift(walkDistance);
            break;
        case 2:
            walkDistance = Math.floor(Math.random() * 4000) + 8001;
            tracker.innerHTML = walkDistance;
            Walkers.listFormerWalks.unshift(walkDistance);
            break;
        case 3:
            walkDistance = Math.floor(Math.random() * 5000) + 10001;
            tracker.innerHTML = walkDistance;
            Walkers.listFormerWalks.unshift(walkDistance);
            break;
        case 4:
            walkDistance = Math.floor(Math.random() * 25000) + 1;
            tracker.innerHTML = walkDistance;
            Walkers.listFormerWalks.unshift(walkDistance);
            break;
    }
    Walkers.dateList.unshift(date);
    localStorage.setItem("Walkers", JSON.stringify(Walkers));
    newQuote();
    newWalk();
} else{
    alert("you've already got your number today")
}
} )


/* This is for testing with more dates 
clicker.addEventListener("click", (e)=>{
    e.preventDefault();
    let today = new Date();
    let date =  today.getDate() + "-"  + (today.getMonth()+1) + "-" + today.getFullYear();
    let walkDistance = Math.floor(Math.random() * 20000) + 1;
    switch(lvl){
        case 1:
            walkDistance = Math.floor(Math.random() * 5000) + 5001;
            tracker.innerHTML = walkDistance;
            Walkers.listFormerWalks.push(walkDistance);
            break;
        case 2:
            walkDistance = Math.floor(Math.random() * 4000) + 8001;
            tracker.innerHTML = walkDistance;
            Walkers.listFormerWalks.push(walkDistance);
            break;
        case 3:
            walkDistance = Math.floor(Math.random() * 5000) + 10001;
            tracker.innerHTML = walkDistance;
            Walkers.listFormerWalks.push(walkDistance);
            break;
        case 4:
            walkDistance = Math.floor(Math.random() * 25000) + 1;
            tracker.innerHTML = walkDistance;
            Walkers.listFormerWalks.push(walkDistance);
            break;
    }
    Walkers.dateList.push(date);
    localStorage.setItem("Walkers", JSON.stringify(Walkers));
    newQuote();
    newWalk();
} )
*/

function backgroundChange(){
    if(today.getHours() >= 20) {
        body.style.backgroundImage = "URL(Walkies_3.png)";
    } else{
        body.style.backgroundImage = "URL(Walkies_2.png)";
    }
}

backgroundChange();
newWalk();
