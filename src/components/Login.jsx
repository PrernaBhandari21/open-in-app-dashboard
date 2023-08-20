import React from 'react';
import { Link } from 'react-router-dom';
import GoogleIcon from "../../src/assets/icons/google.svg";
import AppleIcon from "../../src/assets/icons/apple.svg"

const Login = () => {
  return (
    <div className='h-screen flex ' style={{ background: '#F5F5F5' }}>
      <div className="w-2/5 h-full flex items-center justify-center" style={{ background: 'black' }}>

     <p className='text-center font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-white' style={{ fontFamily: '"Montserrat", sans-serif' }}>Board.</p>


      </div>

      <div className="w-3/5 h-full flex items-center justify-center">
        <div>
        <p style={{ fontFamily: '"Montserrat", sans-serif' , fontWeight:'700', fontSize:'36px'}}>Sign In</p>
       <p  style={{ fontFamily: '"Montserrat", sans-serif' , fontWeight:'600', fontSize:'16px'}}>Sign in to your account</p>

       <div className="sign-in-options w-100">
        <div className='flex'>
        <button style={{ background: 'white', padding: '8px',
    borderRadius: '17px', marginLeft:'0 !important'}} class="p-4 sign-in-btn flex justify-center items-center m-4 ml-0"><img class="google-icon mr-2" src={GoogleIcon} alt='google-icon'/><p class="sign-in-google" style={{ fontFamily: '"Montserrat", sans-serif' , fontWeight:'600', fontSize:'14px'}}>Sign in with Google</p></button>

        <button style={{ background: 'white', padding: '8px',
    borderRadius: '17px'}} class="p-4 sign-in-btn flex justify-center items-center m-4 bg-gray-100 mr-0"><img class="google-icon mr-2" src={AppleIcon} alt='google-icon'/><p class="sign-in-google" style={{ fontFamily: '"Montserrat", sans-serif' , fontWeight:'600', fontSize:'14px',}}>Sign in with Apple</p></button>
        </div>

        
       </div>

       <div className="form-card bg-white rounded-lg p-6 mt-4">
            <form action="submit">
              <label className="block font-semibold mb-2" htmlFor="email">Email address</label>
              <input className="w-full py-2 px-4 bg-gray-100 rounded" type="email" value="johndoe@gmail.com" />

              <label className="block font-semibold mb-2 mt-4" htmlFor="password">Password</label>
              <input className="w-full py-2 px-4 bg-gray-100 rounded" type="password" value="123456" />

              <a style={{ fontWeight: '400' }} className="forgot-password-link-text block mt-2 text-sm text-blue-600" href="/">Forgot Password?</a>

                <Link to="/dashboard">
                <button  className="w-full bg-black text-white font-semibold py-2 mt-4 rounded-lg" type="submit">
                            Sign In
                </button>
                </Link>
             
            </form>
          </div>

        <div className='text-center mt-4'>
        <p className='text-gray-500'>Don't have an account? <span style={{ fontWeight: '400' }} className="forgot-password-link-text  mt-2 text-sm text-blue-600">Register here</span></p>
        </div>
         
   

        </div>
       
      </div>
    </div>
  );
};

export default Login;
