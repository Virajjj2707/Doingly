import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { firestore } from "./firebase"
import TaskItem from "./TaskItem"





function TaskList() {
    const [tasks, setTasks] = useState([])
    const [open, setOpen] = useState('')

    console.log(tasks)

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

    console.log(open)
  return (
    <>
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

export default TaskList
