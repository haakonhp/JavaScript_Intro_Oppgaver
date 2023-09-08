/*import './styles.css';*/
// får bare feil melding når jeg bruker import

// TODO: Sett startverdien for de ulike tellerene
let wordCounter = 0;
let positionCounter = 0;
let wrongCounter = 0;

// TODO: Lag en liste med ulike ord
const words = ['bil', 'kopp', 'pc', 'lise', 'johnny'];

// TODO: Hent ut HTML #id og knappen
const wordElement = document.getElementById('word');
const wrongs = document.getElementById('wrongs');
const letter = document.getElementById('letter');
const button = document.querySelector('button');
const setWord = () => {

    // TODO: Skriv ut ordet som brukeren skal skrive eller en medling om at det ikke er flere ord igjen
    if (wordCounter < words.length) {
        wordElement.innerHTML = words[wordCounter];
    } else {
        wordElement.innerHTML = 'No more words left!';
        button.disabled = false;
    }
};

const changeWord = () => {
    // TODO: Nullstill posisjonstelleren
    // TODO: Oppdater telleren vi bruker for å velge ut ord
    positionCounter = 0;
    wordCounter++;
    setWord();
};

// TODO: Sjekk vi har skrevet riktig bokstav. Må ta hensyn til plassen i ordet vi skal skrive
const checkPosition = (word, position, letter) => {
    return word[position] === letter;
};

// TODO: Sjekk om posisjonen vi er på er lik lengden på ordet vi skal skrive. Det betyr at vi er ferdig med ordet og kan bytte ord
const wordIsCorrect = (word, position) => {
    return position === word.length - 1;
};

const handleKeyUp = ({ key }) => {
    // TODO: Hent ut ordet vi skal skrive
    const currentWord = words[wordCounter];
    if (checkPosition(currentWord, positionCounter, key)) {
        // TODO: Øk posisjonstelleren
        positionCounter++;
        if (wordIsCorrect(currentWord, positionCounter)) {
            // TODO: Trigg funksjonen som bytter ord
            changeWord();
        }
    } else {
        // TODO: Oppdater telleren for "feil"
        wrongCounter++;
    }
    updateUI(key);
};

const updateUI = (key) => {
if (words[wordCounter]) {
        wrongs.innerHTML = wrongCounter;
        letter.innerHTML = key;
        word.innerHTML = `<span class="green">${words[wordCounter].slice(
            0,
            positionCounter
        )}</span>${words[wordCounter].slice(positionCounter)}`;
    }
};

window.addEventListener('keyup', handleKeyUp);
button.addEventListener('click', () => {
    button.disabled = true;
    setWord();
});
