import logo from "../Assets/log2.png"; 
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import HeaderDropdown from "./HeaderDropdown";


function Header() {

    const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className='p-4 left-0 right-0 bg-white dark:bg-[#2b2c37] z-50'>

        <header className='flex justify-between items-center dark:text-white'>

            {/* left side */}

            <div className="flex items-center space-x-2 md:space-x-4">
                <img src={logo} alt="logo" className="h-20 v-20 cursor-pointer"/>
                <h3 className="hidden md:inline-block font-bold font-sans md:text-4xl">TaskMaster</h3>
                <div className="flex items-center">
                    <h3 className="truncate max-w-[200px] md:text-2xl text-xl font-bold md:ml-20 font-sans">Board Name</h3>
                    {openDropdown ? <FaAngleUp onClick={() => setOpenDropdown(!openDropdown)} className="w-3 ml-2 md:hidden cursor-pointer" /> : <FaAngleDown onClick={() => setOpenDropdown(!openDropdown)} className="w-3 ml-2 md:hidden cursor-pointer" />}
                </div>
            </div>

            {/* right side */}

            <div className="flex items-center space-x-4 md:space-x-6">
                <button className="hidden md:block button">+ Add New Task</button>
                <button className="button py-1 px-3 md:hidden">+</button>
                <CiMenuKebab className="text-3xl cursor-pointer p-1 rounded-full hover:shadow-xl" />
            </div>

        </header>

        {openDropdown && <HeaderDropdown setOpenDropdown={setOpenDropdown}/>}

    </div>
  ) 
}

export default Header
