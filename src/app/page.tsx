"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setInstallPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const installApp = async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    await installPrompt.userChoice;
    setShowInstall(false);
  };

  return (
    <main style={{ padding: 30 }}>
      <h1>Certificate Portal</h1>
      <button>Login with Smart-ID</button>

      {showInstall && (
        <div
          style={{
            position: "fixed",
            bottom: 20,
            left: 20,
            right: 20,
            background: "#2563eb",
            color: "white",
            padding: 16,
            borderRadius: 10,
          }}
        >
          <p style={{ margin: 0 }}>
            Install this app for faster access to your certificates
          </p>
          <button
            onClick={installApp}
            style={{ marginTop: 10, padding: 8 }}
          >
            Install App
          </button>
        </div>
      )}
    </main>
  );
}
