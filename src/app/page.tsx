"use client";

import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <header className="flex justify-end items-center p-4 gap-4 h-16">
        <SignInButton mode="modal" />
        <SignUpButton mode="modal" />
        <UserButton />
      </header>
    </div>
  );
}