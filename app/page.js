
"use client"
import React, { useState } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

function Page() {
  const [activeForm, setActiveForm] = useState('signIn');

  const handleToggle = () => {
    setActiveForm(prevForm => prevForm === 'signIn' ? 'signUp' : 'signIn');
  };

  return (
    <div className={`container ${activeForm === 'signIn' ? 'active' : ''}`}>
      <div className="form-container sign-in">
        <form>
          <h1 className='font-bold'>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon"><FaApple/></a>
            <a href="#" className="icon"><FaFacebookF/></a>
            <a href="#" className="icon"><FaGoogle/></a>
            <a href="#" className="icon"><FaLinkedin/></a>
          </div>
          <span>or use your email and password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#" className="text-blue-500 hover:underline">Forget Your Password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="form-container sign-up">
        <form>
          <h1 className='font-bold'>Create Account</h1>
          <div className="social-icons">
          <a href="#" className="icon"><FaApple/></a>
            <a href="#" className="icon"><FaFacebookF/></a>
            <a href="#" className="icon"><FaGoogle/></a>
            <a href="#" className="icon"><FaLinkedin/></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className={`toggle-panel ${activeForm === 'signIn' ? 'toggle-left' : 'toggle-right'}`}>
            <h1 className="font-extrabold">{activeForm === 'signIn' ? 'Welcome Back!' : 'Hello!'}</h1>
            <p className="font-semibold">{activeForm === 'signIn' ? 'Continue your journey towards better choices.' : 'Get started and Elevate your decision-making with our platform.'}</p>
            <button className="font-extrabold" onClick={handleToggle}>{activeForm === 'signIn' ? 'Sign In' : 'Sign Up'}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
