"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import React from "react";

export default function Home() {
  const { status } = useSession();

  return (
    <div>
      {status === "authenticated" ? (
        <div>
          <span className="ml-1 cursor-pointer" onClick={() => signOut()}>
            LOGOUT
          </span>
        </div>
      ) : (
        <Link href="/login">LOGIN</Link>
      )}
    </div>
  );
}
