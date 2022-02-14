let audioElement = new Audio('songs/1.mp3');
let songInfogif = document.getElementById('songInfogif');
console.log(songInfogif)


let range = document.getElementById('range');
range.value = 0;
let backward = document.getElementById('backward');
backward.addEventListener('click', (e) => {
    range.value = parseInt(range.value) - 10;
    console.log(range.value);
    // e.preventDefault();
})
let forward = document.getElementById('forward');
forward.addEventListener('click', (e) => {
    range.value = parseInt(range.value) + 10;
    console.log(range.value);
    // console.log(typeof(range.value));
    // e.preventDefault();
})
// let stop = document.getElementById('stop');
// stop.addEventListener('click',()=>{
//     range.value=0;
// })
let play = document.getElementById('play');
play.addEventListener('click', () => {
    playStart();
})

function playStart() {
    let myInterval = setInterval(start, 1000);

    function start() {
        if (parseInt(range.value) < 100) {
            range.value = parseInt(range.value) + 1;
            audioElement.play();
            songInfogif.style.opacity='1';
            console.log('strat')

        } else if (parseInt(range.value) >= 100) {
            clearInterval(myInterval);
            console.log('end')
            range.value = 0;
        }
    }
}