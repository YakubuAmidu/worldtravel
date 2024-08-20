import { NavLink } from 'react-router-dom';

import styles from './Pagenav.module.css';

function Pagenav(){
    return (
        <nav className={styles.nav}>
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