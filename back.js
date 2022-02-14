let listsong = Array.from(document.getElementsByClassName('listsong'));

let songIndex=0;
audioElement.currentTime=0;
let targetSong;
listsong.forEach(function(element){
    element.addEventListener('click',(e)=>{
        targetSong=e.target;
        console.log(element)
        console.log(e.target.id)
        console.log(targetSong.id)
        // console.log(element.classList)
        // console.log(e.target.classList)
        // conut++;
        // console.log((e.target.songname));
        // console.log(songs[parseInt(e.target.id)-1]);
        songIndex=parseInt(e.target.id);
        // console.log(element)
        // console.log(songIndex);
        let songno = songs[songIndex-1].songpath;
        console.log(songIndex)
        
        console.log('before',audioElement.currentTime)
        let time1 = audioElement.currentTime;  
        let x = audioElement.paused; 
        console.log(x)   
        audioElement.src=songno;
            if (x==true || time1 <=0){       
            audioElement.play();
            // audioElement.currentTime=time1;
            console.log('if',time1)
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            document.getElementById('songInfogif').style.opacity = '1';
            }
            else{
            audioElement.pause();
            audioElement.currentTime=time1;
            console.log('pause',time1)
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            document.getElementById('songInfogif').style.opacity = '0';
            }
       
        // console.log(audioElement.duration)
        
        document.getElementById('songinfoName').innerHTML=songs[parseInt(songIndex)-1].songname;
    })
})