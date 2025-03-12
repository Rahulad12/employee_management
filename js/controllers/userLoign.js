import { loginUser } from "../apiService/userApi.js";
import { authForm } from "../utils/helper.js";
export const userLogin = () => {
  const { userAuthForm, emailInput, passwordInput, submitButton } = authForm();
  console.log(userAuthForm);

  userAuthForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    submitButton.disabled = true;
    submitButton.innerText = "Login...";
    try {
      const response = await loginUser(email, password);
      console.log(response);
      localStorage.setItem("token", response?.user?.token);

      if (response.success) {
        alert(`${response?.message}` || "Login Successfull");
      } else {
        alert(response);
      }
    } catch (error) {
      console.error("Error loggin in:", error);
    } finally {
      submitButton.disabled = false;
      submitButton.innerText = "Login";
    }
  });
};
userLogin();
