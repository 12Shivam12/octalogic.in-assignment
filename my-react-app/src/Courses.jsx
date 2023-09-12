import React, { useState } from 'react'
import musicClassesData from './MusicClasses.json'
import './CSS/Courses.css'
import { BsThreeDotsVertical } from 'react-icons/bs'

const Courses = () => {
    const [state, setState] = useState(musicClassesData)
    return (
        <>
            <div>
                <h2>Courses</h2>
                <div>
                    <h3 className='text-5xl text-orange-500'>course List</h3>
                    <input type="text" placeholder='Search...' />
                </div>

                <div>
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
                <button>+ Add Course</button>
            </div>
        </>
    )
}

export default Courses