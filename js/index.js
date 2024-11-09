
function initCarousel () {

    const mainCourse = document.querySelector(".main-course-carousel");
    const DrinkCourse = document.querySelector(".drinks-carousel");
    const SnackCourse = document.querySelector(".snack-carousel");

    for (let i = 0; i < 5; i++) {
        const mainCourseCoursel = document
        .querySelector(".main-course-carousel-slide")
        .cloneNode(true);

        mainCourse.appendChild(mainCourseCoursel);

        const drinksCourseCoursel = document
        .querySelector(".drinks-carousel-slide")
        .cloneNode(true);

        DrinkCourse.appendChild(drinksCourseCoursel);

        const snackCourseCoursel = document
        .querySelector(".snack-carousel-slide")
        .cloneNode(true);

        SnackCourse.appendChild(snackCourseCoursel);
    }
}

initCarousel();

flatpickr("#date", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    theme: "dark"
});

const form = document.querySelector("#item-reservation-items-form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const tablename = document.querySelector("#table_name_people").value;
    const tableSize = document.querySelector("#people_capacity").value;
    const date = document.querySelector("#date").value;
    const note = document.querySelector("#notes_people").value;

    const notesText =
    `Halo, Saya Ingin Reservasi meja untuk ${tableSize} orang, atas nama ${tablename} pada tanggal/waktu pada ${date}
    Dengan Notes:
    ${note || "*Pesan Di Tempat"}`;

    window.location.replace(`https://wa.me/+6282276048623?text=${notesText}`)
});

const hamburger = document.querySelector("#burger-navigation");
const mobile = document.querySelector(".nav-mobile-main");

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("open");
    mobile.classList.toggle("menu-active");
})