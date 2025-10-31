import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  onAuthStateChanged,
  signOut,
  User,
  browserPopupRedirectResolver,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

// 🔹 Google login (Popup + Redirect fallback)
export async function loginWithGoogle() {
  try {
    // Try popup first
    const result = await signInWithPopup(auth, new GoogleAuthProvider(), browserPopupRedirectResolver);
    const user = result.user;

    // Save or update user info in Firestore
    await setDoc(
      doc(db, "users", user.uid),
      {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        lastLogin: new Date().toISOString(),
      },
      { merge: true }
    );

    return user;
  } catch (error: any) {
    // 🔸 Handle popup failures or restricted environments
    if (
      error.code === "auth/popup-blocked" ||
      error.code === "auth/operation-not-supported-in-this-environment"
    ) {
      console.warn("Popup blocked or unsupported, using redirect instead...");
      await signInWithRedirect(auth, new GoogleAuthProvider());
      return;
    }

    // 🔸 Handle session issues (especially on iOS)
    if (error.message?.includes("missing initial state")) {
      console.warn("Detected missing session state, retrying with redirect...");
      await signInWithRedirect(auth, new GoogleAuthProvider());
      return;
    }

    console.error("Google login failed:", error);
    throw error;
  }
}

// 🔹 Logout user
export async function logout() {
  try {
    await signOut(auth);
    console.log("User logged out successfully");
  } catch (err) {
    console.error("Logout failed:", err);
    throw err;
  }
}

// 🔹 Listen for authentication state changes
export function onAuthChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}
