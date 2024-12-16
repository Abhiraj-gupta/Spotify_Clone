console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let ProgressBar = document.getElementById('ProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    { songName: "Blinding Lights-TheWeeknd", filePath: "songs/15.mp3", coverPath: "covers/Blinding Lights - The Weeknd.jpg" },
    { songName: "Call Out My Name-TheWeeknd", filePath: "songs/4.mp3", coverPath: "covers/Call Out My Name - The Weeknd.jpg" },
   

    { songName: "Afsanay-Young Stunners", filePath: "songs/9.mp3", coverPath: "covers/Afsanay-Young Stunners.jpg" },
    { songName: "Don't Mind-Young Stunners", filePath: "songs/17.mp3", coverPath: "covers/Don't Mind-Young Stunners.jpg" },



    { songName: "Attention-Charlie Puth", filePath: "songs/1.mp3", coverPath: "covers/Attention - Charlie Puth.jpg" },
    { songName: "We Don't Talk-Charlie Puth", filePath: "songs/35.mp3", coverPath: "covers/We Don't Talk Anymore - Charlie Puth.jpg" },

    { songName: "Blow Your Mind-Dua Lipa", filePath: "songs/11.mp3", coverPath: "covers/Blow Your Mind-Dua Lipa.jpg" },
    { songName: "Levitating-Dua Lipa", filePath: "songs/23.mp3", coverPath: "covers/Levitating-Dua Lipa.jpg" },

    { songName: "Bellyache-Billie Eilish", filePath: "songs/26.mp3", coverPath: "covers/Bellyache-Billie Eilish.jpg" },
    { songName: "Lovely - Billie Eilish,Khalid", filePath: "songs/14.mp3", coverPath: "covers/Lovely-Billie Eilish.jpg" },

    { songName: "Closer-The Chainsmokers", filePath: "songs/20.mp3", coverPath: "covers/Closer-The Chainsmokers.jpg" },
    { songName: "Takeaway-The Chainsmokers", filePath: "songs/34.mp3", coverPath: "covers/Takeaway-The Chainsmokers.jpg" },


    { songName: "Hymn For - Coldplay", filePath: "songs/13.mp3", coverPath: "covers/Hymn For The Weekend-Coldplay.jpg" },
    { songName: "My Universe-Coldplay", filePath: "songs/27.mp3", coverPath: "covers/My Universe-Coldplay.jpg" },


    { songName: "Let Me Kiss You - 1D", filePath: "songs/22.mp3", coverPath: "covers/Kiss You-1D.jpg" },
    { songName: "What Makes You Beautiful-1D", filePath: "songs/32.mp3", coverPath: "covers/What Makes You Beautiful-1D.jpg" },
    
    { songName: "Sorry - Justin Bieber", filePath: "songs/33.mp3", coverPath: "covers/Sorry-Justin Bieber.jpg" },
    { songName: "Do You Mean-Justin Bieber", filePath: "songs/36.mp3", coverPath: "covers/What Do You Mean-Justin Bieber.jpg" },

    { songName: "Bikhra-Abdul Hannan", filePath: "songs/3.mp3", coverPath: "covers/Bikhra - Abdul Hannan.jpg" },
    { songName: "Harleys In Hawaii-Katy Perry", filePath: "songs/6.mp3", coverPath: "covers/Harleys In Hawaii - Katy Perry.jpg" },
    { songName: "Heat Waves-Glass Animals", filePath: "songs/7.mp3", coverPath: "covers/Heat Waves - Glass Animals.jpg" },
    { songName: "Akhiyaan - Mitraz", filePath: "songs/14.mp3", coverPath: "covers/Akhiyaan - Mitraz.jpg" },
    { songName: "Anjaan - Jani,Talha Yonus", filePath: "songs/15.mp3", coverPath: "covers/Anjaan-Jani.jpg" },
    { songName: "Ashes(2020) - Stellar", filePath: "songs/16.mp3", coverPath: "covers/Ashes-Stellar.jpg" },
    { songName: "Back To The Future-Bastille", filePath: "songs/18.mp3", coverPath: "covers/Back To The Future-Bastille.jpg" },  
    { songName: "Burning Down - EYK", filePath: "songs/22.mp3", coverPath: "covers/Burning Down-Everyone You Know.jpg" },       
    { songName: "Desire-Years & Years", filePath: "songs/27.mp3", coverPath: "covers/Desire-Years & Years.jpg" },
    { songName: "El Melouk-Ahmed Saad", filePath: "songs/32.mp3", coverPath: "covers/El Melouk-Ahmed Saad.jpg" },
    { songName: "Excuses-Ap Dhillon", filePath: "songs/33.mp3", coverPath: "covers/Excuses-Ap Dhillon.jpg" },
    { songName: "Formula - Labrinth", filePath: "songs/34.mp3", coverPath: "covers/Formula-Labrinth.jpg" },
    { songName: "Goosebumps-Travis Scott", filePath: "songs/35.mp3", coverPath: "covers/Goosebumps-Travis Scott.jpg" },
    { songName: "Head First-Christian French", filePath: "songs/36.mp3", coverPath: "covers/Head First-Christian French.jpg" },
    { songName: "Heartburn(Remix) - Wafia", filePath: "songs/37.mp3", coverPath: "covers/Heartburn-Wafia.jpg" },
    { songName: "Honeypie - JAWNY", filePath: "songs/38.mp3", coverPath: "covers/Honeypie-JAWNY.jpg" },    
    { songName: "Kana Yaari Kaifi Khalil", filePath: "songs/41.mp3", coverPath: "covers/Kana Yaari Kaifi Khalil.jpg" },
    { songName: "Lights Down Low-MAX", filePath: "songs/46.mp3", coverPath: "covers/Lights Down Low-MAX.jpg" },
    { songName: "Love Nwantiti-CKay", filePath: "songs/47.mp3", coverPath: "covers/Love Nwantiti-CKay.jpg" },
    { songName: "Michael Jackson-Lovin You", filePath: "songs/49.mp3", coverPath: "covers/Loving You-Michael Jackson.jpg" },
    { songName: "Maikada - M. Samie", filePath: "songs/51.mp3", coverPath: "covers/Maikada-Muhammad Samie.jpg" },
    { songName: "Mushk OST-Ali Zafar", filePath: "songs/52.mp3", coverPath: "covers/Mushk OST-Ali Zafar.jpg" },
    { songName: "Mystery of Love-Sufjan Stevens", filePath: "songs/54.mp3", coverPath: "covers/Mystery of Love-Sufjan Stevens.jpg" },
    { songName: "Passive-The Perfect Circle", filePath: "songs/56.mp3", coverPath: "covers/Passive-The Perfect Circle.jpg" },
    { songName: "The Hot Stepper-Ini Kamoze", filePath: "songs/66.mp3", coverPath: "covers/The Hot Stepper-Ini Kamoze.jpg" },
    { songName: "Vibe(2021) -Herman", filePath: "songs/67.mp3", coverPath: "covers/Vibe-Herman.jpg" },
    { songName: "World Is Mine-Samm Henshaw", filePath: "songs/71.mp3", coverPath: "covers/World Is Mine-Samm Henshaw.jpg" },
    { songName: "Без тебя я не я-JONY", filePath: "songs/72.mp3", coverPath: "covers/Без тебя я не я-JONY.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    ProgressBar.value = progress;
})
//Seekbar Interaction
ProgressBar.addEventListener('change', () => {
    audioElement.currentTime = ProgressBar.value * audioElement.duration / 100;
})
//Reset all  play Buttons
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
//play individual songs
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
//Next Button
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 36) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
//previous button
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})