/* ==========================================
   MAIN INITIALIZATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initLoader();

    loadConfig();

    createFloatingHearts();

    initScrollReveal();

    createMusicButton();

    createTopButton();

    smoothScroll();

});

/* ==========================================
   LOADER
========================================== */

function initLoader(){

    window.addEventListener("load",()=>{

        setTimeout(()=>{

            document.getElementById("loader").style.display="none";

        },1200);

    });

}

/* ==========================================
   LOAD CONFIG
========================================== */

function loadConfig(){

    document.getElementById("heroTitle").textContent =
    CONFIG.heroTitle;

    document.getElementById("heroSubtitle").textContent =
    CONFIG.heroSubtitle;

    document.getElementById("loveLetter").textContent =
    CONFIG.loveLetter;

    const music =
    document.getElementById("bgMusic");

    music.src =
    CONFIG.music;

}

/* ==========================================
   FLOATING HEARTS
========================================== */

function createFloatingHearts(){

    const container =
    document.getElementById("hearts");

    setInterval(()=>{

        const heart =
        document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left =
        Math.random()*100+"vw";

        heart.style.fontSize =
        (18+Math.random()*22)+"px";

        heart.style.animationDuration =
        (6+Math.random()*5)+"s";

        container.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },11000);

    },450);

}

/* ==========================================
   SCROLL REVEAL
========================================== */

function initScrollReveal(){

    const observer =
    new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.2

    });

    document.querySelectorAll(

        ".fade,.fade-up,.fade-left,.fade-right"

    ).forEach(el=>{

        observer.observe(el);

    });

}

/* ==========================================
   MUSIC BUTTON
========================================== */

function createMusicButton(){

    const button =
    document.createElement("button");

    button.className="music-btn";

    button.innerHTML="🎵";

    document.body.appendChild(button);

    const music =
    document.getElementById("bgMusic");

    let playing=false;

    button.onclick=()=>{

        if(playing){

            music.pause();

            button.innerHTML="🎵";

        }

        else{

            music.play();

            button.innerHTML="⏸️";

        }

        playing=!playing;

    };

}

/* ==========================================
   SCROLL TO TOP
========================================== */

function createTopButton(){

    const btn =
    document.createElement("button");

    btn.className="top-btn";

    btn.innerHTML="↑";

    document.body.appendChild(btn);

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            btn.classList.add("show");

        }

        else{

            btn.classList.remove("show");

        }

    });

    btn.onclick=()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    };

}

/* ==========================================
   SMOOTH LINKS
========================================== */

function smoothScroll(){

    document.querySelectorAll('a[href^="#"]')

    .forEach(anchor=>{

        anchor.addEventListener("click",e=>{

            e.preventDefault();

            document.querySelector(

                anchor.getAttribute("href")

            ).scrollIntoView({

                behavior:"smooth"

            });

        });

    });

}

/* ==========================================
   RANDOM BACKGROUND GLOW
========================================== */

setInterval(()=>{

    document.body.animate([

        {

            filter:"brightness(1)"

        },

        {

            filter:"brightness(1.05)"

        },

        {

            filter:"brightness(1)"

        }

    ],{

        duration:5000

    });

},5000);

/* ==========================================
   HEART CURSOR TRAIL
========================================== */

document.addEventListener("mousemove",(e)=>{

    if(window.innerWidth<768)return;

    const heart=document.createElement("div");

    heart.innerHTML="💖";

    heart.style.position="fixed";

    heart.style.left=e.clientX+"px";

    heart.style.top=e.clientY+"px";

    heart.style.pointerEvents="none";

    heart.style.fontSize="14px";

    heart.style.zIndex="9999";

    heart.style.transition="all .8s linear";

    document.body.appendChild(heart);

    requestAnimationFrame(()=>{

        heart.style.transform="translateY(-40px) scale(1.5)";

        heart.style.opacity="0";

    });

    setTimeout(()=>{

        heart.remove();

    },800);

});

/* ==========================================
   END
========================================== */
