const zoekVrienden = document.getElementById('zoekVrienden');
const mijnVrienden = document.getElementById('mijnVrienden');
const onlineLijst = document.getElementById('onlineLijst');
const vriendenLijst = document.getElementById('vriendenLijst');
const zoeken = document.getElementById('zoeken');

zoekVrienden.addEventListener('click', function (e) {
    mijnVrienden.classList.remove('selected');
    zoekVrienden.classList.add('selected');

    vriendenLijst.style.display = 'none';
    onlineLijst.style.display = 'block';
});

mijnVrienden.addEventListener('click', function (e) {
    mijnVrienden.classList.add('selected');
    zoekVrienden.classList.remove('selected');

    vriendenLijst.style.display = 'block';
    onlineLijst.style.display = 'none';
});

zoeken.addEventListener('input', function (e) {
    let items = document.getElementsByClassName('w100'); //w100 is the class given to the items on the friends list
    let i;

    for(i of items) {
        if(this.value == '') {
            i.style.display = 'flex';
        } else {

            if(String(i.children[0].children[1].children[0].innerHTML).includes(this.value)) {
                i.style.display = 'flex';
            } else {
                i.style.display = 'none';
            }
        }
    }
});