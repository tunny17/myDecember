import React from 'react'
import './style.scss'


const SectionHeader = ({title}) => {
  return (
    <div  className='section-header'>
      <h6>
        {title}
      </h6>
    </div>
  )
}

export default SectionHeader