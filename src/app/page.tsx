"use client";
import { useState } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <main style={{ padding: 30, fontFamily: "sans-serif" }}>
      <h1>Certificate Portal</h1>

      {!loggedIn ? (
        <>
          <p>Please authenticate to access your certificates.</p>
          <button
            onClick={() => setLoggedIn(true)}
            style={{ padding: 12, fontSize: 16 }}
          >
            Login with Smart-ID
          </button>
        </>
      ) : (
        <>
          <h2>My Certificates</h2>
          <ul>
            <li>✅ Web Security Training (PDF)</li>
            <li>✅ Company Compliance Course (PDF)</li>
          </ul>
        </>
      )}
    </main>
  );
}
