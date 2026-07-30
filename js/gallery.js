/* ==========================================
   GALLERY
========================================== */

const gallery =
document.getElementById("galleryGrid");

let currentImage = 0;

/* ==========================================
   LOAD GALLERY
========================================== */

function loadGallery(){

    gallery.innerHTML="";

    CONFIG.photos.forEach((photo,index)=>{

        const image =
        document.createElement("img");

        image.src = photo;

        image.alt = `Memory ${index+1}`;

        image.loading = "lazy";

        image.classList.add("fade-up");

        image.addEventListener("click",()=>{

            openLightbox(index);

        });

        gallery.appendChild(image);

    });

}

loadGallery();

/* ==========================================
   LIGHTBOX
========================================== */

function openLightbox(index){

    currentImage=index;

    const overlay =
    document.createElement("div");

    overlay.className="lightbox";

    overlay.innerHTML=`

        <button class="lightbox-close">
            ✕
        </button>

        <button class="lightbox-prev">
            ❮
        </button>

        <img
        src="${CONFIG.photos[currentImage]}"
        id="lightboxImage">

        <button class="lightbox-next">
            ❯
        </button>

    `;

    document.body.appendChild(overlay);

    const img =
    overlay.querySelector("#lightboxImage");

    /* NEXT */

    overlay.querySelector(".lightbox-next")
    .onclick=()=>{

        currentImage++;

        if(currentImage>=CONFIG.photos.length){

            currentImage=0;

        }

        img.src=
        CONFIG.photos[currentImage];

    };

    /* PREVIOUS */

    overlay.querySelector(".lightbox-prev")
    .onclick=()=>{

        currentImage--;

        if(currentImage<0){

            currentImage=
            CONFIG.photos.length-1;

        }

        img.src=
        CONFIG.photos[currentImage];

    };

    /* CLOSE */

    overlay.querySelector(".lightbox-close")
    .onclick=()=>{

        overlay.remove();

    };

    /* CLICK OUTSIDE */

    overlay.onclick=(e)=>{

        if(e.target===overlay){

            overlay.remove();

        }

    };

    /* KEYBOARD */

    document.onkeydown=(e)=>{

        if(e.key==="Escape"){

            overlay.remove();

            document.onkeydown=null;

        }

        if(e.key==="ArrowRight"){

            overlay
            .querySelector(".lightbox-next")
            .click();

        }

        if(e.key==="ArrowLeft"){

            overlay
            .querySelector(".lightbox-prev")
            .click();

        }

    };

}

/* ==========================================
   IMAGE PRELOAD
========================================== */

function preloadImages(){

    CONFIG.photos.forEach(src=>{

        const img=new Image();

        img.src=src;

    });

}

preloadImages();

/* ==========================================
   OPTIONAL RANDOM PHOTO
========================================== */

function getRandomPhoto(){

    return CONFIG.photos[
        Math.floor(
            Math.random()*
            CONFIG.photos.length
        )
    ];

}

/* ==========================================
   END
========================================== */
