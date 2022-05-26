const buttonToggle = document.getElementById("change-color")

buttonToggle.addEventListener("click", (event) => {
    event.target.classList.toggle("red");
})