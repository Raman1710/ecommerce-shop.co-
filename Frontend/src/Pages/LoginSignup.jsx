// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import PrimaryButton from '../Components/Buttons/PrimaryButton'
// import Google from '../Components/Assets/Google.svg'
// import Line from '../Components/Assets/Line.svg'


// function LoginSignup() {

// const [formData, setFormData] = useState({
//   firstname: "",
//   lastname:"",
//   password:"",
//   email:""
// })

// const changeHandler = (e) =>{
//   setFormData({...formData,[e.target.name]:e.target.value})
// }

// const login = async () =>{
//   console.log("Login function executed",formData)
// }

// const signup = async () =>{
//   console.log("Sign up function executed", formData)
// }

//   return (
//     <div className='flex flex-row gap-8 mx-[148px] bg-black/10 rounded-3xl mb-40'>
//       <div className='w-1/2 m-8 flex  flex-col items-center  '>
//         <div className='flex flex-col' >
//           <p className=' font-satoshi-regular text-[36px] font-medium leading-[100px] tracking-wide'>Welcome Back 👋</p>

//           <p className='font-satoshi-regular text-[20px] leading-[150%] tracking-wide'>Sign in to unlock exclusive fashion collections.</p>
//         </div>
//         <div className='flex flex-col mt-12 '>
//           <div className='flex flex-col gap-2'>
//             <span className='font-satoshi-regular '>Email</span>
//             <input name='email' value={formData.email} onChange={changeHandler} type='email' placeholder='example@email.com' required className='py-3 pl-3 rounded-xl font-satoshi-regular outline-none' />
//           </div>
//           <div className='flex flex-col gap-2 mt-6 '>
//             <span className='font-satoshi-regular '>Password</span>
//             <input name='password' value={formData.password} onChange={changeHandler} type='password' placeholder='At least 8 characters' required className='py-3 pl-3 rounded-xl font-satoshi-regular outline-none' />
//           </div>
//           <Link><p className='text-left my-6 font-satoshi-regular hover:underline '>Forgot Password?</p></Link>
//           <PrimaryButton onClick={() => login()} className='text-white w-[338px] mt-0'>Sign in</PrimaryButton>
//         </div>

//         <div className='flex flex-row relative items-center justify-center mt-12 mb-6 gap-2'>
//           <div className='flex flex-row'>
//             <img src={Line} className='bg-black/10 w-[150px]' />
//           </div>
//           <span className=' font-satoshi-bold font-medium'>Or</span>
//           <div>
//             <img src={Line} className='bg-black/10 w-[150px]' />
//           </div>
//         </div>


//         <div className='flex flex-row w-[338px] py-3 rounded-[64px] justify-center items-center bg-black gap-4'>
//           <img src={Google} className='' />
//           <p className='text-white hover:underline cursor-pointer'>Sign in with Google</p>
//         </div>

//       </div>

//       <div className='w-1/2 m-8 flex  flex-col items-center bg-black text-white rounded-3xl '>
//         <div className='flex flex-col' >
//           <p className=' font-satoshi-regular text-[36px] font-medium leading-[100px] tracking-wide'>I'm new here 🙂</p>

//           <p className='font-satoshi-regular text-[20px] leading-[150%] tracking-wide'>Sign up to start your fashion journey.</p>
//         </div>
//         <div className='flex flex-col mt-12 '>
          
//           <div className='flex flex-col gap-2 '>
//             <span className='font-satoshi-regular '>First Name</span>
//             <input name='firstname' value={formData.firstname} onChange={changeHandler} type='text' placeholder='Ryomen' required className='py-3 pl-3 rounded-xl font-satoshi-regular outline-none text-black' />
//           </div>
//           <div className='flex flex-col gap-2 mt-6'>
//             <span className='font-satoshi-regular '>Last Name</span>
//             <input name='lastname' value={formData.lastname} onChange={changeHandler} type='text' placeholder='Sukuna' required className='py-3 pl-3 rounded-xl font-satoshi-regular outline-none text-black' />
//           </div>
//           <div className='flex flex-col gap-2 mt-6'>
//             <span className='font-satoshi-regular '>Email</span>
//             <input name='email' value={formData.email} onChange={changeHandler} type='email' placeholder='example@email.com' required className='py-3 pl-3 rounded-xl font-satoshi-regular outline-none text-black' />
//           </div>
//           <div className='flex flex-col gap-2 mt-6 '>
//             <span className='font-satoshi-regular '>Password</span>
//             <input name='password' value={formData.password} onChange={changeHandler} type='password' placeholder='At least 8 characters' required className='py-3 pl-3 rounded-xl font-satoshi-regular outline-none text-black' />
//           </div>
//           <PrimaryButton onClick={() => signup()} className='text-black bg-white w-[338px] mt-6 mb-8'>Create an account</PrimaryButton>
//         </div>

       
//       </div>

    
//     </div>
//   )
// }

