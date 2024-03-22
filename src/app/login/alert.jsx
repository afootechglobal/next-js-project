
import React, { useEffect } from "react";
import Image from "next/image";

export const ShowAlert = ({ message, additionalMessage, alertSuccess, Icon, onClose }) => {
  if (alertSuccess == true) {
    alertSuccess = "success-div";
    Icon = "bi-check-all";
  } else {
    alertSuccess = "warning-div";
    Icon = "bi-exclamation-triangle";
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose(); // Close the success alert after a delay
    }, 4000); // Adjust the delay (in milliseconds) based on your preference

    return () => {
      clearTimeout(timeout); // Clear the timeout if the component unmounts before the delay
    };
  }, [onClose]);

  return (
    <>
      <div className="animated bounceInDown w-[310px] h-[60px] items-center bg-[#fff]  fixed top-[100px] right-[0px] text-[14px] text-[#fff] z-1000" id={alertSuccess}>
        <div className="icon w-[60px] h-[60px] text-[40px]  float-left mr-[7px] text-[#fff] bg-white bg-opacity-80 text-center"><i className={Icon}></i></div>
        <div className="text-[#fff] pt-[8px]">{message}</div>
        <span>{additionalMessage}</span>
      </div>
    </>
  );
};





export const ModalAlert = ({ check, toggleForms, message, onClose }) => {
  const toggleToLogin =  () => {
  onClose(); 
    toggleForms();
  };
  return (
    <>
      {/* <div className="w-full h-full absolute flex justify-center items-center bg-[rgba(0,0,0,.5)] z-500"> */}
      <div className="animated zoomIn w-[350px] h-[300px] pt-[25px]  text-center relative bg-white rounded-[10px] shadow-[_0px_3px_12px_rgba(0,0,0,0.1)]">
        <div className="w-[100px] h-[100px] rounded-[100%] mx-auto mb-[15px]">
          <Image
            src="/images/success.gif"
            alt="Success"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
        <div className="text-[#000] text-[20px]">{message}</div>
        <span className="text-[#444] text-[15px]">Click on okay to login and continue</span>
        {check === true ? (
          <button className="text-[14px] mt-[10px] w-[200px] min-w-[200px] bg-[#006EBB] h-[43px] px-3 rounded-[3px] text-white hover:text-[#fff] hover:bg-[#444444] transition ease-in-out delay-150" onClick={toggleToLogin}>Okay, Log In</button>
        ) : (
          <button className="text-[14px] mt-[10px] w-[200px] min-w-[200px] bg-[#006EBB] h-[43px] px-3 rounded-[3px] text-white hover:text-[#fff] hover:bg-[#444444] transition ease-in-out delay-150" onClick={onClose}>Okay, Log In</button>
        )}

      </div>
      {/* </div> */}
    </>
  );
};