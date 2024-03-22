"use client";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ShowAlert, ModalAlert } from './alert';
import { AjaxLoader, ResetPassword } from './function';
import { faSpinner, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// import LoginUpPage from './login';


export default function ResetPasswordPage({ getDetail,viewLogin,closeForm }) {
  const { ajaxLoading, loaderContent } = AjaxLoader();
  const { modalAlert, showAlert, alertClose, isLoading, getData, setGetData, handleCompleteResetPassword } = ResetPassword(getDetail.user_id);
  
  return (
    <>
    
      <div className="w-full h-full absolute flex justify-center items-center bg-[rgba(0,0,0,.5)] z-200">
        {ajaxLoading ? (
          loaderContent
        ) : (
          <>
            {!modalAlert ? (
              <div className="animated zoomIn w-[450px] h-[500px]  relative bg-white flex flex-col flex-wrap justify-start gap-3 items-start  pb-[25px] rounded-[10px] shadow-[_0px_3px_12px_rgba(0,0,0,0.1)]">
                <h2 className="w-full h-[50px] bg-[#fff]  px-[30px] text-[#006EBB] text-[16px] leading-[50px] rounded-t-lg">Reset Password <button className="text-[12px] w-[25px] h-[25px] bg-[#f00] float-right mt-[12.5px] leading-[0px]  rounded-full text-[#fff] hover:text-[#fff] hover:bg-[#444444] transition ease-in-out delay-150" onClick={closeForm}> X</button></h2>
                <div className="text-[13px] w-full absolute mt-[50px]  h-[430px] px-[30px] py-[20px] overflow-auto">
                  <div className="flex flex-col gap-3">
                    <div className="w-full mt-3 p-[10px] text-[#374151] items-center text-[13px] border bg-[#ECFDF5] border-[#6EE7B7] rounded-[3px]">
                      Hi <span className="text-[#006EBB]">{getDetail.fullname}</span>, an mail has been sent to your email address (<span className="text-[#006EBB]">{getDetail.email}</span>) to reset your password. Kindly, check your <strong>INBOX</strong> or <strong>SPAM</strong> to confirm.
                    </div>

                    {/* ----------------------------------------------------------------- */}
                    <div className="text-[14px] flex gap-1 text-[#6b6b6b]">
                      {/* <i className="bi bi-person" style={{ color: '#006EBB' }}></i> */}
                      Otp: <span className="text-[#FF5100]">*</span>
                    </div>
                    <input
                      className="flex w-[100%] p-[13px] text-[13px] border rounded-[5px] outline-none"
                      placeholder="Enter Your Otp"
                      value={getData.otp}
                      onChange={(e) => setGetData({ ...getData, otp: e.target.value })}
                    />
                    {/* ----------------------------------------------------------------- */}
                    <div className="text-[14px] flex gap-1 text-[#6b6b6b]">
                      {/* <i className="bi bi-envelope" style={{ color: '#006EBB' }}></i> */}
                      Create Password: <span className="text-[#FF5100]">*</span>
                    </div>
                    <input
                      className="flex w-[100%] p-[13px] text-[13px] border rounded-[5px] outline-none"
                     type="password"
                      placeholder="Enter Your Create Password"
                      value={getData.password}
                      onChange={(e) => setGetData({ ...getData, password: e.target.value })}
                    />
                  {/* ----------------------------------------------------------------- */}
                    <div className="text-[14px] flex gap-1 text-[#6b6b6b]">
                      {/* <i className="bi bi-phone" style={{ color: '#006EBB' }}></i> */}
                     Confirmed Password: <span className="text-[#FF5100]">*</span>
                    </div>
                    <input
                      className="flex w-[100%] p-[13px] text-[13px] border rounded-[5px] outline-none"
                      type="password"
                      placeholder="Enter Your Confirmed Password"
                      value={getData.confirmpassword}
                      onChange={(e) => setGetData({ ...getData, confirmpassword: e.target.value })}
                    />
                    {/* ----------------------------------------------------------------- */}
                    
                    <button
                      className="text-[14px] mt-3 w-full min-w-[200px] bg-[#006EBB] h-[43px] px-3 rounded-[3px] text-white hover:text-[#fff] hover:bg-[#444444] transition ease-in-out delay-150"
                      style={{ fontFamily: "sub-title-font" }} onClick={handleCompleteResetPassword} disabled={isLoading} >
                      {isLoading ? (<> <FontAwesomeIcon icon={faSpinner} spin /> Signing Up</>
                      ) : <> <FontAwesomeIcon icon={faCheckCircle} /> Sign Up </>}
                    </button>

                  </div>
                </div>

              </div>
            ) : (
              <>
              {/* load model popup alert */}
                {modalAlert &&
                  <ModalAlert
                    check={true}
                    toggleForms={viewLogin}
                    message={modalAlert.message1}
                    onClose={closeForm}
                  />
                }
              </>
            )

            }
          </>
        )}
      </div>

      {/* ------ load main alert */}
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


