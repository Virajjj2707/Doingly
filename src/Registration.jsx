import { Link } from 'react-router-dom';

function Registration() {
  

  return (
    <div className="w-2/4 p-10  bg-loginbg bg-center bg-cover">
    <div className="p-5 border border-white rounded-lg backdrop-brightness-150 space-y-4">
      <h1 className="flex justify-center text-2xl font-bold text-black">
        Signup
      </h1>

      <form className="space-y-4">
        <div className="flex flex-col space-y-4">
          {/* <span className="bg-white mx-auto my-2 p-2 h-10 rounded w-56"> */}
           
            <input
              type="text"
              id="f_name"

              placeholder="Enter Email"
              className=" border focus:shadow-md border-slate-400 focus:border-slate-500 transition focus:outline-none py-2 px-4 w-full block rounded-md"
            />
          {/* </span> */}
          
           
            <input
              type="password"
              id="l_name"

              placeholder="Enter Password"
              className="border focus:shadow-md border-slate-400 focus:border-slate-500 transition focus:outline-none py-2 px-4 rounded-md"
            />
          

        </div>
        <div className="flex flex-col">
          
            <i class="fa-solid fa-user"></i>
            <input
              type="password"
              

              placeholder="Confirm Password"
              className=" border focus:shadow-md border-slate-400 focus:border-slate-500 transition focus:outline-none py-2 px-4 rounded-md"
            />
          

        </div>
        <div className="flex flex-col">

        </div>
        <button
         
         className="w-full bg-[#2E92EE] rounded-md text-white py-2 px-4"
        >
          Sign up
        </button>

        <p className="flex justify-center mx-auto mt-1">Already have an account?<Link to="/login"><button className='text-blue-500 ml-1'> Login </button></Link></p>

        <button className="w-full bg-blue-800 rounded-md text-white py-2 px-4">Login with Facebook</button>
        
      </form>
    </div>
    
  </div>
  )
}

export default Registration