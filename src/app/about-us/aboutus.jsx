"use client";
import { useState, useEffect } from 'react';
//import axios from 'axios';



export default function login({ realTimePageReloader }) {
  const [loginData, setLoginData] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    status_id: "",
    password: "",
  });


  const handleLogin = async () => {

    // const formData = new FormData();
    // formData.append('fullname', loginData.fullname);
    // formData.append('email', loginData.email);
    // formData.append('phone', loginData.phone);
    // formData.append('address', loginData.address);
    // formData.append('status_id', loginData.status_id);
    // formData.append('password', loginData.password);

    try {

    ///  const postResponse = await axios.post('/api/login', loginData);

      // const postResponse = await fetch('/api/register', {
      //   method: 'POST',
      //   body: formData,
      // });
      const postResponse = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
      });
     
        const getData = await postResponse.json();
        // const getData = postResponse.data;
        const success = getData.success;
        const message1 = getData.message1;
        const message2 = getData.message2;

      if (success==true) {
          alert(message1 +' '+ message2);
      } else {
        alert(message1 +' '+ message2);
      }
    } catch (error) {
      console.error('Login failed', error);
      // setError('An unexpected error occurred');
    }
  };


  return (
    <>
      <h1>Login</h1>
      <div>
        <label>fullname:</label>
        <input
          type="text"
          value={loginData.fullname}
          onChange={(e) => setLoginData({ ...loginData, fullname: e.target.value })}
        />
      </div>
      <br />
      <br />
      <div>
        <label>email:</label>
        <input
          type="email"
          value={loginData.email}
          onChange={(e) => setLoginData({ ...loginData, email: e.target.value})}
        />
      </div>
      <br />
      <br />

      <div>
        <label>phone:</label>
        <input
          type="tel"
          value={loginData.phone}
          onChange={(e) => setLoginData({ ...loginData, phone: e.target.value})}
        />
      </div>
      <br />
      <br />


      <div>
        <label>address:</label>
        <input
          type="text"
          value={loginData.address}
          onChange={(e) => setLoginData({ ...loginData, address: e.target.value})}
        />
      </div>
      <br />
      <br />


      <div>
        <label>status:</label>
        <input
          type="text"
          value={loginData.status_id}
          onChange={(e) => setLoginData({ ...loginData, status_id: e.target.value})}
        />
      </div>
      <br />
      <br />


      <div>
        <label>Password:</label>
        <input
          type="password"
          value={loginData.password}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value})}
        />
      </div>
      <br />
      <br />

      <button onClick={handleLogin}>Register</button>

      {/* <span onClick={() => realTimePageReloader()}>About Us</span> */}
    </>
  );
}



    // return (
    //   <>
    //     <span onClick={()=>realTimePageReloader()}>About Us</span>
    //   </>
    // );
  
  




// const Login = () => {
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     // Implement your authentication logic here
//     // For example, you can use fetch to send login details to your backend API
//     try {
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         router.push('/dashboard'); // Redirect to dashboard on successful login
//       } else {
//         // Handle login error
//         console.error('Login failed');
//       }
//     } catch (error) {
//       console.error('Login failed', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

