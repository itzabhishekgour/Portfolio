import React from 'react'
import './footer.css'
import Cl from '../../assests/connectLogin.jpg'
import Cm from '../../assests/connectMain.jpg'
import Is from '../../assests/InventorySystem.jpg'
import Ms from '../../assests/MoviesSite.jpg'
import Pfv from '../../assests/PathFindVis.jpg'

const Footer = () => {
  return (
    <section id='footer'>
      <h5>What Project I Make</h5>
      <h1>My Experience</h1>
      <div className='container exp_container'>
        <article className='exp_item'>
          <div className='exp_img'>
            <img src={Is} alt='Inventory Management System'/>
          </div>
          <div className='exp_name'>
            <h3>Inventory Management</h3>
            <a href='#'></a>
          </div>
        </article>

        <article className='exp_item'>
          <div className='exp_img'>
            <img src={Cl} alt='Connection Login'/>
          </div>
          <div className='exp_name'>
            <h3>Connection Login</h3>
            <a href='#'></a>
          </div>
        </article>

        <article className='exp_item'>
          <div className='exp_img'>
            <img src={Cm} alt='Interconnecter'/>
          </div>
          <div className='exp_name'>
            <h3>Interconnecter</h3>
            <a href='#'></a>
          </div>
        </article>

        <article className='exp_item'>
          <div className='exp_img'>
            <img src={Ms} alt='Movies Website'/>
          </div>
          <div className='exp_name'>
            <h3>Movies Website</h3>
            <a href='#'></a>
          </div>
        </article>

        <article className='exp_item'>
          <div className='exp_img'>
            <img src={Pfv} alt='Path Finding'/>
          </div>
          <div className='exp_name'>
            <h3>Path Finding</h3>
            <a href='#'></a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Footer