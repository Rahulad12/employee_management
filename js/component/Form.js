const userAuthForm = document.getElementById("form");
const isRegister = window.location.href.includes("userRegister");
export const createForm = () => {
  //create input element in form
  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("name", "email");
  emailInput.setAttribute("required", "true");
  emailInput.setAttribute("placeholder", "Enter your Email");

  const passwordInput = document.createElement("input");
  passwordInput.setAttribute("type", "password");
  passwordInput.setAttribute("name", "password");
  emailInput.setAttribute("required", "true");
  passwordInput.setAttribute("placeholder", "Enter your password");

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = `${isRegister ? "Register" : "Login"}`;

  userAuthForm.appendChild(emailInput);
  userAuthForm.appendChild(passwordInput);
  userAuthForm.appendChild(submitButton);

  return { userAuthForm, emailInput, passwordInput, submitButton };
};
