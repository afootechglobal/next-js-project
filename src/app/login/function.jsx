"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";



export function AjaxLoader() {

  const [ajaxLoading, setAjaxLoading] = useState(true);

  const realTimePageReloader = () => {
    setAjaxLoading(true);
    const delayTimer = setTimeout(() => {
      setAjaxLoading(false);
    }, 1000);
    return () => clearTimeout(delayTimer);
  };

  useEffect(() => {
    realTimePageReloader();
  }, []);

  return {
    ajaxLoading,
    loaderContent: (
      <div className="h-[48%] w-[33%] m-auto mw-[300px] absolute bg-[#fff] flex z-[2000] rounded-[5px]  items-center top-[26%]">
        <Image
          src="/images/ajax-loader.gif"
          alt="Loading.."
          layout="responsive"
          width={100}
          height={100}
        />
      </div>
    ),
  };
}





export function capitalizedFirstletter(letter){
  // Convert the text to lowercase and split it into an array of words
  const words = letter.toLowerCase().split(' ');
  // Capitalize the first letter of each word
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  // Join the capitalized words back into a single string
  const convertedText = capitalizedWords.join(' ');
  // // Convert the text to lowercase and split it into an array of words
  // const words = originalText.toLowerCase().split(' ');
  
  // // Capitalize the first letter of the first word
  // const firstName = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  return convertedText;
  }
  








export const UserLogIn = () => {
  //// alert parameters /////////
  const [showAlert, setShowAlert] = useState(false);
  const alertClose = () => {
    setShowAlert(false);
  };
  /////////////////////////////////

  ///// toggleForm useSate paramenters
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
  const toggleForms = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };
  /////////////////////////////////

  const [isLoading, setIsLoading] = useState(false);

  ///// popUp paramenters ///////////////
  const [signUpPopUp, setSignUpPopUp] = useState(false);
  const openSignUp = () => {
    setSignUpPopUp(true);
  };
  /////////////////////////////////

  const isValidEmail = (email) => {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  /// get input paramenters ///////////
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  /////////////////////////////////

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      if (loginData.email == '') {
        setShowAlert({
          message1: 'EMAIL ERROR!',
          message2: 'Fill this fields to continue',
          alertSuccess: false,
          onClose: { alertClose },
        });

      } else if (!isValidEmail(loginData.email)) {
        setShowAlert({
          message1: 'INVALID EMAIL ADDRESS!',
          message2: 'Check your email and try again',
          alertSuccess: false,
          onClose: { alertClose },
        });

      } else if (loginData.password == '') {
        setShowAlert({
          message1: 'PASSWORD ERROR!',
          message2: 'Fill this fields to continue',
          alertSuccess: false,
          onClose: { alertClose },
        });

      } else {
        const formData = new FormData();
        // Append fields and values
        formData.append('email', loginData.email);
        formData.append('password', loginData.password);

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
          //setIsLoading(false);
        }

      }

    } catch (error) {
      console.error('Login failed', error);
    } finally {
      setIsLoading(false);
    }
  }
  return {
    showAlert, alertClose, isLoginFormVisible, toggleForms,
    isLoading, signUpPopUp, setSignUpPopUp, openSignUp, loginData, setLoginData, handleLogin
  };
}










