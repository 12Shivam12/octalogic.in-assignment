import React, { useState } from 'react'
import data from './MusicClasses.json'
import './CSS/Courses.css'
import { BsThreeDotsVertical } from 'react-icons/bs'

const Courses = () => {
    const [state, setState] = useState(data.musicClass)
    return (
        <>
            <div className=''>
                <h2 className='text-left text-2xl font-black mb-5 text-slate-600' >Courses</h2>
                <div className='flex justify-between mb-10'>
                    <h3 className='text-left text-lg font-extrabold text-slate-500'>course List</h3>
                    <input className='text-left pl-3 border border-gray-300' type="text"  placeholder='Search...' />
                </div>

                <div className='flex justify-center mb-10'>
                    <table className="border-collapse text-left font-bold text-[13px]">
                        <thead>
                            <tr className=" border-b border-slate-300">
                                <th>Name</th>
                                <th>Description</th>
                                <th>Instructor</th>
                                <th>Instrument</th>
                                <th>Day of the Week</th>
                                <th>Number of Students</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.map((musicClass, index) => (
                                <tr className='border-inherit border border-slate-400 ...' key={index} >
                                    <td>{musicClass.name}</td>
                                    <td>{musicClass.description}</td>
                                    <td>{musicClass.instructor}</td>
                                    <td>{musicClass.instrument}</td>
                                    <td>{musicClass.day_of_week}</td>
                                    <td>{musicClass.number_of_students}</td>
                                    <td>${musicClass.price}</td>
                                    <td>Active</td>
                                    <td className='pl-3 cursor-pointer'><BsThreeDotsVertical /></td>
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