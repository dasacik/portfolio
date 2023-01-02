import React, {useEffect} from 'react'
import '../Styles/OpenPage.scss'
import AOS from 'aos'


function OpenPage() {
    useEffect(() => {
        AOS.init({
          duration : 1500
        });
      }, []);
  return (
    <div className='FirstCon'>
        <div data-aos="fade-up" className='sonDiv'>
            <h2>Asadbek Alimov</h2>
            <h3>Front-end Developer</h3>
          
        </div>
    </div>
  )
}

export default OpenPage