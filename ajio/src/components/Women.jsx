import React from 'react'
import MenFilter from './MenFilter'
import WomenFormal from './Women/WomenFormal'



function Women() {
  return (
    <div>
      <div className='flex'>
        <MenFilter />
        <WomenFormal />
      </div>
    </div>
  )
}

export default Women
