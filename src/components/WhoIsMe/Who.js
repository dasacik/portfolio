import './who.scss'
import React, { useEffect } from 'react'
import AOS from 'aos';
function Who() {
    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);
  return (
    <div className='whoFatherCon'>
        <div className='textsCon'  data-aos="fade-up">
            <div className='myNameCon'><h3>Alimov Asadbek</h3></div>
            <div className='myJobCon'><h4>Front-End Developer</h4></div>
        </div>
    </div>
  )
}

export default Who