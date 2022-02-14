let songs = [{
        id: 1,
        songname: 'NCS Songs--1',
        songpath: 'songs/1.mp3',
        coverpath: 'covers/1.jpg',
        tduration: '3:83'
    },
    {
        id: 2,
        songname: 'NCS Songs--2',
        songpath: 'songs/2.mp3',
        coverpath: 'covers/2.jpg',
        tduration: '2:55'
    },
    {
        id: 3,
        songname: 'NCS Songs--3',
        songpath: 'songs/3.mp3',
        coverpath: 'covers/3.jpg',
        tduration: '4:55'
    },
    {
        id: 4,
        songname: 'NCS Songs--4',
        songpath: 'songs/4.mp3',
        coverpath: 'covers/5.jpg',
        tduration: '4:45'
    },
    {
        id: 5,
        songname: 'NCS Songs--5',
        songpath: 'songs/5.mp3',
        coverpath: 'covers/5.jpg',
        tduration: '3:47'
    },
    {
        id: 6,
        songname: 'NCS Songs--6',
        songpath: 'songs/6.mp3',
        coverpath: 'covers/6.jpg',
        tduration: '3:47'
    },
    {
        id: 7,
        songname: 'NCS Songs--7',
        songpath: 'songs/7.mp3',
        coverpath: 'covers/7.jpg',
        tduration: '4:55'
    },
    {
        id: 8,
        songname: 'NCS Songs--8',
        songpath: 'songs/8.mp3',
        coverpath: 'covers/8.jpg',
        tduration: '3:83'
    },
    {
        id: 9,
        songname: 'NCS Songs--9',
        songpath: 'songs/9.mp3',
        coverpath: 'covers/9.jpg',
        tduration: '3:47'
    },
    {
        id: 10,
        songname: 'NCS Songs--10',
        songpath: 'songs/10.mp3',
        coverpath: 'covers/10.jpg',
        tduration: '4:45'
    }
]

let audioElement = new Audio();
let masterPlay = document.getElementById('masterPlay');
let range = document.getElementById('range');
let audiosource = document.getElementById('audiosource');
range.value = 0;

audioElement.addEventListener('timeupdate', () => {
    progess = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    let currenttimeval = (audioElement.currentTime) / 60;
    let durationtimeval = (audioElement.duration) / 60;
    document.getElementById('songduration').innerHTML = parseFloat(currenttimeval).toFixed(2) + '/' + parseFloat(durationtimeval).toFixed(2);
    range.value = progess;
    // console.log(targetSong)

    if (progess == 100) {
        audioElement.pause();
        currentTime = 0;
        range.value = 0;
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        document.getElementById('songduration').innerHTML = '--/--';
        document.getElementById('songInfogif').style.opacity = '0';
        if (targetSong != undefined) {
            targetSong.classList.remove('fa-pause-circle');
            targetSong.classList.add('fa-play-circle');
        }
    }
})

let str = '';
songs.forEach(function (elem, index) {
    str += `<div class="songItem">
    <img src="${elem.coverpath}" alt="True love"><span>${elem.songname}</span><span>${elem.tduration}</span><span id="${index}"><i id=${elem.id} class="fas fa-play-circle listsong"></i></span>
    </div>`
})
document.getElementById('songitemContainer1').innerHTML = str;

