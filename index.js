window.addEventListener('load', init)

let levels = {
    easy : 5,
    medium : 3,
    hard : 2
};

let currentLevel =  levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

let wordInput = document.querySelector('.word-input');
let currentWord = document.querySelector('.current-word');
let timeDisplay = document.querySelector('.time');
let scoreDisplay = document.querySelector('.score');
let message = document.querySelector('.message');
let seconds = document.querySelector('.seconds');
let error = document.querySelector('.overlay')


let words = [
    'Doctor',
    'Programming',
    'Nurse',
    'Echo',
    'Print',
    'School',
    'Government',
    'law',
    'Dream',
    'Read',
    'Budweiser',
    'Fearless',
    'Carly',
    'Daniella',
    'Django',
    'Exclamation',
    'Jerusalem',
    'Photosynthesis',
    'Kilimanjaro',
    'Microsoft Edge',
    'Instructions',
    'Establishment',
    'Developer',
    'Generate',
    'Siblings',
    'Stubborn',
    'Revolver',
    'Nutrition'
];

function init(params) {
    seconds.innerHTML = currentLevel;
    showWord(words);
    wordInput.addEventListener('input',  startMatch)
    setInterval(countdown, 1000)
    setInterval(checkStatus, 50)
}

function startMatch(params) {
    if(matchWords()){
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    if(score === -1){
        scoreDisplay.innerHTML = 0;

    }else{
        scoreDisplay.innerHTML = score;
    }

}

function matchWords(params) {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'correct !!!';
        error.classList.remove('active')
        return true;
    }else{
        message.innerHTML = '';
        return false;
    }
}


function showWord(words) {
    let randIndex = Math.floor(Math.random() * words.length )

    currentWord.innerHTML = words[randIndex]
}

function countdown(params) {
    if(time > 0){
        time--;
    }else if(time ===0){
        isPlaying = false;
    }

    timeDisplay.innerHTML = time
}

function checkStatus(params) {
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game over !!!';
        score = -1;
        error.classList.add('active')
    }
}