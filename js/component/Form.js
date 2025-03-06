const userLoginPage = document.getElementById("auth-container");

export const createForm = () => {
  const loginForm = document.createElement("form");

  //create input element in form
  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "text");
  emailInput.setAttribute("name", "email");
  emailInput.setAttribute("placeholder", "Enter your Email");

  const passwordInput = document.createElement("input");
  passwordInput.setAttribute("type", "password");
  passwordInput.setAttribute("name", "password");
  passwordInput.setAttribute("placeholder", "Enter your password");

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Login";

  loginForm.appendChild(emailInput);
  loginForm.appendChild(passwordInput);
  loginForm.appendChild(submitButton);

  userLoginPage.appendChild(loginForm);

  return { loginForm, emailInput, passwordInput };
};
