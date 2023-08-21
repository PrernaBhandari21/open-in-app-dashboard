import React from 'react'
import DashboardIcon from "../../src/assets/icons/dashboard.svg";
import Transactions from "../../src/assets/icons/transactions.svg"
import Schedules from "../../src/assets/icons/schedules.svg"
import Users from "../../src/assets/icons/users.svg"
import Settings from "../../src/assets/icons/settings.svg"
import Search from "../../src/assets/icons/search.svg";
import Notification from "../../src/assets/icons/notification.svg"
import Profile from "../../src/assets/image/person.svg"
import Revenue from "../../src/assets/icons/revenue.svg"
import Transactions2 from "../../src/assets/icons/transactions2.svg"
import Likes from "../../src/assets/icons/likes.svg"
import Users2 from "../../src/assets/icons/users2.svg" 

import PieChart from './pie-chart/pieChart.jsx';
import LineGraph from './line-graph/LineGraph';
import Today from './today/today.jsx';




const Dashboard = () => {
  return (
    <div className='flex h-screen p-7 bg-gray-100' style={{ fontFamily: '"Montserrat", sans-serif' }}>
    <div className='left-box p-10 flex-none w-1/4 bg-gray-950 text-white' style={{borderRadius : '40px'}}>
      <p className='font-bold text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-white my-7' >Board.</p>

      <div className="left-content flex flex-col justify-between" style={{height:'80%'}}>
      <div id='img-text-container' style={{fontSize:'16px'}}>

<div className='dashboard-container flex items-center my-5'>
    <img alt='local-img' className="dashboard-img mr-4" src={DashboardIcon}></img>
    <p className="dashboard-text" style={{fontWeight:'600'}}>Dashboard</p>
</div>

<div className='transaction-container  flex items-center my-5'>
    <img alt='local-img' className="transaction-img mr-4" src={Transactions}></img>
    <p className="transaction-text" style={{fontWeight:'600'}}>Transactions</p>
</div>

<div className='schedule-container flex items-center my-5'>
    <img alt='local-img' className="schedule-img mr-4" src={Schedules}></img>
    <p className="schedule-text" style={{fontWeight:'600'}}>Schedules</p>
</div>

<div className='users-container flex items-center my-5'>
    <img alt='local-img' className="users-img mr-4" src={Users}></img>
    <p className="users-text" style={{fontWeight:'600'}}>Users</p>
</div>

<div className='settings-container flex items-center my-5'>
    <img alt='local-img' className="settings-img mr-4" src={Settings}></img>
    <p className="settings-text" style={{fontWeight:'600'}}>Settings</p>
</div>

</div>

<div id="left-bottom-container">
<div className='help-contact-container'>
    <p className='help-text text-gray-400 my-3' >Help</p>
    <p className='contact-text  text-gray-400'>Contact Us</p>
</div>
</div>
      </div>
    </div>
    <div className='right-box flex-auto bg-gray-100 pl-10'>
     
     <div style={{marginTop :'-20px'}} className="top-bar flex justify-between items-center h-15">
     <p className='text-2xl md:text-2xl lg:text-3xl xl:text-3xl my-7' style={{fontWeight:'700'}}>Dashboard</p>

<div style={{marginTop:'-10px'}} className='flex'>
<div>
<div className='relative'>
  <form action="/home">
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        name="search"
        className="py-2 pr-10 pl-4 rounded-lg"
      />
      <img
        src={Search}
        alt="Search Icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-4"
      />
    </div>
    <button type="submit" className="hidden">
    </button>
  </form>
</div>

</div>

<div className='flex'>
    <img alt='local-img' className='mx-10' src={Notification} />
    <img alt='local-img' className='rounded-full h-4/5' src={Profile} />
</div>
</div>

     </div>


     <div className="flex justify-between" style={{marginTop:'-20px'}}>

<div className='flex flex-col w-1/4 m-3 p-4 ml-0' style={{background:"#ddefe0", borderRadius:'25px'}}>
  <div className='flex justify-end'>
  <img alt='local-img' className="revenue-icon" src={Revenue}></img>
  </div>
  
    <p className='mb-2' style={{fontWeight:'600', fontSize:"13px"}}>Total Revenues</p>
    <p className='font-bold' style={{ fontSize:"24px"}}>$2,129,430</p>
</div>

<div className='w-1/4 m-3 p-4' style={{background:"#f4ecdd", borderRadius:'25px'}}>
<div className='flex justify-end'>
    <img alt='local-img' src={Transactions2}></img>
    </div>
    <p className='mb-2' style={{fontWeight:'600', fontSize:"13px"}}>Total Transactions</p>
    <p  className='font-bold' style={{ fontSize:"24px"}}>1,520</p>
</div>

<div className='w-1/4 m-3 p-4' style={{background:"#efdada" , borderRadius:'25px'}}>
<div className='flex justify-end'>
    <img  alt='local-img' src={Likes}></img>
    </div>
    <p className='mb-2' style={{fontWeight:'600', fontSize:"13px"}}>Total Likes</p>
    <p className='font-bold' style={{ fontSize:"24px"}}>9,721</p>
</div>

<div className='w-1/4 m-3 p-4 mr-0' style={{background:"#dee0ef", borderRadius:'25px'}}>
<div className='flex justify-end'>
    <img alt='local-img' src={Users2}></img>
    </div>
    <p className='mb-2' style={{fontWeight:'600', fontSize:"13px"}}>Total Users</p>
    <p  className='font-bold' style={{ fontSize:"24px"}}>892</p>
</div>

</div>

<div className='bg-white p-2 rounded-lg' >
  <p className='font-bold my-2'>Activities</p>
                    <LineGraph />
                </div>


                <div className="flex mt-3">
                <div  className='bg-white p-2 rounded-lg'>
                <p className='font-bold' style={{width:'250px'}}>Top Products</p>
                    <PieChart />
                </div>

                <div className='bg-white p-2 rounded-lg ml-9'>
                    <Today />
                </div>
               
                </div>

     
    </div>
  </div>
  
  )
}

export default Dashboard