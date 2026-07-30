/* ==========================================
   PASSWORD SYSTEM
========================================== */

const passwordScreen = document.getElementById("password-screen");
const website = document.getElementById("website");

const passwordInput = document.getElementById("passwordInput");
const unlockBtn = document.getElementById("unlockBtn");
const passwordMessage = document.getElementById("passwordMessage");

const music = document.getElementById("bgMusic");

/* ==========================================
   UNLOCK
========================================== */

unlockBtn.addEventListener("click", checkPassword);

passwordInput.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        checkPassword();

    }

});

/* ==========================================
   CHECK PASSWORD
========================================== */

function checkPassword() {

    const value = passwordInput.value.trim();

    if (value === CONFIG.password) {

        unlockWebsite();

    } else {

        wrongPassword();

    }

}

/* ==========================================
   WRONG PASSWORD
========================================== */

function wrongPassword() {

    passwordMessage.textContent =
        "Wrong password ❤️ Try again.";

    passwordInput.animate(

        [

            { transform: "translateX(-8px)" },

            { transform: "translateX(8px)" },

            { transform: "translateX(-8px)" },

            { transform: "translateX(8px)" },

            { transform: "translateX(0)" }

        ],

        {

            duration: 450

        }

    );

    passwordInput.style.border =
        "2px solid #ff4d7a";

    passwordInput.focus();

}

/* ==========================================
   UNLOCK WEBSITE
========================================== */

function unlockWebsite() {

    passwordMessage.textContent =
        "Welcome ❤️";

    passwordInput.disabled = true;

    unlockBtn.disabled = true;

    passwordScreen.animate(

        [

            {

                opacity: 1,

                transform: "scale(1)"

            },

            {

                opacity: 0,

                transform: "scale(.92)"

            }

        ],

        {

            duration: 900,

            fill: "forwards",

            easing: "ease"

        }

    );

    setTimeout(() => {

        passwordScreen.style.display = "none";

        website.classList.remove("hidden");

        website.animate(

            [

                {

                    opacity: 0,

                    transform: "translateY(30px)"

                },

                {

                    opacity: 1,

                    transform: "translateY(0)"

                }

            ],

            {

                duration: 900,

                easing: "ease"

            }

        );

        try {

            music.play();

        } catch (e) {}

        window.scrollTo({

            top: 0,

            behavior: "instant"

        });

    }, 900);

}

/* ==========================================
   CLEAR ERROR WHEN TYPING
========================================== */

passwordInput.addEventListener("input", () => {

    passwordMessage.textContent = "";

    passwordInput.style.border = "none";

});

/* ==========================================
   OPTIONAL ESCAPE KEY
========================================== */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        passwordInput.value = "";

        passwordMessage.textContent = "";

    }

});

/* ==========================================
   FOCUS INPUT
========================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        passwordInput.focus();

    }, 700);

});

/* ==========================================
   END
========================================== */
