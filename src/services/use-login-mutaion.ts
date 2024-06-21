/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";


import http from "@/lib/http";
import { useDispatch } from "react-redux";
import { useMutation } from "react-query";
import { setLogin } from "@/redux/slice/user-slice";
import toast from "react-hot-toast";

interface ILoginProps {
  email: string;
  password: string;
}

const loginApi = async (data: ILoginProps) => {
  const response = await http.post(`api/v1/admin/auth/login`, data);
  return response.data;
};

const useLoginMutation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      toast.success(data?.message || "Login successful");
      dispatch(setLogin(data?.data));
      navigate("/product");
    },
    onError: (e: any) => {
      toast.error(e?.response?.data?.message || "Something went wrong");
    },
  });
};

export default useLoginMutation;
