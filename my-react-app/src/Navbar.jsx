
import { Link } from 'react-router-dom'
import './CSS/Courses.css'
import { BiCategory } from 'react-icons/bi'
import { BiSolidPlaylist } from 'react-icons/bi'

const Navbar = () => {
    return (
        <div className='flex flex-col gap-5'>
            <Link to='/'>
                <div className='w-[70px] h-[50px] rounded-md flex items-center justify-center flex-col bg-red-200'>
                    <BiCategory className='text-3xl' />
                    <p className='text-xs font-semibold bg-transparent'>Home</p>
                </div>
            </Link>
            <Link to='/courses'>
                <div className='w-[70px] h-[50px] rounded-md flex items-center justify-center flex-col bg-gray-200'>
                    <BiSolidPlaylist className='text-3xl' />
                    <p className='text-xs font-semibold bg-transparent'>Courses</p>
                </div>
            </Link>


        </div>
    )
}

export default Navbar