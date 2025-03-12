import { registerUser } from "../apiService/userApi.js";
import { authForm } from "../utils/helper.js";
import checkEmailPassword from "../utils/validator.js";

export const userRegister = () => {
  const { userAuthForm, emailInput, passwordInput, submitButton } = authForm();
  console.log(userAuthForm);

  userAuthForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const errorMessage = checkEmailPassword(password, email);
    if (errorMessage) {
      alert(errorMessage);
      return;
    }

    submitButton.disabled = true;
    submitButton.innerText = "Registering...";

    try {
      const response = await registerUser(email, password);

      if (response.success) {
        alert(`${response?.message}` || "Register successfull");
      } else {
        alert(response);
      }
    } catch (error) {
      console.error("Error login in", error);
      alert("Register Failed. please try again");
    } finally {
      submitButton.disabled = false;
      submitButton.innerText = "Register";
    }
  });
};

userRegister();
