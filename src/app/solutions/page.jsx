"use client";
import { useState, useEffect } from "react";
///////////////////////////////////////////////////////////////////////////
import RootLayout from "@/app/layout";
import SolutionUpPage from "./solutions";
import FullPageLoading from "@/components/site/icons";
import Footer from "@/components/site/footer";
//////////////////////////////////////////////////////////////////////////


export default function Solutions() {
  const [metas, setMetas] = useState({
    title: "What About Leader Network Limited: Document Management | Information Technology",
    seo_keywords: "Document Management Solutions, Document Scanning Services, Digital Document Storage, Electronic Document Management, Information Technology Services, IT Solutions Provider, Data Security and Compliance, Workflow Automation, Document Retrieval Software, Document Imaging Solutions, Paperless Office Solutions, Document Management System, Cloud Document Management, Enterprise Content Management, Document Conversion Services",
    seo_description: "Leader Network Limited: Expert Document Management & IT Solutions. Optimize workflow, enhance security, unlock digital potential. Drive business forward with us.",
    currentUrl: window.location.href,
    img:"/plugin-pix/leaders-tutors.jpg"
  });
//////////////////////////////////////////////////////////////////////////
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
  //////////////////////////////////////////////////////////////////////////
  return (
    <>
    {pageLoading ? (
       <FullPageLoading/>
     ) : (
      <RootLayout metas={metas}>
          <SolutionUpPage />
          <Footer/>
      </RootLayout>
     )}
   </>
  );
}
