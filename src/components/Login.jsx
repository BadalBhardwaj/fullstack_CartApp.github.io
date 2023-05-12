import React, { useState } from 'react'
import Logo from "../img/logo.png";
import LoginInput from './LoginInput';
import {motion} from 'framer-motion'
import {buttonClick} from '../context/animation'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";


const Login = () => {
  const [userEmail,setUserEmail] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [password,setPassword] = useState('')
//   const [User, setUser] = useState('')
  const [confirm_password, setConfirm_password] = useState('')

  
  
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user}, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  return (
    <div className="w-screen h-screen relative overflow-hidden flex">
        {/* bakground image */}
        <img src='https://flxt.tmsimg.com/assets/p186423_b_h10_ad.jpg' alt=""  className='w-full h-full object-cover absolute top-0 left-0'/>

        {/* content box */}
        <div className="flex flex-col items-center gap-6 bg-cardOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12 ">

            {/* top logo section  */}
            <div  className="flex items-center gap-2">
              <img src={Logo} className="w-11 object-cover" alt="logo" />
              <p className="text-green-500 text-xl font-bold"> FastPic</p>
            </div>
            {/* welcome text  */}
            <p className="text-3xl font-green-300 font-semibold">Welcome Back</p>
            <p className="text-xl text-center text-textColor -mt-6">Sign in with Following</p>

            {/* input section  */}
            <div className="w-full flex flex-col items-center gap-6 px-4 md:px-12 py-4">
              <LoginInput placeHolder={'Email Here'} icon='' inputState={userEmail} inputStateFunc={setUserEmail} type="email" isSignUp={isSignUp} />
              <LoginInput placeHolder={'Password Here'} icon='' inputState={password} inputStateFunc={setPassword} type="password" isSignUp={isSignUp} />
              {
                isSignUp && (
                  <LoginInput placeHolder={'Confirm Password Here'} icon='' inputState={confirm_password} inputStateFunc={setConfirm_password} type="password" isSignUp={isSignUp} />
                )
              }
              {
                !isSignUp ? <p>Doesn't have an account :{' '} 
                 <motion.button 
                 {...buttonClick} 
                 className='text-green-500 underline cursor-pointer font-bold'
                  onClick={() => setIsSignUp(true)}
                 >
                  Create One
                 
                  </motion.button></p> :
                  <p>Already have an account :{' '}  <motion.button 
                  {...buttonClick}
                   className='text-green-400  cursor-pointer'
                  onClick={() => setIsSignUp(false)}
                  >
                  Sign in Here
                
                  </motion.button></p>
              }

              {/* button section  */}

              {
                isSignUp ?
                <motion.button 
                {...buttonClick} 
              className='w-full px-4 py-2 rounded-md bg-green-500 cursor-pointer transition-all duration-156'
              >
                Sign Up
              </motion.button> : 
              <motion.button 
              {...buttonClick} 
              className='w-full px-4 py-2 rounded-md bg-green-500 cursor-pointer transition-all duration-156'
              >
                Sign in
              </motion.button>
              }
            </div>

            <div className="flex items-center justify-between gap-16">
              <div className="w-24 h-[1px] rounded-md bg-white"></div>
              <p className="text-white">or</p>
              <div className="w-24 h-[1px] rounded-md bg-white"></div>
            </div>

            <motion.button 
            {...buttonClick}
            className='flex items-center justify-centerpx-20 py-2 bg-blend-overlay backdrop-blur-md cursor-pointer rounded-3xl gap-4'
            onClick={login}
            >
             <p className="text-base px-16 text-textColor"> Signin With Google</p>
            </motion.button>
        </div>
    </div>
  )
}

export default Login
