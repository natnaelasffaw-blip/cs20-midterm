const form = document.getElementById("contactForm");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    confirmation.textContent =
        "Thanks, " + name + "! Your message has been received.";

    form.reset();
});