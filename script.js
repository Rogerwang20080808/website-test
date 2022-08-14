const prev = document.getElementById('prev');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const next = document.getElementById('next');

var index = 0;
var song = new Audio();

var range = document.getElementById('range');

const circle = document.getElementById('circle');
const songName = document.getElementById('songName');

textChange = (index) => {
    circle.innerText = `${index}`;
    songName.innerText = `Song ${index}`;
}

firstMusicPlay = () => {
    index = 1;
    textChange(index);
    song.src = `/IPA/${index}.mp3`
    song.play();
}

musicPlay = ()=> {
    song.play();
    circle.classList.add('rot');
}

musicStop = () => {
    song.pause();
    circle.classList.remove('rot');
}

// Range
song.addEventListener('timeupdate', () => {
    range.value = parseInt((song.currentTime/song.duration)*100);
})

song.addEventListener('change', () => {
    song.currentTime = range.value*song.duration/100;
})

song.addEventListener('ended', () => {
    song.currentTime = 0;
    circle.classList.remove('rot');
})

start.addEventListener('click', () => {
    if(index == 0) {
        firstMusicPlay();
    }else{
        musicPlay();
    }
})

stop.addEventListener('click', () => {
    musicStop();
})

next.addEventListener('click', () => {
    if(index >= 7) {
        index = 1;
    }else{
        index ++;
    }

    textChange(index);
    song.src = `IPA/${index}.mp3`;
    song.currentTime = 0;
    song.play();
})

prev.addEventListener('click', () => {
    if(index <= 1) {
        index = 7;
    }else{
        index --;
    }

    textChange(index);
    song.src = `IPA/${index}.mp3`;
    song.currentTime = 0;
    song.play();
})