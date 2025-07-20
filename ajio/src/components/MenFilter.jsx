import React from 'react'
import AccordinoM from './AccordinoM'
import { useState } from 'react'

function MenFilter() {

  const [open, setOpen] = useState(null) //state Up-Lifting

  return (
    <div>
      <div>
        {/* <div>
            <h1>Filter Section</h1>
        </div> */}
        <div className='mt-11 ml-5'>
          {/* <AccordinoM tag = {"Formal"} />
            <AccordinoM tag = {"Boot"}/>
            <AccordinoM tag = {"Sneakers"}/>
            <AccordinoM tag = {"Sports Shoes"}/> */}
          {
            ["Formal", "Boot", "Sneakers", "Sports Shoes"].map((elem, index) => {
              return (<div key={index}>
                <AccordinoM
                  tag={elem}
                  open = {index === open ? true : false}
                  setOpen = {() => setOpen(index)} />
              </div>)
            })
          }
        </div>

      </div>
    </div>
  )
}

export default MenFilter
