
"use client";

import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";

import {
  SignInButton,
  SignUpButton,
  UserButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <header className="flex justify-end items-center p-4 gap-4 h-16">

        <SignedOut>
          <SignInButton mode="modal">
            <Button>Sign In</Button>
          </SignInButton>

          <SignUpButton mode="modal">
            <Button>Sign Up</Button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>

        <ModeToggle />
      </header>
      
    </div>

    
  );
}

