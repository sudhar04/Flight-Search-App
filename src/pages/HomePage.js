import React from 'react'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'

const HomePage = () => {
  return (
    <div>
      <div className='d-flex gap-3'>
        <Sidebar />
        <div className='main-container'>
          <Main />
        </div>
      </div>
    </div>
  )
}

export default HomePage