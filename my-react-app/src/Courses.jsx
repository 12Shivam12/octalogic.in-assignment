import React, { useState } from 'react'
import data from './MusicClasses.json'
import './CSS/Courses.css'
import { BsThreeDotsVertical } from 'react-icons/bs'

const Courses = () => {
    const [state, setState] = useState(data.musicClass)
    return (
        <>
            <div className='w-[80vw]'>
                <h2 className='text-left text-2xl font-black mb-5 text-slate-600' >Courses</h2>
                <div className='flex justify-between mb-10'>
                    <h3 className='text-left text-lg font-extrabold text-slate-500'>course List</h3>
                    <input className='text-left pl-3 border border-gray-300 bg-white' type="text"  placeholder='Search...' />
                </div>

                <div className='flex justify-center mb-10'>
                    <table className="border-collapse text-left font-bold text-[13px] w-[100%] bg-white p-5">
                        <thead>
                            <tr className=" border-b border-slate-300">
                                <th className='w-1/10 text-center'>Name</th>
                                <th className='w-1/10 text-center'>Description</th>
                                <th className='w-1/10 text-center'>Instructor</th>
                                <th className='w-1/10 text-center'>Instrument</th>
                                <th className='w-1/10 text-center'>Day of the Week</th>
                                <th className='w-1/10 text-center'>Number of Students</th>
                                <th className='w-1/10 text-center'>Price</th>
                                <th className='w-1/10 text-center'>Status</th>
                                <th className='w-1/10 text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.map((musicClass, index) => (
                                <tr className='border-inherit border border-slate-200 ...' key={index} >
                                    <td className='w-1/10 text-center'>{musicClass.name}</td>
                                    <td className='w-1/10 text-center'>{musicClass.description}</td>
                                    <td className='w-1/10 text-center'>{musicClass.instructor}</td>
                                    <td className='w-1/10 text-center'>{musicClass.instrument}</td>
                                    <td className='w-1/10 text-center'>{musicClass.day_of_week}</td>
                                    <td className='w-1/10 text-center'>{musicClass.students}</td>
                                    <td className='w-1/10 text-center'>{musicClass.price}</td>
                                    <td className='w-1/10 text-center'>{musicClass.status}</td>
                                    <td className='w-1/10 text-center pl-3 cursor-pointer'><BsThreeDotsVertical /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button className="float-right pt-3 pb-3 pl-5 pr-5
                                  bg-red-200 rounded-lg text-black
                                  font-bold ">+ Add Course</button>
            </div>
        </>
    )
}

export default Courses