console.log("Welcome to manmusic");
let songIndex = 0;
let audioElement=new Audio('Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let Songs = [
  {songName:" Tere Bin ", filePath:"Songs/1.mp3", coverPath: "Covers/1.jpg"},
   {songName:"Teri Hogainya", filePath:"Songs/2.mp3", coverPath: "Covers/2.jpg"},
  {songName:"Kya Kiya Hai Tune", filePath:"Songs/3.mp3", coverPath: "Covers/3.jpg"},
  {songName:"Tere Naal", filePath:"Songs/4.mp3", coverPath: "Covers/4.jpg"},
  {songName:"Abhi Kuch Dino se", filePath:"Songs/5.mp3", coverPath: "Covers/5.jpg"},
  {songName:"Raatan Lambiyan", filePath:"Songs/6.mp3", coverPath: "Covers/6.jpg"},
  {songName:"Mere Liye", filePath:"Songs/7.mp3", coverPath: "Covers/7.jpg"},
  {songName:"O Saajna", filePath:"Songs/8.mp3", coverPath: "Covers/8.jpg"},
  {songName:"Saiyaara", filePath:"Songs/9.mp3", coverPath: "Covers/9.jpg"},
  {songName:"Chaaya Hai Jo Dil Par ", filePath:"Songs/10.mp3", coverPath: "Covers/10.jpg"}
  ]
  
songItems.forEach((element, i)=>{
  element.getElementsByTagName('img')[0].src=Songs[i].coverPath;
  element.getElementsByClassName('songName')[0].innerText=Songs[i].songName;

})
//audioElement.play();

//handle play or puase click
  masterPlay.addEventListener('click',()=>{
     if(audioElement.paused || audioElement.currentTime<=0){ 
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
  }
  else{ 
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
  }
})
//listen to events
audioElement.addEventListener('timeupdate', ()=>{
  //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress; 
})

myProgressBar.addEventListener('change', ()=>{ 
  audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays=()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{      
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
  })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{
    makeAllPlays();
    songIndex=parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `Songs/${songIndex+1}.mp3`;
    masterSongName.innerText=Songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  })
})

document.getElementById('next').addEventListener('click',()=>{
  if(songIndex>=9){
    songIndex=0;
  }
  else {
  songIndex+=1;
  }
  audioElement.src = `Songs/${songIndex+1}.mp3`;
  masterSongName.innerText=Songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
  if (songIndex <= 0) {
    songIndex = 0;
  }
  else {
    songIndex -= 1;
  }
  audioElement.src = `Songs/${songIndex+1}.mp3`;
  masterSongName.innerText=Songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
})