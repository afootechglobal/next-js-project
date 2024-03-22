"use client";
import { useState } from "react";
// import Link from "next/link";
import ShowAlert from './alert';
import Image from "next/image";
import './style/animate.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import SignUp from './signup';

////////////////////////////////////////////////////////////




export default function LoginUpPage() {
  const [showAlert, setShowAlert] = useState(false);

  ///// toggleForm useSate paramenters
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
  const toggleForms = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };

  const [signUpPopUp, setSignUpPopUp] = useState(false);

  const openSignUp = () => {
    setSignUpPopUp(true);
  };

  const alertClose = () => {
    setShowAlert(false);
  };

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const formData = new FormData();

  // Append fields and values
  formData.append('email', loginData.email);
  formData.append('password', loginData.password);

  // const fileInput = document.querySelector('input[type="file"]');
  // formData.append('file', fileInput.files[0]);

  
  const handleLogin = async () => {
    try {
      const getResponse = await fetch('/api/login', {
        method: 'POST',
        body: formData,
      });
  
      const getData = await getResponse.json();
      const success = getData.success;
      const message1 = getData.message1;
      if (success == true) {
        setShowAlert(getData);
      } else {
        setShowAlert(getData);
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };


  // const handleLogin = async () => {
  //   try {
  //     const getResponse = await fetch('/api/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(loginData),
  //     });

  //     const getData = await getResponse.json();
  //     const success = getData.success;
  //     const message1 = getData.message1;
  //     if (success == true) {
  //       alert(message1);
  //     } else {
  //       alert(message1);

  //     }
  //   } catch (error) {
  //     console.error('Login failed', error);
  //   }
  // };

  return (
    <>

      <div className="w-full h-full absolute flex justify-center items-center bg-[url('/images/bg2.jpg')] bg-fixed bg-cover bg-bottom bg-no-repeat ">
        <div className="animated zoomIn w-[450px] h-[500px] bg-white flex flex-col gap-3  px-[40px] py-[25px] rounded-[10px] shadow-[_0px_3px_12px_rgba(0,0,0,0.1)]">
          <div className="w-[170px]">
            <Image
              src="/images/logo.png"
              width={170}
              height={70}
              alt="Logo"
            />
          </div>

          <div className="text-[24px] text-[#6b6b6b]">
            {/* <h1 id="page-title">{isLoginFormVisible ? 'Log-In' : 'Reset Password'}</h1> */}
            <h2 >{isLoginFormVisible ? 'Log In' : 'Reset Password'}</h2>
          </div>

          <div className="text-[13px] w-full">
            {isLoginFormVisible ? (
              <div className="animate-[fade-in_0.7s_ease-in-out] flex flex-col gap-3">
                <div className="text-[14px] flex gap-1 text-[#6b6b6b]">
                  <i className="bi bi-envelope" style={{ color: '#006EBB' }}></i>
                  <p>Email Address: <span className="text-[#FF5100]">*</span></p>
                </div>

                <input
                  className="flex w-[100%] p-[13px] text-[13px] border rounded-[5px] outline-none"
                  placeholder="Enter Your Email Address"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                />

                <div className="text-[14px] flex relative text-[#6b6b6b]">
                  <i className="bi bi-lock" style={{ color: '#006EBB' }}></i>
                  Password:  <span className="text-[#FF5100]"> *</span>  <span className="right-0 absolute text-[13px] text-[#FF5100] cursor-pointer" onClick={toggleForms}>Reset Password?</span>
                </div>

                <input
                  type="password"
                  className="flex w-[100%] p-[13px] text-[13px] border rounded-[3px] outline-none"
                  placeholder="Enter Your Password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                />

                <button
                  className="text-[14px] mt-3 w-full min-w-[200px] bg-[#006EBB] h-[43px] px-3 rounded-[3px] text-white hover:text-[#fff] hover:bg-[#444444] transition ease-in-out delay-150"
                  style={{ fontFamily: "sub-title-font" }} onClick={handleLogin}>
                  <i className="bi bi-check"></i>
                  LOG-IN
                </button>

                <div className="w-full mt-3 p-[10px] items-center text-[13px] border border-[#e0e0e0] rounded-[3px]">
                  <p >Don't have an account? <span className="text-[#006EBB] text-[13px] cursor-pointer" onClick={openSignUp}>Sign Up</span></p>
                </div>
              </div>
            ) : (

              <div className="animated fadeIn flex flex-col gap-3 px-0">
                <div className="w-full mt-3 p-[10px] text-[#374151] items-center text-[13px] border bg-[#ECFDF5] border-[#6EE7B7] rounded-[3px]">
                  Provide your <span className="text-[#006EBB]">Email Address</span> to reset your password
                </div>

                <div className="text-[14px] flex gap-1 text-[#6b6b6b]">
                  <i className="bi bi-envelope" style={{ color: '#006EBB' }}></i>
                  <p>Email Address: <span className="text-[#FF5100]">*</span></p>
                </div>

                <input
                  className="flex w-[100%] p-[13px] text-[13px] border rounded-[5px] outline-none"
                  placeholder="Enter Your Email Address" title="Enter Your Email Address"
                />


                <button
                  className="text-[14px] mt-3 w-full min-w-[200px] bg-[#006EBB] h-[43px] px-3 rounded-[3px] text-white hover:text-[#fff] hover:bg-[#444444] transition ease-in-out delay-150"
                  style={{ fontFamily: "sub-title-font" }}>
                  PROCEED <i className="bi-arrow-right"></i>
                </button>

                <div className="w-full mt-3 p-[10px] items-center text-[13px] border border-[#e0e0e0] rounded-[3px]">
                  <p>Already have account? <span className="text-[#006EBB] text-[13px] cursor-pointer" onClick={toggleForms}>Log In</span></p>
                </div>
              </div>

            )
            }

          </div>
        </div>
      </div>

      {signUpPopUp && <SignUp closeSignUp={() => setSignUpPopUp(false)} />}

      {showAlert && 
        <ShowAlert
          message={showAlert.message1}
          additionalMessage={showAlert.message2}
          alertSuccess={showAlert.success}
          onClose={alertClose}
        />
      }

    </>
  );
}



