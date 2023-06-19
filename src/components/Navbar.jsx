import React from 'react'
import {NavLink} from 'react-router-dom'
import {MdCatchingPokemon} from 'react-icons/md';
const Navbar = () => {

    const setActiveClass=({isActive}) =>(isActive ? 'nav-link active text-light fs-5' : 'nav-link active fw-light text-light fs-7');

  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-danger ">
          <div className="container-fluid">
            <a className="navbar-brand text-light" href="#">Pokedex <MdCatchingPokemon /> </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className={setActiveClass} to='/'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={setActiveClass} to='/search'>Search</NavLink>
                    </li>
                </ul>
            </div>
          </div>
        </nav>
    </div>
    )
}

export default Navbar