export const ProceedResetPassword = () => {
  //// alert parameters /////////
  const [resetPassShowAlert, setResetPassShowAlert] = useState(false);
  const resetPassAlertClose = () => {
    setResetPassShowAlert(false);
  };

  //-------- loading parameters ---------------------
  const [resetPassIsLoading, setResetPassIsLoading] = useState(false);

  //-------- popUp paramenters ------------------
  const [resetPassPopUp, setResetPassPopUp] = useState(false);

  /////////////////////////////////
 
  const isValidEmail = (email) => {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // --------------- get user details -----------------------
  const [userResetPassDetail, setUserResetPassDetail] = useState("");

  /// get input paramenters ///////////
  const [resetPassData, setResetPassData] = useState({
    email: '',
  });
  /////////////////////////////////
 
  const handleResetPassword = async () => {
    try {
      setResetPassIsLoading(true);
      if (resetPassData.email == '') {
        setResetPassShowAlert({
          message1: 'EMAIL ERROR!',
          message2: 'Fill this fields to continue',
          alertSuccess: false,
          onClose: { resetPassShowAlert },
        });

      } else if (!isValidEmail(resetPassData.email)) {
        setResetPassShowAlert({
          message1: 'INVALID EMAIL ADDRESS!',
          message2: 'Check your email and try again',
          alertSuccess: false,
          onClose: { resetPassShowAlert },
        });

      } else {

        const formData = new FormData();
        // Append fields and values
        formData.append('email', resetPassData.email);

        const getResponse = await fetch('/api/resetpassword', {
          method: 'POST',
          body: formData,
        });

        const getData = await getResponse.json();
        const success = getData.success;
        const message1 = getData.message1;
        if (success == true) {
          setResetPassShowAlert(getData);
          setUserResetPassDetail({
            user_id: getData.user_id,
            fullname: capitalizedFirstletter(getData.fullname),
             email: getData.email,
           });
          setResetPassPopUp(true);
        } else {
          setResetPassShowAlert(getData);
        }

      }
    } catch (error) {
      console.error('Login failed', error);
    } finally {
      setResetPassIsLoading(false);
    }
  }
  return {
    resetPassShowAlert, resetPassAlertClose, resetPassIsLoading, resetPassPopUp, setResetPassPopUp, 
     resetPassData, setResetPassData, userResetPassDetail, handleResetPassword
  };
}






export const ResetPassword = (user_id) => {
  //----- alert parameters ----------------//
  const [modalAlert, setModalAlert] = useState(false); /// popup modal alert
  const [showAlert, setShowAlert] = useState(false);
  const alertClose = () => {
    setShowAlert(false);
  };
  // ----------------------------------------- //



  // ----------- loading button parameters ---------- //
  const [isLoading, setIsLoading] = useState(false);
  // -------------------------------------------------- //

  //------- check for valid number ----------- //
  const isValidPhoneNumber = (phoneNumber) => {
    // Regular expression for a phone number containing only numeric characters
    const phoneRegex = /^\d+$/;
    return phoneRegex.test(phoneNumber);
  };
  // ----------------------------------------------- //

  //------ get input paramenters ------------ //
  const [getData, setGetData] = useState({
    user_id: user_id,
    otp: '',
    password: '',
    confirmpassword: '',
  });
  // ----------------------------------------------- //

  const handleCompleteResetPassword = async () => {
    try {
      setIsLoading(true);
      if (getData.otp == '') {
        setShowAlert({
          message1: 'OTP ERROR!',
          message2: 'Fill this fields to continue',
          alertSuccess: false,
          onClose: { alertClose },
        });

      } else if (!isValidPhoneNumber(getData.otp)) {
        setShowAlert({
          message1: 'INVALID OTP!',
          message2: 'OTP only accept number',
          alertSuccess: false,
          onClose: { alertClose },
        });

      } else if (getData.password == '') {
        setShowAlert({
          message1: 'PASSWORD ERROR!',
          message2: 'Fill this fields to continue',
          alertSuccess: false,
          onClose: { alertClose },
        });

      } else if (getData.confirmpassword == '') {
        setShowAlert({
          message1: 'COMFIRMED PASWORD ERROR!',
          message2: 'Fill this fields to continue',
          alertSuccess: false,
          onClose: { alertClose },
        });

      } else if (getData.password != getData.confirmpassword) {
        setShowAlert({
          message1: 'PASSWORD NOT MATCH!',
          message2: 'Check your passwords and try again',
          alertSuccess: false,
          onClose: { alertClose },
        });

      } else {
        const formData = new FormData();
        // Append fields and values
        formData.append('user_id', user_id);
        formData.append('otp', getData.otp);
        formData.append('password', getData.password);
        formData.append('comfirmed_password', getData.confirmpassword);

        const getResponse = await fetch('/api/completeresetpassword', {
          method: 'POST',
          body: formData,
        });

        const getResponseData = await getResponse.json();
        const success = getResponseData.success;
        if (success == true) {
          //setShowAlert(getResponseData);
          setModalAlert(getResponseData);
        } else {
          setShowAlert(getResponseData);
        }

      }
    } catch (error) {
      console.error('Login failed', error);
    } finally {
      setIsLoading(false);
    }
  }
  return {
    modalAlert, showAlert, alertClose, isLoading, getData, setGetData, handleCompleteResetPassword
  };
}













export const SignUpFunction = () => {
  //----- alert parameters ----------------//
  const [modalAlert, setModalAlert] = useState(false); /// popup modal alert
  const [showAlert, setShowAlert] = useState(false);
  const alertClose = () => {
    setShowAlert(false);
  };
  // ----------------------------------------- //

  // ----------- loading button parameters ---------- //
  const [isLoading, setIsLoading] = useState(false);
  // -------------------------------------------------- //


  //-------- get if email is valid ------------------- ///
  const isValidEmail = (email) => {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  // -------------------------------------------------- //

  //------- check for valid number ----------- //
  const isValidPhoneNumber = (phoneNumber) => {
    // Regular expression for a phone number containing only numeric characters
    const phoneRegex = /^\d+$/;
    return phoneRegex.test(phoneNumber);
  };
  // ----------------------------------------------- //

  //------ get input paramenters ------------ //
  const [getData, setGetData] = useState({
    fullname: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmpassword: '',
  });
  // ----------------------------------------------- //

  const handleSignUp = async () => {
    try {
      setIsLoading(true);
      if (getData.fullname == '') {
        setShowAlert({
          message1: 'FULLNAME ERROR!',
          message2: 'Fill this fields to continue',
          alertSuccess: false,
          onClose: { alertClose },
        });

      } else if (getData.email == '') {
        setShowAlert({
          message1: 'EMAIL ERROR!',
          message2: 'Fill this fields to continue',
          alertSuccess: false,
          onClose: { alertClose },
        });

      } else if (!isValidEmail(getData.email)) {
        setShowAlert({
          message1: 'INVALID EMAIL ADDRESS!',
          message2: 'Check your email and try again',
          alertSuccess: false,
          onClose: { alertClose },
        });

      } else if (!isValidPhoneNumber(getData.phone)) {
        setShowAlert({
          message1: 'PHONE NUMBER ERROR!',
          message2: 'Check your number and try again',
          alertSuccess: false,
          onClose: { alertClose },
        });

      } else if (getData.address == '') {
        setShowAlert({
          message1: 'ADDRESS ERROR!',
          message2: 'Fill this fields to continue',
          alertSuccess: false,
          onClose: { alertClose },
        });


      } else if (getData.password == '') {
        setShowAlert({
          message1: 'PASSWORD ERROR!',
          message2: 'Fill this fields to continue',
          alertSuccess: false,
          onClose: { alertClose },
        });


      } else if (getData.confirmpassword == '') {
        setShowAlert({
          message1: 'COMFIRMED PASWORD ERROR!',
          message2: 'Fill this fields to continue',
          alertSuccess: false,
          onClose: { alertClose },
        });

      } else if (getData.password != getData.confirmpassword) {
        setShowAlert({
          message1: 'PASSWORD NOT MATCH!',
          message2: 'Check your passwords and try again',
          alertSuccess: false,
          onClose: { alertClose },
        });

      } else {
        const formData = new FormData();
        // Append fields and values
        formData.append('fullname', getData.fullname);
        formData.append('email', getData.email);
        formData.append('phone', getData.phone);
        formData.append('address', getData.address);
        formData.append('password', getData.password);

        const getResponse = await fetch('/api/register', {
          method: 'POST',
          body: formData,
        });

        const getResponseData = await getResponse.json();
        const success = getResponseData.success;
        const message1 = getResponseData.message1;
        if (success == true) {
          //setShowAlert(getResponseData);
          setModalAlert(getResponseData);

          setGetData({
            fullname: "",
            email: "",
            phone: "",
            address: "",
            password: "",
            confirmpassword: ""
          });

        } else {
          setShowAlert(getResponseData);
        }

      }

    } catch (error) {
      console.error('Login failed', error);
    } finally {
      setIsLoading(false);
    }
  }
  return {
    modalAlert, showAlert, alertClose, isLoading, getData, setGetData, handleSignUp
  };
}












