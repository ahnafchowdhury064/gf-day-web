/* ==========================================
   MUSIC PLAYER
========================================== */

const audio =
document.getElementById("bgMusic");

let musicUI;
let progressBar;
let volumeSlider;
let playButton;
let rotateDisc;

/* ==========================================
   CREATE PLAYER
========================================== */

function createMusicPlayer(){

    musicUI=document.createElement("div");

    musicUI.className="music-player glass";

    musicUI.innerHTML=`

        <div class="disc" id="musicDisc">
            💿
        </div>

        <div class="music-info">

            <h4>Now Playing</h4>

            <p>Our Song ❤️</p>

            <div class="progress">

                <div class="progress-fill"></div>

            </div>

            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value="0.7"
                class="volume-slider">

        </div>

        <button class="play-toggle">

            ▶️

        </button>

    `;

    document.body.appendChild(musicUI);

    playButton=
    musicUI.querySelector(".play-toggle");

    progressBar=
    musicUI.querySelector(".progress-fill");

    volumeSlider=
    musicUI.querySelector(".volume-slider");

    rotateDisc=
    musicUI.querySelector("#musicDisc");

}

createMusicPlayer();

/* ==========================================
   PLAY / PAUSE
========================================== */

playButton.onclick=()=>{

    if(audio.paused){

        audio.play();

    }else{

        audio.pause();

    }

};

/* ==========================================
   UPDATE BUTTON
========================================== */

audio.addEventListener("play",()=>{

    playButton.innerHTML="⏸️";

    rotateDisc.classList.add("spin");

});

audio.addEventListener("pause",()=>{

    playButton.innerHTML="▶️";

    rotateDisc.classList.remove("spin");

});

/* ==========================================
   PROGRESS
========================================== */

audio.addEventListener("timeupdate",()=>{

    if(!audio.duration)return;

    const percent=

    (audio.currentTime/audio.duration)*100;

    progressBar.style.width=

    percent+"%";

});

/* ==========================================
   VOLUME
========================================== */

audio.volume=.7;

volumeSlider.oninput=(e)=>{

    audio.volume=e.target.value;

};

/* ==========================================
   LOOP
========================================== */

audio.loop=true;

/* ==========================================
   AUTO PLAY AFTER UNLOCK
========================================== */

window.addEventListener("click",()=>{

    if(audio.paused){

        audio.play().catch(()=>{});

    }

},{once:true});

/* ==========================================
   KEYBOARD SHORTCUT
========================================== */

document.addEventListener("keydown",(e)=>{

    if(e.code==="Space"){

        e.preventDefault();

        if(audio.paused){

            audio.play();

        }else{

            audio.pause();

        }

    }

});

/* ==========================================
   END
========================================== */
