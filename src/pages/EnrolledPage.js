import React from 'react'
import { useLocation } from 'react-router-dom'

const EnrolledPage = () => {

    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((path) => path !== '');

    const data = [
        {
            name: 'Dhiraj Saxsena',
            courseEnrolled: 6,
            skills: ["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "JAVA"],
            referralAmt: 185
        },
        {
            name: 'Subhash Mishra',
            courseEnrolled: 23,
            skills: ["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "JAVA", "C++"],
            referralAmt: 485
        },
        {
            name: 'Prafull Kumar',
            courseEnrolled: 23,
            skills: ["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "JAVA"],
            referralAmt: 485
        },
    ]
    
  return (
    <div className='w-[95%] lg:w-[75%]  m-auto my-10'>
        <div className='flex w-full justify-between'>
            <div>
                <h2 className='text-color'>Your Referral Code</h2>
                <div className='p-2 border w-fit border-slate-200 rounded-md my-5 mb-10'>
                    <span className='mx-2 mt-2'>E</span>
                    <span className='mx-2 mt-2'>D</span>
                    <span className='mx-2 mt-2'>C</span>
                    <span className='mx-2 mt-2'>H</span>
                    <span className='mx-2 mt-2'>5</span>
                    <span className='mx-2 mt-2'>4</span>
                </div>
            </div>

            <div className='bg-white shadow-xl shadow-slate-300 rounded-xl p-5 text-center h-fit'>
                <h2 className='text-color'>Wallet Balance</h2>
                <h2>₹500</h2>
            </div>
        </div>

        <h2 className='text-color '>Friends who enrolled <span className='text-slate-400'>(3)</span></h2>
        <div className='flex flex-col lg:flex-row gap-5 justify-between mt-5 w-full mb-14'>
        {
            data.map((elm, i)=>{
                return (
                    <div className='p-5 flex flex-col gap-3 border-gradient rounded-[20px] w-[358px] text-white'>
                        <h2>{elm.name}</h2>
                        <h5 className='text-sm font-normal'>Courses Enrolled ({elm.courseEnrolled})</h5>
                        <div className='flex flex-wrap '>
                            {
                                elm.skills.map((skill, i)=>{
                                    return (
                                        <h2 className='text-sm w-fit m-2 font-normal border border-slate-200 p-1 px-2 rounded-full '>{skill}</h2>
                                    )
                                })
                            }
                        </div>
                        <h2 className='font-normal'>Refferal Amount <span className='font-semibold text-2xl'>₹{elm.referralAmt}</span></h2>
                    </div>
                )
            })
        }
        </div>

        <a href='#' className='text-color text-xl'>Terms & Conditions</a>
    </div>
  )
}

export default EnrolledPage