var audio = document.querySelector('audio');
const startB = document.querySelector('.start-B');
const playN = document.querySelector('.play-next');
const playP = document.querySelector('.play-prev');
let playNum = 0;
let isPlay = false;
let list = [
  'lp.mp3', 'nizkiz.mp3', 'korn.mp3'
];

audio.src = list[playNum];

function playAudio() {
     if (!isPlay){
    audio.play();
     isPlay = true;
              }else{ 
      audio.pause(); 
      isPlay = false;
                };  
if(!isPlay){
  startB.classList.remove('pause-B');
}else{
startB.classList.add('pause-B');
}
swit();
}

function playNext() {
isPlay=false;
  if(playNum >= list.length-1){
playNum = 0;
}else{
  playNum++; 
}
audio.src = list[playNum];  
playAudio();
}

function playPrev () {
  isPlay=false;
if (playNum <= 0){
  playNum = list.length-1;
}else{
  playNum--;
}
audio.src = list[playNum];  
playAudio();
}

function swit(){
switch(playNum){
  case 0:
   document.getElementById('picSmall').src ="lp.jpg";
   document.getElementById('wall').src = "lp.jpg";
   document.getElementById('artist').textContent = 'Linkin Park';
   document.getElementById('songId').textContent = 'Papercut';
  break;
  case 1:
  document.getElementById('picSmall').src ="nizkiz.jpg";
  document.getElementById('wall').src = "nizkiz.jpg";
  document.getElementById('artist').textContent = 'Nizkiz';
  document.getElementById('songId').textContent = 'Guantana';
    break;
  case 2:
    document.getElementById('picSmall').src ="korn.jpg";
    document.getElementById('wall').src = "korn.jpg";
    document.getElementById('artist').textContent = 'Korn';
    document.getElementById('songId').textContent = 'Never Never';
    break;
}}

function minSec (sec){
   if (sec === 0){
  return '00:00';
}if(sec < 10){
  return "00:0"+sec;
}
 if( sec < 60){
  return "00:"+sec;
}
  if(Math.floor(sec/60)>0 && ((sec- (Math.floor(sec/60)*60)) < 10) ){
    return Math.floor(sec/60)+":0"+ (sec- (Math.floor(sec/60)*60));
  }else{
  return Math.floor(sec/60)+":"+ (sec- (Math.floor(sec/60)*60));
}}

function setInterval(track)  { 
  var currTime = Math.floor(track.currentTime); 
  var duration = Math.floor(track.duration); 
  document.getElementById('current').innerHTML = minSec(currTime); 
  if (isNaN(duration)){
    durationDiv.innerHTML = '00:00';
  } 
  else{
    document.getElementById('length').innerHTML = minSec(duration);
  }
  
  var progressBar = document.querySelector(".progress");
  progressBar.style.width = track.currentTime / track.duration * 100 + "%";  
  }
  
  const line = document.querySelector(".timeline");
  line.addEventListener("click", e => {
    const lineWidth = window.getComputedStyle(line).width;
    const timeToSeek = e.offsetX / parseInt(lineWidth) * audio.duration;
    audio.currentTime = timeToSeek;
  }, false);

startB.addEventListener('click', playAudio);
playN.addEventListener('click', playNext);
playP.addEventListener('click',playPrev);


