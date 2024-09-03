"use client";

import axios, { AxiosError } from "axios";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

function RegisterPage() {
  const [error, setError] = useState<string | undefined>();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const signupResponse = await axios.post("/api/auth/signup", {
        email,
        password,
      });

      console.log(signupResponse);

      const signinResponse = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (signinResponse?.ok) return router.push("/dashboard/profile");

      console.log(signinResponse);
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        setError(error.response?.data?.message);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-950 px-8 py-10 w-full max-w-lg rounded-2xl shadow-lg"
      >
        {error && (
          <div className="bg-red-500 text-white px-4 py-2 rounded-md mb-4">
            {error}
          </div>
        )}

        <h1 className="text-4xl font-bold text-white mb-7 text-center">
          Signup
        </h1>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="somemail@gmail.com"
            name="email"
            className={clsx(
              "bg-zinc-800 px-4 py-3 block w-full text-white",
              "focus:ring-2 focus:ring-indigo-500 focus:outline-none rounded-md"
            )}
          />
          <input
            type="password"
            placeholder="******"
            name="password"
            className={clsx(
              "bg-zinc-800 px-4 py-3 block w-full text-white",
              "focus:ring-2 focus:ring-indigo-500 focus:outline-none rounded-md"
            )}
          />
        </div>

        <button
          className={clsx(
            "border-2 border-white text-white font-semibold mt-7 py-3 w-full",
            "rounded-md transition duration-300 ease-in-out transform",
            "hover:bg-white hover:text-black"
          )}
          type="submit"
        >
          Signup
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