let listsong = Array.from(document.getElementsByClassName('listsong'));
let songIndex = 0;
let targetSong;
let songId;
let songno;
let list1 = false;
let arr = new Array();
listsong.forEach(function (element) {
    element.addEventListener('click', (e) => {
        if (arr.length == 0 && list1 == false) {
            list1 = true;
            list = true;
            arr.push(e.target);
            songIndex = parseInt(e.target.id);
            let songno = songs[songIndex - 1].songpath;
            audioElement.src = songno;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            targetSong = e.target;
            document.getElementById('songInfogif').style.opacity = '1';
            // document.getElementById('playBtn1').disabled = true;
            document.getElementById('playBtn1').innerHTML = 'Pause'
        } else {
            arr.forEach(function (item) {
                if (item == e.target) {
                    if (audioElement.paused) {
                        audioElement.play();
                        masterPlay.classList.remove('fa-play-circle');
                        masterPlay.classList.add('fa-pause-circle');
                        item.classList.remove('fa-play-circle');
                        item.classList.add('fa-pause-circle');
                        targetSong = item;
                        document.getElementById('songInfogif').style.opacity = '1';
                        // document.getElementById('playBtn1').disabled = true;
                        list = true;
                        list1 = true
                        document.getElementById('playBtn1').innerHTML = 'Pause'
                    } else {
                        audioElement.pause();
                        masterPlay.classList.remove('fa-pause-circle');
                        masterPlay.classList.add('fa-play-circle');
                        item.classList.remove('fa-pause-circle');
                        item.classList.add('fa-play-circle');
                        targetSong = item;
                        document.getElementById('songInfogif').style.opacity = '0';
                        // document.getElementById('playBtn1').disabled = false;
                        list = false;
                        list1 = false;
                        document.getElementById('playBtn1').innerHTML = 'Play All'
                    }
                } else {
                    arr = [];
                    arr.push(e.target);
                    songIndex = parseInt(e.target.id);
                    songno = songs[songIndex - 1].songpath;
                    audioElement.src = songno;
                    audioElement.play();
                    masterPlay.classList.remove('fa-play-circle');
                    masterPlay.classList.add('fa-pause-circle');
                    item.classList.remove('fa-pause-circle');
                    item.classList.add('fa-play-circle');
                    e.target.classList.remove('fa-play-circle');
                    e.target.classList.add('fa-pause-circle');
                    targetSong = e.target;
                    document.getElementById('songInfogif').style.opacity = '1';
                    // document.getElementById('playBtn1').disabled = true;
                    list = true;
                    list1 = true;
                    document.getElementById('playBtn1').innerHTML = 'Pause'
                }
            })
        }
        document.getElementById('songinfoName').innerHTML = songs[parseInt(songIndex) - 1].songname;
    })
})

forward.addEventListener('click', () => {
    // let q1 = document.getElementsByClassName('fa-pause-circle')[0];
    // console.log(q1)
    if (songIndex >= songs.length) {
        songIndex = 1;
    } else {
        songIndex = songIndex + 1;
    }
    let songno = songs[songIndex - 1].songpath;
    audioElement.src = songno;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    // q1.classList.remove('fa-pause-circle');
    // q1.classList.add('fa-play-circle');
    // songIndex.classList.remove('fa-play-circle');
    // songIndex.classList.add('fa-pause-circle');
    document.getElementById('songInfogif').style.opacity = '1';
    document.getElementById('songinfoName').innerHTML = songs[parseInt(songIndex) - 1].songname;
})

backward.addEventListener('click', () => {
    if (songIndex <= 1) {
        songIndex = songs.length;
    } else {
        songIndex = songIndex - 1;
    }
    let songno = songs[songIndex - 1].songpath;
    audioElement.src = songno;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    document.getElementById('songInfogif').style.opacity = '1';
    document.getElementById('songinfoName').innerHTML = songs[parseInt(songIndex) - 1].songname;
})

audioElement.src = songs[0].songpath;
masterPlay.addEventListener('click', () => {
    // document.getElementById('songinfoName').innerHTML=songs[0].songname;
    if (audioElement.currentTime <= 0 || audioElement.paused) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        // document.getElementById('playBtn1').disabled = true;
        document.getElementById('songInfogif').style.opacity = '1';
        // targetSong.classList.remove('fa-play-circle');
        // targetSong.classList.add('fa-pause-circle');
        // songs[0].id.classList.remove('fa-play-circle')
        // songs[0].id.classList.add('fa-pause-circle')
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        document.getElementById('songInfogif').style.opacity = '0';
        // document.getElementById('playBtn1').disabled = false;
        // targetSong.classList.remove('fa-pause-circle');
        // targetSong.classList.add('fa-play-circle');
        // document.getElementById('songinfoName').innerHTML='';
        // document.getElementById('songInfogif').removeAttribute('open');

    }
})

range.addEventListener('change', () => {
    audioElement.currentTime = (range.value * audioElement.duration) / 100;
})

