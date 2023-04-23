import Tail from "../src/tail.png"
import LoginReg from "./LoginReg"



function Login(){
    return(
            <div>
                  <div className=" min-h-screen bg-[#29323F]">
       
       <div className="absolute bg-[#5D5482] w-7/12 h-4/6 top-40 left-80">
      
           <div className="absolute w-2/4 left-2/4 bg-[#8F5671] h-full">
           <img src={Tail} alt="hey-icon" id="bz-icon" className="w-full object-contain scale-125 absolute -top-7"/>
           </div>
           <LoginReg/>
       </div>
   </div>
            </div>
    )
}

export default Login