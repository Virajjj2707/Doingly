import { useEffect, useState, } from "react"
import Tail from "../src/tail.png"
import LoginReg from "./LoginReg"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "./firebase"
import { Toaster } from "react-hot-toast"
import { onAuthStateChanged } from "firebase/auth"



function Login(){
    const [user, setUser] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (snapshot) => {
            setUser(snapshot?.toJSON())
        })

        return () => unsubscribe()
    }, [])

    useEffect(() => {
        console.log(auth.currentUser)
        if (auth.currentUser && user) navigate('/dashboard')
      }, [navigate, user])

    return(
        <>
        <Toaster position="top-center" />
            <div>
                  <div className=" min-h-screen bg-[#29323F]">
                  <Link to="/app"><i class="fa-solid fa-arrow-left fa-lg text-white p-8"></i></Link>
       
       <div className="absolute bg-[#5D5482] w-7/12 h-4/6 top-40 left-80 rounded-lg">
      
           <div className="absolute w-2/4 left-2/4 bg-[#8F5671] h-full rounded-lg">
           <img src={Tail} alt="hey-icon" id="bz-icon" className="w-full object-contain scale-125 absolute -top-7"/>
           </div>
           <LoginReg/>
       </div>
   </div>
            </div>
        </>
    )
}

export default Login