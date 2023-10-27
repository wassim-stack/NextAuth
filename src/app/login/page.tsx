"use client";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data, status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return <p>Loading</p>;
  }
  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <div className="bg-slate-50 h-screen flex justify-center items-center">
      <div className="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
        <div className="flex flex-col space-y-6 ">
          <h1 className="text-xl font-bold">Welcome</h1>
          <p> Log into your account or create a new one using social buttons</p>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
            <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
              or
            </span>
          </div>
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 ">
            <button
              className="border border-gray-400 space-x-3 py-3 px-5 rounded-xl flex justify-center items-center shadow-sm hover:bg-opacity-30 hover:shadow-lg transition-all hover:-translate-y-0 duration-150     "
              onClick={() => signIn("google")}
            >
              <Image alt="" src="/google.png" width={20} height={20} />
              <span>Sign in with Google</span>
            </button>
            <button
              className="border border-gray-400 space-x-3 py-3 px-5 rounded-xl flex justify-center items-center shadow-sm hover:bg-opacity-30 hover:shadow-lg transition-all hover:-translate-y-0 duration-150     "
              onClick={() => signIn("facebook")}
            >
              <Image alt="" src="/facebook.png" width={20} height={20} />
              <span>Sign in with Facebook </span>
            </button>
          </div>

          <p className="text-sm">
            Have a problem?{" "}
            <Link href="" className="underline">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
