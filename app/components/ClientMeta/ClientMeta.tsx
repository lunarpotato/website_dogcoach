"use client"

import { useEffect, useState } from "react";

export default function ClientMeta() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href); 
    }
  }, []);

  if (!url) return null; 

  return (
    <>
      <meta property="og:url" content={url} />
    </>
  );
}
