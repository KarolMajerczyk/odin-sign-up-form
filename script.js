const passwordInput = document.querySelector("#password-confirmation");

passwordInput.addEventListener("input", () => {
  const pass = document.querySelector("#password").value;

  if (pass === passwordInput.value) {
    passwordInput.style.border = "2px solid #e5e7eb";
  } else {
    passwordInput.style.border = "2px solid red";
  }
});
