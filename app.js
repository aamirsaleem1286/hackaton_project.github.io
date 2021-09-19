let popped = 0;
var score=0;
var life=10;
document.addEventListener('mouseover', function(e){
    
// setTimeout(function(){alert("Enter the red color : ")},1000)
    if (e.target.className === "balloon_red") {
        e.target.style.backgroundColor = "#ededed";
        e.target.textContent = "POP!";
        popped++;
        score++;
        console.log(score)
        document.getElementById("score").innerHTML = score;
        removeEvent(e);
        checkAllPopped();
    }
    else {
        if (e.target.className === "balloon") {
            life--;
            document.getElementById("life").innerHTML = life;
            console.log(life)
 } }
 if(life===0){
    alert("you lose the game Play again!");
window.location.href="ballon.html"
     
 }
});
function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){     
    })
};
function checkAllPopped(){
    if (popped === 15){
        alert("You Win the game");
        console.log('all popped!');
        let gallery = document.querySelector('.mainballoon');
        let message = document.querySelector('#balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
        window.location.href="ballon2.html"
    }
};

