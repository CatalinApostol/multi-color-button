const toggle = document.getElementById("flip-flop");

toggle.addEventListener("click", function(event) {
    if (event.target.classList.contains("right")){
        event.target.classList.remove("right")
        event.target.textContent = "Go right"
    } else {
        event.target.classList.add("right")
        event.target.textContent = "Go left"
    }
})