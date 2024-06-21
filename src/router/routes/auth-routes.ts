import Login from "@/page/auth/login";
interface IAuthRoutes {
  id: string;
  path: string;
  component: React.FC;
  meta: {
    appLayout: boolean;
    privateRoute: boolean;
  };
}

const authRoutes: IAuthRoutes[] = [
  {
    id: "login",
    path: "/login",
    component: Login,
    meta: {
      appLayout: false,
      privateRoute: false,
    },
  },
];

export default authRoutes;
