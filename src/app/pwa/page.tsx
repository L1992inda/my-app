"use client";
import { useEffect, useState } from "react";

export default function PwaPage() {
  const [displayMode, setDisplayMode] = useState<"browser" | "standalone">(
    "browser"
  );

  useEffect(() => {
    const mq = window.matchMedia("(display-mode: standalone)");
    const update = () => setDisplayMode(mq.matches ? "standalone" : "browser");

    update();
    if (mq.addEventListener) {
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    }

    mq.addListener(update);
    return () => mq.removeListener(update);
  }, []);

  return (
    <main style={{ padding: 30, fontFamily: "sans-serif" }}>
      <h1>PWA Demo</h1>
      <p>This page is the QR code destination used to test the PWA flow.</p>
      <p>
        Status:{" "}
        {displayMode === "standalone"
          ? "Running as an installed app"
          : "Running in a browser tab"}
      </p>
      <ol>
        <li>Open this page in your browser.</li>
        <li>Install the PWA from the browser menu.</li>
        <li>Launch it from your home screen to see the status update.</li>
      </ol>
      <p>
        <a href="/">Back to the main page</a>
      </p>
    </main>
  );
}
