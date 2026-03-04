const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-sm px-4 lg:px-10">
      <div className="flex-1 lg:w-1/2">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <a className="text-gray-900 font-bold text-xl lg:text-2xl whitespace-nowrap ml-2 lg:ml-0">
          CS — Ticket System
        </a>
      </div>

      <div className="flex-none lg:w-1/2 flex justify-end items-center gap-2">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-gray-700 font-medium">
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        
        <a className="btn bg-[#422AD5] hover:bg-[#6D28D9] text-white border-none btn-sm lg:btn-md">
          + New Ticket
        </a>
      </div>
    </div>
  );
};

export default Navbar;