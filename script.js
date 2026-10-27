const form = document.getElementById("contactForm");
const confirmation = document.getElementById("confirmation");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const reasonField = document.getElementById("reason");
const messageField = document.getElementById("message");

// JavaScript handles validation; HTML validation remains a fallback if JS is unavailable.
form.noValidate = true;

function validateContactForm() {
    nameField.setCustomValidity(nameField.value.trim() ? "" : "Please enter your name.");
    emailField.value = emailField.value.trim();
    emailField.setCustomValidity( /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)
        ? "" : "Please enter a valid email address, such as name@example.com.");
    reasonField.setCustomValidity(reasonField.value ? "" : "Please select a topic.");
    messageField.setCustomValidity(messageField.value.trim() ? "" : "Please enter your message.");

    return form.reportValidity();
}

form.addEventListener("input", function(event) {
    event.target.setCustomValidity("");
    confirmation.textContent = "";
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    confirmation.textContent = "";

    if (!validateContactForm()) {
        return;
    }

    const thankYou = "Thanks, " + nameField.value.trim() +
        "! Your form is complete. This student-project demo does not send messages.";
    confirmation.textContent = thankYou;
    alert(thankYou);
    form.reset();
});
