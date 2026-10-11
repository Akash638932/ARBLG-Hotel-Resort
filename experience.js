document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       NAVBAR SCROLL
    ========================================= */

    const navbar = document.querySelector(".navbar");

    function navbarScroll() {

        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    }

    navbarScroll();

    window.addEventListener("scroll", navbarScroll);


    /* =========================================
       LOAD MORE
    ========================================= */

    const loadMore = document.getElementById("loadMore");

    const cards = document.querySelectorAll(".experience-card");

    let visibleCards = 6;

    if (loadMore) {

        loadMore.addEventListener("click", function () {

            visibleCards += 3;

            cards.forEach(function (card, index) {

                if (index < visibleCards) {
                    card.style.display = "";
                }

            });

            if (visibleCards >= cards.length) {
                loadMore.style.display = "none";
            }

        });

    }


    /* =========================================
       INNER CIRCLE SLIDER
    ========================================= */

    const innerBg = document.querySelector(".inner-bg");

    const innerImage =
        document.querySelector(".inner-image");

    const innerTitle =
        document.querySelector(".inner-text-box h2");

    const innerText =
        document.querySelector(".inner-text-box p");

    const innerLink =
        document.querySelector(".inner-text-box a");

    const leftArrow =
        document.querySelector(".inner-arrow.left");

    const rightArrow =
        document.querySelector(".inner-arrow.right");


    /* =========================================
       SLIDES
    ========================================= */

    const slides = [

        {
            bg:
                "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=85",

            image:
                "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=85",

            title:
                "ARBLG INNERCIRCLE<br>NEUPASS",

            text:
                "Earn and redeem NeuCoins for exclusive member rates, with your Arblg InnerCircle Neupass membership. Indulge in memorable...",

            link:
                "ENROL ›"
        },


        {
            bg:
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85",

            image:
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",

            title:
                "EXCLUSIVE<br>MEMBER BENEFITS",

            text:
                "Discover exclusive benefits and unforgettable experiences created specially for InnerCircle members.",

            link:
                "DISCOVER ›"
        },


        {
            bg:
                "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=2000&q=85",

            image:
                "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85",

            title:
                "DISCOVER MORE<br>WITH ARBLG",

            text:
                "Enjoy memorable stays, curated experiences and special privileges with your InnerCircle membership.",

            link:
                "EXPLORE ›"
        }

    ];


    let currentSlide = 0;

    let isChanging = false;


    /* =========================================
       CHANGE SLIDE
    ========================================= */

    function changeSlide(index) {

        if (isChanging) return;

        isChanging = true;


        /* Loop */

        if (index < 0) {
            index = slides.length - 1;
        }

        if (index >= slides.length) {
            index = 0;
        }


        currentSlide = index;

        const slide = slides[currentSlide];


        /* =====================================
           FADE OUT
        ===================================== */

        if (innerBg) {
            innerBg.style.opacity = "0";
        }

        if (innerImage) {
            innerImage.style.opacity = "0";
        }

        if (innerTitle) {
            innerTitle.style.opacity = "0";
        }

        if (innerText) {
            innerText.style.opacity = "0";
        }

        if (innerLink) {
            innerLink.style.opacity = "0";
        }


        /* =====================================
           CHANGE CONTENT
        ===================================== */

        setTimeout(function () {


            /* Background */

            if (innerBg) {

                innerBg.style.backgroundImage =
                    `url("${slide.bg}")`;

            }


            /* Main image */

            if (innerImage) {

                innerImage.src = slide.image;

            }


            /* Title */

            if (innerTitle) {

                innerTitle.innerHTML =
                    slide.title;

            }


            /* Description */

            if (innerText) {

                innerText.textContent =
                    slide.text;

            }


            /* Link */

            if (innerLink) {

                innerLink.textContent =
                    slide.link;

            }


            /* =================================
               FADE IN
            ================================= */

            setTimeout(function () {

                if (innerBg) {
                    innerBg.style.opacity = "1";
                }

                if (innerImage) {
                    innerImage.style.opacity = "1";
                }

                if (innerTitle) {
                    innerTitle.style.opacity = "1";
                }

                if (innerText) {
                    innerText.style.opacity = "1";
                }

                if (innerLink) {
                    innerLink.style.opacity = "1";
                }

                isChanging = false;

            }, 50);


        }, 300);

    }


    /* =========================================
       LEFT ARROW
    ========================================= */

    if (leftArrow) {

        leftArrow.addEventListener("click", function (event) {

            event.preventDefault();

            changeSlide(currentSlide - 1);

        });

    }


    /* =========================================
       RIGHT ARROW
    ========================================= */

    if (rightArrow) {

        rightArrow.addEventListener("click", function (event) {

            event.preventDefault();

            changeSlide(currentSlide + 1);

        });

    }


    /* =========================================
       FIRST SLIDE
    ========================================= */

    if (slides.length > 0) {

        if (innerBg) {
            innerBg.style.backgroundImage =
                `url("${slides[0].bg}")`;
        }

        if (innerImage) {
            innerImage.src =
                slides[0].image;
        }

        if (innerTitle) {
            innerTitle.innerHTML =
                slides[0].title;
        }

        if (innerText) {
            innerText.textContent =
                slides[0].text;
        }

        if (innerLink) {
            innerLink.textContent =
                slides[0].link;
        }

    }

});



