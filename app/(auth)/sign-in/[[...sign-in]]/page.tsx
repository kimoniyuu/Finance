import { Loader2 } from "lucide-react";
import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import Image from "next/image";
export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4 bg-primary">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#FFFFF0]">Welcome Back!</h1>
          <p className="text-base text-[#FFFFF0]">
            Login or Create account to get back to your dashborad!
          </p>
        </div>
        <div className="flex item-center justify-center mt-8">
          <ClerkLoaded>
            <SignIn path="/sign-in" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted" />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full bg-[#543A14] hidden lg:flex items-center justify-center">
        <Image src='/logo.svg' height={200} width={200} alt="logo" />
      </div>
    </div>
  );
}
