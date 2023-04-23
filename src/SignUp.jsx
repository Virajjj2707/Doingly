import Icon from "../src/leaf.png"
import "./App.css"
import Registration from "./Registration"



function SignUp() {

    return (
        
    <div className=" min-h-screen bg-slate-500">
       
        <div className="absolute bg-pink-300 w-7/12 h-4/6 top-40 left-80">
       
            <div className="absolute w-2/4 left-2/4 bg-purple-900 h-full">
            <img src={Icon} alt="hey-icon" id="bz-icon" className="w-full object-contain scale-125 absolute -top-7"/>
            </div>
            <Registration/>
        </div>
    </div>
    )
}

export default SignUp