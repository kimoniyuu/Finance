import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";
export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4 bg-primary">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#FFFFF0]">Create Account!</h1>
          <p className="text-base text-[#FFFFF0]">
            Create a new account to access your dashboard
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignUp path="/sign-up" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted" />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full bg-[#543A14] hidden lg:flex items-center justify-center">
        <Image src='/logo.svg' height={300} width={300} alt="logo" />
        <div className="text-[#FFFFF0] text-6xl font-bold">
          Finance
        </div>
      </div>
    </div>
  );
}