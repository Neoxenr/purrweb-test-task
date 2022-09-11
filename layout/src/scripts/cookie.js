export function submitCookie() {
  const cookieConsent = document.querySelector(".cookie-consent");

  animateConsent(cookieConsent, false);
}

export function animateConsent(consent, isActive = true) {
  let timePassed = 0;

  const timer = setInterval(() => {
    timePassed += 10;

    if (timePassed > 1000) {
      clearInterval(timer);
      return;
    }

    consent.style.bottom =
      (isActive ? -200 + timePassed / 5 : 0 - timePassed / 5) + "px";
  }, 10);
}
