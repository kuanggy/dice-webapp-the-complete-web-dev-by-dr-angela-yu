var dice = document.getElementById('dice');
var title = document.getElementById('title');

dice.onclick = function() {
    var randomNumber1 = Math.floor(Math.random() * 6);
    var randomNumber2 = Math.floor(Math.random() * 6);
    if ((randomNumber1 === 0) || (randomNumber2 === 0)){
        var randomNumber1 = Math.floor(Math.random() * 6);
        var randomNumber2 = Math.floor(Math.random() * 6);
    } else {
        document.getElementsByTagName('img')[0].setAttribute('src', "images/dice" + randomNumber1 + ".png");
        document.getElementsByTagName('img')[1].setAttribute('src', "images/dice" + randomNumber2 + ".png");

        if (randomNumber1 > randomNumber2) {
            title.innerHTML = "🚩 Player 1 Wins!";
        } else if (randomNumber1 < randomNumber2) {
            title.innerHTML = "Player 2 Wins! 🚩";
        } else {
            title.innerHTML = "Draw!";
        }
    }
    
}
    