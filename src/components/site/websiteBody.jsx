import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function PageTitle({ title, text }) {
  return (
    <>
      <h2 className="text-[43px] mt-[5px] text-[#006EBB] animate-[fade-in-fade_2s_ease-in-out]">
        {title}{" "}
      </h2>

      <div className="flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FF5100"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="2" fill="#FF5100" />
        </svg>

        <p className="text-[20px] text-[#999999]">{text}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FF5100"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="2" fill="#FF5100" />
        </svg>
      </div>
    </>
  );
}

export function PageButton({ text }) {
  return (
    <>
      <button
        className="w-[30%] min-w-[150px] text-[15px] bg-[#578caf] h-[50px] px-3 rounded-[2px] text-white hover:text-[#fff] hover:bg-[#444444] transition ease-in-out delay-150"
        style={{ fontFamily: "sub-title-font" }}
      >
        {text}
      </button>
    </>
  );
}

export function ContactButton({ text }) {
  return (
    <>
      <button
        className="w-[20%] min-w-[150px] mt-2 text-[15px] bg-[#578caf] h-[50px] px-3 rounded-[2px] text-white hover:text-[#fff] hover:bg-[#444444] transition ease-in-out delay-150"
        style={{ fontFamily: "sub-title-font" }}
      >
        {text}
      </button>
    </>
  );
}

export function Services({ title, text, url, img }) {
  return (
    <>
      <div className="w-[35%] m-h-[350px] flex flex-col gap-3 pb-[30px] rounded-[2px] mt-[40px] p-2 bg-zinc-50 items-center hover:shadow-[0_2px_15px_rgba(0,0,0,0.1)] cursor-pointer animate-[zoom-in-fade_1s_ease-in-out]">
        <div className="w-[100%] h-[170px] relative">
          <Image
            src={img}
            className="h-[100%] w-[100%]"
            objectFit="cover"
            layout="fill"
            alt="document-management"
          />
        </div>

        <h4 className="text-[19px] text-[#e6530f]">{title}</h4>
        <p className="text-[14px] px-[15px]">{text}</p>

        <Link href={url}>
          <button
            className="w-[40%] min-w-[200px] text-[14px] bg-[#578caf] h-[40px] px-3 rounded-[2px] text-white hover:text-[#fff] hover:bg-[#444444] transition ease-in-out delay-150"
            style={{ fontFamily: "sub-title-font" }}
          >
            READ MORE
          </button>
        </Link>
      </div>
    </>
  );
}

export function Solutions({ title, text, btnText, url, img }) {
  // Reuse the Services component with different props
  return (
    <Services title={title} text={text} btnText={btnText} url={url} img={img} />
  );
}

export function FaqItem({ title }) {
  return (
    <>
      <div className="w-[100%] p-[27px] bg-white rounded-[5px] flex flex-row justify-between cursor-pointer hover:bg-gray-100 transition ease-in-out delay-150 shadow-[_0px_3px_12px_rgba(0,0,0,0.1)]">
        <h3 className="h-auto text-[17px] text-[#e6530f]">{title}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>
    </>
  );
}


export function Paragraph({text}) {
  return (
    <p className="leading-8 text-justify text-[16px]">{text}</p>
  );
}


export function MainServices({ title, text, url, img }) {
  return (
    <>
      <div className="w-[100%] my-[30px] flex flex-row gap-0">
        <div className="relative w-[calc(100%-500px)] h-[400px]">
          <Image
            src={img}
            className="w-full h-full rounded-[10px]"
            objectFit="cover"
            layout="fill"                      
            alt="about-leaders-network"
          />
        </div>
        
        <div className="flex flex-col items-start gap-5 p-[30px] py-[45px] w-[600px] h-[350px] mt-[25px] bg-white ml-[-100px] relative rounded-[10px] shadow-[_0px_3px_12px_rgba(0,0,0,0.1)]">
          <h2 className="flex gap-3 justify-between text-[23px] text-[#578caf]">
            {title}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#FF5100" class="bi bi-circle-fill mt-2" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8"/>
            </svg>
          </h2>
          
          <p className="leading-7 text-[#2e2e2e] text-[14px]">{text}</p>
          <Link href={url}>
            <button
              className="text-[14px] mt-3 w-[40%] min-w-[200px] bg-[#FF5100] h-[40px] px-3 rounded-[3px] text-white hover:text-[#fff] hover:bg-[#444444] transition ease-in-out delay-150"
              style={{ fontFamily: "sub-title-font" }}
            >
              READ MORE
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export function MainLeftServices({ title, text, url, img }) {
  return (
    <>
      <div className="w-[100%] my-[30px] flex flex-row gap-0">
        <div className="relative z-50 flex flex-col flex-wrap items-start gap-5 p-[30px] py-[45px] w-[600px] h-[350px] mt-[25px] bg-white mr-[-100px] rounded-[10px] shadow-[_0px_3px_12px_rgba(0,0,0,0.1)]">
          <h2 className="flex gap-3 justify-between text-[23px] text-[#578caf]">
            {title}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#FF5100" class="bi bi-circle-fill mt-2" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8"/>
            </svg>
          </h2>
          
          <p className="leading-7 text-[#2e2e2e] text-[14px]">{text}</p>
          
          <Link href={url}>
            <button
              className="text-[14px] mt-3 w-[40%] min-w-[200px] bg-[#FF5100] h-[40px] px-3 rounded-[3px] text-white hover:text-[#fff] hover:bg-[#444444] transition ease-in-out delay-150"
              style={{ fontFamily: "sub-title-font" }}
            >
              READ MORE
            </button>
          </Link>
        </div>
        
        <div className="relative w-[calc(100%-500px)] h-[400px]">
          <Image
            src={img}
            className="w-full h-full rounded-[10px]"
            objectFit="cover"
            layout="fill"                      
            alt="about-leaders-network"
          />
        </div>
      </div>
    </>
  );
}

export function OtherPagesTitle({ title, text, ul}) {
  return (
    <>
      <div className="flex pt-[200px] px-[7%] w-[100%] pb-[40px] bg-[url('/images/bg.png')] bg-fixed bg-cover bg-top bg-no-repeat animate-[slide-down-fade_2s_ease-in-out]">
        <div className="w-full flex flex-col items-start justify-start gap-2 max-w-[1200px] m-auto">
          <h3 className="flex gap-3 justify-between text-white text-[35px] font-bold">
            {title}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#FF5100" class="bi bi-circle-fill mt-5" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8"/>
            </svg>
          </h3>
          
          <div className="flex flex-row justify-between gap-2 text-white cursor-pointer">
            Home
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-caret-right-fill mt-1" viewBox="0 0 16 16">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
            <span className="text-[#ee8859ea]">{ul}</span>
          </div>
        </div>
      </div>
    </>
  );
}