document.querySelector(".hero-yhteystiedot-btn")
    .addEventListener("click", function () {

        document.getElementById("section2").scrollIntoView({
            behavior: "smooth"
        });

});

document.querySelector(".hero-yhteystiedot-btn-mobile")
    .addEventListener("click", function () {

        document.getElementById("section2-mobile").scrollIntoView({
            behavior: "smooth"
        });

});