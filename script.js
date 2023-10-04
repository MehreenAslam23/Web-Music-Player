console.log("Welcome to Music player")
let songIndex = 0
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let masterSongName = document.getElementById('masterSongName')
let songItems = Array.from(document.getElementsByClassName('songItem'))
let auto_play = document.getElementById('btn1')
let autoplay = 0

//Songs List Information
let songs = [  
    {
        songName :"Mana ky Mushkil hai safar",
        filePath :"songs/1.mp3",
        coverPath :"covers/1.jpg"
    },
    {
        songName :"Heeriye (Official Video) Jasleen Royal",
        filePath :"songs/2.mp3",
        coverPath :"covers/2.jpg"
    },{
        songName :"Tery vasty falak sy me Chand ",
        filePath :"songs/3.mp3",
        coverPath :"covers/3.jpg"
    },
    {
        songName :"Tu hai to mjy phir or kia cahye",
        filePath :"songs/4.mp3",
        coverPath :"covers/4.jpg"
    },
    {
        songName :"Bandia ry bandia Raah py chal",
        filePath :"songs/5.mp3",
        coverPath :"covers/5.jpg"
    }
    ,{
        songName :"Tu mera koi na ho ky bhe kuch laagy",
        filePath :"songs/6.mp3",
        coverPath :"covers/6.jpg"
    },
    {
        songName :"Tere Hawaale Kar Diya",
        filePath :"songs/7.mp3",
        coverPath :"covers/7.jpg"
    }
]

//To provide song cover photo and song name in song play list
songItems.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName
})

//To handle pause or play audioItemPlay button with masterPlay button
const makeAllPause=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    
    })
}

        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.addEventListener('click',(e)=>{
                masterPlay.addEventListener('click',()=>{
                    if(audioElement.paused || audioElement.currentTime<=0){
                        console.log("song is played with master button handle")
                        makeAllPause();
                        audioElement.play();
                        masterPlay.classList.remove('fa-circle-play')
                        masterPlay.classList.add('fa-circle-pause')
                        gif.style.opacity = 1
                        e.target.classList.remove('fa-circle-play')
                        e.target.classList.add('fa-circle-pause')
                        makeAllPause();

                        songItems[songIndex].lastElementChild.lastElementChild.classList.remove('fa-circle-play')
                        songItems[songIndex].lastElementChild.lastElementChild.classList.add('fa-circle-pause')
                    }
                    else{
                        console.log("song is paused with master button handle")
                        audioElement.pause();
                        masterPlay.classList.remove('fa-circle-pause')
                        masterPlay.classList.add('fa-circle-play')
                        gif.style.opacity = 0
                        e.target.classList.remove('fa-circle-pause')
                        e.target.classList.add('fa-circle-play')
                        songItems[songIndex].lastElementChild.lastElementChild.classList.remove('fa-circle-pause')
                        songItems[songIndex].lastElementChild.lastElementChild.classList.add('fa-circle-play')
                    }
            })
        })
    })

//To handle progressbar timchange along song
audioElement.addEventListener('timeupdate',()=>{
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value =progress
})

//to handle time change when user seek the progressBar
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime =(audioElement.duration*myProgressBar.value)/100
})

//To handle songItemPlay Button in songs items list
 const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(audioElement.paused)
        {
        console.log('song is played')
        songIndex = parseInt(e.target.id)
        masterSongName.innerText = songs[songIndex].songName
        gif.style.opacity = 1
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioElement.src = `songs/${songIndex+1}.mp3`
        audioElement.currentTime = 0
        audioElement.play()
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        }
        else
        {
        console.log('Song is paused')
        makeAllPlays();
        audioElement.pause();
        e.target.classList.remove('fa-circle-pause')
        e.target.classList.add('fa-circle-play')
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity = 0
        }
    })
})

// to handle next button
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.addEventListener('click',(e)=>{
                document.getElementById('next').addEventListener('click',(e)=>{
                    if(songIndex>=6){
                        songIndex=0
                    }
                    else{
                        songIndex+=1
                    }
                    audioElement.src = `songs/${songIndex+1}.mp3`
                    masterSongName.innerText = songs[songIndex].songName
                    gif.style.opacity = 1
                    audioElement.currentTime = 0
                    audioElement.play()
                    masterPlay.classList.remove('fa-circle-play')
                    masterPlay.classList.add('fa-circle-pause')
                    console.log(songItems[songIndex].lastElementChild.lastElementChild)
                    makeAllPlays();
                    songItems[songIndex].lastElementChild.lastElementChild.classList.remove('fa-circle-play')
                    songItems[songIndex].lastElementChild.lastElementChild.classList.add('fa-circle-pause') 
                })
            })
        })
 
//to handle previous button
 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.addEventListener('click',(e)=>{
                document.getElementById('previous').addEventListener('click',(e)=>{
                    if(songIndex<=0){
                        songIndex=0
                    }
                    else{
                        songIndex-=1
                    }
                    audioElement.src = `songs/${songIndex+1}.mp3`
                    masterSongName.innerText = songs[songIndex].songName
                    gif.style.opacity = 1
                    audioElement.currentTime = 0
                    audioElement.play()
                    masterPlay.classList.remove('fa-circle-play')
                    masterPlay.classList.add('fa-circle-pause')
                    console.log(songItems[songIndex].lastElementChild.lastElementChild)
                    makeAllPlays();
                    songItems[songIndex].lastElementChild.lastElementChild.classList.remove('fa-circle-play')
                    songItems[songIndex].lastElementChild.lastElementChild.classList.add('fa-circle-pause') 
                })
            })
        })
//if one song is going to end add event listerner to play the next songs
//add favourite icon
//make the website responsive by using vh a nd mediaquery
