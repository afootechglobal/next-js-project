"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShowAlert from './alert';
import { AjaxLoader, SignUpFunction } from './function';
import { faSpinner, faCheckCircle } from '@fortawesome/free-solid-svg-icons';


export default function SignUp({ closeSignUp }) {
  const { ajaxLoading, loaderContent } = AjaxLoader();
  const { showAlert, alertClose, isLoading, getData, setGetData, handleSignUp } = SignUpFunction();

  
  const handleSignUpSubmit = async () => {
    await handleSignUp(); // Assuming handleSignUp is an async function
    //setSignedUp(true); // Set signedUp to true upon successful signup
  };

  return (
    <>
 {!signedUp && (
      <div className="w-full h-full absolute flex justify-center items-center bg-[rgba(0,0,0,.5)] z-200">
        {ajaxLoading ? (
          loaderContent
        ) : (
          <div className="animated zoomIn w-[450px] h-[500px]  relative bg-white flex flex-col flex-wrap justify-start gap-3 items-start  pb-[25px] rounded-[10px] shadow-[_0px_3px_12px_rgba(0,0,0,0.1)]">
           
            
                <h2 className="w-full h-[50px] bg-[#fff]  px-[30px] text-[#006EBB] text-[16px] leading-[50px] rounded-t-lg">Sign Up <button className="text-[12px] w-[25px] h-[25px] bg-[#f00] float-right mt-[12.5px] leading-[0px]  rounded-full text-[#fff] hover:text-[#fff] hover:bg-[#444444] transition ease-in-out delay-150" onClick={closeSignUp}> X</button></h2>

                <div className="text-[13px] w-full absolute mt-[50px]  h-[430px] px-[30px] py-[20px] overflow-auto">
                  <div className="flex flex-col gap-3">

                    <h4 className="text-[14px] flex gap-1 text-[#6b6b6b]">
                      <i className="bi bi-envelope" style={{ color: '#006EBB' }}></i>
                      <p>Full Name: <span className="text-[#FF5100]">*</span></p>
                    </h4>

                    <input
                      className="flex w-[100%] p-[13px] text-[13px] border rounded-[5px] outline-none"
                      placeholder="Enter Your Fullname"
                      value={getData.fullname}
                      onChange={(e) => setGetData({ ...getData, fullname: e.target.value })}
                    />

                    <h4 className="text-[14px] flex gap-1 text-[#6b6b6b]">
                      <i className="bi bi-envelope" style={{ color: '#006EBB' }}></i>
                      <p>Email Address: <span className="text-[#FF5100]">*</span></p>
                    </h4>

                    <input
                      className="flex w-[100%] p-[13px] text-[13px] border rounded-[5px] outline-none"
                      placeholder="Enter Your Email Address"
                      value={getData.email}
                      onChange={(e) => setGetData({ ...getData, email: e.target.value })}
                    />

                    <h4 className="text-[14px] flex gap-1 text-[#6b6b6b]">
                      <i className="bi bi-envelope" style={{ color: '#006EBB' }}></i>
                      <p>Phone Number: <span className="text-[#FF5100]">*</span></p>
                    </h4>

                    <input
                      className="flex w-[100%] p-[13px] text-[13px] border rounded-[5px] outline-none"
                      type="tel"
                      placeholder="Enter Your Phone Number"
                      value={getData.phone}
                      onChange={(e) => setGetData({ ...getData, phone: e.target.value })}
                    />

                    <h4 className="text-[14px] flex gap-1 text-[#6b6b6b]">
                      <i className="bi bi-envelope" style={{ color: '#006EBB' }}></i>
                      <p>Address: <span className="text-[#FF5100]">*</span></p>
                    </h4>

                    <input
                      className="flex w-[100%] p-[13px] text-[13px] border rounded-[5px] outline-none"
                      placeholder="Enter Your Address"
                      value={getData.address}
                      onChange={(e) => setGetData({ ...getData, address: e.target.value })}
                    />

                    <h4 className="text-[14px] flex gap-1 text-[#6b6b6b]">
                      <i className="bi bi-lock" style={{ color: '#006EBB' }}></i>
                      <p>Password: <span className="text-[#FF5100]">*</span></p>
                    </h4>

                    <input
                      type="password"
                      className="flex w-[100%] p-[13px] text-[13px] border rounded-[3px] outline-none"
                      placeholder="Enter Your Password"
                      value={getData.password}
                      onChange={(e) => setGetData({ ...getData, password: e.target.value })}
                    />


                    <h4 className="text-[14px] flex gap-1 text-[#6b6b6b]">
                      <i className="bi bi-lock" style={{ color: '#006EBB' }}></i>
                      <p>Confirmed Password: <span className="text-[#FF5100]">*</span></p>
                    </h4>

                    <input
                      type="password"
                      className="flex w-[100%] p-[13px] text-[13px] border rounded-[3px] outline-none"
                      placeholder="Enter Your Confirmed Password"
                      value={getData.confirmpassword}
                      onChange={(e) => setGetData({ ...getData, confirmpassword: e.target.value })}
                    />

                    <button
                      className="text-[14px] mt-3 w-full min-w-[200px] bg-[#006EBB] h-[43px] px-3 rounded-[3px] text-white hover:text-[#fff] hover:bg-[#444444] transition ease-in-out delay-150"
                      style={{ fontFamily: "sub-title-font" }} onClick={handleSignUpSubmit} disabled={isLoading} >
                      {isLoading ? (<> <FontAwesomeIcon icon={faSpinner} spin /> Signing Up</>
                      ) : <> <FontAwesomeIcon icon={faCheckCircle} /> Sign Up </>}
                    </button>

                  </div>
                </div>
              
            
          </div>
        )}
      </div>
      )}
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
