import { useForm } from "react-hook-form";
import { useSignUp } from "./useSignup";
import { useNavigate } from "react-router-dom";

// regex :

function Signin() {
  const navigate = useNavigate();

  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const { signup, isLoading } = useSignUp();

  function onSubmit({ fullName, email, password }) {
    console.log({ fullName, email, password });
    signup(
      { fullName, email, password },
      {
        onSuccess: () => {
          reset();
          navigate("/profile");
        },
      }
    );
  }

  return (
    <form onClick={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-[0.5fr_1.5fr] mb-5">
        <label className="text-xl">Full Name</label>
        <input
          type="text"
          placeholder="Full Name"
          id="fullName"
          required
          {...register("fullName", {
            required: "This field is required",
          })}
          className="p-2 text-lg"
        />
        {errors?.fullName?.message && (
          <p className="text-red-400">{errors?.fullName?.message}</p>
        )}
      </div>

      <div className="grid grid-cols-[0.5fr_1.5fr] mb-5">
        <label className="text-xl">Email</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          required
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Provide proper email address",
            },
          })}
          className="p-2 text-lg"
        />
        {errors?.email?.message && (
          <p className="text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div className="grid grid-cols-[0.5fr_1.5fr] mb-5">
        <label className="text-xl">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          required
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password has to be atleast 8 charecters",
            },
          })}
          className="p-2 text-lg"
        />
        {errors?.password?.message && (
          <p className="text-red-400">{errors.password.message}</p>
        )}
      </div>

      <div className="grid grid-cols-[0.5fr_1.5fr] mb-8">
        <label className="text-xl">Repeat Password</label>
        <input
          type="password"
          placeholder="Password"
          id="passwordConfirm"
          required
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Password doesnt match",
          })}
          className="p-2 text-lg"
        />
        {errors?.passwordConfirm?.message && (
          <p className="text-red-400">{errors.passwordConfirm.message}</p>
        )}
      </div>

      <button className="p-2 text-xl text-white bg-green-500 rounded-lg">Sign in</button>
    </form>
  );
}

export default Signin;
