let timer = 60;
let score = 0;
let hitVal = 0;

function makeBubble() {
    let clutter = "";
    for (let i = 1; i <= 100; i++) {
        let a = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${a}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    let timeint = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over!</h1>`
        }
    }, 1000);
}

function gethitValue() {
    hitVal = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitVal;
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", (dets) => {
    let getVal = Number(dets.target.textContent);
    if (getVal === hitVal) {
        increaseScore();
        gethitValue();
        makeBubble();
    }
})

makeBubble();
runTimer();
gethitValue();
