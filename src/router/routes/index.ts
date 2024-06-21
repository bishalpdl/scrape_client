import appRoutes from "./app-routes";
import authRoutes from "./auth-routes";


const allRoutes = [...appRoutes, ...authRoutes];

export default allRoutes;
