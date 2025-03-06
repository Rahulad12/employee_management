import { AUTH_URL } from "../constant.js";

export const loginUser = async (email, password) => {
  const loginData = { email, password };
  console.log(email, password);

  try {
    const response = await fetch(`${AUTH_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    const result = await response.json();
    return response.ok ? result : `${result.message}`;
  } catch (error) {
    return `Error: ${error.message}`;
  }
};

export const registerUser = async (email, password) => {
  const userData = {
    email,
    password,
  };
  try {
    const response = await fetch(`${AUTH_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await response.json();
    return response.ok ? result : `${result.message}`;
  } catch (error) {
    return `Error: ${error.message}`;
  }
};
