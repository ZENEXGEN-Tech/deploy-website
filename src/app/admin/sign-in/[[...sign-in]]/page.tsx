"use client";

import { SignIn, SignUp } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { isAdminEmail } from "@/utils/constants";

export default function AdminSignInPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && user) {
      // Check if user is authorized admin
      if (isAdminEmail(user.primaryEmailAddress?.emailAddress)) {
        // Redirect to admin dashboard
        router.push("/admin");
      } else {
        // Redirect unauthorized users to home
        router.push("/");
      }
    }
  }, [user, isLoaded, router]);

  // Don't render the sign-in form if user is already authenticated
  if (isLoaded && user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Admin Portal</h1>
          <p className="text-gray-600 mt-2">
            Sign in to access the admin dashboard
          </p>
        </div>
        <SignIn
          appearance={{
            elements: {
              formButtonPrimary: "bg-black hover:bg-gray-800",
              footerActionLink: "text-black hover:text-gray-800",
            },
          }}
          redirectUrl="/admin"
          signUpUrl="/admin/sign-up"
          afterSignInUrl="/admin"
        />
        <SignUp
          appearance={{
            elements: {
              formButtonPrimary: "bg-black hover:bg-gray-800",
              footerActionLink: "text-black hover:text-gray-800",
            },
          }}
          redirectUrl="/admin"
          signInUrl="/admin/sign-in"
        />
      </div>
    </div>
  );
}
