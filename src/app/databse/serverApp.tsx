// import "server-only";

// import { headers } from "next/headers";
// import { initializeServerApp } from "firebase/app";

// import { getAuth } from "firebase/auth";
// import { firebaseConfig } from "./firebase";

// export async function getAuthenticatedAppForUser() {
//   const idToken = (await headers()).get("Authorization")?.split("Bearer ")[1];

//   const firebaseServerApp = initializeServerApp(
//     firebaseConfig,
//     idToken
//       ? {
//           authIdToken: idToken,
//         }
//       : {}
//   );

//   const auth = getAuth(firebaseServerApp);
//   await auth.authStateReady();

//   return { firebaseServerApp, currentUser: auth.currentUser };
// }