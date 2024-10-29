"use client";
import Link from "next/link";
import database from "@/app/databse/firebase"
import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { permanentRedirect } from "next/navigation";

export default function LoginPage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>("")

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      await database.login(email, password)
    } catch (e) {
      setError(e.message)
      setEmail("")
      setPassword("")
      return
    }
    permanentRedirect("/")
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={ onSubmit } className="space-y-6">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Email address:
          </label>

          <div className="mt-2">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Password:
            </label>
          </div>
          <div className="mt-2">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>

          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Login
          </button>
          <div style={{color: "red"}}>
            {error}
          </div>
        </form>

        <p className="mt-10 text-center text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          <Link href="/auth/signup">Not a member?</Link>
        </p>
      </div>
    </div>
  );
}
