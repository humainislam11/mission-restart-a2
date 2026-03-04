import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainSection = () => {
  const [tickets, setTickets] = useState([]);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  // ✅ Async ফাংশন ব্যবহার করে ডাটা লোড
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('data.json');
        const data = await response.json();
        setTickets(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to load tickets!");
      }
    };

    loadData();
  }, []);

  // টিকেট কার্ডে ক্লিক করলে Task Status-এ যোগ করা
  const addToTaskStatus = (ticket) => {
    const isExist = taskStatus.find(item => item.id === ticket.id);
    if (!isExist) {
      setTaskStatus([...taskStatus, ticket]);
      toast.success("Task added to In-Progress!");
    } else {
      toast.warning("Task already in progress!");
    }
  };

  // ✅ Complete বাটন লজিক (সব রিকোয়ারমেন্ট মেনে)
  const handleComplete = (task) => {
    // ১. Task Status থেকে সরানো
    setTaskStatus(taskStatus.filter(item => item.id !== task.id));
    // ২. Resolved লিস্টে যোগ করা
    setResolvedTasks([...resolvedTasks, task]);
    // ৩. মেইন টিকেট লিস্ট থেকে চিরতরে সরানো
    setTickets(tickets.filter(item => item.id !== task.id));
    
    toast.info("Task marked as Completed!");
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      <ToastContainer position="top-right" />

      {/* --- Dynamic Banner (Updated Counts) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#6366F1] to-[#A855F7] rounded-xl p-10 text-white text-center shadow-lg">
           {/* সাদা আঁকাবাঁকা ডাগের মতো প্যাটার্ন (CSS Overlay) */}
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <h3 className="text-xl font-medium mb-2 relative z-10">In-Progress</h3>
          <p className="text-6xl font-bold relative z-10">{taskStatus.length}</p>
        </div>

        <div className="relative overflow-hidden bg-gradient-to-r from-[#4ADE80] to-[#0D9488] rounded-xl p-10 text-white text-center shadow-lg">
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <h3 className="text-xl font-medium mb-2 relative z-10">Resolved</h3>
          <p className="text-6xl font-bold relative z-10">{resolvedTasks.length}</p>
        </div>
      </div>

      {/* --- Main Section Layout --- */}
      <div className="max-w-7xl mx-auto px-5 lg:px-10 flex flex-col lg:flex-row gap-10">
        
        {/* Left: Customer Tickets List (2 Columns) */}
        <div className="lg:w-2/3">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-100 pb-2 w-fit">
            Customer <span className="text-blue-600">Tickets</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {tickets.map(ticket => (
              <div 
                key={ticket.id} 
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-indigo-300 transition-all cursor-pointer group"
                onClick={() => addToTaskStatus(ticket)}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">{ticket.title}</h3>
                  <span className="bg-green-100 text-green-700 text-[10px] px-2 py-1 rounded-full font-bold flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span> Open
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-6 line-clamp-2">{ticket.description}</p>
                <div className="flex justify-between items-center text-[10px] font-bold text-gray-400 border-t pt-4">
                  <span className={ticket.priority === 'HIGH' ? 'text-red-500' : 'text-orange-400'}>
                    #{ticket.id} {ticket.priority} PRIORITY
                  </span>
                  <div className="flex items-center gap-2">
                    <span>{ticket.customer}</span>
                    <span>📅 {ticket.createdAt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Task Status & Resolved List */}
        <div className="lg:w-1/3 space-y-10">
          {/* Task Status */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-700">Task Status</h2>
            <div className="space-y-4">
              {taskStatus.length === 0 && <p className="text-gray-400 italic text-sm">No tasks selected yet.</p>}
              {taskStatus.map(task => (
                <div key={task.id} className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-indigo-500 animate-fadeIn">
                  <p className="font-semibold text-gray-800 mb-4">{task.title}</p>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleComplete(task); }}
                    className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-bold py-2 rounded-lg transition-all"
                  >
                    Complete
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Resolved Task */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-700">Resolved Task</h2>
            <div className="space-y-3">
              {resolvedTasks.length === 0 && <p className="text-gray-400 italic text-sm">No resolved tasks yet.</p>}
              {resolvedTasks.map(task => (
                <div key={task.id} className="bg-green-50 p-3 rounded border border-green-100 text-green-800 text-sm flex justify-between">
                  <span>{task.title}</span>
                  <span className="text-xs font-bold">✓ Done</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MainSection;