import Header from './Header'
import Form from "./Form"
import { Toaster } from "react-hot-toast"
import TaskList from './TaskList';
import  "./App.css"

function App() {
  return (
    <>
    
    
    <Toaster position="top-center" reverseOrder={false}/>
    <main >
    <Header />
   
    <Form />
   
    <TaskList />
  
   
    </main>
  
    
   

    </>
  );
}

export default App;
