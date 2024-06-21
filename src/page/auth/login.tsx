import useLoginMutation from "@/services/use-login-mutaion";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

interface IHandleLogin {
  email: string;
  password: string;
  isRememberMe?: boolean;
}

const schema = yup
  .object({
    email: yup
      .string()
      .email("Email must be valid.")
      .required("Email is required."),
    password: yup.string().required("Password is required."),
    isRememberMe: yup.boolean(),
  })
  .required();

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IHandleLogin>({
    resolver: yupResolver(schema),
  });

  const { mutate: loginMutation } = useLoginMutation();

  const handleLogin: SubmitHandler<IHandleLogin> = (data) => {
    loginMutation({ email: data?.email, password: data?.password });
  };

  return (
    <section className="h-screen w-full bg-blue-600  flex justify-center items-center ">
      <div className="min-w-[400px] p-10 flex flex-col  justify-center  bg-slate-800/25 border border-blue-600/80 rounded-xl shadow-login ">
        <div className="text-center">
          <h2 className="text-white font-bold text-[22px]">Login</h2>
        </div>

        <form className="mt-8" onSubmit={handleSubmit(handleLogin)}>
          <fieldset>
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              className="input border"
              id="email"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </fieldset>

          <fieldset className="mt-4">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              className="input"
              id="password"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="mt-2 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </fieldset>

          <button
            type="submit"
            className="px-2 py-3 w-full rounded-[6px] bg-blue-400 text-white font-bold   mt-8"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