// export default LoginSignup


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../Components/Buttons/PrimaryButton';
import GoogleIcon from '../Components/Assets/Google.svg';
import Line from '../Components/Assets/Line.svg';

const InputField = ({ name, value, onChange, placeholder, type = "text", className = "", isRequired = true }) => (
  <div className="flex flex-col gap-2 mt-6">
    <label className="font-satoshi-regular capitalize">{name}</label>
    <input
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      required={isRequired}
      className={`py-3 pl-3 rounded-xl font-satoshi-regular outline-none ${className}`}
    />
  </div>
);

function LoginSignup() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ firstname: '', lastname: '', email: '', password: '' });

  const handleChange = (e, setData) => setData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const login = async () => {
    
    console.log("Login function executed", loginData)
  
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    const responseData = await response.json();

    if (response.ok && responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors)
    }


  };
  const signup = async () => {
    console.log("Sign up function executed", signupData);
  
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });
  
      const responseData = await response.json();
  
      if (response.ok && responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      } else {
        alert(responseData.errors)
      }
 
  };
  

  return (
    <div className="flex flex-row gap-8 mx-[148px] bg-black/10 rounded-3xl mb-40">
      {/* Login Section */}
      <div className="w-1/2 m-8 flex flex-col items-center">
        <div className="flex flex-col">
          <p className="font-satoshi-regular text-[36px] font-medium leading-[100px] tracking-wide">Welcome Back 👋</p>
          <p className="font-satoshi-regular text-[20px] leading-[150%] tracking-wide">Sign in to unlock exclusive fashion collections.</p>
        </div>
        <div className="flex flex-col mt-12">
          <InputField name="email" value={loginData.email} onChange={e => handleChange(e, setLoginData)} placeholder="example@email.com" type="email" />
          <InputField name="password" value={loginData.password} onChange={e => handleChange(e, setLoginData)} placeholder="At least 8 characters" type="password" />
          <Link className="text-left my-6 font-satoshi-regular hover:underline">Forgot Password?</Link>
          <PrimaryButton onClick={login} className="text-white w-[338px]">Sign in</PrimaryButton>
        </div>

        <div className="flex flex-row items-center justify-center mt-12 mb-6 gap-2 relative">
          <img src={Line} alt="line" className="bg-black/10 w-[150px]" />
          <span className="font-satoshi-bold font-medium">Or</span>
          <img src={Line} alt="line" className="bg-black/10 w-[150px]" />
        </div>

        <div className="flex flex-row w-[338px] py-3 rounded-[64px] justify-center items-center bg-black gap-4">
          <img src={GoogleIcon} alt="Google icon" />
          <p className="text-white hover:underline cursor-pointer">Sign in with Google</p>
        </div>
      </div>

      {/* Signup Section */}
      <div className="w-1/2 m-8 flex flex-col items-center bg-black text-white rounded-3xl">
        <div className="flex flex-col">
          <p className="font-satoshi-regular text-[36px] font-medium leading-[100px] tracking-wide">I'm new here 🙂</p>
          <p className="font-satoshi-regular text-[20px] leading-[150%] tracking-wide">Sign up to start your fashion journey.</p>
        </div>
        <div className="flex flex-col mt-12">
          <InputField name="firstname" value={signupData.firstname} onChange={e => handleChange(e, setSignupData)} placeholder="Ryomen" className="text-black" />
          <InputField name="lastname" value={signupData.lastname} onChange={e => handleChange(e, setSignupData)} placeholder="Sukuna" className="text-black" />
          <InputField name="email" value={signupData.email} onChange={e => handleChange(e, setSignupData)} placeholder="example@email.com" type="email" className="text-black" />
          <InputField name="password" value={signupData.password} onChange={e => handleChange(e, setSignupData)} placeholder="At least 8 characters" type="password" className="text-black" />
          <PrimaryButton onClick={signup} className="text-black bg-white w-[338px] mt-6 mb-8">Create an account</PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
