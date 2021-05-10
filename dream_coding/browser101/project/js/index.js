const gameField = document.querySelector('.game__field');
const CARROT_SIZE = 80;
let minWidth = 0;
let minHeight = 0;
const gameFieldWidth = gameField.getBoundingClientRect().width - CARROT_SIZE;
const gameFieldHeight = gameField.getBoundingClientRect().height - CARROT_SIZE;

function assignPosition(carrot, bug) {
    //당근,벌레 랜덤한 포지션에 위치시키기.
    // const randomWidth = Math.floor(Math.random() * (gameFieldWidth - minWidth + 1) + minWidth);
    // const randomHeight = Math.floor(Math.random() * (gameFieldHeight - minHeight + 1) + minHeight);
    // carrot.style.top = `${Math.floor(Math.random() * gameFieldHeight) + 1}px`;
    // carrot.style.left = `${Math.floor(Math.random() * gameFieldWidth) + 1}px`;
    // bug.style.top = `${Math.floor(Math.random() * gameFieldHeight) + 1}px`;
    // bug.style.left = `${Math.floor(Math.random() * gameFieldWidth) + 1}px`;
    carrot.style.transform =
        `translate(${Math.floor(Math.random() * gameFieldWidth) + 1}px,${Math.floor(Math.random() * gameFieldHeight) + 1}px)`;
    bug.style.transform =
        `translate(${Math.floor(Math.random() * gameFieldWidth) + 1}px,${Math.floor(Math.random() * gameFieldHeight) + 1}px)`;
    gameField.appendChild(carrot);
    gameField.appendChild(bug);
}
function createCharacter() {
    //캐릭 개수
    const randomNumber = Math.floor(Math.random() * 20) + 1 //0 ~20;
    console.log(`캐릭 개수 :` + randomNumber);
    for (let i = 0; i < randomNumber; i++) {
        const carrot = document.createElement('img');
        const bug = document.createElement('img');
        carrot.setAttribute('src', './carrot/image/carrot.png');
        carrot.setAttribute('alt', 'carrot');
        bug.setAttribute('src', './carrot/image/bug.png')
        bug.setAttribute('alt', 'bug');
        carrot.style.position = 'absolute';
        bug.style.position = 'absolute';
        assignPosition(carrot, bug);
    }
}
function init() {
    createCharacter();
}
init();
