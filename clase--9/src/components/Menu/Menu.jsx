import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <header>
        <Link to={ "/" }>
            <h1>CellShop</h1>
        </Link>

        <nav>
            <ul>
                <li>
                    <NavLink to={"/"}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to={"/computers"}>Computadoras</NavLink>
                </li>
                <li>
                    <NavLink to={"/chairs"}>Sillas</NavLink>
                </li>
                <li>
                    <NavLink to={"/cellphone"}>Celulares</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Menu