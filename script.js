const tracker = document.querySelector("#tracker");
const clicker = document.querySelector("#clicker");

clicker.addEventListener("click", ()=>{
    let walkDistance = Math.floor(Math.random() * 20000) + 1;
    if(walkDistance <= 10000){
        tracker.innerHTML = walkDistance + 10000
    } else {
        tracker.innerHTML = walkDistance;
    }
} )