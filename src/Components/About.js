import React from 'react'
import Rainbow from '../HOC/rainbow'

const About = () => {
  return (
    <div className='container'>
      <h4 className='center'>About</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam nam
        repellendus consequuntur deserunt quia. Laudantium accusamus, et
        repellendus pariatur itaque id ea, sapiente recusandae sunt fugit
        molestiae aut illum minus!
      </p>
    </div>
  )
}

export default Rainbow(About)
