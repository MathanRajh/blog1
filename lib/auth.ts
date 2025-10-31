import { auth, googleProvider, db } from "./firebase";
import { signInWithPopup, signOut, onAuthStateChanged, User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// 🔹 Login with Google
export async function loginWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    // Save or update user in Firestore
    await setDoc(doc(db, "users", user.uid), {
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid,
    }, { merge: true });

    return user;
  } catch (err) {
    console.error("Google login failed:", err);
    throw err;
  }
}

// 🔹 Logout
export async function logout() {
  try {
    await signOut(auth);
    console.log("User logged out successfully");
  } catch (err) {
    console.error("Logout failed:", err);
    throw err;
  }
}

// 🔹 Listen for auth changes
export function onAuthChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}
