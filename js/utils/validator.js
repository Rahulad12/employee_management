const checkEmailPassword = (...data) => {
  const [password, email] = data;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;

  if (!email || !password) {
    alert("Please enter both email and password");
    return;
  }

  const isValidEmail = emailRegex.test(email);
  if (!isValidEmail) {
    return "Please enter a valid email address.";
  }

  const isValidPassword = passwordRegex.test(password);
  if (!isValidPassword) {
    return "Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character.";
  }
  return "";
};

export default checkEmailPassword;
