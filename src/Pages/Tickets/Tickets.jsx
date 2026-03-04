import React, { useState, use } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Tickets = ({ ticketsPromise }) => {
  // ১. সরাসরি ডাটাটি নিয়ে আসা
  const initialData = use(ticketsPromise);

  // ২. স্টেট ডিক্লেয়ার করার সময় সরাসরি initialData পাস করুন
  // এর ফলে useEffect এর ঝামেলা এবং Cascading Render এরর আর আসবে না
  const [tickets, setTickets] = useState(initialData || []);
  const [inProgress, setInProgress] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  const addToInProgress = (ticket) => {
    const isExist = inProgress.find((item) => item.id === ticket.id);
    if (!isExist) {
      setInProgress([...inProgress, ticket]);
      toast.success("Ticket added to In-Progress!");
    } else {
      toast.warning("Ticket already in progress!");
    }
  };

  const handleComplete = (task) => {
    // ইন-প্রগ্রেস থেকে রিমুভ
    setInProgress(inProgress.filter((item) => item.id !== task.id));
    // রিজলভড-এ অ্যাড
    setResolvedTasks([...resolvedTasks, task]);
    // মেইন লিস্ট থেকে রিমুভ (যাতে ডিসপ্লে থেকে চলে যায়)
    setTickets(tickets.filter((item) => item.id !== task.id));

    toast.success("Task Resolved successfully!");
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      <ToastContainer position="top-right" />
      
      {/* ব্যানার সেকশন */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-10 rounded-xl text-white text-center shadow-lg">
          <h3 className="text-xl">In-Progress</h3>
          <p className="text-6xl font-bold">{inProgress.length}</p>
        </div>
        <div className="bg-gradient-to-r from-emerald-400 to-teal-600 p-10 rounded-xl text-white text-center shadow-lg">
          <h3 className="text-xl">Resolved</h3>
          <p className="text-6xl font-bold">{resolvedTasks.length}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-10 flex flex-col lg:flex-row gap-10">
        <div className="lg:w-2/3">
          <h2 className="text-2xl font-bold mb-6">Customer Tickets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* এখানে tickets স্টেট থেকে ম্যাপ হচ্ছে */}
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-indigo-300 transition-all cursor-pointer"
                onClick={() => addToInProgress(ticket)}
              >
                <div className="flex justify-between mb-3">
                  <h3 className="font-bold text-gray-800">{ticket.title}</h3>
                  <span className="badge badge-success text-white">Open</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">{ticket.description}</p>
                <div className="border-t pt-4 text-[10px] text-gray-400 font-bold flex justify-between">
                    <span className="text-red-500">#{ticket.id} {ticket.priority}</span>
                    <span>📅 {ticket.createdAt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ডান পাশের স্ট্যাটাস সেকশন */}
        <div className="lg:w-1/3 space-y-10">
          <div>
            <h2 className="text-xl font-bold mb-4">Task Status</h2>
            {inProgress.map((task) => (
              <div key={task.id} className="bg-white p-5 rounded-lg border-l-4 border-indigo-500 mb-4">
                <p className="font-semibold mb-3">{task.title}</p>
                <button
                  onClick={(e) => { e.stopPropagation(); handleComplete(task); }}
                  className="btn btn-success btn-sm w-full text-white"
                >Complete</button>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Resolved Tasks</h2>
            {resolvedTasks.map((task) => (
              <div key={task.id} className="p-3 bg-green-50 rounded border border-green-100 mb-2 text-sm flex justify-between">
                <span>{task.title}</span>
                <span className="text-green-600 font-bold">✓</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;