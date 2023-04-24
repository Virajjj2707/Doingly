import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { firestore } from "./firebase"
import TaskItem from "./TaskItem"
import ReactModal from 'react-modal'
import Form from "./Form"
import Doodle from "../src/MessyDoodle.png"
import Bookicon from "../src/ReadingSideDoodle.png"
import {memo} from 'react'

ReactModal.setAppElement('#modal')

function TaskList() {
    const [tasks, setTasks] = useState([])
    const [open, setOpen] = useState('')

    useEffect(() => {
        const dbQuery = query(collection(firestore, 'works'), orderBy('timestamp', 'desc'))
        const unsubscribe = onSnapshot(dbQuery, (snapshot) => {
            setTasks(snapshot.docs.map((task) => ({id: task.id, ...task.data()})))
        })

        // async function fetchData() {
        //     const res = await getDocs(collection(firestore, "todos"))
        //     setTasks(res.docs.map((task) => task.data()))
        // }

        // fetchData()
        return () => unsubscribe()
    }, [])
    
  return (
    <>
    <ReactModal isOpen={!!open} onRequestClose={() => setOpen('')}  className={'w-3/5 h-fit p-2 rounded-lg space-y-2 outline-none shadow-md bg-slate-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'} >
    <h3 className="text-xl font-semibold text-center">Edit Task</h3>
      <Form isUpdate={true} docId={open} setOpen={setOpen}/>
    </ReactModal>
    <div>
      <img src={Doodle} alt="doodle" className="w-56 h-56 float-right my-60 mr-5"/>
    </div>

    <div>
      <img src={Bookicon} alt="bookslide" className="w-60 h-56 float-left ml-6"/>
    </div>

    <section className="lg:w-2/5 w-2/5 mx-auto space-y-2">
      <h3 className="text-xl font-semibold text-center mt-4">Your Tasks</h3>
      <ul className="space-y-2">
        {
            tasks.length ? tasks.map(({text, timestamp, id}) => <TaskItem setOpen={setOpen} key={id} title={text} timestamp={timestamp} id={id} />) : (
              <p className="text-slate-900 text-center mt-4">Create Tasks to be Organized!</p>
            )
        }
      </ul>
    </section>
    </>
  )
}

export default memo(TaskList)
