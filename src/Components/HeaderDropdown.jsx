import { useSelector } from 'react-redux';
import boardIcon from '../Assets/icon-board.svg';
import darkIcon from "../Assets/icon-dark-theme.svg";
import lightIcon from "../Assets/icon-light-theme.svg";
import { Switch } from '@headlessui/react';
import useDarkMode from '../Hooks/useDarkMode';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import boardsSlice from '../Redux/boardsSlice';

function HeaderDropdown({ setOpenDropdown, setBoardModalOpen }) {

    const dispatch = useDispatch();

    const [colorTheme, setTheme] = useDarkMode();
    const [darkSide, setDarkSide] = useState(
        colorTheme === 'light' ? true : false
    );

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
      };

    const boards = useSelector((state) => state.boards);

  return (
    <div className="py-10 px-6 absolute left-0 right-0 bottom-[-100vh] top-24 bg-[#00000080] dropdown"
    onClick={
        (e) => {
            if(e.target !== e.currentTarget){//if click on white part, then return
                return;
            }
            setOpenDropdown(false); //else just close the window
        }
    }
    >

        <div className='bg-white dark:bg-[#2b2c37] shadow-md shadow-[#364e7e1a] w-full py-4 rounded-xl'>
            <h3 className='dark:text-gray-300 text-gray-600 font-semibold mx-4 mb-8'>
                All Boards ({boards?.length})
            </h3>

            <div>
                {boards.map((board , index) => (
                    <div className={`cursor-pointer flex items-baseline dark:text-white space-x-2 px-5 py-4 ${board.isActive && `bg-[#00ADB5] rounded-r-full text-white mr-8`}`} key={index}
                    onClick = {()=>{
                        dispatch(boardsSlice.actions.setBoardActive({index}))//sets the board with this index active and rest as inactive
                    }}
                    >
                        <img src={boardIcon} className='h-4' />
                        <p className='text-lg font-bold'>{board.name}</p>
                    </div>
                ))}

                <div className='cursor-pointer flex items-baseline space-x-2 text-[#00ADB5] px-5 py-4' 
                    onClick={() => {
                        setBoardModalOpen(true)//open the setBoard Modal
                        setOpenDropdown(false)//close the open dropdown Modal
                    }}
                >
                    <img src={boardIcon} className='h-4' />
                    <p className='text-lg font-bold'>Create New Board</p>
                </div>

                <div className='mx-2 p-4 space-x-2 bg-slate-100 dark:bg-[#20212c] flex justify-center items-center rounded-lg'>
                    <img src={lightIcon}/>

                    <Switch 
                    checked={darkSide} onChange={toggleDarkMode}
                    className={`${darkSide ? 'bg-[#00ADB5]' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`} 
                    >

                    <span className={`${darkSide ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`}/>

                    </Switch>
                    <img src={darkIcon}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderDropdown
