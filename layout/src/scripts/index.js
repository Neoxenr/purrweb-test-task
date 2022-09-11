import { submitForm, validateInput } from "./validate.js";
import { animateConsent, submitCookie } from "./cookie.js";

const contactForm = document.querySelector(".main__form");
contactForm.addEventListener("submit", submitForm);
contactForm.addEventListener("input", validateInput);

const cookieButton = document.querySelector(".cookie-consent__btn");
cookieButton.addEventListener("click", submitCookie);

const cookieConsent = document.querySelector(".cookie-consent");
animateConsent(cookieConsent);