// ================= MODIFY SEARCH =================

const modifySearch = document.getElementById("modifySearch");

if (modifySearch) {
    modifySearch.addEventListener("click", function () {
        window.history.back();
    });
}


// ================= SELECT ROOM =================

const roomButtons = document.querySelectorAll(".select-room");

roomButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const roomCard = button.closest(".room-card");

        const roomName =
            roomCard.querySelector("h3").textContent;

        sessionStorage.setItem(
            "selectedRoom",
            roomName
        );

        window.location.href = "booking.html";

    });

});


// ================= SORT =================

const sortRooms = document.getElementById("sortRooms");

if (sortRooms) {

    sortRooms.addEventListener("change", function () {

        const cards =
            [...document.querySelectorAll(".room-card")];

        const roomsSection =
            document.querySelector(".rooms-section");

        if (this.value === "Price: Low to High") {

            cards.sort(function (a, b) {

                const priceA =
                    parseInt(
                        a.querySelector(".price strong")
                         .textContent
                         .replace(/[₹,]/g, "")
                    );

                const priceB =
                    parseInt(
                        b.querySelector(".price strong")
                         .textContent
                         .replace(/[₹,]/g, "")
                    );

                return priceA - priceB;

            });

        }

        if (this.value === "Price: High to Low") {

            cards.sort(function (a, b) {

                const priceA =
                    parseInt(
                        a.querySelector(".price strong")
                         .textContent
                         .replace(/[₹,]/g, "")
                    );

                const priceB =
                    parseInt(
                        b.querySelector(".price strong")
                         .textContent
                         .replace(/[₹,]/g, "")
                    );

                return priceB - priceA;

            });

        }

        cards.forEach(function (card) {
            roomsSection.appendChild(card);
        });

    });

}


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









