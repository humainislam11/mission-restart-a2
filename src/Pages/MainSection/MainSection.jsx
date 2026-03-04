import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainSection = () => {
  const [tickets, setTickets] = useState([]);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);



  

  // টিকেট ক্লিক করলে Task Status-এ অ্যাড হওয়া
//   const addToTaskStatus = (ticket) => {
//     const isExist = taskStatus.find(item => item.id === ticket.id);
//     if (!isExist) {
//       setTaskStatus([...taskStatus, ticket]);
//       toast.success("Added to Task Status!");
//     } else {
//       toast.warn("Already in Task Status!");
//     }
//   };

  // Complete বাটনের লজিক
//   const handleComplete = (task) => {
//     toast.success(`${task.title} Completed!`);
    
//     // ১. Task Status থেকে রিমুভ
//     setTaskStatus(taskStatus.filter(item => item.id !== task.id));
//     // ২. Resolved লিস্টে অ্যাড
//     setResolvedTasks([...resolvedTasks, task]);
//     // ৩. মেইন টিকেট লিস্ট থেকে রিমুভ
//     setTickets(tickets.filter(item => item.id !== task.id));
//   };

  return (
    <div className="bg-gray-50 min-h-screen p-5 lg:p-10">
      <ToastContainer position="bottom-right" />

      {/* --- Dynamic Banner --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-10 bg-gray-100 mt-10">
      
      
      <div className="relative overflow-hidden bg-gradient-to-r from-[#6366F1] to-[#A855F7] rounded-xl p-10 text-white text-center shadow-lg">
        
        <img 
          src="../../../public/vector1.png" 
          alt="pattern"
          className="absolute inset-0 object-cover" 
        />
        
        <div className="relative z-10"> 
          <h3 className="text-xl font-medium mb-2">In-Progress</h3>
          <p className="text-6xl font-bold">{taskStatus.length}</p>
        </div>
      </div>

      
      <div className="relative overflow-hidden bg-gradient-to-r from-[#4ADE80] to-[#0D9488] rounded-xl p-10 text-white text-center shadow-lg">
        
       
        <img 
          src="../../../public/vector1.png" 
          alt="pattern"
          className="absolute inset-0  object-cover" 
        />
        
        <div className="relative z-10 flex flex-col items-center">
          <h3 className="text-xl font-medium mb-2">Resolved</h3>
          <p className="text-6xl font-bold mb-4">{resolvedTasks.length}</p>
        </div>
      </div>

    </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side: Tickets */}
        <div className="lg:w-2/3">
          <h2 className="text-2xl font-bold mb-6 text-slate-700">Customer <span className="text-blue-500">Tickets</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tickets.map(ticket => (
              <div 
                key={ticket.id} 
                className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:border-blue-300 transition-all"
                onClick={() => addToTaskStatus(ticket)}
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-gray-800">{ticket.title}</h4>
                  <span className="badge badge-success gap-1 text-white text-[10px] p-2">● Open</span>
                </div>
                <p className="text-sm text-gray-500 mb-4 h-10 overflow-hidden">{ticket.description}</p>
                <div className="flex justify-between text-[10px] font-bold border-t pt-3">
                  <span className="text-red-500">#{ticket.id} {ticket.priority} PRIORITY</span>
                  <span className="text-gray-400">📅 {ticket.createdAt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Status Sections */}
        <div className="lg:w-1/3">
          <h2 className="text-xl font-bold mb-4">Task Status</h2>
          <div className="space-y-4 mb-10">
            {taskStatus.map(task => (
              <div key={task.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="font-semibold text-sm mb-3">{task.title}</p>
                <button 
                  onClick={() => handleComplete(task)}
                  className="btn btn-success btn-sm w-full text-white"
                >Complete</button>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold mb-4">Resolved Task</h2>
          <div className="space-y-2">
            {resolvedTasks.length === 0 ? <p className="text-sm text-gray-400">No resolved tasks yet.</p> : 
              resolvedTasks.map(task => (
                <div key={task.id} className="p-3 bg-white rounded border-l-4 border-green-500 text-sm shadow-sm">
                  {task.title}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;