document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       NAVBAR SCROLL
    ===================================================== */

    const navbar = document.querySelector(".navbar");

    function navbarScroll() {
        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    navbarScroll();
    window.addEventListener("scroll", navbarScroll);


    /* =====================================================
       LOAD MORE
    ===================================================== */

    const loadMore = document.getElementById("loadMore");
    const cards = document.querySelectorAll(".experience-card");

    if (loadMore) {

        loadMore.addEventListener("click", function () {

            cards.forEach(function (card) {
                card.style.display = "block";
            });

            loadMore.style.display = "none";

        });

    }


    /* =====================================================
       INNER CIRCLE SLIDER
    ===================================================== */

    const innerSection = document.querySelector(".inner-section");
    const innerBg = document.querySelector(".inner-bg");
    const innerImage = document.querySelector(".inner-image");

    const innerTitle = document.querySelector(".inner-text-box h2");
    const innerText = document.querySelector(".inner-text-box p");

    const leftArrow = document.querySelector(".inner-arrow.left");
    const rightArrow = document.querySelector(".inner-arrow.right");


    /* =====================================================
       ONLINE IMAGES
    ===================================================== */

    const slides = [

        {
            bg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85",

            image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85",

            title: "ARBLG INNERCIRCLE<br>NEUPASS",

            text: "Earn and redeem NeuCoins for exclusive member rates, with your Arblg InnerCircle Neupass membership. Indulge in memorable..."
        },

        {
            bg: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2000&q=85",

            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",

            title: "EXTRAORDINARY<br>STAYS AWAIT",

            text: "Discover a world of luxury with ARBLG Hotels — where timeless elegance, world-class comfort and unforgettable experiences come together."
        },

        {
            bg: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=2000&q=85",

            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85",

            title: "DISCOVER MORE<br>WITH ARBLG",

            text: "Enjoy memorable stays, curated experiences and special privileges with ARBLG. Explore destinations created for unforgettable journeys."
        },

        {
            bg: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=2000&q=85",

            image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=85",

            title: "ICONIC<br>DESTINATIONS",

            text: "Experience extraordinary destinations, heritage, culture and luxury with ARBLG Hotels."
        }

    ];


    let currentSlide = 0;


    /* =====================================================
       CHANGE SLIDE
    ===================================================== */

    function changeSlide(index) {

        if (index < 0) {
            index = slides.length - 1;
        }

        if (index >= slides.length) {
            index = 0;
        }

        currentSlide = index;

        const slide = slides[currentSlide];


        /* Fade effect */

        if (innerSection) {
            innerSection.classList.add("changing");
        }


        setTimeout(function () {

            /* Background */

            if (innerBg) {
                innerBg.style.backgroundImage =
                    `url("${slide.bg}")`;
            }


            /* Main image */

            if (innerImage) {
                innerImage.src = slide.image;
            }


            /* Heading */

            if (innerTitle) {
                innerTitle.innerHTML = slide.title;
            }


            /* Description */

            if (innerText) {
                innerText.textContent = slide.text;
            }


            if (innerSection) {
                innerSection.classList.remove("changing");
            }

        }, 180);

    }


    /* =====================================================
       LEFT ARROW
    ===================================================== */

    if (leftArrow) {

        leftArrow.addEventListener("click", function (e) {

            e.preventDefault();

            changeSlide(currentSlide - 1);

        });

    }


    /* =====================================================
       RIGHT ARROW
    ===================================================== */

    if (rightArrow) {

        rightArrow.addEventListener("click", function (e) {

            e.preventDefault();

            changeSlide(currentSlide + 1);

        });

    }


    /* =====================================================
       INITIAL SLIDE
    ===================================================== */

    changeSlide(0);


    /* =====================================================
       AUTO SLIDER
       7 seconds
    ===================================================== */

    let autoSlider = setInterval(function () {

        changeSlide(currentSlide + 1);

    }, 7000);


    /* Stop auto slide when user clicks */

    function resetAutoSlider() {

        clearInterval(autoSlider);

        autoSlider = setInterval(function () {

            changeSlide(currentSlide + 1);

        }, 7000);

    }


    if (leftArrow) {
        leftArrow.addEventListener("click", resetAutoSlider);
    }

    if (rightArrow) {
        rightArrow.addEventListener("click", resetAutoSlider);
    }


    /* =====================================================
       KEYBOARD CONTROL
    ===================================================== */

    document.addEventListener("keydown", function (event) {

        if (event.key === "ArrowLeft") {
            changeSlide(currentSlide - 1);
            resetAutoSlider();
        }

        if (event.key === "ArrowRight") {
            changeSlide(currentSlide + 1);
            resetAutoSlider();
        }

    });

});




