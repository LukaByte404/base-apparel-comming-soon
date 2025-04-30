const emailInput = document.querySelector("input");
const form = document.querySelector("form");
const errMessage = document.querySelector(".error-message");
const errIcon = document.querySelector(".error-icon");
const submitBtn = document.querySelector("button");

form.addEventListener("submit", (e) => {
  const emailPattern = /^[^s@]+@[^s@]+.[^s@]+$/;
  const emailValue = emailInput.value.trim();

  if (!emailPattern.test(emailValue)) {
    e.preventDefault();
    errMessage.style.display = "flex";
    errIcon.style.display = "block";
    emailInput.style.border = "2px solid red";
    submitBtn.style.background =
      "linear-gradient(135deg, hsl(0, 60%, 90%), hsl(0, 60%, 90%))";
  } else {
    errMessage.style.display = "none";
    errIcon.style.display = "none";
  }
});
