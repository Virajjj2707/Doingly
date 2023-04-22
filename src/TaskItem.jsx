import {PencilSquareIcon, TrashIcon} from '@heroicons/react/24/outline'
import { deleteDoc, doc } from 'firebase/firestore'
import { firestore } from './firebase'
import { toast } from 'react-hot-toast'

function TaskItem({title, timestamp, id, setOpen}) {
    const handleDelete = () => {
        toast.promise(deleteDoc(doc(firestore, 'works', id)), {
            loading: 'Deleting your task!',
            error: 'Failed to delete task!',
            success: 'Task Deleted Successfully!'
        })
    }

  return (
      <li key={timestamp} className="py-2 px-4 border border-slate-900 rounded-lg transition cursor-pointer flex items-center justify-between space-x-2">
        <span className='text-sm text-slate-900'>{title}</span>
        <div className='flex items-center space-x-4'>
            <PencilSquareIcon onClick={() => setOpen(id)} className='w-5 h-5 flex-shrink-0 text-black hover:text-rose-600 transition' />
        <TrashIcon onClick={handleDelete} className='w-5 h-5 flex-shrink-0 text-red-600 hover:text-red-900 transition' />
        </div>
        </li>

  )
}

export default TaskItem
