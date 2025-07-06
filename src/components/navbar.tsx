const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-5 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:justify-between">
        <div className="flex flex-col sm:flex-row items-center sm:space-x-2 text-center sm:text-left">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="h-20 w-auto object-contain mb-2 sm:mb-0"
          />
          <span className="text-lg sm:text-xl font-semibold text-gray-800">
            Certified Tester Syllabus Foundation Level
          </span>
        </div>
      </div>
    </nav> 
  );
}; 

export default Navbar;
