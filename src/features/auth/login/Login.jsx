import { useState } from "react";
import { useLogin } from "./useLogin";
import Logo from "../../../components/Logo";

function Login() {
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("test@123");

  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;
    login({ email, password });
  }

  if (isLoading) return <p>Logging you in</p>;

  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-60%] bg-gray-50 p-10 flex gap-5">
      <div>
        <h1 className="mb-5 text-3xl font-bold">Log in to your account</h1>
        <Logo width={55} />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-5 ">
          <label htmlFor="email" className="mr-5 text-2xl ">
            Email address
          </label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 text-xl bg-gray-200 rounded-lg"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="mr-5 text-2xl">
            Password
          </label>
          <input
            type="text"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 text-xl bg-gray-200 rounded-lg"
          />
        </div>

        <button className="w-full p-2 text-white bg-blue-400 rounded-lg">
          Log in
        </button>
      </form>
    </div>
  );
}

export default Login;
