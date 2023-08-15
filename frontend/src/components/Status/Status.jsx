import './Status.css';
import React from 'react'

function Status() {
  return (
    <div className='status'>
        <div className='completed'></div>
        <p className='text-status'>Task Completed</p>
        <div className='pending'></div>
        <p className='text-status'>Task Pending</p>
    </div>
  )
}

export default Status