window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0, 0, 0, 0.85)";
    } else {
        navbar.style.background = "rgba(0,0,0,0.4)";
    }
});
const slider = document.getElementById("slider");
const cards = slider.querySelectorAll(".card");
const cardWidth = 450; 
cards.forEach(card => {
    const clone = card.cloneNode(true);
    slider.appendChild(clone);
});
function scrollRightBtn() {
    slider.scrollLeft += cardWidth;
    if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
    }
}
function scrollLeftBtn() {
    slider.scrollLeft -= cardWidth;

    if (slider.scrollLeft <= 0) {
        slider.scrollLeft = slider.scrollWidth / 2;
    }
}
const slider1 = document.getElementById("slider1");
const cards1 = slider.querySelectorAll(".card1");
const cardWidth1 = 450; 
cards.forEach(card => {
    const clone = card.cloneNode(true);
    slider.appendChild(clone);
});

function scrollRightBtn() {
    slider.scrollLeft += cardWidth;
    if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
    }
}
function scrollLeftBtn() {
    slider.scrollLeft -= cardWidth;

    if (slider.scrollLeft <= 0) {
        slider.scrollLeft = slider.scrollWidth / 2;
    }
}
const sliders = document.querySelectorAll(".cards-container");
const leftArrows = document.querySelectorAll(".arrow.left");
const rightArrows = document.querySelectorAll(".arrow.right");

sliders.forEach((slider, index) => {

    rightArrows[index].addEventListener("click", () => {
        slider.scrollBy({
            left: 350,
            behavior: "smooth"
        });
    });

    leftArrows[index].addEventListener("click", () => {
        slider.scrollBy({
            left: -350,
            behavior: "smooth"
        });
    });

});

const slides = [

{
image:"https://images.unsplash.com/photo-1519741497674-611481863552",
title:"ROMANTIC STAYS",
desc:"From quiet mornings to lingering sunsets, romance unfolds in its own rhythm.",
left:"TIMELESS WEDDINGS",
right:"ARBLG HOLIDAYS"
},

{
image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
title:" HOLIDAYS",
desc:"Experience luxury vacations and dream destinations with Taj.",
left:"ROMANTIC STAYS",
right:"ROYAL PALACES"
},

{
image:"https://images.unsplash.com/photo-1566073771259-6a8506099945",
title:"ROYAL PALACES",
desc:"Step into regal heritage and timeless Indian palace luxury.",
left:"ARBLG HOLIDAYS",
right:"TIMELESS WEDDINGS"
},
{
image:"https://images.unsplash.com/photo-1566073771259-6a8506099945",
title:"ROYAL PALACES",
desc:"Step into regal heritage and timeless Indian palace luxury.",
left:"HOLIDAYS",
right:"TIMELESS WEDDINGS"

},
{
image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
title:"ROYAL PALACES",
desc:"Step into regal heritage and timeless Indian palace luxury.",
left:"ARBLG HOLIDAYS",
right:"TIMELESS WEDDINGS"
},
{
image:"https://wallpaperaccess.com/full/8183916.jpg",
title:"ROYAL PALACES",
desc:"Step into regal heritage and timeless Indian palace luxury.",
left:"ARBLG HOLIDAYS",
right:"TIMELESS WEDDINGS"
},
{
image:"https://wallpaperaccess.com/full/7148774.jpg",
title:"ROYAL PALACES",
desc:"Step into regal heritage and timeless Indian palace luxury.",
left:"ARBLG HOLIDAYS",
right:"TIMELESS WEDDINGS"
},
{
image:"https://images.unsplash.com/photo-1566073771259-6a8506099945",
title:"ROYAL PALACES",
desc:"Step into regal heritage and timeless Indian palace luxury.",
left:"ARBLG HOLIDAYS",
right:"TIMELESS WEDDINGS"
},
{
image:"https://images.unsplash.com/photo-1566073771259-6a8506099945",
title:"ROYAL PALACES",
desc:"Step into regal heritage and timeless Indian palace luxury.",
left:"ARBLG HOLIDAYS",
right:"TIMELESS WEDDINGS"
}
]

let index = 0
function updateSlider(){
document.getElementById("mainImage").src = slides[index].image
document.getElementById("title").innerText = slides[index].title
document.getElementById("desc").innerText = slides[index].desc
document.getElementById("leftText").innerText = slides[index].left
document.getElementById("rightText").innerText = slides[index].right
document.getElementById("bgImage").style.backgroundImage = `url(${slides[index].image})`

}
function nextSlide(){

index++

if(index >= slides.length){
index = 0
}

updateSlider()

}

function prevSlide(){

index--

if(index < 0){
index = slides.length - 1
}

updateSlider()

}
updateSlider()
setInterval(()=>{
nextSlide()
},5000)


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


const bookStayBtn = document.getElementById("bookStayBtn");
const bookingPanel = document.getElementById("bookingPanel");
const closeBooking = document.getElementById("closeBooking");

bookStayBtn.addEventListener("click", () => {
    bookingPanel.classList.add("active");
});

closeBooking.addEventListener("click", () => {
    bookingPanel.classList.remove("active");
});


/* ADULT */

let adults = 1;
let children = 0;
let rooms = 1;

document.getElementById("adultPlus").onclick = () => {
    adults++;
    updateGuests();
};

document.getElementById("adultMinus").onclick = () => {
    if (adults > 1) adults--;
    updateGuests();
};


/* CHILD */

document.getElementById("childPlus").onclick = () => {
    children++;
    updateGuests();
};

document.getElementById("childMinus").onclick = () => {
    if (children > 0) children--;
    updateGuests();
};


/* ROOM */

document.getElementById("addRoom").onclick = () => {
    rooms++;
    updateGuests();
};


function updateGuests() {

    document.getElementById("adultCount").textContent = adults;
    document.getElementById("adultCountText").textContent = adults;

    document.getElementById("childCount").textContent = children;
    document.getElementById("childCountText").textContent = children;

    document.getElementById("roomCountText").textContent = rooms;
}


/* SPECIAL CODE */

const specialCode = document.getElementById("specialCode");
const specialDropdown =
    document.getElementById("specialDropdown");

specialCode.addEventListener("click", (e) => {

    e.stopPropagation();

    specialDropdown.classList.toggle("open");

});

document.addEventListener("click", () => {
    specialDropdown.classList.remove("open");
});

const checkRatesBtn = document.getElementById("checkRatesBtn");

checkRatesBtn.addEventListener("click", function () {

    const hotel = document.querySelector(".hotel-search input").value;

    if (!hotel.trim()) {
        alert("Please enter a Hotel or Destination");
        return;
    }

    window.location.href = "check-rates.html";
});