/* ================= MORE MENU ================= */

const moreBtn = document.getElementById("moreBtn");
const moreMenu = document.querySelector(".more-menu");

if (moreBtn && moreMenu) {

    moreBtn.addEventListener("click", function (e) {

        e.stopPropagation();

        moreMenu.classList.toggle("open");

    });


    document.addEventListener("click", function () {

        moreMenu.classList.remove("open");

    });

}






/* =====================================================
   BOOK A STAY
===================================================== */

const bookStayBtn = document.getElementById("bookStayBtn");
const bookingPanel = document.getElementById("bookingPanel");
const closeBooking = document.getElementById("closeBooking");


/* OPEN */

if (bookStayBtn && bookingPanel) {

    bookStayBtn.addEventListener("click", function () {

        bookingPanel.classList.add("active");

    });

}


/* CLOSE */

if (closeBooking && bookingPanel) {

    closeBooking.addEventListener("click", function () {

        bookingPanel.classList.remove("active");

    });

}


/* =====================================================
   ADULT / CHILD
===================================================== */

let adults = 1;
let children = 0;
let rooms = 1;


const adultPlus = document.getElementById("adultPlus");
const adultMinus = document.getElementById("adultMinus");

const childPlus = document.getElementById("childPlus");
const childMinus = document.getElementById("childMinus");


function updateGuests() {

    document.getElementById("adultCount").textContent = adults;
    document.getElementById("adultCountText").textContent = adults;

    document.getElementById("childCount").textContent = children;
    document.getElementById("childCountText").textContent = children;

    document.getElementById("roomCountText").textContent = rooms;

}


/* ADULT + */

adultPlus.addEventListener("click", function () {

    adults++;

    updateGuests();

});


/* ADULT - */

adultMinus.addEventListener("click", function () {

    if (adults > 1) {

        adults--;

        updateGuests();

    }

});


/* CHILD + */

childPlus.addEventListener("click", function () {

    children++;

    updateGuests();

});


/* CHILD - */

childMinus.addEventListener("click", function () {

    if (children > 0) {

        children--;

        updateGuests();

    }

});


/* =====================================================
   ADD MORE ROOMS
===================================================== */

const addRoom = document.getElementById("addRoom");

addRoom.addEventListener("click", function () {

    rooms++;

    document.getElementById("roomCountText").textContent = rooms;

    alert("Room " + rooms + " added.");

});


/* =====================================================
   SPECIAL CODE
===================================================== */

const specialCode = document.getElementById("specialCode");
const specialOptions =
    document.querySelectorAll(".special-option");


specialCode.addEventListener("click", function (event) {

    event.stopPropagation();

    specialCode.classList.toggle("open");

});


specialOptions.forEach(function (option) {

    option.addEventListener("click", function (event) {

        event.stopPropagation();

        specialOptions.forEach(function (item) {

            item.classList.remove("selected");

            const check = item.textContent.trim();

            if (check.startsWith("✓")) {

                item.textContent =
                    item.textContent.replace("✓", "").trim();

            }

        });


        option.classList.add("selected");

        if (!option.textContent.trim().startsWith("✓")) {

            option.textContent =
                "✓  " + option.textContent.trim();

        }


        specialCode.classList.remove("open");

    });

});


/* =====================================================
   CLOSE SPECIAL CODE WHEN CLICK OUTSIDE
===================================================== */

document.addEventListener("click", function () {

    if (specialCode) {

        specialCode.classList.remove("open");

    }

});


/* =====================================================
   CHECK RATES
===================================================== */

const checkRatesBtn =
    document.getElementById("checkRatesBtn");


checkRatesBtn.addEventListener("click", function () {

    const hotelInput =
        document.getElementById("hotelInput");

    const checkIn =
        document.getElementById("checkIn");

    const checkOut =
        document.getElementById("checkOut");


    const hotel = hotelInput.value.trim();


    /* HOTEL CHECK */

    if (!hotel) {

        alert("Please enter a Hotel or Destination.");

        hotelInput.focus();

        return;

    }


    /* CHECK-IN CHECK */

    if (!checkIn.value) {

        alert("Please select Check-In date.");

        checkIn.focus();

        return;

    }


    /* CHECK-OUT CHECK */

    if (!checkOut.value) {

        alert("Please select Check-Out date.");

        checkOut.focus();

        return;

    }


    /* DATE CHECK */

    if (
        new Date(checkOut.value) <=
        new Date(checkIn.value)
    ) {

        alert("Check-Out date must be after Check-In date.");

        checkOut.focus();

        return;

    }


    /* SAVE DATA */

    const bookingData = {

        hotel: hotel,

        checkIn: checkIn.value,

        checkOut: checkOut.value,

        adults: adults,

        children: children,

        rooms: rooms

    };


    sessionStorage.setItem(
        "bookingData",
        JSON.stringify(bookingData)
    );


    /* GO TO CHECK RATES */

    window.location.href = "check-rates.html";

});