import React from 'react'
import MenFilter from './MenFilter'
import KidsFormal from './Kids/KidsFormal'

function Kids() {
  return (
    <div>
      <div className='flex'>
        <MenFilter />
        <KidsFormal />
      </div>
    </div>
  )
}

export default Kids
