//==================================================
//                  ART.JS
//              GALLERY LIGHTBOX
//==================================================

"use strict";



//==================================================
//              SELECT ELEMENTS
//==================================================


const galleryItems =
document.querySelectorAll(".gallery-item img");


const lightbox =
document.getElementById("lightbox");


const lightboxImg =
document.getElementById("lightboxImg");


const closeLightbox =
document.getElementById("closeLightbox");




//==================================================
//              IMAGE STORAGE
//==================================================

let currentImage = 0;


const images = [];


galleryItems.forEach((img,index)=>{


    images.push(img.src);



    img.addEventListener(
        "click",
        ()=>{


            currentImage = index;


            openLightbox();


        }

    );


});




//==================================================
//              OPEN LIGHTBOX
//==================================================

function openLightbox(){


    if(!lightbox) return;


    lightbox.classList.add(
        "active"
    );


    showImage();


    document.body.style.overflow =
    "hidden";


}




//==================================================
//              CLOSE LIGHTBOX
//==================================================

function closeLightboxBox(){


    if(!lightbox) return;


    lightbox.classList.remove(
        "active"
    );


    document.body.style.overflow =
    "auto";


}



if(closeLightbox){


    closeLightbox.addEventListener(
        "click",
        closeLightboxBox
    );


}




//==================================================
//          CLICK OUTSIDE CLOSE
//==================================================

if(lightbox){


    lightbox.addEventListener(
        "click",
        (event)=>{


            if(
                event.target === lightbox
            ){

                closeLightboxBox();

            }


        }

    );


}

//==================================================
//          IMAGE NAVIGATION
//==================================================


const prevImage =
document.getElementById("prevImage");


const nextImage =
document.getElementById("nextImage");


const imageCounter =
document.getElementById("imageCounter");





//==================================================
//              SHOW IMAGE
//==================================================

function showImage(){


    if(!lightboxImg || images.length === 0){

        return;

    }


    lightboxImg.src =
    images[currentImage];



    if(imageCounter){

        imageCounter.textContent =

        `${currentImage + 1} / ${images.length}`;

    }

}




//==================================================
//              NEXT IMAGE
//==================================================

function next(){

    currentImage++;


    if(
        currentImage >= images.length
    ){

        currentImage = 0;

    }


    showImage();

}





//==================================================
//              PREVIOUS IMAGE
//==================================================

function previous(){

    currentImage--;


    if(
        currentImage < 0
    ){

        currentImage =
        images.length - 1;

    }


    showImage();

}





if(nextImage){


    nextImage.addEventListener(
        "click",
        next
    );


}




if(prevImage){


    prevImage.addEventListener(
        "click",
        previous
    );


}




//==================================================
//              KEYBOARD CONTROL
//==================================================


document.addEventListener(
    "keydown",
    (event)=>{


        if(
            !lightbox ||
            !lightbox.classList.contains("active")
        ){

            return;

        }



        if(event.key === "ArrowRight"){

            next();

        }



        if(event.key === "ArrowLeft"){

            previous();

        }



        if(event.key === "Escape"){

            closeLightboxBox();

        }



    }

);





//==================================================
//              TOUCH SWIPE
//==================================================


let touchStartX = 0;


let touchEndX = 0;



if(lightbox){


    lightbox.addEventListener(
        "touchstart",
        (event)=>{


            touchStartX =
            event.changedTouches[0].screenX;


        }

    );



    lightbox.addEventListener(
        "touchend",
        (event)=>{


            touchEndX =
            event.changedTouches[0].screenX;



            handleSwipe();


        }

    );


}




function handleSwipe(){


    const distance =
    touchEndX - touchStartX;



    if(distance > 50){

        previous();

    }



    if(distance < -50){

        next();

    }


}
