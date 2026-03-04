import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-16 px-5 lg:px-20 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Column 1 */}
        <div className="">
          <h2 className="text-white text-xl font-bold mb-4">CS — Ticket System</h2>
          <p className="text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* Column 2*/}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Our Mission</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Sales</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Products & Services</a></li>
            <li><a href="#" className="hover:text-white transition">Customer Stories</a></li>
            <li><a href="#" className="hover:text-white transition">Download Apps</a></li>
          </ul>
        </div>

        {/* Column 4*/}
        <div>
          <h3 className="text-white font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition">Join Us</a></li>
          </ul>
        </div>

        {/* Column 5: Social Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Social Links</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 hover:text-white cursor-pointer">
              <div className="bg-white text-black rounded-full p-1"><FaTwitter size={12} /></div> @CS — Ticket System
            </li>
            <li className="flex items-center gap-2 hover:text-white cursor-pointer">
              <div className="bg-white text-black rounded-full p-1"><FaLinkedin size={12} /></div> @CS — Ticket System
            </li>
            <li className="flex items-center gap-2 hover:text-white cursor-pointer">
              <div className="bg-white text-black rounded-full p-1"><FaFacebook size={12} /></div> @CS — Ticket System
            </li>
            <li className="flex items-center gap-2 hover:text-white cursor-pointer">
              <div className="bg-white text-black rounded-full p-1"><MdEmail size={12} /></div> support@cst.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-800 mt-16 pt-8 text-center text-xs">
        <p>© 2026 CS — Ticket System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;