import React from 'react'
import PEOPLE from '../assets/images/people.svg'
import RUPEES from '../assets/images/rupees.svg'
import WALLET from '../assets/images/wallet.svg'
import TAG from '../assets/images/tag.svg'
import OFFER from '../assets/images/offer.svg'
import { useLocation, Link } from 'react-router-dom'



const ReferPage = () => {

    const data = [
        {
            logo: PEOPLE,
            heading: 'Invite your Friends',
            description: 'Share the link tutedude.com with your friends'
        },
        {
            logo: TAG,
            heading: 'Friend purchases any course',
            description: 'Using your REFERRAL CODE in the payments page'
        },
        {
            logo: RUPEES,
            heading: 'You get ₹ 200 as referral money',
            description: 'On total purchase the friend makes, into your wallet'
        },
        
        {
            logo: OFFER,
            heading: 'Your Friend gets ₹ 200 Off',
            description: 'On his overall fee on successful purchase using your referral code'
        },
        {
            logo: WALLET,
            heading: 'Transfer money from wallet',
            description: 'When the wallet balance reaches ₹200 or more, you can withdraw it'
        },
    ];


    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((path)=> path !== '');



  return (
    <div className='w-[95%] lg:w-[75%]  m-auto my-10'>
        <div>
            {/* Render the home link */}
            <Link to="/">Home</Link>

            {/* Render the dynamic breadcrumb based on the current URL */}
            {pathnames.map((path, index) => (
                <React.Fragment key={path}>
                    <span>{' > '}</span>
                    <Link to={`/${path}`}>{path}</Link>
                </React.Fragment>
            ))}
        </div>

        <div className=' my-10 w-full '>
            <div className='w-full flex flex-col lg:flex-row  justify-between'>
                <div className='w-[350px]  lg:w-[486px] h-[198px] lg:h-[188px] shadow-xl shadow-slate-300 rounded-[20px] '>
                    <div className='grid grid-cols-2 lg:grid-cols-3  font-normal p-5 '>
                        <div className='text-center '>
                            <h3 className='text-color leading-8 text-sm lg:text-[0.9rem]'>Referal Earning</h3>
                            <h5 className='font-semibold text-2xl lg:text-3xl text-left ml-5'>₹ 2,500</h5>
                        </div>

                        <div className='text-center'>
                            <h3 className='text-color leading-8 text-sm lg:text-[0.9rem]'>Total Referals</h3>
                            <h5 className='font-semibold text-2xl lg:text-3xl text-left ml-7'>7</h5>
                        </div>

                        <div className='text-center mt-5 lg:mt-0'>
                            <h3 className='text-color leading-8 text-sm lg:text-[0.9rem]'>Wallet Balance</h3>
                            <h5 className='font-semibold text-2xl lg:text-3xl text-left ml-5'>₹ 500</h5>
                        </div>
                        <div className='w-fit m-auto mt-12 lg:mt-0 lg:hidden'>
                            <button className='bg-btn text-white p-2 text-sm rounded-full px-2 m-auto'>Withdraw Balance</button>
                        </div>
                    </div>
                    <div className='w-fit m-auto mt-5 hidden lg:block'>
                        <button className='bg-btn text-white p-2 rounded-full px-2 m-auto'>Withdraw Balance</button>
                    </div>
                </div>

                <div className='w-screen lg:w-fit mt-10'>
                    <h2 className='text-color text-2xl'>Your Referal Code</h2>
                    <div className='p-2 border-gradient h-[50px] w-[300px] rounded-md mt-2 m-auto'>
                        <div className=' h-[46px] w-[296px] bg-white rounded-md relative left-[-6px] top-[-6.5px]'>
                            <div className='pt-[10px] mx-10 text-color'>
                                <span className='mx-3 mt-2'>E</span>
                                <span className='mx-3 mt-2'>D</span>
                                <span className='mx-3 mt-2'>C</span>
                                <span className='mx-3 mt-2'>H</span>
                                <span className='mx-3 mt-2'>5</span>
                                <span className='mx-3 mt-2'>4</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
            <div className='mt-14 '>
                <h2 className='text-xl text-color'>How does it work ?</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 mt-5'>
                {
                    data.map((elm, i)=>{
                        return (
                            <>
                            <div className='flex w-fit gap-5 m-5'>
                                <div className='w-[65px] h-[65px] flex justify-center items-center rounded-full bg-slate-200'>
                                    <img src={elm.logo} alt={elm.heading.split(" ")[0]} />
                                </div>
                                <div className=''>
                                    <h2>{elm.heading}</h2>
                                    <p className='text-sm font-normal w-[270px]'>{elm.description}</p>
                                </div>
                            </div>
                            </>
                        )
                    })
                }
                </div>
                <div className='flex flex-col gap-5 mt-5'>
                    <Link to='/enrolled' className='text-color '>
                        Friends Who Enrolled
                    </Link>
                    <Link to='/enrolled' className='text-color'>
                        Terms & Conditions
                    </Link>
                </div>
            </div>

        </div>

    </div>
  )
}

export default ReferPage