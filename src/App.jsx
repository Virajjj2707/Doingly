import Cooper from "../src/cooper.png"
import Dologo from "../src/LOGOV3.png"
import  "./App.css"
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  // const [user, setUser] = useState()

  // useEffect(() => {
    
  // }, [])

  return (
    <>
    <Toaster position="top-center" />
    <main>
      <div className=" min-h-screen bg-[#CFA758]">
       
       <div className="absolute bg-[#C5CDDF] w-7/12 h-4/6 top-40 left-80 rounded-lg">
      
           <div className="absolute w-2/4 left-2/4 bg-[#BB7769] h-full">
           <img src={Cooper} alt="hey-icon" id="bz-icon" className="w-full object-contain scale-125 absolute -top-7"/>
           </div>
           <img src={Dologo} alt="do-icon" className="w-38 h-32 mx-4"/>
           <div className="mt-10">
           <p className="mx-20 text-2xl">Welcome To Doingly<i class="fa-solid fa-exclamation fa-shake ml-1 mt-1" ></i></p>
           
           <p className="mx-20 text-2xl">A Platform For Your</p>
           <p className="mx-20 text-2xl">Daily Chores.</p>
           
           </div>
          <Link to="/signup"> <button className="border border-1 border-black my-28 ml-16 w-36 h-10 bg-black text-white rounded-lg hover:bg-slate-900">Signup</button></Link>
          <Link to="/login"> <button  className="border border-1 border-black my-28 ml-8 w-36 h-10 bg-black text-white rounded-lg hover:bg-slate-900">Login</button></Link>
          <h3 className="font-sans-serif">Created by-Viraj Vadhane</h3>

       </div>
   </div> 
    </main>
    </>
  );
}

export default App;
