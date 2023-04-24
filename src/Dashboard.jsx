import Header from "./Header"
import Form from './Form'
import TaskList from './TaskList'
import { useEffect, useState } from "react"
import { auth } from "./firebase"
import { onAuthStateChanged } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { Toaster, toast } from "react-hot-toast"

const Dashboard = () => {
    const [user, setUser] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (snapshot) => {
            setUser(snapshot?.toJSON())
        })

        return () => unsubscribe()
    }, [])

    console.log(user)

    useEffect(() => {
      if (!auth.currentUser) navigate('/login')
    }, [navigate])

    useEffect(() => {
      toast.success(`Welcome ${auth.currentUser.email}`)
    }, [])

  return (
    <>
    <Toaster position="top-center" />
    <main>
      <Header />
      <Form />
      <TaskList />
    </main>
    </>
  )
}

export default Dashboard
