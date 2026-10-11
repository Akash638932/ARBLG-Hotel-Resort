/* ================= NAVBAR ================= */

const navbar = document.querySelector(".navbar");

function handleNavbar() {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

handleNavbar();

window.addEventListener("scroll", handleNavbar);


/* ================= LOAD MORE ================= */

const loadMore = document.getElementById("loadMore");

if (loadMore) {

    loadMore.addEventListener("click", function () {

        const cards = document.querySelectorAll(
            "#memberOffers .offer-card"
        );

        cards.forEach(card => {
            card.style.display = "block";
        });

        loadMore.innerHTML = "ALL OFFERS LOADED ✓";
    });

}


/* ================= INNER CIRCLE SLIDER ================= */

const innerSlides = [

    {
        image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",

        title:
        "ARBLG INNERCIRCLE NEUPASS",

        description:
        "Enjoy special room rates, earn and redeem NeuCoins and indulge in exceptional benefits with our InnerCircle Loyalty Program."
    },

    {
        image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",

        title:
        "ARBLG INNERCIRCLE BENEFITS",

        description:
        "Discover exclusive member benefits, special stays and memorable experiences designed for our InnerCircle members."
    },

    {
        image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85",

        title:
        "ARBLG PREMIUM STAYS",

        description:
        "Experience refined hospitality, special room rates and thoughtful privileges across our hotels and resorts."
    }

];


let currentSlide = 0;

const innerImage = document.getElementById("innerImage");
const innerTitle = document.getElementById("innerTitle");
const innerDescription = document.getElementById("innerDescription");

function showSlide(index) {

    currentSlide =
        (index + innerSlides.length) %
        innerSlides.length;

    const slide = innerSlides[currentSlide];

    innerImage.src = slide.image;

    innerTitle.textContent = slide.title;

    innerDescription.textContent =
        slide.description;
}


document.getElementById("prev").addEventListener(
    "click",
    () => showSlide(currentSlide - 1)
);

document.getElementById("next").addEventListener(
    "click",
    () => showSlide(currentSlide + 1)
);


/* AUTO SLIDE */

setInterval(() => {

    showSlide(currentSlide + 1);

}, 5000);


/* KEYBOARD */

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowLeft") {
        showSlide(currentSlide - 1);
    }

    if (event.key === "ArrowRight") {
        showSlide(currentSlide + 1);
    }

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