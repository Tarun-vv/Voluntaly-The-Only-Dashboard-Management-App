import { useState } from "react";
import { useLogin } from "./useLogin";

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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" className="mr-5">
          Email address
        </label>
        <input
          type="text"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password" className="mr-5">
          Password
        </label>
        <input
          type="text"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="p-2 text-white bg-blue-400 rounded-lg">Log in</button>
    </form>
  );
}

export default Login;
