
const Banner = ({inProgress,resolvedTasks}) => {
    return (
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-10 bg-gray-100 mt-10">
      
      
      <div className="relative overflow-hidden bg-gradient-to-r from-[#6366F1] to-[#A855F7] rounded-xl p-10 text-white text-center shadow-lg">
        
        <img 
          src="../../../public/vector1.png" 
          alt="pattern"
          className="absolute inset-0 object-cover" 
        />
        
        <div className="relative z-10"> 
          <h3 className="text-xl font-medium mb-2">In-Progress</h3>
          <p className="text-6xl font-bold">{inProgress}</p>
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
          <p className="text-6xl font-bold mb-4">{resolvedTasks}</p>
        </div>
      </div>

    </div>
    );
};

export default Banner;