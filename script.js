/* =========================
   EXPLORE BUTTON
========================= */

// When Explore Now is clicked,
// scroll smoothly to the next section.

document
    .getElementById("exploreBtn")
    .addEventListener("click", function () {

        document
            .getElementById("gallery")
            .scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

    });


/* =========================
   DARK / LIGHT MODE
========================= */

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener("click", function () {

    document
        .body
        .classList
        .toggle("dark");


    if (
        document.body.classList.contains("dark")
    ) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";

    }

});


/* =========================
   ANIMATE SKILL BARS
========================= */

document
    .getElementById("skillsBtn")
    .addEventListener("click", function () {

        const bars =
            document.querySelectorAll(
                ".bar-fill"
            );


        bars.forEach(function (bar) {

            const width =
                bar.dataset.width;

            bar.style.width = width;

        });

    });


/* =========================
   INTERACTIVE COUNTER
========================= */

let count = 0;


const countElement =
    document.getElementById("count");


/* Increase */

document
    .getElementById("increaseBtn")
    .addEventListener("click", function () {

        count++;

        updateCounter();

    });


/* Decrease */

document
    .getElementById("decreaseBtn")
    .addEventListener("click", function () {

        count--;

        updateCounter();

    });


/* Reset */

document
    .getElementById("resetBtn")
    .addEventListener("click", function () {

        count = 0;

        updateCounter();

    });


/* Update Counter */

function updateCounter() {

    countElement.textContent = count;


    // Small animation when number changes

    countElement.animate(

        [
            {
                transform:
                    "scale(1.2)"
            },

            {
                transform:
                    "scale(1)"
            }
        ],

        {
            duration: 180,

            easing: "ease-out"
        }

    );

}


/* =========================
   BACK TO TOP
========================= */

document
    .getElementById("topBtn")
    .addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });