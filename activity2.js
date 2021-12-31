score = 0;
function getUser(){
    score = localStorage.getItem("score");
    document.getElementById("getScore").innerHTML = score;
}
function back(){
    window.location = "activity_1.html";
}