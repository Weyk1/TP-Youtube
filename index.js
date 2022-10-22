const checkbox = document.querySelector("#flexSwitchCheckDefault");

const body = document.querySelector("body");

const titres = document.querySelectorAll("h3");

checkbox.addEventListener('click', function() {
    body.classList.toggle("darkmode");
    titres.forEach(titre=>{
        titre.classList.toggle("darkmode");
    })
});
