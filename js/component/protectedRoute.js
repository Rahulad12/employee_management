export const protectedRoute = (component) => {
  const isLoggedIn = localStorage.getItem("token");
  console.log(isLoggedIn);
  if (isLoggedIn) {
    component();
  } else {
    window.location.href = "../screen/userLogin.html";
  }
};
