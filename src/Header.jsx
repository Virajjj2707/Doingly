import { useEffect, useState } from "react"
import Doingly from "../src/todoLOGO2.png"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "./firebase"
import { memo } from "react"
import { useNavigate } from "react-router-dom"

function Header() {
  const [user, setUser] = useState()
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/app')
    }).catch((reason) => alert(reason))
  }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (snapshot) => {
        setUser(snapshot?.toJSON())
      })

      return () => unsubscribe()
    }, [])

    return (
      <nav class="flex items-center justify-between flex-wrap bg-slate-900 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img src={Doingly} alt="do-icon" className="w-12 h-10"/>
        <span class="font-semibold text-xl tracking-tight"></span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-slate-200 mr-4">
          History
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-slate-200 mr-4">
            Help and Support
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          
          </a>
        </div>
        <div className="text-white">
          {user ? <button onClick={() => handleSignOut()} title="Sign Out">{user.email}</button> : 'Guest'}
        </div>
      </div>
    </nav>
    )
  }

  export default memo(Header)