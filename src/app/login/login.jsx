"use client";
import { useState } from "react";
// import Link from "next/link";
import Image from "next/image";
////////////////////////////////////////////////////////////

export default function LoginUpPage() {
    return (
      <>    
        <div className="w-full h-full absolute flex justify-center items-center bg-[url('/images/bg2.jpg')] bg-fixed bg-cover bg-bottom bg-no-repeat ">
          <div className="w-[450px] h-[500px] relative bg-white flex flex-col flex-wrap justify-start gap-3 items-start px-[40px] py-[25px] rounded-[10px] shadow-[_0px_3px_12px_rgba(0,0,0,0.1)]">
            <div className="w-[170px]">
              <Image
                src="/images/logo.png"
                width={170} 
                height={70}  
                alt="Logo"
              />
            </div>

            <h2 className="text-[24px] text-[#6b6b6b]">Administrative Login</h2>

            <div className="flex flex-col gap-3 mt-3 text-[13px w-full">
              <h4 className="text-[14px] flex gap-1 text-[#6b6b6b]">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#006EBB" class="bi bi-envelope-fill mt-1" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                </svg>
                <p>Email Address:<span className="text-[#FF5100]">*</span></p>
              </h4>

              <input
                className="flex w-[100%] p-[13px] text-[13px] border rounded-[5px] outline-none"
                placeholder="Enter Your Email Address"
              />

              <h4 className="text-[14px] flex gap-1 text-[#6b6b6b]">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#006EBB" class="bi bi-lock" viewBox="0 0 16 16">
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
                </svg>
                <p>Password:<span className="text-[#FF5100]">*</span></p>
              </h4>
              
              <input
                type="password"
                className="flex w-[100%] p-[13px] text-[13px] border rounded-[3px] outline-none"
                placeholder="Enter Your Password"
              />
              
              <button
                className="text-[14px] mt-3 w-full min-w-[200px] bg-[#FF6C37] h-[43px] px-3 rounded-[3px] text-white hover:text-[#fff] hover:bg-[#444444] transition ease-in-out delay-150"
                style={{ fontFamily: "sub-title-font" }}
              >
                LOGIN
              </button>

              <div className="w-full mt-3 p-[10px] items-center text-[13px] border border-[#e0e0e0] rounded-[3px]">
              <p className="">Forgot Password? <span className="text-[#FF5100] text-[13px] cursor-pointer">RESET PASSWORD</span></p>    
              </div>
            </div>
          </div>
        </div>



      </>
    );
  }


 
  