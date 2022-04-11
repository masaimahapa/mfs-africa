import React from 'react'
import {AiOutlineDown} from 'react-icons/ai'
import { Link } from 'react-router-dom'
export default function MenuItem({itemName, Icon, linkTo}) {
  return (
    <Link to={linkTo}>
    <div className='flex h-8'>
            
            <Icon className="text-white mr-2 mt-1"/>
  
            <span className='text-white'>{itemName}</span>
            {/* <AiOutlineDown className='text-white' /> */}

    </div>
    </Link>
    
  )
}
