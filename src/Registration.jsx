import { Link } from 'react-router-dom';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from './firebase'
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

function Registration() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  
  const sign_up = (event) => {
    event.preventDefault()

    if (!(email && password && confirmPassword)) {
      toast.error('Ky karto ky a tu!')
      return;
    };
    if (!(password === confirmPassword)) {
      toast.error('Nit type kar na bhadya!')
      return;
    };

    createUserWithEmailAndPassword(auth, email, password).catch((error) => alert(error));
  }

  return (
    <>
      <Toaster position='top-center' />
    <div className="w-2/4 p-10  bg-loginbg bg-center bg-cover">
    <div className="p-5 border border-white rounded-lg backdrop-brightness-150 space-y-4">
      <h1 className="flex justify-center text-2xl font-bold text-black">
        Sign Up
      </h1>

      <form className="space-y-4">
        <div className="flex flex-col space-y-4">
          
           
            <input
              type="text"
              id="f_name"
              value={email}
              onChange={(event) => setEmail(event.target.value.trim())}
              placeholder="Enter Email"
              className=" border focus:shadow-md border-slate-400 focus:border-slate-500 transition focus:outline-none py-2 px-4 w-full block rounded-md"
            />
          {/* </span> */}
          
           
            <input
              type="password"
              id="l_name"
            value={password}
            onChange={(event) => setPassword(event.target.value.trim())}
              placeholder="Enter Password"
              className="border focus:shadow-md border-slate-400 focus:border-slate-500 transition focus:outline-none py-2 px-4 rounded-md"
            />
          

        </div>
        <div className="flex flex-col">
       
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value.trim())}
              placeholder="Confirm Password"
              className=" border focus:shadow-md border-slate-400 focus:border-slate-500 transition focus:outline-none py-2 px-4 rounded-md"
            />
          

        </div>
        <div className="flex flex-col">

        </div>
        <button
         type='submit'
         onClick={(event) => sign_up(event)}
         className="w-full bg-[#2E92EE] rounded-md text-white py-2 px-4"
        >
          Sign up
        </button>

        <p className="flex justify-center mx-auto mt-1">Already have an account?<Link to="/login"><button className='text-blue-500 ml-1'> Login </button></Link></p>

        <button className="w-full bg-blue-800 rounded-md text-white py-2 px-4"><i class="fa-brands fa-facebook float-left mt-1"></i>Login with Facebook</button>
        
      </form>
    </div>
    
  </div>
    </>
  )
}

export default Registration