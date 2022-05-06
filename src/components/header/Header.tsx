import React from 'react'
import CV from '../../assets/CV_Frontend_Developer_Liakhovets_Mikhail.pdf'


const Header: React.FC = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Mikhail Liakhovets</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <div className="button-group">
          <a href={CV} download className='button'>Download CV</a>
          <a href='#contact' className='button button-primary'>Text Me</a>
        </div>
      </div>
    </header>
  )
}

export default Header