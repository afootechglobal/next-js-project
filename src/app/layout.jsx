"use client";
import React from "react";
import "./globals.css";
import DefaultHead from "@/components/site/head";
import Header from "@/components/site/header";

export default function RootLayout({ metas, children, showHeader = true }) {
  return (
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
      <DefaultHead metas={metas} />
      <body>
        {showHeader && <Header />}
        {children}
      </body>
    </html>
  );
}
