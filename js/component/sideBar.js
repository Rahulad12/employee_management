const sideBar = document.getElementById("side-bar");

const logOut = () => {
  localStorage.removeItem("token");
  window.location.href = "../screen/userLogin.html";
};
export const sideBarComponent = (...sidebarelement) => {
  // Map elements to HTML
  sideBar.innerHTML = `<ul>
                          <li><a href="#">Dashboard</a></li>
                          <li><a href="#">Profile</a></li>
                          <li><a href="#" id="logout">Logout</a></li>
                        </ul>`;

  const logOUtButton = document.getElementById("logout");
  logOUtButton.addEventListener("click", () => {
    logOut();
  });
};

// Example usage
