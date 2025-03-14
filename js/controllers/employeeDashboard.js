import { protectedRoute } from "../component/protectedRoute.js";
import { sideBarComponent } from "../component/sideBar.js";
export const employeeDashboard = () => {
  sideBarComponent();
};

protectedRoute(employeeDashboard);
