/*
 * Name: Thales Barros Fajardo Valente
 * Student ID: 200400698
 * Date: 07/06/2020
 * 
 * Description: Creation of the javaScript file that displays a message when someone finishes the form
 */

//Creation of the variable holding the contact form, div with all the inputs and the submit button
let contactForm = document.getElementById("formContact");
let divContact = document.getElementById("divideContact");
let submitBtn = document.getElementById("subContact");

//Call a function every time someone clicks the button
submitBtn.onclick = showThankYou;

//Creation of the function showThankYou
function showThankYou() {
    //Hides the inputs from the form
    contactForm.style.display = "none";
    //Create a new tag h3 and adds text to it
    let thankYouMessage = document.createElement("h3");
    thankYouMessage.textContent = "Thank you for submitting. I will contact you as soon as possible!";
    //Append the h3 to the area where the div was
    divContact.append(thankYouMessage);
}