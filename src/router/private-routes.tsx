import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { IUserState } from "@/redux/slice/user-slice";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { loginStatus } = useSelector<RootState, IUserState>(
    (state) => state.user
  );
  if (!loginStatus) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}

export default PrivateRoute;
