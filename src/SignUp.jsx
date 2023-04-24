import Icon from "../src/leaf.png"
import "./App.css"
import Registration from "./Registration"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "./firebase"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"


function SignUp() {
    const [user, setUser] = useState(undefined)
    const navigate = useNavigate()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (snapshot) => {
          setUser(snapshot?.toJSON())
        })
    
        return () => unsubscribe()
      }, [])


      useEffect(() => {
        if (user) {
            navigate('/dashboard')
        }
      }, [user])

    return (
        
    <div className=" min-h-screen bg-slate-500">
      <Link to="/app"><i class="fa-solid fa-arrow-left fa-lg p-6"></i></Link>
       
        <div className="absolute bg-pink-300 w-7/12 h-4/6 top-40 left-80 rounded-lg">
       
            <div className="absolute w-2/4 left-2/4 bg-purple-900 h-full rounded-lg">
            <img src={Icon} alt="hey-icon" id="bz-icon" className="w-full object-contain scale-125 absolute -top-7"/>
            </div>
            <Registration />
        </div>
    </div>
    )
}

export default SignUp