const sideBar = document.getElementById("side-bar");

export const sideBarComponent = (...sidebarelement) => {
  // Map elements to HTML
  sideBar.innerHTML = sidebarelement
    .map((element) => `<ul>${element}</ul>`)
    .join(""); // Convert array to string
};

// Example usage
