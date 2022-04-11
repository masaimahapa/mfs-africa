import React from 'react'
import logo from '../../assets/Logo.png';
import {BsHouseDoor, BsCircle} from 'react-icons/bs'
import {BiGlobe} from 'react-icons/bi'
import {AiOutlineDollar, AiOutlineSetting} from 'react-icons/ai'
import {FaRegUserCircle} from 'react-icons/fa'
import {GrTransaction} from 'react-icons/gr'
import {SiCircle} from 'react-icons/si'

import MenuItem from '../menu-item/menu-item.component'

export default function SideBar() {
  return (
    <aside className='top-0 left-0 bg-blue-900 h-screen p-8 w-64 flex flex-col place-content-between'>
        <div>
          <img className='mb-4' src={logo} alt="logo" />
          <MenuItem itemName="Dashboard" Icon={BsHouseDoor} linkTo="/dashboard" />
          <MenuItem itemName="Balance" Icon={AiOutlineDollar} linkTo="/"/>
          <MenuItem itemName="Transactions" Icon={GrTransaction} linkTo="/" />
          <MenuItem itemName="Organizations" Icon={BsCircle} linkTo="/" />
          <MenuItem itemName="Groups" Icon={SiCircle} linkTo="/" />
          <MenuItem itemName="Zones" Icon={BiGlobe}  linkTo="/zones"/>
          <MenuItem itemName="Settings" Icon={AiOutlineSetting} linkTo="/settings"/>
        </div>
        <div className='text-white flex flex-row'>
          <FaRegUserCircle className=' text-4xl pt-2'/>
          <div>
            <p className='font-bold'>Masai Mahapa</p>
            <p>Administrator</p>
          </div>
          
        </div>

        </aside>
  )
}
