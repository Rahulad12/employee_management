export const authForm = () => {
  const userAuthForm = document.getElementById("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const submitButton = document.getElementById("submit-button");
  return { userAuthForm, emailInput, passwordInput, submitButton };
};


