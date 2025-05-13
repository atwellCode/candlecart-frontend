import React from "react";
import { AppContextProvider, useAppContext } from "../context/AppContext";

const Login = () => {
  const [state, setState] = React.useState("login");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { setShowUserLogin , setUser } = useAppContext();
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setUser({
        setEmail: "testuser@gmail.com",
        setName: "user"
    })
    setShowUserLogin(false);
  }
  return (
    <div onClick={() => setShowUserLogin(false)} className="fixed inset-0 z-30 flex items-center justify-center bg-black/50">
      <form onSubmit={onSubmitHandler} onClick={(e) =>e.stopPropagation()} className="flex flex-col gap-4 w-80 sm:w-[352px] p-8 py-10 rounded-lg shadow-xl border border-gray-200 bg-white text-sm text-gray-700">
        <h2 className="text-2xl font-semibold text-center w-full mb-2">
          <span className="text-primary">User</span> {state === "login" ? "Login" : "Sign Up"}
        </h2>
        <p className="text-gray-500 text-center text-sm mb-4">Please {state === "login" ? "sign in" : "create an account"} to continue</p>

        {state === "register" && (
          <div className="w-full">
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type your name"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
        )}

        <div className="w-full">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type your email"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div className="w-full">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary-dull text-white font-semibold py-2 rounded-md transition-all"
        >
          {state === "register" ? "Create Account" : "Login"}
        </button>

        <p className="text-center text-sm mt-2">
          {state === "register" ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            type="button"
            onClick={() => setState(state === "login" ? "register" : "login")}
            className="text-primary hover:underline font-medium"
          >
            Click here
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
