const tracker = document.querySelector("#tracker");
const clicker = document.querySelector("#clicker");
const levels = document.querySelector(".levels")
const buttons = levels.querySelectorAll(".btn");
const info = document.querySelector(".info");

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
            info.innerHTML = "5k - 10k perfect for beginning";
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

clicker.addEventListener("click", (e)=>{
    e.preventDefault();
    let walkDistance = Math.floor(Math.random() * 20000) + 1;
    switch(lvl){
        case 1:
            walkDistance = Math.floor(Math.random() * 5000) + 1;
            tracker.innerHTML = walkDistance + 5000;
            break;
        case 2:
            walkDistance = Math.floor(Math.random() * 4000) + 1;
            tracker.innerHTML = walkDistance + 8000;
            break;
        case 3:
            walkDistance = Math.floor(Math.random() * 5000) + 1;
            tracker.innerHTML = walkDistance + 10000;
            break;
        case 4:
            walkDistance = Math.floor(Math.random() * 25000) + 1;
            tracker.innerHTML = walkDistance;
            break;
    }
} )
