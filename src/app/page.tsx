"use client";
import { useState } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <main style={{ padding: 30, fontFamily: "sans-serif" }}>
      <h1>Certificate Portal (PWA Demo)</h1>

      {!loggedIn ? (
        <>
          <p>Scan QR or login to access your certificates.</p>

          {/* Demo QR code */}
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://pwa-cert-demo.vercel.app"
            alt="QR Code"
          />

          <br /><br />

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
            <li>
              ✅ Web Security Training —
              <a
                href="/demo-certificate.pdf"
                download
                style={{ marginLeft: 8 }}
              >
                Download PDF
              </a>
            </li>
          </ul>
        </>
      )}
    </main>
  );
}
