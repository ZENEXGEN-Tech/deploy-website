import { SignUp } from "@clerk/nextjs";

export default function AdminSignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Admin Portal</h1>
          <p className="text-gray-600 mt-2">Create an admin account</p>
        </div>
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
