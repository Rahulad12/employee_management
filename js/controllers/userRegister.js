import { registerUser } from "../apiService/userApi.js";
import { createForm } from "../component/Form.js";

const userRegister = () => {
  const { userAuthForm, emailInput, passwordInput,submitButton } = createForm();

  userAuthForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      alert("Please enter both email and password");
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
    }
    finally{
      submitButton.disabled = false;
      submitButton.innerText = "Register";
    }
  });
};
userRegister();
