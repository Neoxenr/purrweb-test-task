export function validateInput(event) {
  const value = event.target.value.trim();

  event.target.classList.toggle("form__input_invalid", value === "");
}

export function submitForm(event) {
  event.preventDefault();

  const formInputs = document.querySelectorAll(".main__form .form__input");

  formInputs.forEach((input) => {
    validateInput({ target: input });
  });
}