import React, { useContext, useState } from "react";
import Link from "next/link";
import Title from "@/components/shared/Title";
import  AuthContext, { useAuth }  from "@/components/AuthContext";
import { AiFillCloseCircle } from "react-icons/ai"

export default function Signin() {

  const { loginUser } = useAuth(); 
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [color, setColor] = useState("");

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };
  
  const handleLogin = async (e) =>{
    e.preventDefault();
    const loginResult = await loginUser(e);
    if (loginResult.success) {
      setSnackbarMessage("Successfully logged in!");
      setShowSnackbar(true);
      setColor("bg-green-300");
    } else {
      setSnackbarMessage(`${loginResult.error}`);
      setShowSnackbar(true);
      setColor("bg-red-300");
    }
    
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10">
      <Title first={"Sign In Page"} />
      <form
        className="bg-white shadow-md rounded px-8 py-6 max-w-xs"
        onSubmit={handleLogin}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            name="username"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
          type="submit"
        >
          Sign In
        </button>
        <div className="flex flex-row gap-3 text-base">
          <span className="text-gray-600">Don't have an account?</span>
          <Link href="/signup">
            <span className="text-blue-500">Sign Up</span>
          </Link>
        </div>
      </form>
      {showSnackbar && (
        <div className={`fixed bottom-10 right-2 lg:right-10 ${color} flex flex-row gap-3 items-center p-4 shadow-md rounded-md`}>
          <div>{snackbarMessage}</div>
          <button
            onClick={handleSnackbarClose}
          >
            <AiFillCloseCircle />
          </button>
        </div>
      )}
    </div>
  );
}
