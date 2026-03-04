
import { Suspense } from 'react';
import './App.css'
import Navbar from './Pages/Navbar/Navbar'
import Tickets from './Pages/Tickets/Tickets';

 const fetchTickets = async ()=>{
    const res = await fetch('data.json');
    return res.json();
  }


function App() {

  const ticketsPromise = fetchTickets();
 
  

  return (
    <>
     
     <div className='bg-gray-100'>
          <Navbar></Navbar>
          <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}> <Tickets ticketsPromise={ticketsPromise}></Tickets></Suspense>
          
          
     </div>
    </>
  )
}

export default App
