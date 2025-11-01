"use client";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../lib/firebase";
import { useRouter } from "next/navigation";

export default function AuthButton({ type }: { type: "login" | "signup" }) {
  const router = useRouter();

  const handleAuth = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const email = result.user.email || "";

      if (!email.endsWith("@gmail.com")) {
        await auth.signOut();
        alert("Only Gmail accounts are allowed.");
        return;
      }

      // Auto-login 
      router.push("/");
    } catch (error: any) {
      if (error.code === "auth/account-exists-with-different-credential") {
        alert("Account already exists.");
      } else {
        alert("Authentication failed. Try again.");
      }
    }
  };

  return (
    <button
      onClick={handleAuth}
      className="bg-black text-white rounded-xl py-2 px-4 mt-4 hover:bg-gray-800 transition-all"
    >
      {type === "login" ? "Login with Gmail" : "Sign up with Gmail"}
    </button>
  );
}
