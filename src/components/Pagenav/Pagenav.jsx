import { NavLink } from 'react-router-dom';

import styles from './Pagenav.module.css';

import Logo from '../Logo/Logo';

function Pagenav(){
    return (
        <nav className={styles.nav}>
            <Logo />
            
         <ul>
            <li>
                <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li>
                <NavLink to="/product">Product</NavLink>
            </li>
            <li>
                <NavLink to="/login">Login</NavLink>
            </li>
         </ul>
        </nav>
    )
}

export default Pagenav;