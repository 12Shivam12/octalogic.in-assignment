import { useState } from 'react'
import data from './MusicClasses.json'

const Home = () => {
    const [state, setState] = useState(data.Enrolments)
    const [bestStudents, setBestStudents] = useState(data.BestStudents)

    // console.log(bestStudents)
    return (
        <>
            <h1 className="text-lg font-[900]">Overview</h1>
            <div className="flex justify-between">
                <h3 className="text-md font-extrabold">LATEST ENROLMENTS</h3>
                <h4 className="text-sm font-semibold">View All Courses</h4>
            </div>
            <table className="border-collapse text-left font-bold text-[13px] w-4/5 bg-slate-100">
                <thead>
                    <tr className=" border-b border-slate-400">
                        <th>Enr. No</th>
                        <th>S. Name</th>
                        <th>C. Name</th>
                        <th>Fees</th>
                        <th>Enr. Date</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((value, index) => (
                        <tr className=' border-b border-slate-300 ...' key={index} >
                            <td>{value.EnrNo}</td>
                            <td>{value.SName}</td>
                            <td>{value.CName}</td>
                            <td>{value.Fees}</td>
                            <td>{value.EnrDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-between">
                <h3 className="text-md font-extrabold">LATEST ENROLMENTS</h3>
                <h4 className="text-sm font-semibold">View All Courses</h4>
            </div>
            <table className="border-collapse text-left font-bold text-[13px] w-4/5 bg-slate-100">
                <thead>
                    <tr className=" border-b border-slate-400">
                        <th>Reg.No</th>
                        <th>F.Name</th>
                        <th>L.Name</th>
                        <th>Course</th>
                        <th>Total Fees</th>
                        <th>Reg. Date</th>
                    </tr>
                </thead>
                <tbody>
                    {bestStudents.map((value, index) => (
                        <tr className=' border-b border-slate-300 ...' key={index} >
                            <td>{value.RegNo}</td>
                            <td>{value.FName}</td>
                            <td>{value.LName}</td>
                            <td>{value.Course}</td>
                            <td>{value.TotalFees}</td>
                            <td>{value.EnrDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>



        </>
    )
}

export default Home
