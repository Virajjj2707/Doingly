import React, { useState } from 'react'
import {collection, addDoc, serverTimestamp, updateDoc, doc} from 'firebase/firestore'
import { firestore } from './firebase'
import { toast } from 'react-hot-toast'


function Form({isUpdate, docId, setOpen}) {
    const [input, setInput] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const text = input
        setInput('')

        toast.promise(isUpdate ? updateDoc(doc(firestore, 'works', docId), {text, timestamp: serverTimestamp()})  : addDoc(collection(firestore, 'works'), {
          text,
          timestamp: serverTimestamp()
        }) , {
          loading: `Hang tight while we ${isUpdate ? 'update': 'create'} a task for you!`,
          error: `Failed to ${isUpdate ? 'update': 'create'} a task for you!`,
          success: `Task ${isUpdate ? 'updated': 'created'} successfully!`
      })

      isUpdate && setOpen('')

    }

  return (
    <>
    <form className={`${isUpdate ? 'w-2/5': 'lg:w-2/5 w-2/5'} shadow-lg p-4 rounded-lg bg-slate-900 mx-auto space-y-4 mt-5`}>
        <fieldset className='flex flex-col gap-2'>
            <label htmlFor="task" className='text-sm text-white font-medium text-center'>Enter Task</label>
            <input type="text" id="task" className='py-2 px-4 w-full focus:outline-slate-400 rounded-md transition' value={input} onChange={(event) => setInput(event.target.value)}  />
        </fieldset>
        <button disabled={!input} type='submit' className='py-2 px-4 text-center w-full bg-blue-500 hover:bg-blue-600 transition text-white font-medium rounded-lg disabled:bg-gray-500' onClick={(event) => handleSubmit(event)}>Submit</button>
    </form>
    <div>
    
    </div>
    </>
  ) 
}

export default Form
