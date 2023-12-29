import React from 'react'

function Pin(props) {

  let {urls} = props;

  return (
    <div>
      <img src={urls?.thumb} alt="" className='hover:scale-105 transform-gpu rounded-xl' />
    </div>
  )
}

export default Pin

// at beginning have a fixed image with url