import { useState } from 'react'
import data from './MusicClasses.json'
import Card from './Card'
import { Link } from 'react-router-dom'

const Home = () => {
    const [state, setState] = useState(data.Enrolments)
    const [bestStudents, setBestStudents] = useState(data.BestStudents)

    // console.log(bestStudents)
    return (
        <div className='w-[80vw]'>
            <Link to='/login'><button className='w-[75px] h-[40px] bg-red-200 rounded-md font-semibold float-right'>Login</button></Link>
            <div className='flex flex-col'>
                <h1 className="text-2xl font-[900] float-left self-start mb-8">Overview</h1>
                <div className='flex justify-center gap-5 mb-8'>
                    <Card title="164" desc="total number of students" />
                    <Card title="12" desc="total number of courses" />
                    <Card title="$2000" desc="total amount earned" />
                    <Card title="Guitar" desc="best performing course" />
                    <Card title="Flute" desc="worst performing course" />
                </div>
            </div>
            <div className="flex justify-between mb-5">
                <h3 className="text-md font-extrabold">LATEST ENROLMENTS</h3>
                <h4 className="text-sm font-semibold text-red-500">View All Courses</h4>
            </div>
            <table className="border-collapse text-left font-bold text-[13px] w-full 
                              rounded-lg">
                <thead>
                    <tr className=" border-b border-slate-400">
                        <th className='w-1/5 text-center'>Enr. No</th>
                        <th className='w-1/5 text-center'>S. Name</th>
                        <th className='w-1/5 text-center'>C. Name</th>
                        <th className='w-1/5 text-center'>Fees</th>
                        <th className='w-1/5 text-center'>Enr. Date</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((value, index) => (
                        <tr className=' border-b border-slate-300 ...' key={index} >
                            <td className='w-1/5 text-center'>{value.EnrNo}</td>
                            <td className='w-1/5 text-center'>{value.SName}</td>
                            <td className='w-1/5 text-center'>{value.CName}</td>
                            <td className='w-1/5 text-center'>{value.Fees}</td>
                            <td className='w-1/5 text-center'>{value.EnrDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-between mt-8 mb-5">
                <h3 className="text-md font-extrabold">LATEST ENROLMENTS</h3>
                <h4 className="text-sm font-semibold text-red-500">View All Courses</h4>
            </div>
            <table className="border-collapse text-left font-bold text-[13px] w-full 
                              rounded-lg">
                <thead>
                    <tr className=" border-b border-slate-400">
                        <th className='w-1/6 text-center'>Reg.No</th>
                        <th className='w-1/6 text-center'>F.Name</th>
                        <th className='w-1/6 text-center'>L.Name</th>
                        <th className='w-1/6 text-center'>Course</th>
                        <th className='w-1/6 text-center'>Total Fees</th>
                        <th className='w-1/6 text-center'>Reg. Date</th>
                    </tr>
                </thead>
                <tbody>
                    {bestStudents.map((value, index) => (
                        <tr className=' border-b border-slate-300 ...' key={index} >
                            <td className='w-1/6 text-center'>{value.RegNo}</td>
                            <td className='w-1/6 text-center'>{value.FName}</td>
                            <td className='w-1/6 text-center'>{value.LName}</td>
                            <td className='w-1/6 text-center'>{value.Course}</td>
                            <td className='w-1/6 text-center'>{value.TotalFees}</td>
                            <td className='w-1/6 text-center'>{value.EnrDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>



        </div>
    )
}

export default Home
