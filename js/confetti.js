/* ==========================================
   CONFETTI & SURPRISE
========================================== */

const surpriseBtn =
document.getElementById("surpriseBtn");

/* ==========================================
   BUTTON
========================================== */

surpriseBtn.addEventListener("click",()=>{

    launchConfetti();

    launchHeartRain();

    showSurprisePopup();

});

/* ==========================================
   CONFETTI
========================================== */

function launchConfetti(){

    for(let i=0;i<180;i++){

        const piece=
        document.createElement("div");

        piece.className="confetti";

        piece.style.left=Math.random()*100+"vw";

        piece.style.top="-20px";

        piece.style.background=

        randomColor();

        piece.style.transform=

        `rotate(${Math.random()*360}deg)`;

        piece.style.animationDuration=

        (3+Math.random()*3)+"s";

        document.body.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },6500);

    }

}

/* ==========================================
   HEART RAIN
========================================== */

function launchHeartRain(){

    for(let i=0;i<80;i++){

        const heart=
        document.createElement("div");

        heart.className="heart";

        heart.innerHTML="💖";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=

        (18+Math.random()*30)+"px";

        heart.style.animationDuration=

        (5+Math.random()*3)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },9000);

    }

}

/* ==========================================
   POPUP
========================================== */

function showSurprisePopup(){

    const popup=
    document.createElement("div");

    popup.className="popup";

    popup.innerHTML=`

    <div class="popup-card">

        <h2>${CONFIG.surpriseTitle}</h2>

        <p>${CONFIG.surpriseMessage}</p>

        <button id="closePopup">

            I Love You ❤️

        </button>

    </div>

    `;

    document.body.appendChild(popup);

    document
    .getElementById("closePopup")
    .onclick=()=>{

        popup.remove();

    };

    popup.onclick=(e)=>{

        if(e.target===popup){

            popup.remove();

        }

    };

}

/* ==========================================
   RANDOM COLORS
========================================== */

function randomColor(){

    const colors=[

        "#ff7eb8",

        "#ffb3d9",

        "#ffd166",

        "#d8b4ff",

        "#7dd3fc",

        "#86efac",

        "#ffffff"

    ];

    return colors[
        Math.floor(Math.random()*colors.length)
    ];

}

/* ==========================================
   END
========================================== */
