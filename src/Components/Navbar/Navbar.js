import React from 'react'
import logo from '../../assets/Img/logo.webp'


const Navbar = () => {
  return (
    <div className="sidenav active">

      <img src={logo} alt='logo' className='logo'/>
    <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Operacion</a>
        </li>
        <li>
          <a href="">Estadisticas</a>
        </li>
        <li>
          <a href="">Usuario</a>
        </li>
        <li>
          <a href="">Configuracion</a>
        </li>
    </ul>
</div>
  )
}

export default Navbar

