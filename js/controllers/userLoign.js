import { loginUser } from "../apiService/userApi.js";
import { createForm } from "../component/Form.js";

export const userLogin = () => {
  const { loginForm, emailInput, passwordInput } = createForm();

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    try {
      const response = await loginUser(email, password);
      console.log(response);
      localStorage.setItem("token", response?.user.token);

      if (response.success) {
        alert(`${response?.message}` || "Login Successfull");
      } else {
        alert(response);
      }
    } catch (error) {
      console.error("Error loggin in:", error);
      alert("Login Failed. Please try again");
    }
  });
};
document.addEventListener("DOMContentLoaded", () => {
  userLogin();
});
