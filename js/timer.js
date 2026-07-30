/* ==========================================
   TOGETHER SINCE TIMER
========================================== */

const countdown =
document.getElementById("countdown");

/* ==========================================
   CREATE TIMER BOX
========================================== */

function createBox(value,label){

    return `

    <div class="time-box">

        <h3>${value}</h3>

        <span>${label}</span>

    </div>

    `;

}

/* ==========================================
   UPDATE TIMER
========================================== */

function updateTimer(){

    const startDate =
    new Date(CONFIG.togetherSince);

    const now =
    new Date();

    let difference =
    now - startDate;

    if(difference < 0){

        countdown.innerHTML = `
        <div class="time-box">
            <h3>❤️</h3>
            <span>Coming Soon</span>
        </div>
        `;

        return;

    }

    const totalSeconds =
    Math.floor(difference/1000);

    const days =
    Math.floor(totalSeconds/86400);

    const hours =
    Math.floor(
        (totalSeconds%86400)/3600
    );

    const minutes =
    Math.floor(
        (totalSeconds%3600)/60
    );

    const seconds =
    totalSeconds%60;

    countdown.innerHTML =

        createBox(days,"Days")+

        createBox(
            String(hours).padStart(2,"0"),
            "Hours"
        )+

        createBox(
            String(minutes).padStart(2,"0"),
            "Minutes"
        )+

        createBox(
            String(seconds).padStart(2,"0"),
            "Seconds"
        );

}

/* ==========================================
   START TIMER
========================================== */

updateTimer();

setInterval(updateTimer,1000);

/* ==========================================
   OPTIONAL ANNIVERSARY CHECK
========================================== */

function isAnniversaryToday(){

    const start =
    new Date(CONFIG.togetherSince);

    const today =
    new Date();

    return (

        start.getDate()===today.getDate()

        &&

        start.getMonth()===today.getMonth()

    );

}

/* ==========================================
   ANNIVERSARY MESSAGE
========================================== */

if(isAnniversaryToday()){

    setTimeout(()=>{

        const popup=
        document.createElement("div");

        popup.className="popup";

        popup.innerHTML=`

        <div class="popup-card">

            <h2>🎉 Happy Anniversary ❤️</h2>

            <p>

            Another beautiful year together.

            Thank you for every smile,

            every laugh,

            and every memory.

            ❤️

            </p>

            <button id="closeAnniversary">

            Close

            </button>

        </div>

        `;

        document.body.appendChild(popup);

        document
        .getElementById("closeAnniversary")
        .onclick=()=>{

            popup.remove();

        };

    },2500);

}

/* ==========================================
   END
========================================== */
