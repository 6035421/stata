let recentScores = [], i;

let temp = document.getElementById('highScoreItem');
let holder = document.getElementById('highscoreList');

if(window.sessionStorage.getItem('recentScores') !== null ) {
    recentScores = window.sessionStorage.getItem('recentScores').split(',');
}

for(i of recentScores) {
    let clone = temp.content.cloneNode(true);

    let children = clone.querySelector('.pixel-corners').children;

    children[0].innerHTML = i;
    children[1].addEventListener('click', function () {
        let shareData = {
            title: "Wow look at my highscore I got in S.T.A.T.A!",
            text: this.previousElementSibling.innerHTML,
          };

        navigator.share(shareData);
    });

    holder.appendChild(clone);
}