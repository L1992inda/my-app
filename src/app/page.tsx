"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [pwaUrl, setPwaUrl] = useState("");
  const [qrSrc, setQrSrc] = useState("");

  useEffect(() => {
    const url = `${window.location.origin}/pwa`;
    setPwaUrl(url);
    setQrSrc(
      `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
        url
      )}`
    );
  }, []);

  return (
    <main style={{ padding: 30, fontFamily: "sans-serif" }}>
      <h1>Certificate Portal</h1>
      <section style={{ marginBottom: 30 }}>
        <h2>PWA Test</h2>
        <p>Scan the QR code to open the PWA demo page on your device.</p>
        {qrSrc ? (
          <img src={qrSrc} alt="QR code for the PWA demo" width={220} height={220} />
        ) : (
          <p>Generating QR code...</p>
        )}
        <p style={{ marginTop: 10 }}>
          <a href="/pwa">Open the PWA demo page</a>
        </p>
        {pwaUrl ? <p>URL: {pwaUrl}</p> : null}
      </section>

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
