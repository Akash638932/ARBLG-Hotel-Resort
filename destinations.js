// =====================================================
// ARBLG DESTINATIONS JAVASCRIPT
// FINAL CLEAN VERSION
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    // =====================================================
    // ELEMENTS
    // =====================================================

    const navbar = document.getElementById("navbar");
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    const hotelCards = Array.from(
        document.querySelectorAll(".hotel-card")
    );

    const destinationSearch =
        document.getElementById("destinationSearch");

    const destinationFilter =
        document.getElementById("destinationFilter");

    const brandFilter =
        document.getElementById("brandFilter");

    const themeFilter =
        document.getElementById("themeFilter");

    const loadMoreBtn =
        document.getElementById("loadMoreBtn");

    const destinationTabs =
        document.querySelectorAll(".destination-tab");

    const listViewBtn =
        document.getElementById("listViewBtn");

    const mapViewBtn =
        document.getElementById("mapViewBtn");

    const listView =
        document.getElementById("listView");

    const mapView =
        document.getElementById("mapView");


    // =====================================================
    // NAVBAR SCROLL
    // =====================================================

    window.addEventListener("scroll", function () {

        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });


    // =====================================================
    // MOBILE MENU
    // =====================================================

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("mobile-open");

            if (
                navLinks.classList.contains("mobile-open")
            ) {
                menuToggle.textContent = "✕";
            } else {
                menuToggle.textContent = "☰";
            }

        });


        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("mobile-open");

                menuToggle.textContent = "☰";

            });

        });

    }


    // =====================================================
    // HOTEL COUNTRY
    // =====================================================

    function getHotelCountry(card) {

        // Agar HTML mein data-country hai
        if (card.dataset.country) {

            return card.dataset.country
                .toLowerCase()
                .replace(/\s+/g, "-");

        }


        const city =
            (card.dataset.city || "").toLowerCase();


        // INDIA
        const indiaCities = [
            "pench",
            "kanha",
            "jaipur",
            "bandhavgarh",
            "delhi",
            "nainital",
            "goa",
            "agra",
            "agartala",
            "ahmedabad",
            "ajmer",
            "alibaug",
            "alleppey",
            "amritsar",
            "andamans"
        ];


        if (
            indiaCities.some(function (item) {
                return city.includes(item);
            })
        ) {
            return "india";
        }


        // MALDIVES
        if (city.includes("maldives")) {
            return "maldives";
        }


        // USA
        if (
            city.includes("usa") ||
            city.includes("new york") ||
            city.includes("miami") ||
            city.includes("los angeles") ||
            city.includes("california")
        ) {
            return "usa";
        }


        // SRI LANKA
        if (
            city.includes("sri lanka") ||
            city.includes("colombo") ||
            city.includes("kandy") ||
            city.includes("galle")
        ) {
            return "sri-lanka";
        }


        return "india";
    }


    // =====================================================
    // FILTER STATE
    // =====================================================

    let selectedCountry = "all";
    let showingExtra = false;


    // =====================================================
    // APPLY ALL FILTERS
    // =====================================================

    function applyFilters() {

        const searchValue =
            destinationSearch
                ? destinationSearch.value.toLowerCase().trim()
                : "";


        const cityValue =
            destinationFilter
                ? destinationFilter.value.toLowerCase().trim()
                : "";


        const brandValue =
            brandFilter
                ? brandFilter.value.toLowerCase()
                : "all";


        const themeValue =
            themeFilter
                ? themeFilter.value.toLowerCase()
                : "all";


        hotelCards.forEach(function (card) {

            const city =
                (card.dataset.city || "").toLowerCase();

            const brand =
                (card.dataset.brand || "").toLowerCase();

            const theme =
                (card.dataset.theme || "").toLowerCase();

            const country =
                getHotelCountry(card);


            // Country filter
            const countryMatch =
                selectedCountry === "all" ||
                country === selectedCountry;


            // Search filter
            const searchMatch =
                searchValue === "" ||
                city.includes(searchValue) ||
                card.innerText
                    .toLowerCase()
                    .includes(searchValue);


            // City filter
            const cityMatch =
                cityValue === "" ||
                city.includes(cityValue) ||
                card.innerText
                    .toLowerCase()
                    .includes(cityValue);


            // Brand filter
            const brandMatch =
                brandValue === "all" ||
                brand === brandValue;


            // Theme filter
            const themeMatch =
                themeValue === "all" ||
                theme === themeValue;


            const showCard =
                countryMatch &&
                searchMatch &&
                cityMatch &&
                brandMatch &&
                themeMatch;


            if (showCard) {

                card.classList.remove("filter-hidden");

            } else {

                card.classList.add("filter-hidden");

            }

        });


        updateHotelDisplay();

    }


    // =====================================================
    // SHOW / HIDE HOTEL CARDS
    // =====================================================

    function updateHotelDisplay() {

        let extraAvailable = false;

        let visibleCount = 0;


        hotelCards.forEach(function (card) {

            const filtered =
                card.classList.contains("filter-hidden");

            const extra =
                card.classList.contains("extra");


            if (filtered) {

                card.classList.add("hidden");

                return;

            }


            if (extra && !showingExtra) {

                card.classList.add("hidden");

                extraAvailable = true;

                return;

            }


            card.classList.remove("hidden");

            visibleCount++;

        });


        // Load More button
        if (loadMoreBtn) {

            if (extraAvailable) {

                loadMoreBtn.style.display = "block";

                loadMoreBtn.textContent =
                    "LOAD MORE⌄";

            } else {

                loadMoreBtn.style.display = "none";

            }

        }


        // No result message
        let noResult =
            document.querySelector(".no-results");


        if (!noResult) {

            noResult =
                document.createElement("div");

            noResult.className = "no-results";

            noResult.textContent =
                "No hotels found for this destination.";

            if (listView) {
                listView.appendChild(noResult);
            }

        }


        if (visibleCount === 0) {

            noResult.style.display = "block";

        } else {

            noResult.style.display = "none";

        }

    }


    // =====================================================
    // WORLD AWAITS DESTINATION TABS
    // =====================================================

    destinationTabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            // Active tab
            destinationTabs.forEach(function (item) {

                item.classList.remove("active");

            });


            this.classList.add("active");


            // Selected destination
            selectedCountry =
                (
                    this.dataset.destination ||
                    "all"
                )
                .toLowerCase()
                .replace(/\s+/g, "-");


            // Reset search/filter
            if (destinationSearch) {
                destinationSearch.value = "";
            }

            if (destinationFilter) {
                destinationFilter.value = "";
            }

            if (brandFilter) {
                brandFilter.value = "all";
            }

            if (themeFilter) {
                themeFilter.value = "all";
            }


            showingExtra = false;


            // Apply
            applyFilters();


            // Scroll to hotel list
            setTimeout(function () {

                if (listView) {

                    listView.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }, 100);

        });

    });


    // =====================================================
    // DESTINATION SEARCH
    // =====================================================

    if (destinationSearch) {

        destinationSearch.addEventListener(
            "input",
            function () {

                showingExtra = false;

                applyFilters();

            }
        );

    }


    // =====================================================
    // CITY FILTER
    // =====================================================

    if (destinationFilter) {

        destinationFilter.addEventListener(
            "input",
            function () {

                showingExtra = false;

                applyFilters();

            }
        );

    }


    // =====================================================
    // BRAND FILTER
    // =====================================================

    if (brandFilter) {

        brandFilter.addEventListener(
            "change",
            function () {

                showingExtra = false;

                applyFilters();

            }
        );

    }


    // =====================================================
    // THEME FILTER
    // =====================================================

    if (themeFilter) {

        themeFilter.addEventListener(
            "change",
            function () {

                showingExtra = false;

                applyFilters();

            }
        );

    }


    // =====================================================
    // LOAD MORE
    // =====================================================

    if (loadMoreBtn) {

        loadMoreBtn.addEventListener(
            "click",
            function () {

                showingExtra = true;

                updateHotelDisplay();

            }
        );

    }


    // =====================================================
    // FEATURED DESTINATION SLIDER
    // =====================================================

    const featuredSlider =
        document.getElementById("featuredSlider");

    const featuredLeft =
        document.querySelector(".featured-left");

    const featuredRight =
        document.querySelector(".featured-right");


    if (featuredSlider) {

        featuredLeft?.addEventListener(
            "click",
            function () {

                featuredSlider.scrollBy({
                    left: -350,
                    behavior: "smooth"
                });

            }
        );


        featuredRight?.addEventListener(
            "click",
            function () {

                featuredSlider.scrollBy({
                    left: 350,
                    behavior: "smooth"
                });

            }
        );

    }


    // =====================================================
    // LIST VIEW
    // =====================================================

    if (listViewBtn) {

        listViewBtn.addEventListener(
            "click",
            function () {

                listViewBtn.classList.add("active");

                mapViewBtn?.classList.remove("active");


                if (listView) {
                    listView.style.display = "block";
                }


                if (mapView) {
                    mapView.style.display = "none";
                }

            }
        );

    }


    // =====================================================
    // MAP VIEW
    // =====================================================

    if (mapViewBtn) {

        mapViewBtn.addEventListener(
            "click",
            function () {

                mapViewBtn.classList.add("active");

                listViewBtn?.classList.remove("active");


                if (listView) {
                    listView.style.display = "none";
                }


                if (mapView) {
                    mapView.style.display = "flex";
                }

            }
        );

    }


    // =====================================================
    // TRAVEL STORIES SLIDER
    // =====================================================

    const storiesSlider =
        document.querySelector(".stories-slider");

    const storiesLeft =
        document.querySelector(".stories-left");

    const storiesRight =
        document.querySelector(".stories-right");


    if (storiesSlider) {

        storiesLeft?.addEventListener(
            "click",
            function () {

                storiesSlider.scrollBy({
                    left: -400,
                    behavior: "smooth"
                });

            }
        );


        storiesRight?.addEventListener(
            "click",
            function () {

                storiesSlider.scrollBy({
                    left: 400,
                    behavior: "smooth"
                });

            }
        );

    }


    // =====================================================
    // MEMBERSHIP SLIDER
    // =====================================================

    const membershipSlides = [

        {
            image:
                "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=85",

            title:
                "ARBLG INNER CIRCLE",

            text:
                "Enjoy member-only benefits, special rates and memorable experiences with every stay."
        },

        {
            image:
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85",

            title:
                "LUXURY STAYS",

            text:
                "Discover elegant hotels, beautiful surroundings and exceptional experiences designed for you."
        },

        {
            image:
                "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=85",

            title:
                "EXCLUSIVE ESCAPES",

            text:
                "Travel to extraordinary destinations and enjoy unforgettable moments with ARBLG."
        },

        {
            image:
                "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1000&q=85",

            title:
                "RESORT EXPERIENCES",

            text:
                "Relax, recharge and experience premium hospitality at our beautiful resort destinations."
        }

    ];


    let membershipIndex = 0;


    const membershipImage =
        document.getElementById("membershipImage");

    const membershipTitle =
        document.getElementById("membershipTitle");

    const membershipText =
        document.getElementById("membershipText");

    const membershipNext =
        document.querySelector(".membership-next");

    const membershipPrev =
        document.querySelector(".membership-prev");


    // Preload membership images
    membershipSlides.forEach(function (slide) {

        const img = new Image();

        img.src = slide.image;

    });


    function showMembershipSlide(index) {

        if (
            !membershipImage ||
            !membershipTitle ||
            !membershipText
        ) {
            return;
        }


        const slide =
            membershipSlides[index];


        membershipImage.style.opacity = "0";


        setTimeout(function () {

            membershipImage.src =
                slide.image;

            membershipImage.alt =
                slide.title;

            membershipTitle.textContent =
                slide.title;

            membershipText.textContent =
                slide.text;

            membershipImage.style.opacity = "1";

        }, 180);

    }


    if (membershipNext) {

        membershipNext.addEventListener(
            "click",
            function () {

                membershipIndex++;

                if (
                    membershipIndex >=
                    membershipSlides.length
                ) {
                    membershipIndex = 0;
                }


                showMembershipSlide(
                    membershipIndex
                );

            }
        );

    }


    if (membershipPrev) {

        membershipPrev.addEventListener(
            "click",
            function () {

                membershipIndex--;

                if (membershipIndex < 0) {

                    membershipIndex =
                        membershipSlides.length - 1;

                }


                showMembershipSlide(
                    membershipIndex
                );

            }
        );

    }


    // =====================================================
    // BOOK NOW
    // =====================================================

    document
        .querySelectorAll(".book-now")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    alert(
                        "Welcome to ARBLG Booking.\nPlease select your stay dates."
                    );

                }
            );

        });


    // =====================================================
    // VISIT HOTEL
    // =====================================================

    document
        .querySelectorAll(".visit-hotel")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();


                    const card =
                        button.closest(".hotel-card");


                    const hotelName =
                        card?.querySelector("h3")
                            ?.innerText;


                    if (hotelName) {

                        alert(
                            "Opening: " +
                            hotelName
                        );

                    }

                }
            );

        });


    // =====================================================
    // CHAT
    // =====================================================

    const chatButton =
        document.querySelector(".chat-button");


    if (chatButton) {

        chatButton.addEventListener(
            "click",
            function () {

                alert(
                    "Hello! 👋\nWelcome to ARBLG.\nHow can we help you?"
                );

            }
        );

    }


    // =====================================================
    // BACK TO TOP
    // =====================================================

    const backTop =
        document.querySelector(".back-to-top");


    if (backTop) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 500) {

                    backTop.classList.add("show");

                } else {

                    backTop.classList.remove("show");

                }

            }
        );


        backTop.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    // =====================================================
    // SMOOTH INTERNAL LINKS
    // =====================================================

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute("href");


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(targetId);


                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }
            );

        });


    // =====================================================
    // INITIAL DISPLAY
    // =====================================================

    applyFilters();

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