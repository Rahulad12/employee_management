export const authForm = () => {
  const userAuthForm = document.getElementById("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const submitButton = document.getElementById("submit-button");
  return { userAuthForm, emailInput, passwordInput, submitButton };
};

export const isLoggedIn = () => {
  return !!localStorage.getItem("token");
};

export const passwordErrorMessage = (message) => {
  const errorElement = document.getElementById("password-error-message");
  errorElement.textContent = message;
  errorElement.style.color = "red";
  errorElement.style.display = message ? "block" : "none";
};
export const emailErrorMessage = (message) => {
  const errorElement = document.getElementById("email-error-message");
  errorElement.textContent = message;
  errorElement.style.color = "red";
  errorElement.style.display = message ? "block" : "none";
};
export const errorMessage = (message) => {
  const errorElement = document.getElementById("error-message");
  errorElement.textContent = message.message;
  errorElement.style.color = message.success ? "green" : "red";
  errorElement.style.display = message.message ? "block" : "none";
};
