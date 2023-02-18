let songIndex = 0;
var currSong = document.querySelector(".bottom h6");
var textColor = document.querySelector(".middle .card-content");
var audio = [
    {name: "Apna Bana Le", path: "songs/Apna_Bana_Le_-_Bhediya_Varun_Dhaw_(getmp3.pro).mp3", cover: "images/Bhediya.png.png"},  
    {name: "Without Me", path: "songs/Halsey_-_Without_Me_Lyrics_(getmp3.pro).mp3", cover: "images/without_me.png"},
    {name: "Perfect", path: "songs/Ed_Sheeran_-_Perfect_Lyrics_(getmp3.pro).mp3", cover: "images/Perfect.png.png"},
    {name: "Beautiful Mistakes", path: "songs/Maroon_5_ft_Megan_Thee_Stallion_-_(getmp3.pro).mp3", cover: "images/beautifulmistakes.png.png"},
    {name: "Until I Found You", path: "songs/Stephen_Sanchez_-_Until_I_Found_You_(getmp3.pro).mp3", cover: "images/Stephen_Sanchez_-_Until_I_Found_You.png.png"},
    {name: "Heartbreak Anniversary", path: "songs/Giveon_-_Heartbreak_Anniversary_Of_(getmp3.pro).mp3", cover: "images/heartbreaka.jpg"},
    {name: "Dandelions", path: "songs/Ruth_B_-_Dandelions_Lyrics_(getmp3.pro).mp3", cover: "images/maxresdefault.jpg"},
    {name: "Wildest Dreams", path: "songs/Taylor_Swift_-_Wildest_Dreams_(getmp3.pro).mp3", cover: "images/wildestdreams.jpg"}
]
var audioElement = new Audio(audio[0].path);
var masterPlay = document.querySelector("#masterPlay");
var myProgressBar = document.querySelector("#myProgressBar");

masterPlay.addEventListener("click", function(){
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        document.getElementById(songIndex).classList.remove("fa-play");
        document.getElementById(songIndex).classList.add("fa-pause");
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play"); 
        document.getElementById(songIndex).classList.add("fa-play");
        document.getElementById(songIndex).classList.remove("fa-pause");

    }
});

audioElement.addEventListener("timeupdate", function(){
    var audioPercent = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(audioPercent);
    myProgressBar.value = audioPercent;
});

myProgressBar.addEventListener("change", function(){
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

var makeAllPlays = function(){
    document.querySelectorAll(".middle .icon").forEach(element => {
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
    });
}
document.querySelectorAll(".middle .icon").forEach(element => {
    element.addEventListener("click", function(e){
        document.getElementById(songIndex).parentElement.classList.remove("addColor");
        makeAllPlays();
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        songIndex = parseInt(e.target.id);
        console.log(songIndex);
        audioElement.src = audio[songIndex].path;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        currSong.innerHTML = audio[songIndex].name;
        console.log(e.target.id);
        document.getElementById(songIndex).parentElement.classList.add("addColor");
        document.querySelector(".bottom img").setAttribute("src", audio[songIndex].cover);

    });
});

document.getElementById("next").addEventListener("click", function(){
    document.getElementById(songIndex).parentElement.classList.remove("addColor");
    if(songIndex >= 7){
        songIndex = 0;
    }
    else{
        songIndex = songIndex + 1;
    }
    audioElement.src = audio[songIndex].path;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    makeAllPlays();
    document.getElementById(songIndex).classList.remove("fa-play");
    document.getElementById(songIndex).classList.add("fa-pause");
    currSong.innerHTML = audio[songIndex].name;
    document.getElementById(songIndex).parentElement.classList.add("addColor");
    document.querySelector(".bottom img").setAttribute("src", audio[songIndex].cover);

})

document.getElementById("previous").addEventListener("click", function(){
    document.getElementById(songIndex).parentElement.classList.remove("addColor");
    if(songIndex <= 0){
        songIndex = 7;
    }
    else{
        songIndex = songIndex - 1;
    }
    audioElement.src = audio[songIndex].path;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    makeAllPlays();
    document.getElementById(songIndex).classList.remove("fa-play");
    document.getElementById(songIndex).classList.add("fa-pause");
    currSong.innerHTML = audio[songIndex].name;
    document.getElementById(songIndex).parentElement.classList.add("addColor");
    document.querySelector(".bottom img").setAttribute("src", audio[songIndex].cover);

})

