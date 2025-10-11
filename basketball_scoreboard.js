let scoreElement = document.getElementById("home-score");
let scoreElement1 = document.getElementById("guest-score");

let home_score = 0
let guest_score = 0

function plusone1() {
    guest_score += 1
    scoreElement1.textContent = guest_score;
}   

function plustwo1(){
    guest_score += 2
    scoreElement1.textContent = guest_score;
}

function plusthree1(){
    guest_score += 3
    scoreElement1.textContent = guest_score
}

function plusone0() {
    home_score += 1
    scoreElement.textContent = home_score;
}
function plustwo0() {
    home_score += 2
    scoreElement.textContent = home_score;
}
function plusthree0() {
    home_score += 3
    scoreElement.textContent = home_score;
}
