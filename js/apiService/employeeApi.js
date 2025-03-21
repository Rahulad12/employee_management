import { EMP_URL } from "../constant.js";

/**
 * @function getUserEmployeeByUserId
 * @description Fetches an employee by user ID from the server.
 * @returns {Promise<object>} - A promise that resolves to an object with a success message and an employee object or an error message.
 * @Access user
 * userid is send from the requested login user
 */
export const getUserEmployeeByUserId = async () => {
  try {
    const response = await fetch(`${EMP_URL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const result = await response.json();
    return response.ok ? result : `${result.message}`;
  } catch (error) {
    return `Error: ${error.message}`;
  }
};
