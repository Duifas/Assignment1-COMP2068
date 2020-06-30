let contactForm = document.getElementById("formContact");
let divContact = document.getElementById("divideContact");
let submitBtn = document.getElementById("subContact");

submitBtn.onclick = showThankYou;

function showThankYou() {
    contactForm.style.display = "none";
    let thankYouMessage = document.createElement("h3");
    thankYouMessage.textContent = "Thank you for submitting. I will contact you as soon as possible!";
    divContact.append(thankYouMessage);
}