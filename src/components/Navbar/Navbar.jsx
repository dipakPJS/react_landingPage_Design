 import './Navbar.css';

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-10 bg-transparent">
      <div className="flex items-center">
        <div className="text-white nav-logo">Liss-olution</div>
      </div>
      <ul className="flex justify-center items-center space-x-8">
        <li><a href="#" className="text-white hover:text-gray-300  ">Home</a></li>
        <li><a href="#" className="text-white hover:text-gray-300 " >Explore</a></li>
        <li><a href="#" className="text-white hover:text-gray-300   ">About</a></li>
        <li><a href="#" className="text-white hover:text-gray-300   ">Services</a></li>
        <li><a href="#" className="text-white hover:text-gray-300   ">Privacy Policy</a></li>
        <li><a href="#" className="btn text-white rounded-full py-3 px-6 contact font-bold bg-[#0077FF] hover:bg-[#3073c0] ">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