// let shuffel= document.getElementById('shuffel');
// console.log(shuffel);
let arr1 = new Array();
let counter = 0;
let list = false;
playBtn1.addEventListener('click', () => {
    let playSong = document.getElementsByClassName('listsong');
    // console.log(playSong[0]);

    let c = 0;
    if (arr1.length == 0 && list == false) {
        // location.reload();
        list = true;
        list1 = true;
        // document.getElementById('shuffel').disabled=true;
        audioElement.src = songs[c].songpath;
        // console.log(songs[c].songpath);
        arr1.push(songs[c]);
        audioElement.play();
        document.getElementById('playBtn1').innerHTML = 'Pause';
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        document.getElementById('songInfogif').style.opacity = '1';
        document.getElementById('songinfoName').innerHTML = songs[c].songname;
        playSong[c].classList.remove('fa-play-circle');
        playSong[c].classList.add('fa-pause-circle');

        audioElement.addEventListener('ended', () => {
            arr1 = [];
            c = counter++;
            arr1.push(songs[c + 1]);
            // console.log(arr1)
            audioElement.src = songs[c + 1].songpath;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            document.getElementById('songInfogif').style.opacity = '1';
            document.getElementById('songinfoName').innerHTML = songs[c + 1].songname;
            playSong[c + 1].classList.remove('fa-play-circle');
            playSong[c + 1].classList.add('fa-pause-circle');
            playSong[c].classList.remove('fa-pause-circle');
            playSong[c].classList.add('fa-play-circle');
        })
    } else {
        arr1.forEach(function (elem) {
            if (audioElement.paused) {
                // console.log(elem.id);
                // console.log(arr1);
                // console.log(playSong[elem.id - 1]);
                // location.reload();
                audioElement.play();
                list = true;
                list1 = true;
                // shuffelTrack=true
                document.getElementById('playBtn1').innerHTML = 'Pause';
                masterPlay.classList.remove('fa-play-circle');
                masterPlay.classList.add('fa-pause-circle');
                document.getElementById('songInfogif').style.opacity = '1';
                document.getElementById('songinfoName').innerHTML = elem.songname;
                playSong[(elem.id) - 1].classList.remove('fa-play-circle');
                playSong[(elem.id) - 1].classList.add('fa-pause-circle');
            } else {
                audioElement.pause();
                list = false;
                list1 = false;
                // console.log(playSong[elem.id - 1]);
                document.getElementById('playBtn1').innerHTML = 'Play All';
                masterPlay.classList.remove('fa-pause-circle');
                masterPlay.classList.add('fa-play-circle');
                document.getElementById('songInfogif').style.opacity = '0';
                document.getElementById('songinfoName').innerHTML = elem.songname;
                playSong[elem.id - 1].classList.remove('fa-pause-circle');
                playSong[elem.id - 1].classList.add('fa-play-circle');

            }
        })
    }
})
let repeat = document.getElementById('repeat');
let repeatOnclick = true;
repeat.addEventListener('click', () => {
    if (repeatOnclick == true && audioElement.currentTime != 0) {
        // console.log('repeat');
        audioElement.loop = true;
        repeatOnclick = false;
        repeat.style.color = 'yellow';
        // console.log(audioElement.currentTime)
    } else {
        // console.log('no repeat');
        repeatOnclick = true;
        audioElement.loop = false;
        repeat.style.color = 'white';
        // audioElement.currentTime=0;
    }
})

function randomSong() {
    return Math.floor(Math.random() * songs.length);
}


let shuffel = document.getElementById('shuffel');
let shuffelTrack = false;
shuffel.addEventListener('click', () => {
    // console.log('shuffel');
    let playSong1 = document.getElementsByClassName('listsong');
    if (shuffelTrack == false && audioElement.currentTime != 0) {
        shuffelTrack = true;
        shuffel.style.color = 'yellow';
        audioElement.addEventListener('ended', () => {
            let ranno = randomSong();
            // console.log(ranno);
            audioElement.src = songs[ranno].songpath;
            audioElement.play();
            // console.log(shuffelTrack);
            document.getElementById('songinfoName').innerHTML = songs[ranno].songname;
            // console.log(playSong1[ranno]);
            // playSong1[ranno].classList.remove('fa-play-circle')
            // playSong1[ranno].classList.add('fa-pause-circle')
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            document.getElementById('songInfogif').style.opacity = '1';
        })
    } else {
        console.log('not shuffle');
        shuffel.style.color = 'white';
        shuffelTrack = false;
        location.reload();

    }
})
let stop = document.getElementById('stop');
stop.addEventListener('click', () => {
    location.reload();
})
// let playSong1 = document.getElementsByClassName('listsong');
// if(list == true && shuffelTrack == true){
//     console.log('both true',playSong1)
//     playSong1.classList.remove('fa-pause-circle');
//     playSong1.classList.add('fa-play-circle')
// }