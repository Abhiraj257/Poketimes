import React from 'react'

const Contact = props => {
  // console.log(props)
  const handleClick = () => {
    props.history.push('/about')
  }
  // setTimeout(() => {
  //   props.history.push('/about')
  // }, 4000)
  return (
    <div className='container'>
      <h4 className='center'>Contact</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum temporibus
        consequatur aut. Itaque libero sapiente, sunt placeat fuga, hic
        praesentium rerum, aspernatur explicabo temporibus labore cumque quia
        illo! Laboriosam, aut!
      </p>
      <button onClick={handleClick}>go to About</button>
    </div>
  )
}

export default Contact
