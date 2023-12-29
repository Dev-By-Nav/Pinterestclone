import React from 'react'
import Pin from './Pin'

function Mainpage(props) {

    let { pins } = props;

  return (
    <div className='mx-3 columns-3  xs:columns-4 md:columns-5 lg:columns-6 xl:columns-7 space-y-4  '>
        {pins.map((pin, index) => {
            let {urls} = pin;
            return <Pin key={index} urls={urls} />
        }
        )}
    </div>
  )
}

export default Mainpage


