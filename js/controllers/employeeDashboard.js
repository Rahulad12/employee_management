import { protectedRoute } from "../component/protectedRoute.js";
import { sideBarComponent } from "../component/sideBar.js";
export const employeeDashboard = () => {
  sideBarComponent(
    `<li><a href="#">Dashboard</a></li>`,
    `<li><a href="#">Profile</a></li>`,
    `<li><a href="#">Logout</a></li>`
  );
};

protectedRoute(employeeDashboard);
