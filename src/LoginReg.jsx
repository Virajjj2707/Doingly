import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "./firebase"
import { toast } from "react-hot-toast"

function LoginReg (){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const sign_in = (event) => {
    event.preventDefault()

    if (!(email && password)) return;
    
    signInWithEmailAndPassword(auth, email, password).then(() => {
      navigate('/dashboard')
    }).catch((reason) => toast.error(reason))
  }

    return (
        <div className="w-2/4 p-10  bg-loginbg bg-center bg-cover">
          
    <div className="p-5 bg-slate-500 rounded-lg backdrop-brightness-150 space-y-4">
      
      <h1 className="flex justify-center text-2xl font-bold text-black">
        Login
      </h1>

      <form className="space-y-4">
        <div className="flex flex-col space-y-4">
           
            <input
              type="email"
              id="f_name"
              value={email}
              onChange={(event) => setEmail(event.target.value.trim())}
              placeholder="Enter Email"
              className=" border focus:shadow-md border-slate-400 focus:border-slate-500 transition focus:outline-none py-2 px-4 w-full block rounded-md"
            />
      
          
           
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

        </div>
        <button
        type="submit"
        onClick={(event) => sign_in(event)}
         className="w-full bg-[#2E92EE] rounded-md text-white py-2 px-4"
        >
          Login
        </button>
        <p className="flex justify-center mx-auto mt-1">Don't have an account?<Link to="/signup"><button className='text-white ml-1'> Signup </button></Link></p>

     

      

        <button className="w-full bg-blue-800 rounded-md text-white py-2 px-4"><i class="fa-brands fa-facebook float-left mt-1"></i>Login with Facebook</button>
        <button className="w-full bg-black rounded-md text-white py-2 px-4"><i class="fa-brands fa-google float-left mt-1"></i>Continue with Google</button>
        
      </form>
    </div>
    
  </div>
    )
}

export default LoginReg