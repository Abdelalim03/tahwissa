import React, { useContext, useState } from "react";
import Link from "next/link";
import Title from "@/components/shared/Title";
import { AiFillCloseCircle } from "react-icons/ai";
import { useRouter } from "next/router";

export default function Signup() {

  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [color, setColor] = useState("");

  const router = useRouter();

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value,
          first_name: e.target.firstname.value,
          last_name: e.target.lastname.value,
        }),
      });
      if (response.ok) {
        setSnackbarMessage("Successfully registered!");
        setShowSnackbar(true);
        setColor("bg-green-300");
        router.push("/signin");
      } else {
        setSnackbarMessage(`${response.statusText}`);
        setShowSnackbar(true);
        setColor("bg-red-300");
      }
    } catch (error) {
      setSnackbarMessage(`Network error`);
      setShowSnackbar(true);
      setColor("bg-red-300");
    }
  };

  return (
    <div className="min-h-screen flex items-center flex-col justify-center gap-10 overflow-auto py-24">
      <Title first={"Sign Up Page"} />
      <form
        className="bg-white shadow-md rounded px-8 py-6 max-w-xs"
        onSubmit={handleSubmit}
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
            name="email"
            placeholder="Enter your email(*)"
          />
        </div>
        <div className="mb-4">
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
            placeholder="Enter your password(*)"
            name="password"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            First Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="firstName"
            placeholder="Enter your first name(*)"
            name="firstname"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="lastName"
            placeholder="Enter your last name(*)"
            name="lastname"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
          type="submit"
        >
          Sign Up
        </button>
        <div className="flex flex-row gap-3 text-base">
          <span className="text-gray-600">Already have an account?</span>
          <Link href="/signin">
            <span className="text-blue-500">Sign In</span>
          </Link>
        </div>
      </form>
      {showSnackbar && (
        <div
          className={`fixed bottom-10 right-2 lg:right-10 ${color} flex flex-row gap-3 items-center p-4 shadow-md rounded-md`}
        >
          <div>{snackbarMessage}</div>
          <button onClick={handleSnackbarClose}>
            <AiFillCloseCircle />
          </button>
        </div>
      )}
    </div>
  );
}
