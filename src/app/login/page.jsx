"use client";
import { useState, useEffect } from "react";
import RootLayout from "@/app/layout";
import LoginUpPage from "./login";
import FullPageLoading from "@/components/site/icons";

export default function Login() {
  const [pageLoading, setPageLoading] = useState(true);

  const realTimePageReloader = () => {
    setPageLoading(true);
    const delayTimer = setTimeout(() => {
      setPageLoading(false);
    }, 1000);
    return () => clearTimeout(delayTimer);
  };

  useEffect(() => {
    realTimePageReloader();
  }, []);

  return (
    <>
      {pageLoading ? (
        <FullPageLoading />
      ) : (
        <RootLayout showHeader={false}> {/* Here's the change */}
          <LoginUpPage />
        </RootLayout>
      )}
    </>
  );
}
