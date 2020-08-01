import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
// import ButtonLink from './Components/ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <Link to="/">
                    <img className="Logo" src={Logo} alt="GuilhermeFlix Logo" />
                </Link>
            </a>

            <Button to="/cadastro/video" as={Link} className="ButtonLink">
                Novo vídeo
           </Button>
        </nav>
    )
}

export default Menu